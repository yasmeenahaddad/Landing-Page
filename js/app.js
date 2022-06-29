// Create Navbar
var navigation = document.createElement("div");
// navigation.classList.add("navbar", "show");
navigation.classList.add("navbar");

// Create div.container
let container = document.createElement("div");
container.classList.add("container");

// Create Page Header
let heading = document.createElement("h1");
heading.setAttribute("id","header");
heading.textContent = "landing page";

// Add Header to Container
container.appendChild(heading);

// Create div.sections
const sections = document.createElement("div");
sections.setAttribute("id", "sections");
const ulists = document.createElement("ul");

for (let i = 1; i <= 4; i++) {
    // Create Sections Loop
    let section = document.createElement("section");
    let headers = document.createElement("h3");
    let paragraph = document.createElement("p");
    headers.textContent = "section " + i;
    let lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam repellendus non, eum neque tempora dolores veniam veritatis, animi dignissimos eligendi exercitationem ratione ab, magnam distinctio autem deleniti eveniet qui perferendis? ";
    for (let x = 0; x < 10; x++) {
        paragraph.textContent += lorem;
    }
    section.appendChild(headers);
    section.appendChild(paragraph);
    section.setAttribute("id","s"+i);
    sections.appendChild(section);


    // Create Unordered List Loop
    let lists = document.createElement("li");
    let anchors = document.createElement("a");
    anchors.setAttribute("href","#s"+i);
    anchors.setAttribute("id","a"+i);
    anchors.textContent = "section " + i;
    lists.appendChild(anchors);
    ulists.appendChild(lists);
}
container.appendChild(sections);
navigation.appendChild(ulists);


// Add Elements to body
document.body.appendChild(navigation);
document.body.appendChild(container);

// Button Scroll to Top
let button = document.createElement("button");
button.textContent = "scroll to top";
button.classList.add("button");
document.body.appendChild(button);
button.addEventListener("click", function () {
    window.scroll(0,0);
});

// Sections Variables
let sec1 = document.getElementById("s1"),
    sec2 = document.getElementById("s2"),
    sec3 = document.getElementById("s3"),
    sec4 = document.getElementById("s4");
// Anchors Variables
let a1 = document.getElementById("a1"),
    a2 = document.getElementById("a2"),
    a3 = document.getElementById("a3"),
    a4 = document.getElementById("a4");

// Active Anchors
a1.addEventListener("click", function () {
    // Anchors Conditions
    if (a1.classList !== "active-link") {
        a1.classList.add("active-link");
        if (a2.classList == "active-link") {
            a2.classList.remove("active-link");
        } else if (a3.classList == "active-link") {
            a3.classList.remove("active-link");
        } else if (a4.classList == "active-link") {
            a4.classList.remove("active-link");
        };
    };
    // Section Conditions
    if (sec1.classList !== "active") {
        sec1.classList.add("active");
        if (sec2.classList == "active") {
            sec2.classList.remove("active");
        } else if (sec3.classList == "active") {
            sec3.classList.remove("active");
        } else if (sec4.classList == "active") {
            sec4.classList.remove("active");
        };
    };
});
a2.addEventListener("click", function () {
    // Anchors Conditions
    if (a2.classList !== "active-link") {
        a2.classList.add("active-link");
        sec2.classList.add("active");
        if (a1.classList == "active-link") {
            a1.classList.remove("active-link");
        } else if (a3.classList == "active-link") {
            a3.classList.remove("active-link");
        } else if (a4.classList == "active-link") {
            a4.classList.remove("active-link");
        };
    };
    // Section Conditions
    if (sec2.classList !== "active") {
        sec2.classList.add("active");
        if (sec1.classList == "active") {
            sec1.classList.remove("active");
        } else if (sec3.classList == "active") {
            sec3.classList.remove("active");
        } else if (sec4.classList == "active") {
            sec4.classList.remove("active");
        };
    };
});
a3.addEventListener("click", function () {
    // Anchors Conditions
    if (a3.classList !== "active-link") {
        a3.classList.add("active-link");
        if (a1.classList == "active-link") {
        a1.classList.remove("active-link");
        } else if (a2.classList == "active-link") {
            a2.classList.remove("active-link");
        } else if (a4.classList == "active-link") {
            a4.classList.remove("active-link");
        };
    };
    // Section Conditions
    if (sec3.classList !== "active") {
        sec3.classList.add("active");
        if (sec1.classList == "active") {
            sec1.classList.remove("active");
        } else if (sec2.classList == "active") {
            sec2.classList.remove("active");
        } else if (sec4.classList == "active") {
            sec4.classList.remove("active");
        };
    };
});
a4.addEventListener("click", function () {
    // Anchors Conditions
    if (a4.classList !== "active-link") {
        a4.classList.add("active-link");
        if (a1.classList == "active-link") {
            a1.classList.remove("active-link");
        } else if (a2.classList == "active-link") {
            a2.classList.remove("active-link");
        } else if (a3.classList == "active-link") {
            a3.classList.remove("active-link");
        };
    };
    // Section Conditions
    if (sec4.classList !== "active") {
        sec4.classList.add("active");
        if (sec1.classList == "active") {
            sec1.classList.remove("active");
        } else if (sec2.classList == "active") {
            sec2.classList.remove("active");
        } else if (sec3.classList == "active") {
            sec3.classList.remove("active");
        };
    };
});

// Navigation Hidden Function
function hide() {
    if (navigation.hasAttribute("class", "show")) {
        setTimeout(function () {
            navigation.classList.remove("show");
        }, 10000);
    };
};
// Navigation Show Function
function show() {
    navigation.classList.add("show");
};

// Scroll Event
document.addEventListener("scroll", function () {
    // Navigation setTimeout
    show();

    // Button Show
    (window.innerHeight > sec3.getBoundingClientRect().bottom) ? button.classList.add("show") : button.classList.remove("show");

    if (sec1.getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Anchors Conditions
        if (a1.classList !== "active-link") {
            a1.classList.add("active-link");
            if (a2.classList == "active-link") {
                a2.classList.remove("active-link");
            } else if (a3.classList == "active-link") {
                a3.classList.remove("active-link");
            } else if (a4.classList == "active-link") {
                a4.classList.remove("active-link");
            };
        };
        // Section Conditions
        if (sec1.classList !== "active") {
            sec1.classList.add("active");
            if (sec2.classList == "active") {
                sec2.classList.remove("active");
            } else if (sec3.classList == "active") {
                sec3.classList.remove("active");
            } else if (sec4.classList == "active") {
                sec4.classList.remove("active");
            };
        };
    };
    // Section 2
    if (sec2.getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Anchors Conditions
        if (a2.classList !== "active-link") {
            a2.classList.add("active-link");
            sec2.classList.add("active");
            if (a1.classList == "active-link") {
                a1.classList.remove("active-link");
            } else if (a3.classList == "active-link") {
                a3.classList.remove("active-link");
            } else if (a4.classList == "active-link") {
                a4.classList.remove("active-link");
            };
        };
        // Section Conditions
        if (sec2.classList !== "active") {
            sec2.classList.add("active");
            if (sec1.classList == "active") {
                sec1.classList.remove("active");
            } else if (sec3.classList == "active") {
                sec3.classList.remove("active");
            } else if (sec4.classList == "active") {
                sec4.classList.remove("active");
            };
        };
    };
    // Section 3
    if (sec3.getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Anchors Conditions
        if (a3.classList !== "active-link") {
            a3.classList.add("active-link");
            if (a1.classList == "active-link") {
            a1.classList.remove("active-link");
            } else if (a2.classList == "active-link") {
                a2.classList.remove("active-link");
            } else if (a4.classList == "active-link") {
                a4.classList.remove("active-link");
            };
        };
        // Section Conditions
        if (sec3.classList !== "active") {
            sec3.classList.add("active");
            if (sec1.classList == "active") {
                sec1.classList.remove("active");
            } else if (sec2.classList == "active") {
                sec2.classList.remove("active");
            } else if (sec4.classList == "active") {
                sec4.classList.remove("active");
            };
        };
    };
    // Section 4
    if (sec4.getBoundingClientRect().y <= (window.innerHeight / 2)) {
        // Anchors Conditions
        if (a4.classList !== "active-link") {
            a4.classList.add("active-link");
            if (a1.classList == "active-link") {
                a1.classList.remove("active-link");
            } else if (a2.classList == "active-link") {
                a2.classList.remove("active-link");
            } else if (a3.classList == "active-link") {
                a3.classList.remove("active-link");
            };
        };
        // Section Conditions
        if (sec4.classList !== "active") {
            sec4.classList.add("active");
            if (sec1.classList == "active") {
                sec1.classList.remove("active");
            } else if (sec2.classList == "active") {
                sec2.classList.remove("active");
            } else if (sec3.classList == "active") {
                sec3.classList.remove("active");
            };
        };
    };

    // Navigation Hide Timeout
    hide();
});