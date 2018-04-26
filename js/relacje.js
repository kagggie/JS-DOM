let dziecko = document.getElementById('dziecko');
console.log(dziecko);
console.log(dziecko.parentElement);
console.log(dziecko.parentNode);

//przy node niekoniecznie bedzie to element, ale moze byc nim, node czyli wezel trafil nam w element

let rodzic = document.getElementById('rodzic')
console.log(rodzic);
//robic zawsze tego console.loga zeby wiedziec na czym sie pracuje
console.log(rodzic.childNodes);
console.log(rodzic.childNodes[1]);
//jakbysmy wpisali 0 to zlapaloby text, wiec nie pykloby z petla
console.log(rodzic.children)
console.log(rodzic.firstElementChild)
//dostaniemy pierwszy element
console.log(rodzic.lastElementChild)
//a tu dostaniemy ostatniego noda

//tekst jak wyskoczy to enter/biale znaki
//child nodes nie zawsze trafia w elementy, lapie wsyztskie wezly, a przy children trafiasz elementy, wiec lepiej przy petli uzywac children

let link = document.getElementById('link');
console.log(link.previousSibling.nodeType);
//noda lapie
console.log(link.previousElementSibling);
//lapie element ktory jest wcesniejszym rodzenstwem
console.log(link.nextElementSibling);
console.log(link.nextSibling.nodeType);

//nodeType - sprawdzamy rodzaj wezla, dostajemy numer, zeby zobacyc co znaczy numer musimy sprawdzic w internetach znaczenie

//komentarze tez sa nodami!! moga zostac trafione






//tutaj wybieramy rodzenstwo 






