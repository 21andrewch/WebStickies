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
var clear = document.getElementById("clear");
var textbox = document.getElementById("textbox");
var newnote = document.getElementById("newnote");

var readyToDelete1 = false;
var readyToDelete2 = false;
var readyToDelete3 = false;
var readyToDelete4 = false;
var readyToDelete5 = false;
var readyToDelete6 = false;
var readyToDelete7 = false;
var readyToDelete8 = false;
var deleteNote = false;
var change = false;
var readyToChange = false;

addEventListener("keydown", function()
{
    if(event.keyCode = 9)
    change = true;

    if(change && readyToChange)
    {
        
    }
})

function dropDown() 
{
    document.getElementById("help-box").classList.toggle("show");
}

window.onclick = function(event) 
{
    if (!event.target.matches('.help')) {
      var dropdowns = document.getElementsByClassName("help-box");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

addEventListener("keydown", function()
{
    if(event.keyCode == 8)
        deleteNote = true;
    if(readyToDelete1 && deleteNote)
    {
        note1.innerHTML = "";
        readyToDelete1 = false;
        deleteNote = false;
    }
    if(readyToDelete2 && deleteNote)
    {
        note2.innerHTML = "";
        readyToDelete2 = false;
        deleteNote = false;
    }
    if(readyToDelete3 && deleteNote)
    {
        note3.innerHTML = "";
        readyToDelete3 = false;
        deleteNote = false;
    }
    if(readyToDelete4 && deleteNote)
    {
        note4.innerHTML = "";
        readyToDelete4 = false;
        deleteNote = false;
    }
    if(readyToDelete5 && deleteNote)
    {
        note5.innerHTML = "";
        readyToDelete5 = false;
        deleteNote = false;
    }
    if(readyToDelete6 && deleteNote)
    {
        note6.innerHTML = "";
        readyToDelete6 = false;
        deleteNote = false;
    }
    if(readyToDelete7 && deleteNote)
    {
        note7.innerHTML = "";
        readyToDelete7 = false;
        deleteNote = false;
    }
    if(readyToDelete8 && deleteNote)
    {
        note8.innerHTML = "";
        readyToDelete8 = false;
        deleteNote = false;
    }
});


pad1.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note1.appendChild(note);
    textbox.value = "";
    readyToDelete1 = false;
    readyToChange = false;
});
pad1.addEventListener("mousedown", function()
{
    readyToDelete1 = true;
    readyToChange = true;
});
pad2.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note2.appendChild(note);
    textbox.value = "";
    readyToDelete2 = false;
});
pad2.addEventListener("mousedown", function()
{
    readyToDelete2 = true;
});
pad3.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note3.appendChild(note);
    textbox.value = "";
    readyToDelete3 = false;
});
pad3.addEventListener("mousedown", function()
{
    readyToDelete3 = true;
});
pad4.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note4.appendChild(note);
    textbox.value = "";
    readyToDelete4 = false;
});
pad4.addEventListener("mousedown", function()
{
    readyToDelete4 = true;
});
pad5.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note5.appendChild(note);
    textbox.value = "";
    readyToDelete5 = false;
});
pad5.addEventListener("mousedown", function()
{
    readyToDelete5 = true;
});
pad6.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note6.appendChild(note);
    textbox.value = "";
    readyToDelete6 = false;
});
pad6.addEventListener("mousedown", function()
{
    readyToDelete6 = true;
});

pad7.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note7.appendChild(note);
    textbox.value = "";
    readyToDelete7 = false;
});
pad7.addEventListener("mousedown", function()
{
    readyToDelete7 = true;
});
pad8.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note8.appendChild(note);
    textbox.value = "";
    readyToDelete8 = false;
});
pad8.addEventListener("mousedown", function()
{
    readyToDelete8 = true;
});
