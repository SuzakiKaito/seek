const scrollBtn = document.querySelector(".scrollBtn");
const news = document.getElementById("news");
// const board = document.getElementById("board");

scrollBtn.addEventListener("click",scroll_top);
function scroll_top(){
  window.scroll({top:0,behavior:'smooth'})
}

news.addEventListener("click",news_event);
function news_event() {
  window.scroll({top:750,behavior:'smooth'})
}

