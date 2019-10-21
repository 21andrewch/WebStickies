


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

function setCookie(cname,cvalue,exdays)
 {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) 
  {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++)
    {
      var c = ca[i];
      while (c.charAt(0) == ' ')
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0)
       {
        return c.substring(name.length, c.length);
       }
    }
    return "";
  }
  
function checkCookie()
{
    var newnote1=getCookie("info1");
    var noteone = document.createElement("li");
    noteone.innerHTML = newnote1;
    note1.appendChild(noteone);
    
    var newnote2=getCookie("info2");
    var notetwo = document.createElement("li");
    notetwo.innerHTML = newnote2;
    note2.appendChild(notetwo);

    var newnote3=getCookie("info3");
    var notethree = document.createElement("li");
    notethree.innerHTML = newnote3;
    note3.appendChild(notethree);

    var newnote4=getCookie("info4");
    var notefour = document.createElement("li");
    notefour.innerHTML = newnote4;
    note4.appendChild(notefour);

    var newnote5=getCookie("info5");
    var notefive = document.createElement("li");
    notefive.innerHTML = newnote5;
    note5.appendChild(notefive);

    var newnote6=getCookie("info6");
    var notesix = document.createElement("li");
    notesix.innerHTML = newnote6;
    note6.appendChild(notesix);

    var newnote7=getCookie("info7");
    var notesev = document.createElement("li");
    notesev.innerHTML = newnote7;
    note7.appendChild(notesev);

    var newnote8=getCookie("info8");
    var noteight = document.createElement("li");
    noteight.innerHTML = newnote8;
    note8.appendChild(noteight);

}   



function dropDown() 
{
    document.getElementById("help-box").classList.toggle("show");
}

window.onclick = function(event) 
{
    if (!event.target.matches('.help')) 
    {
      var dropdowns = document.getElementsByClassName("help-box");
      var i;
      for (i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) 
        {
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
    setCookie("info1",note.innerHTML,30);
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
    setCookie("info2",note.innerHTML,30);
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
    setCookie("info3",note.innerHTML,30);
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
    setCookie("info4",note.innerHTML,30);
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
    setCookie("info5",note.innerHTML,30);
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
    setCookie("info6",note.innerHTML,30);
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
    setCookie("info7",note.innerHTML,30);
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
    setCookie("info8",note.innerHTML,30);
    readyToDelete8 = false;
});
pad8.addEventListener("mousedown", function()
{
    readyToDelete8 = true;
});
