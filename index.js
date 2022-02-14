import Mercury from "@postlight/mercury-parser";

const url = "https://trackchanges.postlight.com/building-awesome-cms-f034344d8ed";
Mercury.parse(url).then(result => console.log(result));

/*let gradeCount = 0;
let sources = [];
let knownOutlets = {
    "cnn.com": 2,
    "reuters.com": 3,
    "bbc.com": 1
}

function grade(result) {
    foreach(outlet in knownOutlets){
        if result.url.includes(outlet){
            gradeCount += outlet.value;
        }
    }
}

function getLinks(result) {
    let x = result.querySelectorAll("a");
    let sources = []
    for (var i = 0; i < x.length; i++) {
        var nametext = x[i].textContent;
        var cleantext = nametext.replace(/\s+/g, ' ').trim();
        var cleanlink = x[i].href;
        myarray.push([cleantext, cleanlink]);
    };
}*/