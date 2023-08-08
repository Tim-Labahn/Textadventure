// gameFunctions.js
const prompt = require("prompt-sync")({ sigint: true });
//__________________Objects_____________________________
const fists = {
    name: "Fists",
    dmg: 1
}
const woodSword = {
    name: "Wooden sword",
    dmg: 10
}
const slimeGoo = {
    name: "the remains of an dead slime",
    worth: 2
}
//__________________Game_Stats__________________________
let inventory = [fists]
let slimeLevel = 1
let sDmg = slimeLevel
let sHealth = slimeLevel * 2
let anwsInvalid = true
let location = undefined
let firstTimeC3 = true
let firstTimeC2 = true
let eHealth = undefined
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
let alive = true
//Mana
let pIntelegence = 5 * pLvl
let pMaxMana = (pIntelegence + 3) * pLvl
let pMana = pMaxMana
let pManaRegen = pIntelegence * pLvl
//Damage
let equippedWeapon = fists
let pStrengh = pLvl * 2;

//Defense
let pBDefense = pStrengh //natürlicher schutz
let pEDefense = 0 //extras schutz zb rüstung
let pArmour = pBDefense + pEDefense

//__________________Entetys_____________________________
const slime = {
    name: "Slime of the Mansion",
    dmg: 1,
    baseHealth: pLvl * 5,
    health: pLvl * 5,
    speed: 1,
    defense: 0,
    loot: [slimeGoo]
}

//__________________Game_Functions______________________
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
function showInventory() {
    console.log("Your Inventory stors:", inventory.length, "items"
    )
    for (let i = 0; i < inventory.length; i++) {
        console.log(i + 1 + ".", inventory[i].name)
    }
}
function pickUpItem(newItem) {
    inventory.push(newItem); // Füge das neue Item zum Inventar hinzu
    //this.compareItems(newItem); // Vergleiche das neue Item mit dem ausgerüsteten Item
}
function compareItems(newItem) {//TODO: hier  !
    // Wenn noch kein Item ausgerüstet ist oder das neue Item stärker ist als das aktuell ausgerüstete Item
    if (equippedWeapon === null || newItem.dmg > equippedWeapon.dmg) {
        equippedWeapon = newItem; // Setze das neue Item als ausgerüstetes Item
    }
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
            pickUpItem(woodSword)
            compareItems(woodSword)
            console.log("-You just picked up your first Item.")
            console.log("The game automaticly changes your weapon to the best one you got. You can check the damage and name in your Stats (Q)")
        }
    }
}
//__________________Shown_Functions_____________________
function plot() {
    console.log("                          -What is your name?- ")
    const room = prompt("")
    pname = room
    console.log("*Lost in the world of video games, you were deep into an exciting adventure on your screen. *")
    console.log("Battles, quests, and victories absorbed your attention, making you forget the passing time. ")
    console.log("When you finally looked away, the sun had already set, and the real world outside was cloaked in darkness.")
    console.log("You look onto you phone and see its almost 21:30, so you quickly get up and look into your fridge")
    console.log("")


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
    console.log("Weapon:            ", equippedWeapon.name)
    console.log("Damage:            ", equippedWeapon.dmg)
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
function death() {
    console.log("You died inside of the mansion.")
    alive = false
}

function fight(enemy) {
    console.log(`*You enter a dark room, a cold breeze envelops you.*`);
    console.log("Out of nowhere a", enemy.name, "attacked you.")
    while (alive === true && enemy.health > 0) {
        console.log("Options: F- FLEE, A- ATTACK, Q- Stats, I- Inventar.");
        const room = prompt("   -What is your choise?-");
        if (room === "F") { console.log("*You run away until you are back in the Entrance*"); location = "B-3"; roomb3() }
        if (room === "A") {
            if (Math.random() > 0.5) {
                console.log("*You Take your", equippedWeapon.name, "and atack the", enemy.name, ". *");
                console.log("-You hit the", enemy.name, "with your", equippedWeapon.name, ".");
                enemy.health = enemy.health - equippedWeapon.dmg
                console.log(enemy.health)
            } else {
                console.log("*You Take your", equippedWeapon.name, "and try to atack the", enemy.name, ". *");
                console.log("*Your", equippedWeapon.name, "slips out of your hand and you miss. The ", enemy.name, " jumps into your direction and atacks you.*");
                pHealth = pHealth - sDmg;
                console.log("Health:", pHealth);//TODO:  entfernen, nur für debuging
                if (pHealth < 1) {
                    alive = false
                    death()
                }
            } //Slime macht sDMG und zieht die Player HP um den Schaden runter
        }
        if (room === "I") { showInventory() }
        if (room === "Q") { stats() }
    }
    console.log("enemy dead")
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
    if (firstTimeC2 === false) { foundNothing() }
    if (firstTimeC2 === true) {
        firstTimeC2 = false
        console.log("*you look around and after a while you find somethin.*")
        console.log("* After you come closer you notice that what you found is an Wood Sword, it looks like a child used it to train.*")
        console.log("* You take it and equip it as you weapon*")
        pickUpItem(woodSword)
        compareItems(woodSword)
        console.log("-You just picked up your first Item.")
        console.log("The game automaticly changes your weapon to the best one you got. You can check the damage and name in your Stats (Q)")
    }
    location = "C-2"
    fight(slime)
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
        } else if (room === "D") { }
        else if (room === "Q") { stats() }
        else if (room === "E") { exploreRoom() }
        if (room === "I") { showInventory() }
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