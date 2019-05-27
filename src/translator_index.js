//Dieses Script fügt in index.html englische Begriffe ein
let german = {
    project:"Projekt",
    menue:"Menü",
    short_desc:"Kurzbeschreibung",
    long_desc:"Langbeschreibung",
    project_overview:"Projektübersicht",
    newArticle_menu:"Neuer Artikel",
    welcome_message:"Willkommen im StudBoard",
    welcome_message_2:"Hier gibt es Motivation für Studierende",
    about:"<h3>Worum geht es?</h3>\n" + "Hier geht es darum, deine Projekte während dem Studium im Blick zu haben.",
    news:"Das sind die neusten Projekte:",
    top:"Anfang der Seite",
    details:"Zu den Projektdetails"
};
let english ={
    project:"Project",
    menue:"Menu",
    short_desc:"Short description",
    long_desc:"Long description",
    project_overview:"Project overview",
    newArticle_menu:"New Article",
    welcome_message:"Welcome to the StudBoard",
    welcome_message_2:"Here you will find motivation for students",
    about:"<h3>What is this about</h3>\n" + "This is about having an overview of your projects in university.",
    news:"These are the newest projects:",
    top:"Back to top",
    details:"To project details"
};

var lang = navigator.language || navigator.userLanguage;
console.log(lang);

window.onload = function()
{
    check_login();
    if (lang.includes("de")){
        document.body.children[1].children[0].children[0].children[1].innerHTML = german["project_overview"];
        document.body.children[1].children[0].children[0].children[2].innerHTML = german["newArticle_menu"];
        document.body.children[1].children[0].children[1].children[0].innerHTML = german["welcome_message"];
        document.body.children[1].children[0].children[1].children[1].innerHTML = german["welcome_message_2"];
        document.body.children[1].children[0].children[2].children[0].children[0].innerHTML = german["about"];
        document.body.children[1].children[0].children[2].children[1].children[0].innerHTML = german["news"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[1].innerHTML = german["details"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[3].innerHTML = german["details"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[5].innerHTML = german["details"];

        document.body.children[1].children[1].children[1].children[0].innerHTML = german["top"];

    }
    else if(lang.includes("en")){
        document.body.children[1].children[0].children[0].children[1].innerHTML = english["project_overview"];
        document.body.children[1].children[0].children[0].children[2].innerHTML = english["newArticle_menu"];
        document.body.children[1].children[0].children[1].children[0].innerHTML = english["welcome_message"];
        document.body.children[1].children[0].children[1].children[1].innerHTML = english["welcome_message_2"];
        document.body.children[1].children[0].children[2].children[0].children[0].innerHTML = english["about"];
        document.body.children[1].children[0].children[2].children[1].children[0].innerHTML = english["news"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[1].innerHTML = english["details"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[3].innerHTML = english["details"];
        document.body.children[1].children[0].children[2].children[1].children[1].children[5].innerHTML = english["details"];

        document.body.children[1].children[1].children[1].children[0].innerHTML = english["top"];

    }


    document.body.children[1].children[0].children[2].children[1].children[1].children[0].innerHTML = (project_list[0].titel + "<br>" + project_list[0].kurzbeschreibung + "<br>");
    document.body.children[1].children[0].children[2].children[1].children[1].children[2].innerHTML = (project_list[1].titel + "<br>" + project_list[1].kurzbeschreibung + "<br>");
    document.body.children[1].children[0].children[2].children[1].children[1].children[4].innerHTML = (project_list[2].titel + "<br>" + project_list[2].kurzbeschreibung + "<br>");
}