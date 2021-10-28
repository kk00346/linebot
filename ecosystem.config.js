module.exports = {
  apps: [{
    name: "node-linebot",
    script: 'index.js',
  }],

  // Deployment Configuration
  deploy: {
    production: {
      "user": "root",
      "host": ["139.162.112.61"],
      "ref": "origin/master",
      "repo": "git@bitbucket.org:mejor-technology/node-linebot.git",
      "path": "/root/node/linebot",
      "pre-deploy": "git fetch --all",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js --env production"
    }
  }
};