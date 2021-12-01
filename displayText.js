let text = [
    "Accept payments anywhere",
    "Grow your business with Flutterwave.",
    "Issue cards, create new businesses.",
    "Safety and security guaranteed.",
    "Get started now to grow your business."
];

function displayText(text, section1para1) {
    setInterval(function() {
        var index = Math.floor(Math.random() * text.length);
        var target = document.querySelector("#section1para1");
        target.innerText = text[index];
        target.style.marginLeft = "30px";

    }, 5000);
}
displayText(text, section1para1);