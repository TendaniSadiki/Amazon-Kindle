
let cart = document.querySelectorAll(".addToCart");
console.log(cart)

const products = [
    {
      id: 0,
      productName:'The Insider',
      productPrice:32.50,
      inCart:0,
      productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
      isbn:123456678,
      imgSrc:"./assets/image/book1.jpg",
    },
    {
        id: 1,
        productName:'Deadly Little Lies',
        productPrice:49.19,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/image/book2.jpg",
      },
      {
        id: 2,
        productName:'If We disapper here',
        productPrice:62.22,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/image/book3.jpg",
      },
      {
        id: 3,
        productName:'Strangers we know',
        productPrice:71.33,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/image/book4.jpg",
      },
      {
        id: 4,
        productName:'At the quite edge',
        productPrice:40.50,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/image/book5.jpg",
      },
   
  ];
  

for(let i = 0; i<cart.length; i++){
    cart[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        
        
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cartnumber').textContent=productNumbers+1;    
    }
    else{
    localStorage.setItem('cartNumbers', 1);
    console.log(document.querySelector('.cartnumber'));
    document.querySelector('.cartnumber').textContent=1;
    }
}


function totalCost(product){

    if( localStorage.getItem('totalCost') === null){
        localStorage.setItem('totalCost', "0");
    }
    
   let cartCost = localStorage.getItem('totalCost');
    if(cart != null){
        
        
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost+product.productPrice);
    }
    else{
        localStorage.setItem('totalCost',product.productPrice); 

    }

}
// pass product co  cart page
function cartHandler(){
    document.querySelector(".items").textContent = localStorage.getItem("cartNumbers");
    document.querySelector("#totalCost").textContent = localStorage.getItem("totalCost");
    document.querySelector("#totalCost").textContent = localStorage.getItem("cartNames");
    
}















