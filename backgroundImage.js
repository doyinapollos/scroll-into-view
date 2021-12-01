let images = [
    "https://newscentral.africa/wp-content/uploads/Arik-Air-Declares-Operations-Safe-Refutes-Lawyers-Claim-News-Central-TV.jpg",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/09E6/production/_93043520_a0bcb946-0e59-48ea-b45c-ebc965c30334.jpg",
    "https://nairametrics.com/wp-content/uploads/2018/10/Arik-Air.jpg",
    "https://nigerianprice.com/wp-content/uploads/2018/08/arik-flight-from-port-harcourt-to-lagos.png",
    "https://guardian.ng/wp-content/uploads/2018/02/IMG_20180221_120808-e1519712191967-1062x598.jpg",
    "https://persecondnews.com/wp-content/uploads/2021/09/Arik-air.jpg"
];

function setBackground(images, section6) {
    setInterval(function() {
        var index = Math.floor(Math.random() * images.length);
        var target = document.querySelector("#section6");
        target.style.backgroundImage = "url(" + images[index] + ")";

    }, 5000);
}
setBackground(images, section6);