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
    constructor(param1, param2, param3){
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

/* Aufgabe 2b: Projekt-Klasse */
class Project{
    constructor(p1, p2, p3, p4, p5, p6, p7, p8, p9){
        this.titel=p1;
        this.startzeitpunkt=p2;
        this.endzeitpunkt=p3;
        this.kurzbeschreibung=p4;
        this.langbeschreibung=p5;
        this.logo=p6;
        this.projektleiter=p7;
        this.zielliste=p8;
        this.id=p9;
    }
}

class User{
    constructor(p1, p2, p3, p4, p5, p6, p7, p8){
        this.benutzername=p1;
        this.emailadresse=p2;
        this.passwort=p3;
        this.profilbild=p4;
        this.kurzbeschreibung=p5;
        this.langbeschreibung=p6;;
        this.zielliste=p7;
        this.id=p8;
    }
}
