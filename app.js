// const imgs = [{ img: "img/1.jpg"},{ img: "img/2.jpg"},{ img: "img/3.jpg"},{ img: "img/4.jpg"},
// { img: "img/5.jpg"},{ img: "img/6.jpg"},{ img: "img/7.jpg"},{ img: "img/8.jpg"},{ img: "img/9.jpg"},
// { img: "img/10.jpg"},{ img: "img/11.jpg"},{ img: "img/12.jpg"},{ img: "img/13.jpg"},{ img: "img/14.jpg"},
// { img: "img/15.jpg"},{ img: "img/16.jpg"},];

const imgs = ["img/1.jpg", "img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];
// console.log(imgs);
// console.log(imgs[0]);



let photo = document.getElementById("images");
let counter = 0;

function changeFunction(){
      counter ++;
    photo.src = imgs[counter];
    photo.width = "300";
    photo.height = "300";

    if(counter >= imgs.length){
        counter = 0; 
    }
};


