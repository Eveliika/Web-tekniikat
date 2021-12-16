let number = 2;
let test = "Muuttujan number arvo + 6 on " + (number + 6);

let test2 = `
    Muuttujan number arvo + 6 on ${ number + 6 }`;

/*document.write("Tästä alkaa testitulostus:<br>")
document.write(test + "<br>");
document.write(test2 + "<br>")

let cookie = document.cookie;
document.cookie = "loadCount = 1";
let loadCount = 0;*/

//Evästeiden käsittely (Kopioitu ja muokattu W3Schoolista)
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
  
  function getCookie(cname) {
    //Lisää nimen perään =-merkki
    let name = cname + "=";
    //Pilkotaan merkkijono arrayhyn puolipisteiden kohdalta
    let ca = document.cookie.split(';');
    //Loopataan array läpi
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      //Tsekataan löytyykö annetulla nimellä evästettä
      if (c.indexOf(name) == 0) {
          //Palautetaan evästeen arvo
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
      //Haetaan loudCount-evästeen arvo
    let loadCount = getCookie("username");
    if (loadCount != "") {
        //Arvo löytyi
        //Kasvatetaan arvoa
        loadCount++;
    } else {
        //Arvoa ei löytynyt
        //Asetetaan arvoksi 1
        loadCount = 1;
    }
    setCookie("loadCount", loadCount);
    return loadCount;
  }
  let loadCount = checkCookie();
   //Näytetään latausmäärä sivulla
    document.write("<br>Sivu ladattu " + loadCount + " kertaa");