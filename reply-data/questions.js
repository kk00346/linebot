module.exports = {
    question_all :[{
        "type": "action", // ③
        "action": { 
            label: '硬體', 
            type: 'postback', 
            data: 'q1' 
        }
    },{
        "type": "action", // ③
        "action": { 
            label: '作業系統', 
            type: 'postback', 
            data: 'q2' 
        }
    },{
        "type": "action", // ③
        "action": { 
            label: '應用軟體', 
            type: 'postback', 
            data: 'q3' 
        }
    },{
        "type": "action", // ③
        "action": { 
            label: '網路', 
            type: 'postback', 
            data: 'q4' 
        }
    },{
        "type": "action", // ③
        "action": { 
            label: '其他', 
            type: 'postback', 
            data: 'q5' 
        }
    }],
    question: {
        q1: {
          text: '螢幕不亮、黑屏\n請點選1_1\n\n螢幕變色、螢幕色彩不對、螢幕顏色不對\n請點選1_2\n\n',
          items: [
               {
                "type": "action",
                "action": { 
                  label: '1_1', 
                  type: 'postback', 
                  data: '1_1' 
                }
              },{
                "type": "action",
                "action": { 
                  label: '1_2', 
                  type: 'postback', 
                  data: '1_2' 
                }
              }
            ]
        }
    },

    reply: {
        "1_1": "所選問題：螢幕不亮、黑屏\n\n建議如下：\n1.請檢察螢幕電源線有插 ? \n2.請檢察開關有開嗎 ?\n3.請檢察螢幕訊號線有接牢嗎 ?",
        "1_2": "所選問題：螢幕變色、螢幕色彩不對、螢幕顏色不對\n\n建議如下：\n1.請檢察螢幕信號線是否接牢 ? \n2.請檢察螢幕訊號線針腳是否折到?",
    }


}