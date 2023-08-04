// gameFunctions.js
const prompt = require("prompt-sync")({ sigint: true });
//__________________Objects_____________________________
const fists = {
    name: "Your fists",
    dmg: 1
}
const woodSword = {
    name: "Wodden sword",
    dmg: 10
}
//__________________Game_Stats__________________________
let inventory = [fists]
let slimeLevel = 1
let sDmg = slimeLevel
let sHealth = slimeLevel * 2
let anwsInvalid = true
let location = undefined
let firstTimeC3 = true
let eHealth = undefined
let strongestWeaponID = 0
let strongestWeaponName = inventory[strongestWeaponID].name
let strongestWeaponDmg = inventory[strongestWeaponID].dmg
let itemsCheck1 = 0
let itemsCheck2 = 1

//__________________Player_Stats________________________
let pname = undefined
let pLvl = 1
let pXP = 0
//Health
let pFitness = 10 * pLvl
let pSpeed = pFitness / 5
let pBHealth = pLvl * pFitness
let pHealth = pBHealth
//Mana
let pIntelegence = 5 * pLvl
let pMaxMana = (pIntelegence + 3) * pLvl
let pMana = pMaxMana
let pManaRegen = pIntelegence * pLvl
//Damage
let pStrengh = pLvl * 2;
let pBDmg = pStrengh
let eWeapon = (inventory[strongestWeaponID].dmg)
let pWeaponDmg = eWeapon //later + buffs
let pDmg = pBDmg + pWeaponDmg
//Defense
let pBDefense = pStrengh //natürlicher schutz
let pEDefense = 0 //extras schutz zb rüstung
let pArmour = pBDefense + pEDefense
//__________________Entetys_____________________________
const eSlime = {
    name: "Slime of the Mansion",
    dmg: 1,
    bHealth: 5
}

//__________________Game_Functions______________________
function checkEveryTurn() {
    itemsCheck2 = inventory.length
    if (itemsCheck2 > itemsCheck1) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].dmg > strongestWeaponDmg) {
                strongestWeaponID = inventory[i++]
            }
        }
    }

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
function exploreRoom() {
    function foundNothing() {
        console.log("*you look around in the room and find nothing*")
    }
    if (location === "B-3") {
        foundNothing()
    }
    if (location === "C-3") {
        if (firstTimeC3 === false) { foundNothing() }
        if (firstTimeC3 === true) {
            firstTimeC3 = false
            console.log("*you look around and after a while you find somethin.*")
            console.log("* After you come closer you notice that what you found is an Wood Sword, it looks like a child used it to train.*")
            console.log("* You take it and equip it as you weapon*")
            inventory.push(woodSword)
            eWeapon = woodSword
        }
    }
    checkEveryTurn()
}
function showInventory() {
    console.log("Your Inventory stors:", inventory.length, "items"
    )
    for (let i = 0; i < inventory.length; i++) {
        console.log(i + 1 + ".", inventory[i].name)
    }
}

//__________________Shown_Functions_____________________
function plot() {
    const room = prompt("   -What is your name?-");
    pname = room
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
function stats() {
    console.log("")
    console.log("Name:             ", pname)
    console.log("Base Health:      ", pBHealth)
    console.log("Health:           ", pHealth)
    console.log("Level:            ", pLvl)
    console.log("EP:               ", pXP)
    console.log("")
    console.log("Weapon:            ", inventory[strongestWeaponID].name)
    console.log("Damage:            ", pDmg)
    console.log("")
    console.log("Location:          ", location)
    maps()
}
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

function fight() {

}



//__________________Room_Functions______________________
function start() {
    roomb3()
}
function roomb3() {
    location = "B-3";
    while (location === "B-3") {
        console.log("   -Your options: E-EXPLORE, W-FORWARD, Q-STATS-, I- Inventory")
        const room = prompt("   -What is your choise?-");
        if (room === "W") { roomc3() }
        if (room === "Q") { stats() }
        if (room === "E") { exploreRoom() }
        if (room === "I") { showInventory() }
    }
}
function roomc2() {
    location = "C-2"
    console.log(`*You Leave the room and head west, you are now in an old garden filles with dead flowers. Out of the Blue a Slime come closer to your direction.*`);
    console.log("Options: F- FLEE, A- ATTACK.");
    const room = prompt("   -What is your choise?-");
    if (room === "F") { console.log("*You run away until you are back in the entrance*"); location = "B-3"; roomb3() }
    if (room === "A") {
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
function roomc3() {
    location = "C-3";
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
            exploreRoom()
        }
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