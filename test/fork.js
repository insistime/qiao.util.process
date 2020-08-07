'use strict';

// path
var path = require('path');

// qiao
var qiao = require('../lib/qiao.util.process.js');

var test = function(){
    var jsPath = path.resolve(__dirname, './cp.js');
    var args = ['haha'];

    var cp = qiao.fork(jsPath, args, function(msg){
        console.log(`from child process: ${msg}`);
    }, function(code){
        console.log(`exit code: ${code}`);
    });

    cp.send('hello child process');
    
    // kill cp
    setTimeout(function(){
        qiao.kill(cp.pid);
    }, 3000);
};

test();