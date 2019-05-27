//Dieses Script fügt in projektuebersicht.html englische Begriffe ein
let german = {
    project_overview:"Projektübersicht",
    new_project:"Neues Projekt",
    content:"Inhalt",
    project:"Projekt"
};

let english = {
    project_overview:"Project Overview",
    new_project:"New Project",
    content:"Content",
    project:"Project"
};

title ="<section>\n" +
    "                <article>\n" +
    "                    <header>\n" +
    "                        <h3>";

body ="</h3>\n" +
    "                    </header>\n" +
    "                    <div style=\"width: 90%\">\n" +
    "                        <p>";

link="</p>\n" +
    "                    </div>\n" +
    "                    <footer><a href=\"";

end="\">Footer</a></footer>\n" +
    "\n" +
    "\n" +
    "                </article>\n" +
    "            </section>";

var lang = navigator.language || navigator.userLanguage;

window.onload = function()
{
    if (lang.includes("de")){
        document.body.children[1].children[0].children[0].children[1].innerHTML = german["project_overview"];
        document.body.children[1].children[0].children[0].children[2].innerHTML = german["new_project"];
        document.body.children[1].children[0].children[1].children[0].innerHTML = german["content"];
        document.body.children[1].children[0].children[1].children[1].children[0].innerHTML = german["project"];
        document.body.children[1].children[0].children[1].children[2].children[0].innerHTML = german["project"];

    }
    else if (lang.includes("en")){
        document.body.children[1].children[0].children[0].children[1].innerHTML = english["project_overview"];
        document.body.children[1].children[0].children[0].children[2].innerHTML = english["new_project"];
        document.body.children[1].children[0].children[1].children[0].innerHTML = english["content"];
        document.body.children[1].children[0].children[1].children[1].children[0].innerHTML = english["project"];
        document.body.children[1].children[0].children[1].children[2].children[0].innerHTML = english["project"];

    }

    for (k=0; k<project_list.length; k++){
        let article= (title + project_list[k].titel + body +project_list[k].kurzbeschreibung + link + "Projekt1.html" + end);

        document.body.children[1].children[0].children[2].innerHTML += article;
    }

}