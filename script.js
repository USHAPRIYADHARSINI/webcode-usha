// cerating a mock card with the same values as from the makeup api
const product= {
    "brand": "colourpop",
    "name": "Lippie Pencil",
    "price": "5.0",
    "price_sign": "$",
    "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
    "product_link": "https://colourpop.com/collections/lippie-pencil",
    "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
}

// creating an array of mock card

const allproducts=[
    {
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
    },
    {
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
    },
    {
        "brand": "colourpop",
        "name": "Lippie Pencil",
        "price": "5.0",
        "price_sign": "$",
        "image_link": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
        "product_link": "https://colourpop.com/collections/lippie-pencil",
        "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!"
    }
    
]

// creating things in the page

document.body.innerHTML=`<section>
<h1 class="heading">Welcome to makeup api</h1>
<div class="search">
<label for="search">Search your favourite here : </label>
<input type="search" oninput=searchproduct() id="search"></div></section>
<section class="makeupproducts"></section>
<section></section>`

//a function to get all the cards 

function callproducts(allproducts){
    allproducts.forEach((product) => {
        document.querySelector(".makeupproducts").innerHTML += `<div class="card">
        <img class="picture" src=${product.image_link}>
        <div class="info">
            <h2>Brand: ${product.brand}</h2>
            <h4>Product: ${product.name}</h4>
            <div class="price">
                <h4>Price: ${product.price, product.price_sign} </h4>
            </div>
            <p class="description"><strong>Description: </strong><span>${product.description}</span></P>
            <p><strong>Product link: </strong><a href=${product.product_link}</a></p>
        </div>
    </div>`
    });
    }

//  to fetch data from the api and display it in the page

async function loadlist(){
    // document.querySelector(".namelistc").innerHTML=``;
    try{
    var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json",{
    method:"GET"
})
    var data1 = await data.json()
    callproducts(data1);
}catch(err){
    console.log("oops! Error occured");
}
}
// file is loading for a long time , might be bcoz of the size
// calling the function to display

loadlist();

//  a function for search operation

async function searchproduct(){ 
    document.querySelector(".namelistc").innerHTML=``;
    var input= document.getElementById("#search").value
    console.log("Searching user...");
    try{
    var fetchdata = await fetch("https://632161fcfd698dfa29f6a334.mockapi.io/users",{
        method: "GET"
    })
    var data= fetchdata
    .filter((e)=>input==e);
    console.log(data);
    }catch(err)
        {console.log("error occured in search")};
}