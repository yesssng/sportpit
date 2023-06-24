const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
      id: 1,
      title: "PROTEIN",
      price: "13990₸",
      colors: [
        {
          code: "turquoise",
          img: "/IMAGES/protein3.png",
          desc: "AWDHDHADHWADUA",
        },
        {
          code: "skyblue",
          img: "/IMAGES/protein2.png",
          desc: "EFIJOEFJEOF",
        },
        {
          code: "red",
          img: "/IMAGES/protein1.png",
          desc: "DEDEDE",
        },
      ],
    },
    {
      id: 2,
      title: "GAINER",
      price: "16590₸",
      colors: [
        {
          code: "black",
          img: "/IMAGES/gainer3.png",
          desc: "21u312jiewqoiejqw",
        },
        {
          code: "red",
          img: "/IMAGES/gainer2.png",
          desc: "21873192731298321",
        },
        {
          code: "purple",
          img: "/IMAGES/gainer1.png",
          desc: "EDJEDJIDJ",
        },
      ],
    },
    {
      id: 3,
      title: "CREATINE",
      price: "18490₸",
      colors: [
        {
          code: "yellow",
          img: "/IMAGES/creatine3.png",
        },
        {
          code: "red",
          img: "/IMAGES/creatine2.png",
        },
        {
          code: "green",
          img: "/IMAGES/creatine1.png",
        },
      ],
    },
    {
      id: 4,
      title: "VITAMINS",
      price: "6240₸",
      colors: [
        {
          code: "skyblue",
          img: "/IMAGES/vitamins3.png",
        },
        {
          code: "darkblue",
          img: "/IMAGES/vitamins2.png",
        },
        {
          code: "blue",
          img: "/IMAGES/vitamins1.png",
        },
      ],
    },
    {
      id: 5,
      title: "BCAA",
      price: "14790₸",
      colors: [
        {
          code: "blue",
          img: "/IMAGES/bcaa3.png",
        },
        {
          code: "black",
          img: "/IMAGES/bcaa2.png",
        },
        {
          code: "green",
          img: "/IMAGES/bcaa1.png",
      },
    ],
  },
];


let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentColor = document.querySelectorAll(".color");
const currentSize = document.querySelectorAll(".size");

menuItems.forEach((item,imdex)=>{
    item.addEventListener("click", ()=>{
       wrapper.style.transform = `translateX(${-100 * imdex}vw)`;

       choosenProduct = products[imdex]

       currentproductTitle.textContent = choosenProduct.title
       currentproductPrice.textContent = choosenProduct.price
       currentProductImg.src = choosenProduct.colors[0].img

       currentColor.forEach((color,imdex)=>{
        color.style.backgroundColor = choosenProduct.colors[imdex].code
       })
    });
});


currentColor.forEach((color, imdex)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[imdex].img
  })
})


currentSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentSize.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "lightgreen";
    });
    size.style.backgroundColor = "lightgreen";
    size.style.color = "white";
  });
});

let acordions = document.querySelectorAll(".acordionwrapper .acordion");
acordions.forEach((acor) => {
    acor.onclick =() => {
        acordions.forEach((subcontents) => {
            subcontents.classList.remove("active");
        })
        acor.classList.add("active");
    };
});



