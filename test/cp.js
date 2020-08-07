'use strict';

// qiao
var qiao = require('../lib/qiao.util.process.js');

qiao.onMsg(function(msg){
    console.log(`from main process: ${msg}`);
});

qiao.send('hello main process');