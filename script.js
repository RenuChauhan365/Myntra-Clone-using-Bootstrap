// Set the date we're counting down to

var countDownDate = new Date("sep 5,2022  15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countDown").innerText =
    hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);


// Adding in cart =====>
let shoping_cart = [];

let jsondata = {
  data: [
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18221376/2022/6/13/d3fb3918-3252-43fe-ada5-19551c455f621655116936553-Louis-Philippe-Sport-Men-Tshirts-2941655116936021-1.jpg",
      Tname: "Louis Philippe Sport",
      description: "Men Solid Polo Coller T-shirt",
      price: 766,
      actualPrice: 1299,
      offRate: 41 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10939048/2020/1/30/fc83c8e3-27ed-46d6-b539-444b683b48e61580372663614-Roadster-Men-Mustard-Solid-Round-Neck-T-shirt-63915803726623-1.jpg",
      Tname: "Roadster",
      description: "mean solid round neck pure Cotton",
      price: 400,
      actualPrice: 800,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
      Tname: " Huetrap",
      description: "Typography printed T shirt",
      price: 300,
      actualPrice: 600,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18762136/2022/6/29/6fbf52c7-6438-491c-92ee-4da69a7939971656501567738-Louis-Philippe-Sport-Men-Teal-Polo-Collar-Slim-Fit-T-shirt-4-1.jpg",
      Tname: " Louis Philippe sport",
      description: " men Polo collar t-shirt ",
      price: 800,
      actualPrice: 1200,
      offRate: 40 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2275336/2021/11/10/9d98163d-83f6-4bca-875d-88bb539e1a071636534889039-Roadster-Men-Maroon-Slub-Effect-Printed-Round-Neck-T-shirt-8-1.jpg",
      Tname: "Roadster",
      description: " slub effect printed pure cotton",
      price: 239,
      actualPrice: 599,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg",
      Tname: "Urbano fashion",
      description: "slim tropical printed pure cotton",
      price: 461,
      actualPrice: 1099,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg",
      Tname: "Dellineger",
      description: "Striped cotton  pure cotton t-shirt",
      price: 575,
      actualPrice: 1199,
      offRate: 52 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10941384/2020/2/13/9447a845-892a-49f5-91ee-4de8a6589a541581587257528-Roadster-Men-Tshirts-8221581587255142-1.jpg",
      Tname: "Hrx by Hrithik Roshan",
      description: " Rapid dry training t-shirt",
      price: 439,
      actualPrice: 1099,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17240498/2022/3/16/0dcb84cb-f142-4770-80cd-617bc0fb26011647414184409-DILLINGER-Men-Tshirts-3341647414183886-1.jpg",
      Tname: "Hrx by Hrithik Roshan",
      description: "Rapid dry training t-shirt",
      price: 800,
      actualPrice: 00,
      offRate: 41 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8972451/2020/12/14/b52164c6-bed8-49ef-9974-eceb7ad3823f1607942574460-Kook-N-Keech-Marvel-Men-Black-Marvel-Printed-Round-Neck-T-sh-1.jpg",
      Tname: "Austin wood",
      description: "Striped Polo collar t-shirt",
      price: 509,
      actualPrice: 1499,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2314451/2018/5/24/7e14d698-6a1d-41ab-a348-9af9a87e8f2e1527137304977-HRX-by-Hrithik-Roshan-Men-Black-Solid-High-Neck-T-shirt-8511527137303720-1.jpg",
      Tname: "Dillinger",
      description: "Men printed t-shirt",
      price: 573,
      actualPrice: 1399,
      offRate: 59 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2471500/2018/2/9/11518159758071-FIDO-DIDO-Men-Tshirts-9591518159757862-1.jpg",
      Tname: "Kook and Keech Marvel",
      description: "Printed round neck pure cotton t-shirt",
      price: 374,
      actualPrice: 749,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2303701/2019/3/7/dcb5e566-c7ab-4e0e-bdfb-66d93d7932901551949925470-Roadster-Men-Navy-Blue-Printed-Round-Neck-T-shirt-1471551949-1.jpg",
      Tname: "Hrx by Hrithik Roshan",
      description: "High neck T-shirt",
      price: 599,
      actualPrice: 1499,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17427820/2022/7/4/f44190a1-01c9-4ab2-b6e3-836478ba81841656912187964-US-Polo-Assn-Men-Tshirts-6601656912187487-1.jpg",
      Tname: "FODO DIDO",
      description: "Polo collar t-shirt",
      price: 649,
      actualPrice: 1499,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17125894/2022/2/10/da12dec8-cfc6-43bc-a397-5b1123883a5c1644515513808SlimFitPatternedpoloshirt1.jpg",
      Tname: "Roadster",
      description: "Versity cotton T shirt",
      price: 279,
      actualPrice: 699,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17240500/2022/3/16/8d26fc00-f657-46e0-b70d-196b314695a81647414193821-DILLINGER-Men-Tshirts-4531647414193371-1.jpg",
      Tname: " US Polo Assn",
      description: "Men colour blocked Polo collar t-shiry",
      price: 1800,
      actualPrice: 2100,
      offRate: 20 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
      Tname: "H&M",
      description: "Slim fit patterned Polo shirt",
      price: 799,
      actualPrice: 999,
      offRate: 20 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15551394/2022/1/19/8a6b6ca7-6433-4f23-90f3-8ee089e187181642591802607-U-S-Polo-Assn-Men-Yellow--Blue-Brand-Logo-Printed-Polo-Colla-1.jpg",
      Tname: "DILLINGER",
      description: "Men printed loose T-shirt",
      price: 523,
      actualPrice: 1399,
      offRate: 59 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16517636/2021/12/14/8ae69866-e6c2-41a2-a6f6-5bcefedb40c21639494203298THEMILLIONCLUBMenGreenPoloCollarAppliqueT-shirt1.jpg",
      Tname: "Roadster",
      description: "Versity cotton t-shirt",
      price: 279,
      actualPrice: 699,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17605686/2022/4/25/8b886997-4f7a-4cd6-bd5e-4b6efa44844f1650887052066-Difference-of-Opinion-Men-Tshirts-9201650887051682-1.jpg",
      Tname: "US Polo Assn",
      description: "Men colour blocked Polo collar t-shirt",
      price: 1899,
      actualPrice: 2100,
      offRate: 20 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11126646/2020/6/12/03aeb062-1bad-44ea-bc1e-c718b1b03fb61591947267002-Roadster-Men-Tshirts-6601591947265651-1.jpg",
      Tname: "Roadster",
      description: " Polo collar cotton pure cotton t-shirt",
      price: 449,
      actualPrice: 899,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12120770/2020/11/6/e77a8fb1-1990-479a-ac45-d041d21f47701604665086332RoadsterMenBlackWhiteRegularFitCheckedCasualShirtJeansRoadst1.jpg",
      Tname: "Roadster",
      description: "Solid round neck t-shirt",
      price: 399,
      actualPrice: 999,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg",
      Tname: "Campus Sutra",
      description: "Colourblocked pure cotton t-shirt",
      price: 699,
      actualPrice: 949,
      offRate: "Rs" + 250,
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18992812/2022/7/24/960b8022-078b-48e7-a04d-a12a835792021658643692062ONNMenPeach-ColouredPoloCollarT-shirtshortsleeves1.jpg",
      Tname: "Roadster",
      description: "Cotton printed graphic t-shirt",
      price: 279,
      actualPrice: 699,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8938267/2022/2/25/ee168554-4e24-4917-9905-84b780586cc51645766479661-Roadster-Men-Grey-Melange-Varsity-Graphic-T-shirt-9281645766-1.jpg",
      Tname: "ONN",
      description: "Men Polo collar t-shirt",
      price: 575,
      actualPrice: 1115,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4149416/2019/1/24/8e898367-dd14-48e8-8ed0-670a3a9021e31548330809856-Mast--Harbour-Men-White-Striped-Polo-Collar-T-shirt-40915483-1.jpg",
      Tname: "Mast and Harbour",
      description: "Striped Polo collar T-shirt",
      price: 519,
      actualPrice: 1299,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11443762/2022/4/18/73607448-942f-400e-9b8c-16220a162da31650283553428JockeyMenWhiteSuperCombedCottonT-shirt1.jpg",
      Tname: "Jockey",
      description: "Super combat cotton t-shirt",
      price: 499,
      actualPrice: 1000,
      offRate: 50 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12120770/2020/11/6/e77a8fb1-1990-479a-ac45-d041d21f47701604665086332RoadsterMenBlackWhiteRegularFitCheckedCasualShirtJeansRoadst1.jpg",
      Tname: "Roadster",
      description: "Solid round neck t-shirt",
      price: 399,
      actualPrice: 999,
      offRate: 60 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1371410/2016/8/31/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
      Tname: "H&M",
      description: "Slim fit patterned Polo shirt",
      price: 799,
      actualPrice: 999,
      offRate: 20 + "% off",
    },
    {
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17427820/2022/7/4/f44190a1-01c9-4ab2-b6e3-836478ba81841656912187964-US-Polo-Assn-Men-Tshirts-6601656912187487-1.jpg",
      Tname: "FODO DIDO",
      description: "Polo collar t-shirt",
      price: 649,
      actualPrice: 1499,
      offRate: 50 + "% off",
    },
  ],
};



function onChange(){
  let sortData = document.getElementById("Price").value;
  //  alert("heyshyam")
  
  // console.log(sortData);
  if(sortData=="0"){
    // console.log("if ", typeof sortData);
    // alert(sortData);
    return jsondata.data.sort((a , b)=> a.price - b.price);
  }else{
    
    // alert(sortData);
   return jsondata.data.sort((a , b)=> b.price - a.price);

}
}
//  console.log(sortData);

// if(sortData==low){}
let html = `<div class="row">`;

jsondata.data.forEach((item, index) => {
  let card = ` 
  <div class="col-sm-2 ">
    <div class="card" style="width: 200px; height: 440px" >
      <img src="${item.url}" class="card-img-top" alt="..." height="250px">
      <div id="layer">
        <button onClick="addToCart(${index})" type="button" id="liveToastBtn" class="btn btn-outline-light">Add to Cart</button>
      </div>
        <div class="card-body">
            <h5 class="card-title">${item.Tname}</h5>
            <p>${item.description}</p>
            <span><strong>Rs ${item.price}</strong></span>
            <span><strike>Rs ${item.actualPrice}</strike></span>
            <span style="color: red">(${item.offRate})</span>
          
        </div>
    </div>
   </div>
    `;
  //  html = `<div class="row">`
  index += 1;
  html += card;
  // console.log(index);
  if (index !== 0 && index % 6 === 0) {
    html += `</div><div class="row">`;
    // console.log("shyam");
  }
});

document.getElementById("t-shirt").innerHTML = html;

// console.log(all_data);

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
function addToCart(index) {
  // console.log(index);
  shoping_cart.push(jsondata.data[index]);
  addToCartt();

  // Tosting =======>
  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let cart_data = "";
function addToCartt() {
  shoping_cart.forEach((data, index) => {
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
    <hr>`;
  });

  localStorage.setItem("myData", cart_data);
}
