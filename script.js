// créer un bouton close et l'append à chaque item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    myNodelist[i].appendChild(button);
}

// cliquer sur bouton close button pour cacher l'item de la liste courante
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// ajout d'un symbole "checked"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// ajout d'éléments
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput");
    var t = document.createTextNode(inputValue.value);
    li.appendChild(t);
    if (inputValue === ''){
        alert("vous devez écrire quelque chose !");
        return;
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("myInput").value = "";
    
    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button)
    
    
    for(i=0;i<close.length;i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


