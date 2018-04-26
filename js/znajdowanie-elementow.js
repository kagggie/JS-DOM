//reprezentacja naszego kodu html w przegladarce to dom przy skryptach operujemy na nim dynamicznie metody to co ma obiekt, zdarzenie to co wykonuje uzytkownik na samej stronie

//nody to wezly w js, element ten moze byc wezlem, tekst jest wezlem ale element trzyma tekst, musimy przez niego operaowac na tekscie, chce trafiac elementy a trafiam wezly - wtedy mozna zrobic funkcje ktora eliminuje wezly

console.log(document); 
//dostane caly dom lacznie z doctyoe

console.log(document.documentElement); 
//dostane bez doctype wszystko

console.log(window.document);
//przejdz przez obiekt window do obiekt dokument, to metoda
//na obiekcie window mozemy wybierac inne funckje, np czy zrobilismy scrolla, resize

let paragraf = document.getElementById("paragraf-1");
console.log(typeof paragraf);
//dostane cala struktre html z p, wsztsko jest obiektem!

let linki = document.getElementsByClassName("link");
console.log(linki);
//dostane html collection, nie zrobimy na niej forEach, nie zrobimy push pop itp, nie mozemy po tym przeliterowac, tylko for zadziala jquery zwraca jquery object
console.log(typeof linki);

let spany = document.getElementsByTagName("span");
console.log(spany);
console.log(typeof spany);

//te metody sa szybsze niz query selectory, ale uzywa sie coraz czesciej queryselecctor, mozna tam zlapac kazdy selector cssowy, 
//funkcja anonimmowa: mozna ja przypisac do zmiennej
//for each jest funkcja, ale nie dziala na kolekcja html
//spany.forEach(function(element, index){
//   console.log('Numer indexu to: ' + index + ' element to: ' + element); 
//});


//for(let i = 0; i < spany.length; i++){
//    console.log('Numer indexu to: ' + i + ' element to: ' + spany[i]); 
//}
//teraz dziala, ale kazdy element jest 

//drzewo elementow kazdy element moze byc rodzicem dla innego, nie mozna byc dziakiem, korzen glowny root to document, wezly maja jedneo rodzica, 










