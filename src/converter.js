class convertJSON {
    constructor(object) {
        this.object1 = object;
    }

    toJSON() {
        var output = JSON.stringify(this.object1);
        var jsonObject = JSON.parse(output);
        return jsonObject;
    }

    toObject(){
        if(this.object1.hasOwnProperty("_titel")) {
            console.log("Object is a project");
            let project = new Project(
                this.object1._titel,
                this.object1._start,
                this.object1._ende,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._logo,
                this.object1._projektleiter,
                this.object1._zielliste,
                this.object1.id
            );
            return project;
        }
        else if(this.object1.hasOwnProperty("_benutzername")){
            console.log("Object is a User");
            let user = new User(
                this.object1._benutzername,
                this.object1._emailadresse,
                this.object1._passwort,
                this.object1._profilbild,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._zielliste,
                this.object1.id
            )
            return user;
        }
        else{
            console.log("Something went wrong converting");
        }
    }
}

u1 = new User(
    "Nicola",
    "email@mail.de",
    "passwort",
    "bild-binär-wert",
    "Ich bin Nicola",
    "Ich bin selten online",
    {ziel: "Schön"},
    1);

p1 = new Project(
    "Super Titel",
    "25.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    {ziel:"Lauffähig"},
    1
);

if(performance.navigation.type == 1){
    /*
    Da wir die Items als Strings im Storage ablegen müssen, muss der Json String erst nochmal zum Json Objekt werden
    und kann dann zurück zum richtigen Objekt-Typ konvertiert werden
    */
    json1 = JSON.parse(localStorage.getItem("user1"));
    json2 = JSON.parse(localStorage.getItem("project1"));
    console.log("Load from storage")

    console.log("Ist json1 objekt? " + json1 + "\n" + "Ist json2 objekt? " + json2);

} else {
    json1 = new convertJSON(u1).toJSON();
    json2 = new convertJSON(p1).toJSON();

    localStorage.setItem("user1", JSON.stringify(json1));
    localStorage.setItem("project1", JSON.stringify(json2));
    console.log("Save to storage");
}


u2 = new convertJSON(json1).toObject();
p2 = new convertJSON(json2).toObject();

console.log("Ist u2 objekt? " + u2 + "\n" + "Ist p2 objekt? " + p2);
console.log(JSON.stringify(u2) + "\n" + JSON.stringify(p2));