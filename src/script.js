/* Aufgabe 1: Zuordnung von Begriffen über Array */
let translate_projekt = new Array("Projekt","project");
let translate_menue = new Array("Menü", "menu");
let translate_kurzbeschreibung = new Array("Kurzbeschreibung", "short description");
let translate_langbeschreibung = new Array("Langbeschreibung", "long description");
console.log(translate_projekt);
console.log(translate_menue);
console.log(translate_kurzbeschreibung);
console.log(translate_langbeschreibung);

/*Aufgabe 2a: Abstrakte Klasse */
class Zuordnung{
    constructor(param1){
        this.attribut1 = param1;
        this.attribut2 = param2;
        this.attribut3 = param3;
    }

    methode1(){
        return this.attribut1;
    }

    methode2(){
        return this.attribut2;
    }

    methode3(){
        return this.attribut3;
    }
}
zuordnung1 = new Zuordnung("user1", "deutsch", "Projekt42");
zuordnung2 = new Zuordnung("user2", "englisch", "science project 0815");