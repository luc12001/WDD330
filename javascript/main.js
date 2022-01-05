
const links = [{
    label: "Week1 notes",
    url: "WDD330/Week 1/index.html"
    
}];
let list = document.getElementById("links");

links.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});

