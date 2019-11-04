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


var hasStuff1 = false;
var hasStuff2 = false;
var hasStuff3 = false;
var hasStuff4 = false;
var hasStuff5 = false;
var hasStuff6 = false;
var hasStuff7 = false;
var hasStuff8 = false;


var readyToDelete1 = false;
var readyToDelete2 = false;
var readyToDelete3 = false;
var readyToDelete4 = false;
var readyToDelete5 = false;
var readyToDelete6 = false;
var readyToDelete7 = false;
var readyToDelete8 = false;
var deleteNote = false;

function checkHtml()
{
    var example = getCookie("info2");
    if(exmple = "")
        alert("note empty");
    else   
        alert(example);

}


function clearNote(note,pad)
{
    note.innerHTML = "";
    pad.style.backgroundColor = "white";
    pad.style.boxShadow = "none";
    pad.style.border = "2px dotted rgb(230,230,230)"
    pad.style.borderRadius = "3px";
    isYellow = false;
}

function clearAll()
{
    clearNote(note1,pad1)
    clearNote(note2,pad2)
    clearNote(note3,pad3)
    clearNote(note4,pad4)
    clearNote(note5,pad5)
    clearNote(note6,pad6)
    clearNote(note7,pad7)
    clearNote(note8,pad8)
    setCookie("info1","",30);
    setCookie("info2","",30);
    setCookie("info3","",30);
    setCookie("info4","",30);
    setCookie("info5","",30);
    setCookie("info6","",30);
    setCookie("info7","",30);
    setCookie("info8","",30);
}
function createNoteFromCookie(xinfo,xnote,padid)
{
    var stringCookie = getCookie(xinfo);
    if(stringCookie.length>0 && padid == 1)
        hasStuff1 = true;
    if(stringCookie.length>0 && padid == 2)
        hasStuff2 = true;
    if(stringCookie.length>0 && padid == 3)
        hasStuff3 = true;
    if(stringCookie.length>0 && padid == 4)
        hasStuff4 = true;
    if(stringCookie.length>0 && padid == 5)
        hasStuff5 = true;
    if(stringCookie.length>0 && padid == 6)
        hasStuff6 = true;
    if(stringCookie.length>0 && padid == 7)
        hasStuff7 = true;
    if(stringCookie.length>0 && padid == 8)
        hasStuff8 = true;

    var values = stringCookie.split(',');
    for(a = 0; a<values.length; a++)
    {
        var note = document.createElement("li");
        note.innerHTML = values[a];
        xnote.appendChild(note);
    }
    
}

function alertUser()
{
    alert("Click on 'WebStickies' for to learn how to use this app");
}

function setCookie(cname,cvalue,exdays)
 {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function addToCookie(cname,value)
{
    var currentString = getCookie(cname);
    newString = currentString+","+value;
    setCookie(cname,newString,30);
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
    createNoteFromCookie("info1",note1,1)
    if(hasStuff1)
    {
        pad1.style.backgroundColor = "rgb(255, 253, 162)";
        pad1.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad1.style.border = "none";
    }

    
    createNoteFromCookie("info2",note2,2)
    if(hasStuff2)
    {
        pad2.style.backgroundColor = "rgb(255, 253, 162)";
        pad2.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad2.style.border = "none";
    }

    createNoteFromCookie("info3",note3,3)
    if(hasStuff3)
    {
        pad3.style.backgroundColor = "rgb(255, 253, 162)";
        pad3.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad3.style.border = "none";
    }

    createNoteFromCookie("info4",note4,4)
    if(hasStuff4)
    {
        pad4.style.backgroundColor = "rgb(255, 253, 162)";
        pad4.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad4.style.border = "none";
    }

    createNoteFromCookie("info5",note5,5)
    if(hasStuff5)
    {
        pad5.style.backgroundColor = "rgb(255, 253, 162)";
        pad5.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad5.style.border = "none";
    }

    createNoteFromCookie("info6",note6,6)
    if(hasStuff6)
    {
        pad6.style.backgroundColor = "rgb(255, 253, 162)";
        pad6.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad6.style.border = "none";
    }

    createNoteFromCookie("info7",note7,7)
    if(hasStuff7)
    {
        pad7.style.backgroundColor = "rgb(255, 253, 162)";
        pad7.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad7.style.border = "none";
    }

    createNoteFromCookie("info8",note8,8)
    if(hasStuff8)
    {
        pad8.style.backgroundColor = "rgb(255, 253, 162)";
        pad8.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
        pad8.style.border = "none";
    }

}   




var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





addEventListener("keydown", function()
{
    if(event.keyCode == 8)
    {
        deleteNote = true;
    }
    if(readyToDelete1 && deleteNote)
    {
        note1.innerHTML = "";
        readyToDelete1 = false;
        deleteNote = false;
        pad1.style.backgroundColor = "white";
        pad1.style.boxShadow = "none";
        pad1.style.border = "2px dotted rgb(230,230,230)"
        pad1.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff1 = false;
        setCookie("info1","",30);

    }
    if(readyToDelete2 && deleteNote)
    {
        note2.innerHTML = "";
        readyToDelete2 = false;
        deleteNote = false;
        pad2.style.backgroundColor = "white";
        pad2.style.boxShadow = "none";
        pad2.style.border = "2px dotted rgb(230,230,230)"
        pad2.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff2 = false;
        setCookie("info2","",30);
    }
    if(readyToDelete3 && deleteNote)
    {
        note3.innerHTML = "";
        readyToDelete3 = false;
        deleteNote = false;
        pad3.style.backgroundColor = "white";
        pad3.style.boxShadow = "none";
        pad3.style.border = "2px dotted rgb(230,230,230)"
        pad3.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff3 = false;
        setCookie("info3","",30);
    }
    if(readyToDelete4 && deleteNote)
    {
        note4.innerHTML = "";
        readyToDelete4 = false;
        deleteNote = false;
        pad4.style.backgroundColor = "white";
        pad4.style.boxShadow = "none";
        pad4.style.border = "2px dotted rgb(230,230,230)"
        pad4.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff4 = false;
        setCookie("info4","",30);
    }
    if(readyToDelete5 && deleteNote)
    {
        note5.innerHTML = "";
        readyToDelete5 = false;
        deleteNote = false;
        pad5.style.backgroundColor = "white";
        pad5.style.boxShadow = "none";
        pad5.style.border = "2px dotted rgb(230,230,230)"
        pad5.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff5 = false;
        setCookie("info5","",30);
    }
    if(readyToDelete6 && deleteNote)
    {
        note6.innerHTML = "";
        readyToDelete6 = false;
        deleteNote = false;
        pad6.style.backgroundColor = "white";
        pad6.style.boxShadow = "none";
        pad6.style.border = "2px dotted rgb(230,230,230)"
        pad6.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff6 = false;
        setCookie("info6","",30);
    }
    if(readyToDelete7 && deleteNote)
    {
        note7.innerHTML = "";
        readyToDelete7 = false;
        deleteNote = false;
        pad7.style.backgroundColor = "white";
        pad7.style.boxShadow = "none";
        pad7.style.border = "2px dotted rgb(230,230,230)"
        pad7.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff7 = false;
        setCookie("info7","",30);
    }
    if(readyToDelete8 && deleteNote)
    {
        note8.innerHTML = "";
        readyToDelete8 = false;
        deleteNote = false;
        pad8.style.backgroundColor = "white";
        pad8.style.boxShadow = "none";
        pad8.style.border = "2px dotted rgb(230,230,230)"
        pad8.style.borderRadius = "3px";
        justCleared = true;
        isYellow = false;
        hasStuff8 = false;
        setCookie("info8","",30);
    }
});


pad1.addEventListener("mouseup", function()
{
    var note = document.createElement("li");
    note.innerHTML = textbox.value;
    note1.appendChild(note);
    textbox.value = "";
    
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

    if(getCookie("info1") == "")
    {
        setCookie("info1",note.innerHTML,30);
    }
    else
    {
        addToCookie("info1",note.innerHTML);
    }


   
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

    if(getCookie("info2") == "")
    {
        setCookie("info2",note.innerHTML,30);
    }
    else
    {
        addToCookie("info2",note.innerHTML);
    }
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
    if(getCookie("info3") == "")
    {
        setCookie("info3",note.innerHTML,30);
    }
    else
    {
        addToCookie("info3",note.innerHTML);
    }
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
    if(getCookie("info4") == "")
    {
        setCookie("info4",note.innerHTML,30);
    }
    else
    {
        addToCookie("info4",note.innerHTML);
    }
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
    if(getCookie("info5") == "")
    {
        setCookie("info5",note.innerHTML,30);
    }
    else
    {
        addToCookie("info5",note.innerHTML);
    }
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
    if(getCookie("info6") == "")
    {
        setCookie("info6",note.innerHTML,30);
    }
    else
    {
        addToCookie("info6",note.innerHTML);
    }
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
    if(getCookie("info7") == "")
    {
        setCookie("info7",note.innerHTML,30);
    }
    else
    {
        addToCookie("info7",note.innerHTML);
    }
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
    if(getCookie("info8") == "")
    {
        setCookie("info8",note.innerHTML,30);
    }
    else
    {
        addToCookie("info8",note.innerHTML);
    }
});
pad8.addEventListener("mousedown", function()
{
    readyToDelete8 = true;
});



