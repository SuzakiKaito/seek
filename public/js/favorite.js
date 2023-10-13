const text = document.querySelectorAll(".box h2");
const image = document.querySelectorAll("img");
const Box = document.querySelectorAll(".box");
const Name = document.getElementById("name")
// console.log(text,image,Box);
// const textValue = "赤";
// const filterValue = [];

Name.addEventListener("input",function(){
  console.log("focus");
  let textResult = [].filter.call(text, function(elem){
    // console.log(elem.innerText, Name.value);
    // return elem.innerText == Name.value
    console.log((new RegExp(Name.value)))
    return (new RegExp(Name.value)).test(elem.innerText)
  });

  if( textResult.length >= 1) {
    text.forEach(function(elem){
      const wrapper = elem.closest(".box");
      wrapper.style.display = "none"
      // elem.style.backgroundColor = "blue"
    });
    textResult.forEach(function(elem) {
      const wrapper = elem.closest(".box");
      wrapper.style.display = "block"
      // elem.style.backgroundColor = "tomato"
    })
  }
  console.log(textResult);
})

// console.log(filterValue);
