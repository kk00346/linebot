'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const questionData = require('./reply-data/questions');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: "EzQYTeHQSzOdeTVjGmD+PFUDM4WIRRou6m4+DWffZZkCx5RWccn3YtHnMRcL5ons+OscNbqDc5OYfwrfaR7NfhDnE7JoRE4YcPcDN/gRb6qidnpIUV03oiRVyKTkx7vkQr8WPO398sOkStEFpPe1lAdB04t89/1O/w1cDnyilFU=",
  channelSecret: "98f098c740df9944dacd8f69cf625584",
};

// base URL for webhook server
let baseURL = "https://nodelinebot.campaign.com.tw";

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// serve static and downloaded files
app.use('/static', express.static('static'));
app.use('/downloaded', express.static('downloaded'));

app.get('/callback', (req, res) => res.end(`I'm listening. Please access with POST.`));

// webhook callback
app.post('/callback', line.middleware(config), (req, res) => {
  if (req.body.destination) {
    console.log("Destination User ID: " + req.body.destination);
  }

  // req.body.events should be an array of events
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }

  // handle events separately
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// simple reply function
const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: 'text', text }))
  );
};

// callback function to handle a single event
function handleEvent(event) {
  if (event.replyToken && event.replyToken.match(/^(.)\1*$/)) {
    return console.log("Test hook recieved: " + JSON.stringify(event.message));
  }

  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return handleText(message, event.replyToken, event.source);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }
    case 'postback':
      let data = event.postback.data;
      if (data === 'DATE' || data === 'TIME' || data === 'DATETIME') {
        data += `(${JSON.stringify(event.postback.params)})`;
      } else if (questionData.question[event.postback.data]) {

        return quickReply(event.replyToken, questionData.question[event.postback.data].text, questionData.question[event.postback.data].items);
      } else if (questionData.reply[event.postback.data]) {
        return replyText(event.replyToken, questionData.reply[event.postback.data]);
      }

      return replyText(event.replyToken, `Got postback: ${data}`);
    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function quickReply(replyToken, text, items) {
  return client.replyMessage(
    replyToken,
    {
      type: 'text',
      text: text,
      quickReply: { 
        items: items
      }
    }
  );
}

function handleText(message, replyToken, source) {
  const buttonsImageURL = `${baseURL}/static/buttons/1040.jpg`;

  switch (message.text) {
    case 'help':
      return quickReply(replyToken, '請選擇您的問題', questionData.question_all)
    default:
      console.log(`Echo message to ${replyToken}: ${message.text}`);
      return replyText(replyToken, message.text);
  }
}


// listen on port
const port = process.env.PORT || 3200;
app.listen(port, () => {
  
});
