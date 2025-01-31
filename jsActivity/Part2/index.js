// Add close buttons to existing list items
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

const listItem = document.getElementById("item");

function addElementToList() {
    const new_Element = document.createElement("li");
    let inputValue = document.getElementById("enterTask").value;
    let input_text = document.createTextNode(inputValue);
    new_Element.appendChild(input_text);
    console.log(input_text);

    // Add checkbox before the text
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    new_Element.prepend(checkbox);

    // Append new list item to <ol>
    document.querySelector("ol").appendChild(new_Element);

    // Clear input field after adding task
    document.getElementById("enterTask").value = "";

    // Add close button
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7"); // '×' close symbol
    span.className = "close";
    span.appendChild(txt);
    new_Element.appendChild(span);

    // Add event listener to remove task when clicking the close button
    span.onclick = function() {
        new_Element.style.display = "none";
    };
}

// Attach event listener to the "ADD" button
document.querySelector(".button").addEventListener("click", addElementToList);
