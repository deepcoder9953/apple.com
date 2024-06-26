// const images = ["./img/macbook.jpeg","./img/mackbook2.jpeg","./img/111.png", "./img/112.png","./img/113.png","./img/114.png","./img/115.png","./img/116.png","./img/117.png","./img/118.png","./img/119.png","./img/110.png","./img/1111.png","./img/1112.png","./img/1113.png","./img/1114.png","./img/1115.png","./img/1116.png","./img/1117.png","./img/1118.png","./img/1119.png","./img/120000.png","./img/1121.png","./img/1122.png","./img/1123.png","./img/1124.png","./img/1125.png","./img/1126.png","./img/1127.png","./img/1128.png","./img/1129.png","./img/1130.png","./img/1131.png","./img/1132.png","./img/1133.png","./img/1134.png","./img/1135.png","./img/1135a.png","./img/1137.png","./img/1138.png","./img/1139.png","./img/1140.png","./img/1141.png","./img/1142.png","./img/1143.png","./img/1144.png","./img/1145.png","./img/1146.png","./img/1147.png","./img/1148.png","./img/1149.png","./img/1150.png","./img/1151.png","./img/1152.png","./img/1153.png","./img/1154.png","./img/1155.png","./img/1156.png","./img/1157.png","./img/1158.png",]; // Add your image paths here
let currentIndex = 0;

const imgElement= document.querySelector("#second>div");
 
// let lastScrollTop = 0;
// document.addEventListener("scroll", function(scrollTop) {
//     if (scrollTop > lastScrollTop) {
//         changeImage("up");
//     } else {
//         changeImage("down");
//     }
// });

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
            changeImage("down");
    } else if (event.key === "ArrowDown"){
        changeImage("up");
    }
});



// function changeImage(direction) {    
//     if (direction === "up") {
//         currentIndex--;
//         if (currentIndex < 0) {
//             currentIndex = imgElement.length-1;
//         }
//         imgElement.classList.add("animate-up");
//     } else if (direction === "down") {
//         currentIndex++
//         if (currentIndex >= img.length) {
//             currentIndex = 0;
//         }
//         img.classList.add("animate-down");
//     }
    
    for(i=0;i<imgElement.length;i++){
        imgElement[i].style.display = "none"
    }
    imgElement[a-1].style.display = "block"
    
    setTimeout(() => {
        imgElement.src = images[currentIndex];
    }, 500); // Wait for the animation to complete
}
