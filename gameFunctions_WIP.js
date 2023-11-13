
const { pname } = require('./Game_WIP');
const { pBHealth } = require('./PlayerBaseStats');

function checkFightInvalid() {
    let event;
    while (anwsInvalid) {
        event = prompt("What do you do?");
        if (event === "FLEE" || event === "ATTACK") {
            anwsInvalid = false
        }
    }
    return event
}

function start() {
    console.log('*Its a late night and the sun has alredy sunken.It cold outside and fog covers the floor.\n')
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
    loc = "B-3"
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


// Exportiere die Funktionen, damit sie in anderen Dateien verwendet werden können
module.exports = {
    checkFightInvalid,
    start,
    maps
};
