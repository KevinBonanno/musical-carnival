/*eslint-env browser*/
var dancesArray = [];

dancesArray[0] = "<iframe src='https://giphy.com/embed/tsVLVcTRKb54mvRS4z'>";
dancesArray[1] = "<iframe src='https://giphy.com/embed/BcAB7TmA4hJflMObwR'>";
dancesArray[2] = "<iframe src='https://giphy.com/embed/3olFpXDTYY60NLxF5B'>";
dancesArray[3] = "<iframe src='https://giphy.com/embed/8qFS8ZXSSiMotzNC0P'>";
dancesArray[4] = "<iframe src='https://giphy.com/embed/7FgZeNcxdL8URqQi2X'>";
dancesArray[5] = "<iframe src='https://giphy.com/embed/bqGaIoo2sN6KparUwM'>";
dancesArray[6] = "<iframe src='https://giphy.com/embed/1o1fMfYGvnibozOTjn'>";
dancesArray[7] = "<iframe src='https://giphy.com/embed/pcJQpEUNwyn6LtxtPO'>";
dancesArray[8] = "<iframe src='https://i.imgur.com/QNMX1rE.gif'>";
dancesArray[9] = "<iframe src='https://i.imgur.com/K6xpy.gif'>";
dancesArray[10] = "<iframe src='https://i.imgur.com/zLSuk.gif'>";
dancesArray[11] = "<iframe src='https://i.imgur.com/J2Plx2D.gif'>";

function PlayVideo() {
    var randomMeme = Math.floor(Math.random() * (dancesArray.length));
    document.getElementById('pmeme').innerHTML = dancesArray[randomMeme];
}

var audioArray = [];

audioArray[0] = "Butterflies by Kacey Musgraves<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1UZ38ucPo92_nHNJ6z6obHKdKXwrr2Wql' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1UZ38ucPo92_nHNJ6z6obHKdKXwrr2Wql' type='audio/mpeg'>;</audio>";
audioArray[1] = "Dreams by Fleetwood Mac<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1d14k1JmSw8J5yLp_qmmJfEA4tfz3aVHQ' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1d14k1JmSw8J5yLp_qmmJfEA4tfz3aVHQ' type='audio/mpeg'>;</audio>";
audioArray[2] = "Everyday by Weyes Blood<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1mmQUwObKt1R66xiZf1WcM6P56GdGSbq3' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1mmQUwObKt1R66xiZf1WcM6P56GdGSbq3' type='audio/mpeg'>;</audio>";
audioArray[3] = "High by the Beach by Lana Del Rey<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1fLSjFXpIZSGjRNnKx9KJ5crNm_1F2mt2' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1fLSjFXpIZSGjRNnKx9KJ5crNm_1F2mt2' type='audio/mpeg'>;</audio>";
audioArray[4] = "It's too late by Carole King<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=19tAkzUI040XfK7G2zaeuNjmvCtM2ofG9' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=19tAkzUI040XfK7G2zaeuNjmvCtM2ofG9' type='audio/mpeg'>;</audio>";
audioArray[5] = "Easy Easy by King Krule<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1BW3Y1eOepaNq0a4XBtHVpeVIwyyQh0zg' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1BW3Y1eOepaNq0a4XBtHVpeVIwyyQh0zg' type='audio/mpeg'>;</audio>";
audioArray[6] = "Chamber of Reflection by Mac Demarco<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=1btfx8eGhkriZauJkHB21iAi5NNPJEoar' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=1btfx8eGhkriZauJkHB21iAi5NNPJEoar' type='audio/mpeg'>;</audio>";
audioArray[7] = "Death with Dignity by Sufjan Stevens<audio autoplay loop><iframe src='https://drive.google.com/uc?export=view&id=184CnBLtJiRhjuRIgg9DwZv-7hl4Gtubt' type='audio/ogg'>;<iframe src='https://drive.google.com/uc?export=view&id=184CnBLtJiRhjuRIgg9DwZv-7hl4Gtubt' type='audio/mpeg'>;</audio>";


function PlayAudio() {
    var randomAudio = Math.floor(Math.random() * (audioArray.length));
    document.getElementById('paudio').innerHTML = audioArray[randomAudio];

}
