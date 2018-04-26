//jak tworzyc nowe wezly

//twarzymy wezly, 1 - create element czyli znacznik, 2 node z tekstem, na koniec tworzymy noda z atryutem class iditp

let btn = document.createElement('button');
console.log(btn.nodeType);
//tworzymy wezel node typu element ktory jest przyciskiem
let textBtn = document.createTextNode('Click me');
console.log(textBtn);
//tworzymy node typu tesktowego z wartoscia click me
let classBtn = document.createAttribute('class');
console.log(classBtn);
//tworzymy wezel atrybutu o wartosci nazwi  klasy
classBtn.value = 'btn';
console.log(classBtn);
//nodowi atrybyutuu dodalismy wartosc klasy , dostajemy powiazane nody klasa o wartosci
//to musi byc po createAttribute

//w console.logu dzialaja operacja na tbalicach np split, sort itp przy sortownaniu lapie 1 10 2 23 3 itp 

document.body.appendChild(btn);
//append child na buttonie daje mu dziecko
//na koniec body dodalismy wezel wczesniej utworzony czyli element htmlowy

btn.appendChild(textBtn);
//zlapalismy dodany buttton i dodalismy do niego tekst 

btn.setAttributeNode(classBtn);
//w js stworzylam element ktory jest czescia html

//dopisujemy klase do buttona
btn.setAttribute('id', 'button');

//let paragraph = document.createElement('p');
//paragraph.setAttribute('class', 'paragraph');
//document.body.appendChild(paragraph);
//paragraph.innerHTML = "123"
//wezly zeby w konkretnym miejscu wsadzac element, jesli na koncu piszemy krotsza wersje

//remove musi byc nodem
btn.removeAttributeNode(classBtn);
//usuwa wezel z klasa
btn.removeAttribute('id');
//usuwa atrybut
document.body.removeChild(btn);
//usuwa caly elemenet 

let rodzic = document.getElementById('rodzic');
document.body.removeChild(rodzic);
//usuwanie elementu

//zeby usunac element ktory nie jest dzieckiem body 
document.getElementById('sectionFirst').removeChild(document.getElementById('parFirst'));



