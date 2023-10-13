
document.addEventListener("DOMContentLoaded", function() {

  const star = document.querySelector(".star")
  // const btn = document.querySelector(".btn")


  
  
  // 画像を入れ替える関数を定義
  function changeImage() {
      // 現在の画像のURLを取得
      const currentImageSrc = star.src;

      // 新しい画像のURLを設定（ここでは仮に別の画像のURLを指定）
      const newImageSrc = "./img/star2.svg";

      // 画像を入れ替える
      star.src = newImageSrc;
      star.alt = "";
  }
  star.addEventListener("click", changeImage);
});