"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const { start, plot } = require('./gameFunctions');

console.log("---------------------------Let-the-Game-Begin---------------------------")

plot()

start()

//end()
