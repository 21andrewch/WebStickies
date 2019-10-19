var note1 = document.getElementById("note-1");
var note2 = document.getElementById("note-2");
var note3 = document.getElementById("note-3");
var note4 = document.getElementById("note-4");
var note5 = document.getElementById("note-5");
var note6 = document.getElementById("note-6");
var note7 = document.getElementById("note-7");
var note8 = document.getElementById("note-8");
var pad1 = document.getElementById("pad1");
var pad2 = document.getElementById("pad2");
var pad3 = document.getElementById("pad3");
var pad4 = document.getElementById("pad4");
var pad5 = document.getElementById("pad5");
var pad6 = document.getElementById("pad6");
var pad7 = document.getElementById("pad7");
var pad8 = document.getElementById("pad8");
var textbox = document.getElementById("textbox");
var newnote = document.getElementById("newnote");

pad1.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note1.appendChild(note);
    textbox.value = "";
});
pad2.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note2.appendChild(note);
    textbox.value = "";
});
pad3.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note3.appendChild(note);
    textbox.value = "";
});
pad4.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note4.appendChild(note);
    textbox.value = "";
});
pad5.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note5.appendChild(note);
    textbox.value = "";
});
pad6.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note6.appendChild(note);
    textbox.value = "";
});
pad7.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note7.appendChild(note);
    textbox.value = "";
});
pad8.addEventListener("click", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note8.appendChild(note);
    textbox.value = "";
});


