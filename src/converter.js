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

p2 = new Project(
    "Super Projekt",
    "26.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    {ziel:"Lauffähig"},
    1
);

p3 = new Project(
    "Revolution!",
    "27.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    {ziel:"Lauffähig"},
    1
);

p4 = new Project(
    "Nichts besonderes",
    "28.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    {ziel:"Lauffähig"},
    1
);

project_list = [p1, p2, p3, p4];

if(performance.navigation.type === 1){
    /*
    Da wir die Items als Strings im Storage ablegen müssen, muss der Json String erst nochmal zum Json Objekt werden
    und kann dann zurück zum richtigen Objekt-Typ konvertiert werden
    */
    json1 = JSON.parse(localStorage.getItem("user1"));
    for (j = 0; j < localStorage.length; j++){
        project_list[j] = new convertJSON(JSON.parse(localStorage.getItem("project" +j))).toObject();
    }
    console.log("Load from storage");

} else {
    json1 = new convertJSON(u1).toJSON();
    for (i = 0; i < project_list.length; i++){
        json2 = new convertJSON(project_list[i]).toJSON();
        console.log(json2);
        localStorage.setItem(("project" + i), JSON.stringify(json2));
    }
    localStorage.setItem("user1", JSON.stringify(json1));

    console.log("Save to storage");
}
u2 = new convertJSON(json1).toObject();

