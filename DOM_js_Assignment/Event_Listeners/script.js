//  Onclick
let clickCount = 0;
document.getElementById("clickBtn").onclick = function () {
  clickCount++;
  document.getElementById("clickCount").innerText = clickCount;
};

//  Doubleclick
document.getElementById("colorBox").ondblclick = function () {
  this.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
};

// onMouseOver & onMouseOut
const img = document.getElementById("hoverImg");
img.onmouseover = function () {
  img.style.width = "200px";
};
img.onmouseout = function () {
  img.style.width = "100px";
};

// onKeyPress
document.getElementById("keypressInput").onkeypress = function (event) {
  document.getElementById("keyPressed").innerText = event.key;
};

// keydown-keyup
document.addEventListener("keydown", function() {
    document.getElementById("keyBox").style.backgroundColor = "lightblue";
});
document.addEventListener("keyup", function() {
    document.getElementById("keyBox").style.backgroundColor = "aqua";
});

