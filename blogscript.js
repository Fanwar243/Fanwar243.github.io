//NAVBAR RESPONSIVE DESIGN AND EXPAND
function openNav() {
    /*const x = window.matchMedia("screen and (max-device-width: 900px)")
    if (x.matches) {
        document.getElementById("nav").style.width = "100%";
    }*/
    document.getElementById("nav").style.width = "100%";
    document.getElementById("openbtn").style.display = "None";
}

//COLLAPSES NAVBAR AND SHOWS EXPAND BUTTON
function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("openbtn").style.display = "Block";
}

//STICKY NAVBAR
window.onscroll = function() {stickynav()};

const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

function stickynav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

//EXPAND AND COLLAPSE ARTICLE TEXT
//add condition: if length of p > x, then hide automatically
function expand() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");

    dots.style.display = "none";
    moreText.style.display = "inline";
}

function collapse() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    moreText.style.display = "none";
    dots.style.display = "inline";
}

//DARK MODE

let inDarkMode = false;

function darkmode() {
    if (!inDarkMode) {
        inDarkMode = true;

        document.getElementById("darkmode").innerHTML = "🌣";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#121212";
        document.getElementsByTagName("body")[0].style.color = "white";

        headings = Array.from(document.getElementsByTagName("h2"));
        headings.forEach((heading) => {
            heading.style.opacity = "80%";
        });

        subheadings = Array.from(document.getElementsByTagName("h4"));
        subheadings.forEach((subheading) => {
            subheading.style.opacity = "60%";
        })

        text = Array.from(document.getElementsByTagName("p"));
        text.forEach((element) => {
            element.style.opacity = "50%";
        });

        lists = Array.from(document.getElementsByTagName("ul"));
        lists.forEach((element) => {
            element.style.opacity = "50%";
        })

        //document.getElementById("nav").style.backgroundColor = "#121212";
        document.getElementById("links").style.backgroundColor = "#303030";
        document.getElementById("links").style.boxShadow = "none";

        document.getElementById("openbtn").style.color = "white";
        document.getElementById("openbtn").style.opacity = "70%";

        try {
            document.getElementById("reading").style.backgroundColor = "#424242";
        } catch(e) {
            //do nothing
        }

        document.getElementsByTagName("footer")[0].style.backgroundColor = "#303030";
        document.getElementsByTagName("footer")[0].style.opacity = "50%";
    } else {
        inDarkMode = false;

        document.getElementById("darkmode").innerHTML = "☾";
        document.getElementsByTagName("body")[0].style.backgroundColor = "#F4EBD0";
        document.getElementsByTagName("body")[0].style.color = "#122620";
        headings.forEach((heading) => {
            heading.style.opacity = "100%";
        });
        text.forEach((paragraph) => {
            paragraph.style.opacity = "100%";
        });
        lists.forEach((list) => {
            list.style.opacity = "100%";
        })
        
        //document.getElementById("nav").style.backgroundColor = "#F4EBD0";
        document.getElementById("links").style.backgroundColor = "#D6AD60";
        document.getElementById("links").style.boxShadow = "2px 2px 8px 2px grey";

        document.getElementById("openbtn").style.color = "#D6AD60";
        document.getElementById("openbtn").style.opacity = "100%";

        try {
            document.getElementById("reading").style.backgroundColor = "tan";
        } catch(e) {
            //do nothing
        }

        document.getElementsByTagName("footer")[0].style.backgroundColor = "#D6AD60";
        document.getElementsByTagName("footer")[0].style.opacity = "100%";
    }   
}

//BOOK LOG 

const updateList = () => {
    let ol = document.getElementById("readingList");
    let bookName = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;

    if (bookName !== "") {
        if (author !== "") {
            ol.innerHTML += `<li><i>${bookName}</i> by ${author}</li>`;
        } else {
            ol.innerHTML += `<li><i>${bookName}</i>`;
        }
    }
    
}