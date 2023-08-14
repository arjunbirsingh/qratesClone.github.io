const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mobile: { breakpoint: 0 },
});
var x,y,check;
let mousetrail=document.querySelector("#mousetrail");
function mousetrailMover(){
  x=event.clientX;
  y=event.clientY;
  mousetrail.style.top=`${y}px`;
  mousetrail.style.left=`${x}px`;
  // check=`${y}px`;
}
document.addEventListener("mousemove",mousetrailMover);
let body = document.body;
let toggle = 0;
function showList() {
  let list = event.target.id;
  let ptag = document.querySelector(`#${list} p`);
  console.log(ptag);
  ptag.classList.toggle("show");
}
let pageChangerInCont6 = document.querySelector(".pageChanger");
let guyInCont6 = document.querySelector(".cont6 #guy");
let blablaInCont6 = document.querySelector(".cont6 #blabla");
let linkInCont6 = document.querySelector(".cont6 #link");
let clickable1InCont6 = document.querySelector("#clickable1");
let clickable2InCont6 = document.querySelector("#clickable2");
function clickable1InCont6Clicked() {
  clickable1InCont6.classList.toggle("bgblack");
  pageChangerInCont6.style.backgroundColor = "rgb(255, 248, 4)";
  clickable2InCont6.classList.toggle("bgblack");
  guyInCont6.setAttribute(
    "src",
    (src =
      "https://images.prismic.io/qrates-prd/88610884-3509-4baa-aeb0-a49ed0c8300b_artist_sol.jpg?auto=compress,format")
  );
  console.log("clicable 1");
}
function clickable2InCont6Clicked() {
  clickable2InCont6.classList.toggle("bgblack");
  clickable1InCont6.classList.toggle("bgblack");
  guyInCont6.setAttribute(
    "src",
    (src =
      "https://images.prismic.io/qrates-prd/86e9c6a8-3732-41a8-82e3-c63d3f97b45f_artist_mason.jpg?auto=compress,format")
  );
  pageChangerInCont6.style.backgroundColor = "orangered";
  console.log("clickable 2");
}
