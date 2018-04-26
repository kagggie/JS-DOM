//.style mozemy zmieniac style cssowe

//jak robieprojekt to robie htmla potem cssa i dopiero jak czegos nie moge zrobic cssem to js
//
//inner html - moze wrzucic p do jakiegos elementu i przegladarna zrenderuje to jako znacznik

document.getElementById("parFirst").innerHTML = '<p id="paragraf">12345</p>';



document.getElementById("paragraf").innerText = 'Hello world';

document.getElementById("paragraf").outerHTML = '<span>outerihtml</span>';

//outer tyczy sie rozniez tego znacznika, a inner nie tyczy sie znacznika tylko w srodek cos mozemy wrzucic , inner tylko kontenera

console.log(document.getElementById("parFirst").id = "par-second");
//mozemy znakiem przypisanie zmienic kazdy atrybut
//tutaj class nie bedzie dzialac bo to nie ta funkcja

console.log(document.getElementById("sectionFirst").classList);
//pozwala zlapac wszystkie klasy


console.log(document.getElementById("sectionFirst").className);
//pozwala zlapac wszystkie imiona klas
//console.log(document.getElementById("sectionFirst").className = "sekcja-czerwona2");
//class name przy przypinaniu wartosci zmienia wszystkie
document.getElementById("sectionFirst").classList.add("blue");
document.getElementById("sectionFirst").classList.remove("sekcja-pierwsza");

console.log(document.getElementById("sectionFirst").classList);

document.getElementById("sectionFirst").style.backgroundColor = "violet";

//czy po kolekcji mozna wybrac style?

let linki = document.getElementsByClassName("link");
//nie da sie na kolekcji zlapac .style, zeby to zrobic musze zrobic for i przeiterowac po calosci
for(let i = 0; i < linki.length; i++){
    linki[i].style.color = "red";
}

//jak dom sie zaladuje mozemy cos zrobic

//domcontentloaded zaladowanie doma


