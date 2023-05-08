let navbars = document.querySelector(".navbars");

document.querySelector("#menu-btn").onclick = () => {
  navbars.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbars.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbars.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbars.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

// language
// test
// read more box
function myFunction() {
  var dots = document.getElementById("dots");

  var moreText = document.getElementById("more");

  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
