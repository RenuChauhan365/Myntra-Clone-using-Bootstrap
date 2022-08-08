
// Set the date we're counting down to
var countDownDate = new Date("sep 5,2022  15:37:25").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  // document.getElementById("countDown").innerText =  hours + "h "
  // + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);

// ====>
// Adding in cart =====>
let shoping_cart = [];
let jsondata = {data:[
  {
    "url" : "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18221376/2022/6/13/d3fb3918-3252-43fe-ada5-19551c455f621655116936553-Louis-Philippe-Sport-Men-Tshirts-2941655116936021-1.jpg",
    "Tname": "color t-shirt",
    "description":"Mast tshirt hai",
    "price":400
  }
  ,
  {
    "url" : "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18221376/2022/6/13/d3fb3918-3252-43fe-ada5-19551c455f621655116936553-Louis-Philippe-Sport-Men-Tshirts-2941655116936021-1.jpg",
    "Tname": "color t-shirt",
    "description":"Mast tshirt hai",
    "price":400
  },
  {
    "url" : "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18221376/2022/6/13/d3fb3918-3252-43fe-ada5-19551c455f621655116936553-Louis-Philippe-Sport-Men-Tshirts-2941655116936021-1.jpg",
    "Tname": "color t-shirt",
    "description":"Mast tshirt hai",
    "price":400
  }
]}

var all_data = '';

jsondata.data.forEach((item , index)=>{
  return all_data += `<div class="tshirt_items">
  <div class="t-shirt_image">
  
    <img 
      src="${item.url}"
      alt=""
    />
    <button onClick="addToCart(${index})" type="button" class="btn btn-outline-light">Add to Cart</button>
  </div>
  <div class="t_shirt_discription">
    <div class="t-shirt_name">
    <span style="display:none">${index+1}</span>
    
      <h6 style="font-weight: 900">${item.Tname}</h6>
    </div>
    <div class="t-shirt_Discription">
      <p>${item.description}</p>
    </div>
    <div class="t-shirt_price">
      <span><strong>Rs ${item.price}</strong></span>
      <span><strike>Rs 700</strike></span>
      <span style="color: red">(40% off)</span>
    </div>
  </div>
`
})


// console.log(all_data);
document.getElementById("t-shirt").innerHTML = all_data;


function addToCart(index){
  
  console.log(index);
  shoping_cart.push(jsondata.data[index])
  addToCartt()
  
}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let cart_data='';
function addToCartt(){
  console.log(cart_data);
shoping_cart.forEach((data , index)=>{
   
   cart_data += `<div class="flex_Cart_item">
   <div class="t-shirt-image">
  <img
    src="${data.url}"
    alt=""
  />
</div>
<div style="margin: 20px 0" class="flex_align">
  <div class="t-shirt_containt">
    <h4>${data.Tname}</h4>
    <p style="margin-bottom: 5px">${data.description}</p>
  </div>
  <div class="rating_button">
    <button>4 | 9.8k Ratings</button>
  </div>
  <hr />
  <div class="t-shirt_price">
    <span><strong>${data.price}</strong></span>
    <span><strike>Rs 700</strike></span>
    <span style="color: red">(40% off)</span>
    <p style="color: green; margin-bottom: 10px">
      <strong>inclusive of all taxes</strong>
    </p>
  </div>
  <div class="size_chart">
    <span style="margin: 10px 10px 10px 0"
      ><strong>SELECT SIZE</strong></span
    >
    <span style="color: red"><strong>SIZE CHART </strong></span>
    <div style="margin: 0 0" class="size">
      <button type="button">S</button>
      <button type="button">M</button>
      <button type="button">L</button>
      <button type="button">XL</button>
      <button type="button">XXL</button>
    </div>
  </div>
  <div class="add_to_bag">
    <button onClick="addToBag(${index})"><img src="./image/bag.svg" alt="" /> Add To Bag</button>
    <button>
      <img src="./image/heart.svg" alt="" /> Add To WishList
    </button>
  </div>
</div>
</div>
<hr>`
});
console.log(cart_data);
// document.getElementById("cart_Box").innerHTML = "hfghfh";=+
localStorage.setItem("myData", cart_data);
}
// document.querySelector("#cart_Box").innerHTML = localStorage.getItem("FirstName");
// document.querySelector(".clickedMe")
