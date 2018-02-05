 let retter;

 document.addEventListener("DOMContentLoaded", loadJson);



 async function loadJson() {

     let minListe = await fetch("menu.json");
     retter = await minListe.json();
     //console.log(retter);



     // find og filtrer retter efter kategori og dem dem i nyt array

     let forretter = retter.filter(ret => ret.kategori == "forretter");
     let hovedretter = retter.filter(ret => ret.kategori == "hovedretter");
     let desserter = retter.filter(ret => ret.kategori == "desserter");
     let drikkevarer = retter.filter(ret => ret.kategori == "drikkevarer");
     console.log(forretter);
     let sideorders = retter.filter(ret => ret.kategori == "sideorders");
     console.log(sideorders);

     document.querySelector("#filter-forretter").addEventListener("click", () => {
         visRetter(forretter, "Forretter")
     });
     document.querySelector("#filter-alle").addEventListener("click", () => {
         visRetter(retter, "Menu")
     });
     document.querySelector("#filter-hovedretter").addEventListener("click", () => {
         visRetter(hovedretter, "Hovedretter")
     });
     document.querySelector("#filter-desserter").addEventListener("click", () => {
         visRetter(desserter, "Desserter")
     });
     document.querySelector("#filter-drikkevarer").addEventListener("click", () => {
         visRetter(drikkevarer, "Drikkevarer")
     });
     document.querySelector("#filter-sideorders").addEventListener("click", () => {
         visRetter(sideorders, "Siderorders")
     });




     visRetter(retter, "Menu");
 }



 // kig på slide slide 6 fra freddag d. 2.feb, der forklares det nedenunder

 function visRetter(hvilkeretter, overskrift) {
     //Henter overskriften fra HTML, bliver skiftet 
     document.querySelector("[data-overskrift]").textContent = overskrift;

     let modtager = document.querySelector(".templatemodtager");
     let template = document.querySelector(".mytemplate");
     modtager.innerHTML = "";

     hvilkeretter.forEach(hverRet => {

         let klon = template.cloneNode(true).content;
         klon.querySelector(".navn").textContent = hverRet.navn;
         klon.querySelector(".kortBeskrivelse").textContent = hverRet.kortbeskrivelse;
         klon.querySelector(".pris").textContent = hverRet.pris;
         klon.querySelector(".billede").src = "/imgs/small/" + hverRet.billede +
             "-sm.jpg";
         klon.querySelector(".billede").alt = "billede af" + hverRet.navn;

         modtager.appendChild(klon);


     })
 }
