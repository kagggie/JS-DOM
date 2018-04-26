//dom content loaded - gwarantuje ze zdarzenie wykona sie po zaladowaniu strony 

//addEventListener jest pro!


//callaback kiedy zdarzenie doszlo do skutku, jesli klikne zrob callback, function 
document.addEventListener('DOMContentLoaded', function() {
    hoverService();
    changeBrorder();
//    hideParent();
    showParent();
});
                          
//touchmove jetst inny w iphonach, ale to nie znaczy ze jest gorszy!!!!
                          
function hoverService(){
    let linki = document.getElementsByClassName('link');
    for(let i = 0; i < linki.length; i++){
//        linki[i].addEventListener('mouseover', function(){
//            this.style.color = 'red';
//        });
//        
        linki[i].addEventListener('click', function(event){
            event.preventDefault();
            this.style.color = 'green';
//            nie dziala bo href jest pusty i strona sie otwiera
//            przez to prevent zaczyna dzialac
        })
    };
}

//pseudoparametr okresla rodzaj zdarzenia ktore aktualnie obslugujemy
function showParent() {
    document.getElementById('click').addEventListener('click', function(event){
        console.log(event);
        console.log(event.type);
//        pojawia sie mouse event i to gdzie kliknelismy, a przy typie pojawi sie click czyli to co sie wydarzylo
        document.getElementById('rodzic').style.display = 'block';
    });
}
//
//function hideParent(){
//    document.addEventListener('keydown', function(){
//        document.getElementById('rodzic').style.display = 'none';
//    });
//}

//tutaj bedzie funkcja ktora nie jest anonimowa

//# w href odsyla w gore strony, pusty href odswieza strone

function hideParent(){
        document.getElementById('rodzic').style.display = 'none';
}

document.addEventListener('keydown', hideParent);
//przez klikniecie czegokolwiek przestaje dzialac
document.removeEventListener('keydown', hideParent);

function changeBrorder () {
    let inputy = document.querySelectorAll('#formularz form input');
//    wychodzi node list wiec robimy fora
    for(let i = 0; i < inputy.length; i++){
        inputy[i].addEventListener('focus', function(){
            this.style.border = "6px solid darkblue";
        });
    }
}


//jak przerwac obsluge listnera 
//remove event listener
//poprzednie to wszystikie anonimowe i na nich sie nie da przerwac

//pseudo parametr to parament w funkcji w add event listenerze


//robiac dwa addEventListener nie nadpisuja sie tylko odpalaja sie dwie1, mozna temu zapobiec uzywajac stopPropagation

