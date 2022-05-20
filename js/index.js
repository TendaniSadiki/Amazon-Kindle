//Scroll
var button = document.getElementById('scrollRight');
button.onclick = function () {
    var container = document.getElementById('scrollbar');
    sideScroll(container,'right',25,100,10);
};
var back = document.getElementById('scrollLeft');
back.onclick = function () {
    var container = document.getElementById('scrollbar');
    sideScroll(container,'left',25,100,10);
};
function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
let readLastTimeBooks ={
    book1: 'The Silent Wife',
    book2:'Wildcat',
    book3: 'Dark Purpose',
    book4: 'Write My Name Across The Sky',
    book5: 'He Who Fights The Monster',
    book6: 'The Watch Maker',
    

}
//print output
document.getElementById('bookName1').innerHTML = readLastTimeBooks.book1;
document.getElementById('bookName2').innerHTML = readLastTimeBooks.book2;
document.getElementById('bookName3').innerHTML = readLastTimeBooks.book3;
document.getElementById('bookName4').innerHTML = readLastTimeBooks.book4;
document.getElementById('bookName5').innerHTML = readLastTimeBooks.book5;
document.getElementById('bookName6').innerHTML = readLastTimeBooks.book6;

let readLastTimeBookspages ={
    readLast: 'Books you read last',
    book1: '100 Pages . Chapter 5 . Last read',
    book2:'193 Pages . Chapter 13 . Yet to read',
    book3: '55 pages . Yet to read',
    book4: 'New Purchase',
    book5: '201 Pages . Chapter 23 . Yet to read',
    book6: '30 Pages . Read recent',
    

}
//print output
document.getElementById('readLastHeading').innerHTML = readLastTimeBookspages.readLast;
document.getElementById('bookPages1').innerHTML = readLastTimeBookspages.book1;
document.getElementById('bookPages2').innerHTML = readLastTimeBookspages.book2;
document.getElementById('bookPages3').innerHTML = readLastTimeBookspages.book3;
document.getElementById('bookPages4').innerHTML = readLastTimeBookspages.book4;
document.getElementById('bookPages5').innerHTML = readLastTimeBookspages.book5;
document.getElementById('bookPages6').innerHTML = readLastTimeBookspages.book6;

let newReleaseBooks ={
    newRelease:'New Release',
    book1: 'The Insider',
    book2:'Deadly Little Lies',
    book3: 'If We disapper here',
    book4: 'Starngers we know',
    book5: 'At the quite edge',
    

}
//print output
document.getElementById('newReleaseHeading').innerHTML = newReleaseBooks.newRelease;
document.getElementById('bookNameRelease1').innerHTML = newReleaseBooks.book1;
document.getElementById('bookNameRelease2').innerHTML = newReleaseBooks.book2;
document.getElementById('bookNameRelease3').innerHTML = newReleaseBooks.book3;
document.getElementById('bookNameRelease4').innerHTML = newReleaseBooks.book4;
document.getElementById('bookNameRelease5').innerHTML = newReleaseBooks.book5;
