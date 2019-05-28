let head="<header class=\"user\">";
let text_field ="</header>\n" +
    "        <div>";
let rating = "</div>\n" +
    "        <footer class=\"comment_foot\">Bewertung: ";let end = "</footer>";
let i = 0;

function saveComment() {
    let text = document.getElementById("comment").value;
    let note = document.getElementById("note");
    let note_text = note.options[note.selectedIndex].text;

    let comment = new Comments(i,text, note_text, "Nicola");
    let json = new convertJSON(comment).toJSON();
    localStorage.setItem(("comment"+i), JSON.stringify(json));
    i++;
}

window.onload = function () {
i = 0;
    for(let x = 0; x< localStorage.length;x++){
        if(localStorage.getItem("comment"+x)){
            let storage = JSON.parse(localStorage.getItem("comment"+x));
            console.log(storage);
            let comment = new convertJSON(storage).toObject();
            console.log(comment);
            let html = head + comment.user + text_field + comment.kommentar + rating + comment.bewertung + end;
            document.getElementById("comment_section").innerHTML += html;
            i++;
        }
    }

}