
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
    book3: 'If We Disapper Here',
    book4: 'Strangers Ee know',
    book5: 'At The Quite Edge',
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

           
(function() {
    // VARS
    const productsContainer = document.querySelector("#grid");
    const cartContent = document.querySelector("#cart-content");
    const clearCartBtn = document.querySelector("#clear-cart");
    const checkoutBtn = document.querySelector("#checkout-btn");
    const totalPriceContainer = document.querySelector("#total-price");
  
    // FUNCTIONS
  
  
    function getLSContent() {
      // get contents from local storage.
      // if nothing is there, create an empty array
      const lsContent = JSON.parse(localStorage.getItem("products")) || [];
      return lsContent;
    }
  
    function setLSContent(lsContent) {
      // save content inside local storage
      localStorage.setItem("products", JSON.stringify(lsContent));
    }
  
    function calculateTotal(prices) {
      // calculate the total price in the cart
      return prices.reduce(function(prev, next) {
        return prev + next;
      }, 0);
    }
  
    function getCartItemPrices() {
      // extract the price numbers from the cart items to calculate total
      const prices = [];
      // retrieve the td element in the cart where the product price is stored
      // for each product in the cart
      let nums = cartContent.querySelectorAll("tr td:nth-child(3)");
  
      // iterate over each td node and extract the price
      // strip the $ sign from the text, turn the string into
      // a number and push the number into the prices array
      if (nums.length > 0) {
        for (let cell = 0; cell < nums.length; cell++) {
          let num = nums[cell].innerText;
          num = num.replace(/[^\d]/g, "");
          num = parseFloat(num);
          prices.push(num);
        }
        // return the prices array
        return prices;
      } else {
        return;
      }
    }
  
    function displayCartTotal() {
      // display the total cost in the cart
      const prices = getCartItemPrices();
      let total = 0;
      if (prices) {
        total = calculateTotal(prices);
        totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
          2
        )}</span>`;
      } else {
        totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
      }
    }
  
    function displayProducts() {
      // display all products in the cart
  
      // get contents from local storage
      const lsContent = getLSContent();
      let productMarkup = "";
      // if local storage is not empty, build the
      // cart items markup and the appropriate details
      if (lsContent !== null) {
        for (let product of lsContent) {
          productMarkup += `
            <tr>
            <td><img class="cart-image" src="${product.image}" alt="${
            product.name
          }" width="120"></td>
            <td>
              ${product.name}
            </td>
            <td>${product.price}</td>
            <td><a href="#" data-id="${product.id}" class="remove">X</a></td>
            </tr>
          `;
        }
      } else {
        // if no content is in local storage, alert user
        productMarkup = "Your cart is empty.";
      }
      // add markup to DOM
      cartContent.querySelector(".productBody").innerHTML = productMarkup;
    }
  
    function saveProduct(clickedBtn) {
      // save selected product in local storage and display it in the cart together
  
      // vars
      const productId = clickedBtn.getAttribute("data-target");
      const card = clickedBtn.parentElement.parentElement;
      const cardInfo = clickedBtn.parentElement;
      const prodImage = card.querySelector("productImg").src;
      const prodName = cardInfo.querySelector(".productName").textContent;
      const prodPrice = cardInfo.querySelector(".price").textContent;
  
      let isProductInCart = false;
  
      // get local storage array
      const lsContent = getLSContent();
  
      // to avoid user adds the same course twice, check
      // the product is not in LS already before adding it
      lsContent.forEach(function(product) {
        if (product.id === productId) {
          alert("This course is already in your cart.");
          isProductInCart = true;
        }
      });
  
      // only if the product is not already in the cart,
      // create an object representing selected product info
      // and push it into local storage array
      if (!isProductInCart) {
        lsContent.push({
          id: productId,
          image: prodImage,
          name: prodName,
          price: prodPrice
        });
  
        // add product into into local storage
        setLSContent(lsContent);
        // update the display of courses in the shopping cart
        displayProducts();
      }
    }
  
    function removeProduct(productId) {
      // remove product from cart (and from local storage)
  
      // retrieve list of products from LS
      const lsContent = getLSContent();
  
      // get the index of the product item to remove
      // inside the local storage content array
      let productIndex;
      lsContent.forEach(function(product, i) {
        if (product.id === productId) {
          productIndex = i;
        }
      });
  
      // modify the items in local storage array
      // to remove the selected product item
  
      lsContent.splice(productIndex, 1);
      // update local storage content
      setLSContent(lsContent);
  
      displayProducts();
    }
  
    function clearCart() {
      // clear all products from cart (and local storage)
  
      // retrieve list of products from LS
      const lsContent = getLSContent();
      // empty array in local storage
      lsContent.splice(0, lsContent.length);
      // update local storage
      setLSContent(lsContent);
      // display cart content again
      displayProducts();
    }
  
    function checkout() {
      // checkout: just clear the cart
      // after user confirms the checkout process
      const cartProducts = cartContent.querySelector("productBody").innerHTML;
      if (cartProducts !== "" && confirm("Are you sure you want to checkout?")) {
        clearCart();
      } else {
        return;
      }
    }
  
    // BIND EVENTS AND CALL FUNCTIONS
  
    // Page load:
    document.addEventListener("DOMContentLoaded", function(e) {
      // display list of products in cart, if any, on page load
      displayProducts();
      // display cart total
      displayCartTotal();
    });
  
    // open and close shopping cart
    // when cart button is clicked
    // Save product in cart and Local Storage
    // when add to cart button is clicked
    productsContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("addToCart")) {
        e.preventDefault();
        const clickedBtn = e.target;
        saveProduct(clickedBtn);
      }
    });
  
    productsContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("addToCart")) {
        displayCartTotal();
      }
    });
  
    // bind removeProduct to click event of the cartContent table
    cartContent.querySelector("productBody").addEventListener("click", function(e) {
      e.preventDefault();
      // identify the button that was clicked
      const clickedBtn = e.target;
      // if it's a remove button
      if (e.target.classList.contains("remove")) {
        // get the value of the data-id property, which contains the
        // id of the selected product
        const productId = clickedBtn.getAttribute("data-id");
        // use the id to remove the selected product
        removeProduct(productId);
        // display products in the cart again,
        // now the list should be displayed with 1 less product
        // or empty if no products are left in the cart
  
        // adjust the total
        displayCartTotal();
      }
    });
  
    // bind the button to clear the cart both to the function that
    // clears the cart and to the function that adjusts the total price
    clearCartBtn.addEventListener("click", function(e) {
      e.preventDefault();
      clearCart();
    });
    clearCartBtn.addEventListener("click", displayCartTotal);
  
    // bind the button that does the checkout both to the function that
    // controls the checkout and and to the function that adjusts the total price
    checkoutBtn.addEventListener("click", function(e) {
      e.preventDefault();
      checkout();
    });
    checkoutBtn.addEventListener("click", displayCartTotal);
  })();
  

/*

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


for(let i = 0; i<cart.length; i++){
    cart[i].addEventListener('click', ()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
        bookName(products[i])
        
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
function bookName(product){
    cartBookName = localStorage.setItem('bookName',);
    document.querySelector('.title').textContent="";
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
    document.querySelector("#totalCost").textContent = localStorage.getItem("totalCost");
}

*/

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