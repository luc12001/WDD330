
const links = [{ label: "Week 1 notes", url: "/WDD330/Week1/index.html"}, 
                { label: "Week 2 notes", url: "/WDD330/Week2/index.html"},
                { label: "Week 3 notes", url: "/WDD330/Week3/index.html"},
                { label: "Week 4 notes", url: "/WDD330/Week4/index.html"},
                { label: "Week 5 notes", url: "/WDD330/Week5/index.html"},
                { label: "Week 6 notes", url: "/WDD330/Week6/index.html"}];

                let list = document.getElementById("links");

links.forEach((item) => {

    let li = document.createElement("li");
    list.appendChild(li);
    let label = document.createElement("a");
    label.setAttribute("href", item.url);
    label.innerHTML = item.label; 
    li.appendChild(label);
    
});

