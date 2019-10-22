


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
var isYellow = true;
var justCleared = false;



var readyToDelete1 = false;
var readyToDelete2 = false;
var readyToDelete3 = false;
var readyToDelete4 = false;
var readyToDelete5 = false;
var readyToDelete6 = false;
var readyToDelete7 = false;
var readyToDelete8 = false;
var deleteNote = false;

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
        pad1.style.backgroundColor = "white";
        pad1.style.boxShadow = "none";
        pad1.style.border = "1px dotted rgb(230,230,230)"
        pad1.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete2 && deleteNote)
    {
        note2.innerHTML = "";
        readyToDelete2 = false;
        deleteNote = false;
        pad2.style.backgroundColor = "white";
        pad2.style.boxShadow = "none";
        pad2.style.border = "1px dotted rgb(230,230,230)"
        pad2.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete3 && deleteNote)
    {
        note3.innerHTML = "";
        readyToDelete3 = false;
        deleteNote = false;
        pad3.style.backgroundColor = "white";
        pad3.style.boxShadow = "none";
        pad3.style.border = "1px dotted rgb(230,230,230)"
        pad3.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete4 && deleteNote)
    {
        note4.innerHTML = "";
        readyToDelete4 = false;
        deleteNote = false;
        pad4.style.backgroundColor = "white";
        pad4.style.boxShadow = "none";
        pad4.style.border = "1px dotted rgb(230,230,230)"
        pad4.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete5 && deleteNote)
    {
        note5.innerHTML = "";
        readyToDelete5 = false;
        deleteNote = false;
        pad5.style.backgroundColor = "white";
        pad5.style.boxShadow = "none";
        pad5.style.border = "1px dotted rgb(230,230,230)"
        pad5.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete6 && deleteNote)
    {
        note6.innerHTML = "";
        readyToDelete6 = false;
        deleteNote = false;
        pad6.style.backgroundColor = "white";
        pad6.style.boxShadow = "none";
        pad6.style.border = "1px dotted rgb(230,230,230)"
        pad6.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete7 && deleteNote)
    {
        note7.innerHTML = "";
        readyToDelete7 = false;
        deleteNote = false;
        pad7.style.backgroundColor = "white";
        pad7.style.boxShadow = "none";
        pad7.style.border = "1px dotted rgb(230,230,230)"
        pad7.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
    if(readyToDelete8 && deleteNote)
    {
        note8.innerHTML = "";
        readyToDelete8 = false;
        deleteNote = false;
        pad8.style.backgroundColor = "white";
        pad8.style.boxShadow = "none";
        pad8.style.border = "1px dotted rgb(230,230,230)"
        pad8.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
    }
});


pad1.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note1.appendChild(note);
    textbox.value = "";
    setCookie("info1",note.innerHTML,30);
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad1.style.backgroundColor = "rgb(255, 253, 162)";
        pad1.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad1.style.border = "none";
    }
    isYellow = true;
    readyToDelete1 = false;
});
pad1.addEventListener("mousedown", function()
{
    readyToDelete1 = true;
});
pad2.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note2.appendChild(note);
    textbox.value = "";
    setCookie("info2",note.innerHTML,30);
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad2.style.backgroundColor = "rgb(255, 253, 162)";
        pad2.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad2.style.border = "none";
    }
        isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad3.style.backgroundColor = "rgb(255, 253, 162)";
        pad3.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad3.style.border = "none";
    }
        isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad4.style.backgroundColor = "rgb(255, 253, 162)";
        pad4.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad4.style.border = "none";
    }
    isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad5.style.backgroundColor = "rgb(255, 253, 162)";
        pad5.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad5.style.border = "none";
    }
        isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad6.style.backgroundColor = "rgb(255, 253, 162)";
        pad6.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad6.style.border = "none";
    }
        isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad7.style.backgroundColor = "rgb(255, 253, 162)";
        pad7.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad7.style.border = "none";
    }
        isYellow = true;
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
    if(justCleared)
    {
        justCleared = false;
    }
    else
    {
        pad8.style.backgroundColor = "rgb(255, 253, 162)";
        pad8.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad8.style.border = "none";
    }
        isYellow = true;
    readyToDelete8 = false;
});
pad8.addEventListener("mousedown", function()
{
    readyToDelete8 = true;
});





addEventListener("keydown", function()
{

});