class Item { // Definiere die Klasse "Item", um Gegenstände zu repräsentieren
    constructor(name, dmg) {
        this.name = name; // Der Name des Gegenstands
        this.dmg = dmg; // Der Schaden des Gegenstands
    }

    // Weitere Methoden oder Eigenschaften des Items können hier hinzugefügt werden
}

// Definiere die Klasse "Player", um den Spieler zu repräsentieren
class Player {
    constructor() {
        this.inventory = []; // Das Inventar des Spielers, ein Array von Gegenständen
        this.equippedWeapon = null; // Das aktuell ausgerüstete Item (Waffe)
    }

    // Diese Methode wird aufgerufen, wenn der Spieler einen neuen Gegenstand aufnimmt
    pickUpItem(newItem) {
        this.inventory.push(newItem); // Füge das neue Item zum Inventar hinzu
        this.compareItems(newItem); // Vergleiche das neue Item mit dem ausgerüsteten Item
    }

    // Diese private Methode vergleicht das neue Item mit dem ausgerüsteten Item
    compareItems(newItem) {
        // Wenn noch kein Item ausgerüstet ist oder das neue Item stärker ist als das aktuell ausgerüstete Item
        if (this.equippedWeapon === null || newItem.dmg > this.equippedWeapon.dmg) {
            this.equippedWeapon = newItem; // Setze das neue Item als ausgerüstetes Item
        }
    }

    // Diese Methode gibt das aktuell ausgerüstete Item zurück
    getEquippedWeapon() {
        return this.equippedWeapon;
    }

    // Weitere Methoden für das Spieler-Objekt können hier hinzugefügt werden
}
