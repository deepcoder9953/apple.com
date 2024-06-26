var productData = JSON.parse(localStorage.getItem("products")) || []
var productData =[
  {
    id: 2,
    title: "MacBook Air 13” and 15” ",
    store: "M2 or M3 chip",
    price: "From ₹99900.00*",
    count: 1,
    description:
      "Strikingly thin and fast so you can work, play or create anywhere.",
    category: "tv",
    image:
      "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",

  },
    {
    id: 2,
    title: "MacBook Pro 14” and 16”",
    store: "M3, M3 Pro or M3 Max chip",
    price: "From ₹169900.00*",
    count: 2,
    description:
      "The most advanced Mac laptops for demanding workflows",
    category: "tv",
    image: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
    
  },
]
localStorage.setItem("products", JSON.stringify(productData));
var productcontainer = document.querySelector("#product")

var productData = JSON.parse(localStorage.getItem("products")) || []

var productContainer =  document.querySelector("#product")
function displayData(data){
  productContainer.innerText=""
    data.forEach(function(ele, index){

        //what to print:image, title, price, buy now

        var div = document.createElement("div")

        var itemImg = document.createElement("img")
        itemImg.setAttribute("src", ele.image)
        
        var itemTitle = document.createElement("h2")
        itemTitle.innerText = ele.title.slice(0, 15)

        var itemdescription = document.createElement("p")
        itemdescription.innerText = ele.description

        var itemstore = document.createElement("p")
        itemstore.innerText = ele.store

        var itemPrice = document.createElement("h4")
        itemPrice.innerText = ele.price

        var btnlearn = document.createElement("button")
        btnlearn.innerHTML = "learn more"

        var buyNowbtn = document.createElement("button")
        buyNowbtn.innerText = "buy.."
        buyNowbtn.addEventListener("click", function(){
          addToCartFun(ele)
        })

        div.append(itemImg, itemTitle,itemstore,itemdescription,itemPrice,  btnlearn,buyNowbtn)

        productContainer.append(div)

    })

}

displayData(productData)


var car = document.querySelector("#slider");
var fistimg = car.querySelectorAll("img")[0]
 var button = document.querySelectorAll("#six>button");
 
 var firstimgwidth = fistimg.clientWidth + 14;

 button.forEach(function(a){
     a.addEventListener("click",function(){
     //     car.scrollLeft += a.id ==="next" ? -firstimgwight:firstimgwight;
     if (a.id === "next") {
         car.scrollLeft += firstimgwidth; // right scroll
     } else {
         car.scrollLeft -= firstimgwidth; // left scroll
     }
 })
})




