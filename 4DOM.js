
const container = document.querySelector(".container")
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");



// console.log(heading3.previousElementSibling);

// heading1.innerHTML = "heading changed"

// heading2.style.color = "red"

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);
// document.getElementById("container").appendChild(para);



const heading = document.querySelector('#heading')
const button = document.querySelector('#textChange')
// console.log(heading.innerHTML);
button.addEventListener('click', () => {
    setTimeout(() => {
        heading.innerHTML = 'RENDER WORKSHOP'
    }, 3000)
})