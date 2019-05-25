//Dieses Script fügt in index.html englische Begriffe ein

window.onload = function()
{
    console.log("Ausgabe: ");
    console.log(document.body.children[1].children[0].children[0].children[1].innerHTML);
    document.body.children[1].children[0].children[0].children[1].innerHTML = "Project Overview";
    document.body.children[1].children[0].children[0].children[2].innerHTML = "New Project";
}