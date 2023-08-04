"use strict";
const prompt = require("prompt-sync")({ sigint: true });
//------------------------------------------------------------------
let pBHealth = 25
let pHealth = pBHealth
let pBDmg = 1
let pDmg = pBDmg
let pLvl = 1
let pXP = 0
let sHealt = 5
let sDmg = 1
let anwsInvalid = true
let location = ""
//------------------------------------------------------------------
const { checkFightInvalid, start, maps } = require('./gameFunctions_WIP');


function stats() {
    console.log("")
    console.log("Name:             ", pname)
    console.log("Base Health:      ", pBHealth)
    console.log("Health:           ", pHealth)
    console.log("Level:            ", pLvl)
    console.log("EP:               ", pXP)
    console.log("")
    console.log("Damage:            ", pDmg)
    console.log("")
    console.log("Location:          ", location)
    maps()
}

function roomC3() {
    console.log("----------------------")
    console.log("      MAP / Inside")
    console.log("")
    // console.log("F|")
    // console.log("E| [ ]=[ ]=[ ]=[ ]=[ ]")
    // console.log("D| [ ]     [ ]     [ ]")
    console.log("C|     [ ]=[X]=[ ]")
    console.log("B|         [ ] 	")
    console.log("A|")
    console.log("    1   2   3   4   5")
}



//____________________________________________________________________________________________________
const pname = prompt("   -What is your name?-");
module.exports = { pname };

start()
while (true) {
    console.log("   -Your options: E-EXPLORE, W-FORWARD, Q-STATS-")
    const room = prompt("   -What is your choise?-");

    if (room === "W") {
        loc = ("C-3")
        console.log(`*You go deeper into the long room and enter an open door. You enter the next room*`);
        roomC3()
        console.log("   -Your options: A-Left, E-EXPLORE, D-Right, Q-STATS-")
        const room = prompt("   -What is your choise?-");
        if (room === "A") {
            loc = "B-3"
            console.log(`*You Leave the room and head west, you are now in an old garden filles with dead flowers. Out of the Blue a slime come closer to your direction.`);
            console.log("Options: FLEE, ATTACK.");
            let event = checkFightInvalid();

            if (event === "FLEE") {
                console.log(`*You run away and go back Home*`);
            } else if (event === "ATTACK") {
                if (Math.random() > 0.5) {
                    console.log(`*You Take your sword and swing it into the direction of the little slime. With one clean cut he is defeated*`);
                    pXP++;
                    console.log("Xp:", pXP);
                } else {
                    console.log(`*You Take your sword and swing it into the direction of the little slime. Your Sword slips out of your hand and you miss. The slime jumps onto you and deal you ${sDmg}*`);
                    pHealth = pHealth - sDmg;
                    console.log("Health:", pHealth);
                }
            }
        } else if (room === "D") {
        } else if (room === "Q") {
            stats()
        } else if (room === "E") {
            console.log("*you look around and after a while you find somethin. After you come closer you notice that what you found is an old dagger. You take it and equip it as you weapon*")
            pDmg = pDmg + 10
        }
        //---------------------------------------------------------------------------------------------
    } else if (room === "Q") {
        stats()
    } else if (room === "E") {
        console.log("*you look around in the room and find nothing*")
    }
}
