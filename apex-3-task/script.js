const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400"
];

let index = 0;

function nextImage() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index--;
    if(index < 0) {
        index = images.length - 1;
    }
    document.getElementById("slider").src = images[index];
}

function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        document.getElementById("joke").innerHTML =
            data.setup + "<br><br>" + data.punchline;
    });
}