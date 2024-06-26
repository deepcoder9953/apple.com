var productData = JSON.parse(localStorage.getItem("products")) || []
var productData =[
  {
    id: 2,
    title: "Studio Display” ",
    price: "₹159900.00*",
    count: 1,
    description:
      "A 5K Retina display with stellar camera and audio.",
    category: "tv",
    image:
      "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png",

  },


  {
    id: 2,
    title: "Pro Display XDR”",
    price: "From ₹449900.00",
    count: 2,
    description:
      "An advanced 6K XDR display for pro workflows.",
    category: "tv",
    image: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png",
    
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

        var itemPrice = document.createElement("h4")
        itemPrice.innerText = ele.price

        var btnlearn = document.createElement("button")
        btnlearn.innerHTML = "learn more"

        var buyNowbtn = document.createElement("button")
        buyNowbtn.innerText = "buy.."
       
        div.append(itemImg, itemTitle,itemdescription,itemPrice,  btnlearn,buyNowbtn)
        productContainer.append(div)
    })

}

displayData(productData)