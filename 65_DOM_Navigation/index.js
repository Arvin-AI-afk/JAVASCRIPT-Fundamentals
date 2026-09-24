// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .children ----------

const element = document.getElementById("fruits");
const children = element.children;


children[1].style.backgroundColor = "yellow";