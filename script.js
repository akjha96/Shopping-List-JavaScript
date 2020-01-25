var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function emptyInput() {
  input.value = "";
}

function cleanInput() {
  return input.value.trim();
}

function cleanInputLength() {
  return cleanInput().length;
}

function createListElement() {
  var li = document.createElement("li");
  li.addEventListener("click", markdown);
  li.appendChild(document.createTextNode(cleanInput()));
  li.innerHTML = li.innerHTML + " ";
  ul.appendChild(li);

  input.value = "";

  // create delete btn
  var delbtn = document.createElement("i");
  delbtn.classList.add("fa", "fa-trash", "orient");

  // delbtn.appendChild(document.createTextNode(" Delete"));
  li.appendChild(delbtn);
  delbtn.addEventListener("click", deleteListItem);
  li.removeChild(br);

  function deleteListItem() {
    this.parentNode.remove();
  }
  // func to strike  through
  function markdown() {
    this.classList.toggle("done");
  }
}

function addEventAfterClick() {
  if (cleanInputLength() !== 0) {
    createListElement();
  } else {
    emptyInput();
  }
}

function addEventAfterKeypress(event) {
  if (cleanInputLength() !== 0 && event.keyCode === 13) {
    createListElement();
  } else {
    if (event.keyCode === 13) {
      emptyInput();
    }
  }
}

button.addEventListener("click", addEventAfterClick);

input.addEventListener("keypress", addEventAfterKeypress);

//  trying exercise

// const li = document.getElementsByTagName("li");

// ul.onclick = function(event) {
//   var target = event.target;
//   target.classList.toggle("done");
// };
