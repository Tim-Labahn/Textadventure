// gameFunctions.js
const prompt = require("prompt-sync")({ sigint: true });
//__________________Objects_____________________________
const woodSword = {
    name: "Wodden sword",
    dmg: 10
}
//__________________Player_Stats________________________
let pname = undefined
let pLvl = 1
const inventory = [woodSword]
let pIntelegence = 0
let pStrengh = 0 * 1;
let pBHealth = pLvl * 100 / 4 // 
let pHealth = pBHealth
let pBDmg = pLvl * 2
let eWeapon = (inventory[0].dmg)
let pWeaponDmg = eWeapon
let pDmg = pBDmg + pWeaponDmg
let pXP = 0
//__________________Game_Stats__________________________
let slimeLevel = 1
let sDmg = slimeLevel
let sHealth = slimeLevel * 2
let anwsInvalid = true
let location = undefined
//__________________Game_Functions______________________
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

function checkMovementInvalid() {
    let event;
    while (anwsInvalid) {
        event = prompt("What do you do?");
        if (event === "W" || event === "A" || event === "S" || event === "S" || event === "Q" || event === "E") {
            anwsInvalid = false
        }
    } // Wenn die Antwort W A S S Q E ist, dann geht es weiter, weil der While Loop beendet wird (anwsInvalid wird false statt true) eine falsche Antwort lässt einen im Loop hängen
    return event
}

function checkFightInvalid() {
    let event;
    while (anwsInvalid) {
        event = prompt("What do you do?");
        if (event === "FLEE" || event === "ATTACK") {
            anwsInvalid = false
        }
    } // Wenn die Antwort FLEE oder ATTACK ist, dann geht es weiter, weil der While Loop beendet wird (anwsInvalid wird false statt true) eine falsche Antwort lässt einen im Loop hängen
    return event
}


function plot() {
    const qname = prompt("   -What is your name?-");
    pname = qname
    console.log("*Its a late night and the sun has alredy sunken.It cold outside and fog covers the floor.")
    console.log("You enter an old mansion, as you open the door you can hear it squek.")
    console.log("The secons both of your legs are inside, the door falls back into the lock and is now unable to open again.*")
    console.log("----------------------")
    console.log("      MAP / Inside")
    console.log("")
    // console.log("F|")
    // console.log("E| [ ]=[ ]=[ ]=[ ]=[ ]")
    // console.log("D| [ ]     [ ]     [ ]")
    console.log("C|     [ ]=[ ]=[ ]")
    console.log("B|         [X] 	")
    console.log("A|")
    console.log("    1   2   3   4   5")
    location = "B2"
}
// Story + Karte
function maps() {
    console.log("      MAP / Inside")
    console.log("")
    // console.log("F|")
    // console.log("E| [ ]=[ ]=[ ]=[ ]=[ ]")
    // console.log("D| [ ]     [ ]     [ ]")
    console.log("C|     [ ]=[ ]=[ ]")
    console.log("B|         [ ] 	")
    console.log("A|")
    console.log("    1   2   3   4   5")
    console.log("")

}
//Karte

function start() {
    roomb3()
}

function roomb3() {
    while (true) {
        console.log("   -Your options: E-EXPLORE, W-FORWARD, Q-STATS-, I- Inventory")
        const room = prompt("   -What is your choise?-");

        if (room === "W") { roomc3() }
        if (room === "Q") { stats() }
        if (room === "E") { console.log("*you look around in the room and find nothing*") }
    }
}

function roomc3() {
    while (location === "C-3") {
        location = ("C-3")
        console.log(`*You go deeper into the long room and enter an open door. You enter the next room*`);
        console.log("   -Your options: A-Left, E-EXPLORE, D-Right, Q-STATS-")
        const room = prompt("   -What is your choise?-");
        if (room === "A") {
            roomc2()
            location = ("C-2")
        } else if (room === "D") {//noch nicht eingerichtet
        } else if (room === "Q") {
            stats()
        } else if (room === "E") {
            console.log("*you look around and after a while you find somethin. After you come closer you notice that what you found is an old dagger. You take it and equip it as you weapon*")
            inventory.push(woodSword)
            eWeapon = woodSword
        }
    }
}

function roomc2() {
    location = "B-3"
    console.log(`*You Leave the room and head west, you are now in an old garden filles with dead flowers. Out of the Blue a slime come closer to your direction.*`);
    console.log("Options: FLEE, ATTACK.");
    let event = checkFightInvalid();

    if (event === "FLEE") {
        console.log(`*You run away and go back Home*`);
    } else if (event === "ATTACK") {
        if (Math.random() > 0.5) {
            console.log(`*You Take your sword and swing it into the direction of the little slime. With one clean cut he is defeated*`);
            pXP++;
            console.log("Xp:", pXP); // XP gehen einen hoch und werden dann ausgegeben
        } else {
            console.log(`*You Take your sword and swing it into the direction of the little slime. Your Sword slips out of your hand and you miss. The slime jumps onto you and deal you ${sDmg}*`);
            pHealth = pHealth - sDmg;
            console.log("Health:", pHealth);
        } //Slime macht sDMG und zieht die Player HP um den Schaden runter
    }
}

//__________________EXPORTS____________________________
module.exports = {
    checkFightInvalid,
    start,
    maps,
    checkMovementInvalid,
    plot
};