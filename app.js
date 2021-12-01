let readId = [{
    id: 1,
    name: "Home"
}, {
    id: 2,
    name: "GTBank"
}, {
    id: 3,
    name: "Samsung"
}, {
    id: 4,
    name: "Bolt"
}, {
    id: 5,
    name: "Chicken Republic"
}, {
    id: 6,
    name: "Arik Air"
}];
let ul = document.getElementById("header-ul-1");

function createItems() {
    for (let i = 0; i < readId.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("id", readId[i].id)
        li.innerHTML = readId[i].name;

        ul.appendChild(li);
    }
}
createItems();

let list = document.querySelectorAll('li');

list.forEach(function(link) {
    link.addEventListener("click", function() {
        list.forEach(linker => linker.classList.remove("active"));
        this.classList.add("active");

    })
})

let sectionOne = document.querySelector("#section1");
let sectionTwo = document.querySelector("#section2");
let sectionThree = document.querySelector("#section3");
let sectionFour = document.querySelector("#section4");
let sectionFive = document.querySelector("#section5");
let sectionSix = document.querySelector("#section6");

list.forEach(function(item) {
    list[0].addEventListener("click", function() {
        sectionOne.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
    list[1].addEventListener("click", function() {
        sectionTwo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
    list[2].addEventListener("click", function() {
        sectionThree.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
    list[3].addEventListener("click", function() {
        sectionFour.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
    list[4].addEventListener("click", function() {
        sectionFive.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })

    list[5].addEventListener("click", function() {
        sectionSix.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
})

let tofooter = document.querySelector("#tofooter")
tofooter.addEventListener("click", footerPage);

function footerPage() {
    footer.scrollIntoView({
        behavior: "smooth"
    })
}