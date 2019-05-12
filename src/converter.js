class convertJSON {
    constructor(object) {
        this.object1 = object;
    }

    toJSON() {
        var output = JSON.stringify(this.object1);
        var jsonObject = JSON.parse(output);
        return jsonObject;
    }

    fromJSON(){
        if(this.object1.hasOwnProperty("titel")) {
            console.log("Object is a project");
            let project = new Project(
                this.object1.title,
                this.object1.startzeitpunkt,
                this.object1.endzeitpunkt,
                this.object1.kurzbeschreibung,
                this.object1.langbeschreibung,
                this.object1.logo,
                this.object1.projektleiter,
                this.object1.zielliste,
                this.object1.id
            );
            return project;
        }
        else if(this.object1.hasOwnProperty("benutzername")){
            console.log("Object is a User");
            let user = new User(
                this.object1.benutzername,
                this.object1.emailadresse,
                this.object1.passwort,
                this.object1.profilbild,
                this.object1.kurzbeschreibung,
                this.object1.langbeschreibung,
                this.object1.zielliste,
                this.object1.id
            )
            return user;
        }
        else{
            console.log("Not a parsable object");
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

json1 = new convertJSON(u1).toJSON();
json2 = new convertJSON(p1).toJSON();

console.log(JSON.stringify(json1) + "\n" + JSON.stringify(json2));

u2 = new convertJSON(json1).fromJSON();
p2 = new convertJSON(json2).fromJSON();

console.log(JSON.stringify(u2) + "\n" + JSON.stringify(p2));