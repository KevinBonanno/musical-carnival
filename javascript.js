var meme = []

meme[0] = "<iframe src='https://giphy.com/embed/tsVLVcTRKb54mvRS4z'>";
meme[1] = "<iframe src='https://giphy.com/embed/BcAB7TmA4hJflMObwR'>";
meme[2] = "<iframe src='https://giphy.com/embed/3olFpXDTYY60NLxF5B'>";
meme[3] = "<iframe src='https://giphy.com/embed/8qFS8ZXSSiMotzNC0P'>";

function Generate() {
    var randomMeme = Math.floor(Math.random() * (meme.length));
    document.getElementById('pmeme').innerHTML = meme[randomMeme];
}

var audio = []

audio[0] = "<iframe src='https://drive.google.com/file/d/1gUdOrZTGuBLbKFrnEQkGEQEjyCF1vciV/preview'>";


function Play() {
    var randomAudio = Math.floor(Math.random() * (audio.length));
    document.getElementById('paudio').innerHTML = audio[randomAudio];

}
