/*eslint-env browser*/
var dancesArray = [];

dancesArray[0] = "<iframe src='https://giphy.com/embed/tsVLVcTRKb54mvRS4z'>";
dancesArray[1] = "<iframe src='https://giphy.com/embed/BcAB7TmA4hJflMObwR'>";
dancesArray[2] = "<iframe src='https://giphy.com/embed/3olFpXDTYY60NLxF5B'>";
dancesArray[3] = "<iframe src='https://giphy.com/embed/8qFS8ZXSSiMotzNC0P'>";

function PlayVideo() {
    var randomMeme = Math.floor(Math.random() * (dancesArray.length));
    document.getElementById('pmeme').innerHTML = dancesArray[randomMeme];
}

var audioArray = [];

audioArray[0] = "<iframe src='https://drive.google.com/file/d/1gUdOrZTGuBLbKFrnEQkGEQEjyCF1vciV/preview'>";


function PlayAudio() {
    var randomAudio = Math.floor(Math.random() * (audioArray.length));
    document.getElementById('paudio').innerHTML = audioArray[randomAudio];

}
