var tablica = [];
var tablicaND = [];
var licznikLosuw = 0;
var zabezpieczenie = false;
function importData() {
    document.getElementById("userList").innerHTML = "";
    tablica = [];
    tablicaND = [];
    var dane = "";
    dane = document.getElementById("inputUsers").value;
    var wyraz = "";
    for (var x = 0; x < dane.length; x++) {
         if (dane[x] == '\n') {
            tablica.push(wyraz);
            wyraz = "";
        } else {
            wyraz += dane[x];
        }
    } 
    if (wyraz !== "" ) {
        console.log(wyraz);
        tablica.push(wyraz);
    }
    for (var x = 0; x < tablica.length; x++) {
        document.getElementById("userList").innerHTML += '<div class="user">' + tablica[x] + '</div>';
    }
    for (var x = 0; x < tablica.length; x++) {
        tablicaND.push(tablica[x]);
    }
    for (var x = 0; x < tablica.length; x++ ) {
        document.getElementById("allUsers").innerHTML += tablica[x] + "<br>";
    }
}
var randomNumber = 0;
function losuj() {
    if (tablicaND.length == 0 ) {
        document.getElementById("winner").innerHTML = '<img src="pogchamp.png" id="pog">' + 'ee kurewko lista jest pusta/skonczyla sie';
    } else {
        randomNumber = Math.floor(Math.random() * tablicaND.length);
        if (tablicaND[randomNumber] == "") {
            document.getElementById("winner").innerHTML = '<img src="pogchamp.png" id="pog">' + 'ee kurewko lista jest pusta/skonczyla sie';
        } else {
            document.getElementById("winner").innerHTML = '<img src="pogchamp.png" id="pog">' + tablicaND[randomNumber];
            licznikLosuw++;
            document.getElementById("liczba").innerHTML = licznikLosuw;
            zabezpieczenie = true;
        }
    }
}
var alredySubedUsers = [];
var nonSubedUsers = [];
function subOrSub(alredySubed) {
    if (zabezpieczenie == true ) {
        if (alredySubed == true ) {
            alredySubedUsers.push(tablicaND[randomNumber]);
            tablicaND.splice(randomNumber, 1);
        } else if (alredySubed == false ) {
            nonSubedUsers.push(tablicaND[randomNumber]);
            tablicaND.splice(randomNumber, 1);
        }
        zabezpieczenie = false;
    }
    output();
}
var openMenu = false;
function openmenu() {
    console.log('test');
    if (openMenu == false) {
        document.getElementById("tozsamosc").style.display = "block";
        openMenu = true
        window.scrollBy(0, 500);
    } else {
        document.getElementById("tozsamosc").style.display = "none";
        openMenu = false
    }
}
function output() {
    console.log('dzialasz kurwa?')
    document.getElementById("losers").innerHTML = "";
    document.getElementById("alredySub").innerHTML = "";
    document.getElementById("subGifted").innerHTML = "";
    document.getElementById("allInOne").innerHTML = "";

    for (var x = 0; x < tablicaND.length; x++) {
        document.getElementById("losers").innerHTML += tablicaND[x] + "<br>";
    }
    for (var x = 0; x < alredySubedUsers.length; x++) {
        document.getElementById("alredySub").innerHTML += alredySubedUsers[x] + "<br>";
    }
    for (var x = 0; x < nonSubedUsers.length; x++) {
        document.getElementById("subGifted").innerHTML += nonSubedUsers[x] + "<br>";
    }
    //outpun final:
    document.getElementById("allInOne").innerHTML += "Lista wszystkich:" + "<br>"
    for (var x = 0; x < tablica.length; x++ ) {
        document.getElementById("allInOne").innerHTML += tablica[x] + "<br>";
    }
    document.getElementById("allInOne").innerHTML += "<br>Lista którzy NIE Wygrali:" + "<br>"
    for (var x = 0; x < tablicaND.length; x++) {
        document.getElementById("allInOne").innerHTML += tablicaND[x] + "<br>";
    }
    document.getElementById("allInOne").innerHTML += "<br>Kto wygrał ale aktualnie ma suba:" + "<br>"
    for (var x = 0; x < alredySubedUsers.length; x++) {
        document.getElementById("allInOne").innerHTML += alredySubedUsers[x] + "<br>";
    }
    document.getElementById("allInOne").innerHTML += "<br>Kto wygrał ale nie ma suba:" + "<br>";
    for (var x = 0; x < nonSubedUsers.length; x++) {
        document.getElementById("allInOne").innerHTML += nonSubedUsers[x] + "<br>";
    }
    console.log(document.getElementById("allInOne").textContent);
}
var copyText = document.getElementById("allInOne");
