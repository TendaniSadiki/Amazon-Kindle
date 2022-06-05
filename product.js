
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
      imgSrc:"./assets/bookImg/book1.jpg",
    },
    {
        id: 1,
        productName:'Deadly Little Lies',
        productPrice:49.19,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/bookImg/book2.jpg",
      },
      {
        id: 2,
        productName:'If We disapper here',
        productPrice:62.22,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/bookImg/book3.jpg",
      },
      {
        id: 3,
        productName:'Strangers we know',
        productPrice:71.33,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/bookImg/book4.jpg",
      },
      {
        id: 4,
        productName:'At the quite edge',
        productPrice:40.50,
        inCart:0,
        productDescription:"22 seconds... until Lindsay Boxer loses her badge—or her life.SFPD Sergeant Lindsay Boxer has guns on her mind.There’s buzz of a last-ditch shipment of drugs and weapons crossing the Mexican border ahead of new restrictive gun laws. Before Lindsay can act, her top informant tips her to a case that hits disturbingly close to home.Former cops. Professional hits. All with the same warning scrawled on their bodies:You talk, you die. Now it’s Lindsay’s turn to choose.",
        isbn:123456678,
        imgSrc:"./assets/bookImg/book5.jpg",
      },
   
  ];
  

for(let i = 0; i<cart.length; i++){
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

    if( sessionStorage.getItem('totalCost') === null){
        sessionStorage.setItem('totalCost', "0");
    }
    
   let cartCost = sessionStorage.getItem('totalCost');
    if(cart != null){
        
        
        cartCost = parseInt(cartCost);
        sessionStorage.setItem('totalCost',cartCost+product.productPrice);
    }
    else{
        sessionStorage.setItem('totalCost',product.productPrice); 

    }

}

//The Entire   Arrays and store to other side
var cartArray = [];
var itemArray ;
var productCart = [];

function addtoCart(id){

    var quantityIncreased = false;
    //Find if cart already has items.
    //If yes get items from sessionStorage and save them into array
    if(sessionStorage.getItem("items") !== null){
        cartArray = JSON.parse(sessionStorage.getItem("items"));

    }
    //find the same product
    for(let i = 0; i < cartArray.length; i++){
           if(cartArray[i].id === id){
               cartArray[i].quantity += 1;
               quantityIncreased = true;
               break;
           }
           
    }
    
    if(!quantityIncreased){
        //Find product with the same id
        for(let i = 0; i < products.length; i++){
            //Add product to cart array
            if(products[i].id===id){
                itemArray = 
                    {
                        id: products[i].id,
                        productName: products[i].productName,
                        author:products[i].author,
                        isbn:products[i].isbn,
                        imgSrc: products[i].imgSrc,
                        productPrice:products[i].productPrice,
                        quantity: 1 
                    };
                
                cartArray.push(itemArray);
                Alert="Item added to cart";
            }
        }
        
    }

    //Save all cart product to sessionStorage
    sessionStorage.setItem("items", JSON.stringify(cartArray));
    Alert="Product added to cart";
   
    /*for (let i = 0; i < products.length; i++) {
        if(cartArray == null ){
            alert('Cart is Empty')
        } else {
            products.push(cartArray);
        }
        sessionStorage.setItem("item", JSON.stringify(cartArray[0]));
      
      
    };*/
 
}
function pullinformation(){
    cartArray = JSON.parse(sessionStorage.getItem("items"));
    var cartItems = "";

     for(let i = 0; i < cartArray.length; i++){
        
        cartItems +=` 
        <div class="Cart-Items">
            <div class="image-box">
                <img src="${cartArray[i].imgSrc}"   style="height:120px"/>
            </div>
            <div class="about">
                <h1 class="title">${cartArray[i].productName}</h1>
                <h3 class="subtitle">${cartArray[i].isbn}</h3>
            </div>
            <div class="counter">
                <div class="btn">+</div>
                <div class="count">${cartArray[i].quantity}</div>
                <div class="btn">-</div>
            </div>
            <div class="prices">
                <div class="amount">R ${cartArray[i].productPrice}</div>
                <div class="save"><u>Save for later</u></div>
                <div class="removeBtn"><u>Remove</u></div>
            </div>
        </div>`;
        
    }
    document.getElementById("Cart").innerHTML = cartItems;
}



// pass product co  cart page
















