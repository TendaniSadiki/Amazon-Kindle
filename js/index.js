
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
    book4: 'Strangers we know',
    book5: 'At the quite edge',
}
//print output
document.getElementById('newReleaseHeading').innerHTML = newReleaseBooks.newRelease;
document.getElementById('bookNameRelease1').innerHTML = newReleaseBooks.book1;
document.getElementById('bookNameRelease2').innerHTML = newReleaseBooks.book2;
document.getElementById('bookNameRelease3').innerHTML = newReleaseBooks.book3;
document.getElementById('bookNameRelease4').innerHTML = newReleaseBooks.book4;
document.getElementById('bookNameRelease5').innerHTML = newReleaseBooks.book5;

let AuthorsName ={
    book1: 'Matthew Richard',
    book2:'Stephanie Decaroli',
    book3: 'Slice life',
    book4: 'Elle Marr',
    book5: 'Victoria  Helen',
}
//print output
document.getElementById('bookNameReleaseAuthors1').innerHTML =AuthorsName.book1;
document.getElementById('bookNameReleaseAuthors2').innerHTML =AuthorsName.book2;
document.getElementById('bookNameReleaseAuthors3').innerHTML =AuthorsName.book3;
document.getElementById('bookNameReleaseAuthors4').innerHTML =AuthorsName.book4;
document.getElementById('bookNameReleaseAuthors5').innerHTML =AuthorsName.book5;


let genres ={
    book1: 'Thriller',
    book2:'Thriller',
    book3: 'Romance',
    book4: 'Thriller',
    book5: 'Fiction',
}
//print output
document.getElementById('bookGenres1').innerHTML =genres.book1;
document.getElementById('bookGenres2').innerHTML =genres.book2;
document.getElementById('bookGenres3').innerHTML =genres.book3;
document.getElementById('bookGenres4').innerHTML =genres.book4;
document.getElementById('bookGenres5').innerHTML =genres.book5;

let famousAuthors ={
    header: 'Famous Authors',
    author1: 'P Macdonald',
    author2:'W Parker',
    author3: 'A Winter'
   
}
//print output
document.getElementById('authorHeader').innerHTML = famousAuthors.header;
document.getElementById('author1').innerHTML =famousAuthors.author1;
document.getElementById('author2').innerHTML =famousAuthors.author2;
document.getElementById('author3').innerHTML =famousAuthors.author3;

let famousAuthorsBooks ={
 
    authorbooks1: '54 Books',
    authorbooks2:'12 Books',
    authorbooks3: '33 Books'
   
}
//print output
document.getElementById('authorbook1').innerHTML =famousAuthorsBooks.authorbooks1;
document.getElementById('authorbook2').innerHTML =famousAuthorsBooks.authorbooks2;
document.getElementById('authorbook3').innerHTML =famousAuthorsBooks.authorbooks3;






let cart = document.querySelectorAll(".addToCart");
console.log(cart)
let products = [
    {productName:'The Insider',
     productPrice:32.50,
     inCart:0
},
{productName:'Deadly Little Lies',
     productPrice:49.19,
     inCart:0
},
{productName:'If We disapper here',
     productPrice:62.22,
     inCart:0
},
{productName:'Strangers we know',
     productPrice:71.33,
     inCart:0
},
{productName:'At the quite edge',
     productPrice:40.50,
     inCart:0
}

] 


for(let i = 0; i<cart.length;i++){
    cart[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        
    })
}
function cartNumbers(){
    let productNumbers = sessionStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        sessionStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cartnumber').textContent=productNumbers+1;    
    }
    else{
    sessionStorage.setItem('cartNumbers', 1);
    console.log(document.querySelector('.cartnumber'));
    document.querySelector('.cartnumber').textContent=1;
    }
}

function totalCost(product){
   let cartCost = sessionStorage.getItem('totalCost');
    if(cart != null){
        cartCost = parseInt(cartCost);
        sessionStorage.setItem('totalCost',cartCost+product.productPrice);
    }
    else{
        sessionStorage.setItem('totalCost',product.productPrice);

    }
}



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    
    }
  }

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

function cartPopUp() {
    document.getElementById("cartpopup").style.display = "block";
  }
function myPopUpOne() {
    document.getElementById("myPopup").style.display = "block";
  }
function myPopUpTwo() {
    document.getElementById("myPopup2").style.display = "block";
}
function myPopUpThree() {
    document.getElementById("myPopup3").style.display = "block";
}  
function myPopUpFour() {
    document.getElementById("myPopup4").style.display = "block";
}
function myPopUpFive() {
    document.getElementById("myPopup5").style.display = "block";
}
//close
function closeCartPopUp() {
    document.getElementById("cartpopup").style.display = "none";
  }
function closeForm() {
    document.getElementById("myPopup").style.display = "none";
  }
function closeFormTwo() {
    document.getElementById("myPopup2").style.display = "none";
}
function closeFormThree() {
    document.getElementById("myPopup3").style.display = "none";
}
function closeFormFour() {
    document.getElementById("myPopup4").style.display = "none";
}
function closeFormFive() {
    document.getElementById("myPopup5").style.display = "none";
  }