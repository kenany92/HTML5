var audio = document.getElementById('audio');
var artistLabel = document.getElementById('artist');
var musics = [];
var index = 0

document.getElementById('play').addEventListener('click', function(e){
    audio.play();
}, false);

document.getElementById('stop').addEventListener('click', function(e){
    audio.pause();
}, false);

document.getElementById('audio').addEventListener('ended', next, false);

function playMusic(){
    var currentMusic = musics[index];
    audio.src = currentMusic.url;
    artistLabel.innerHTML = currentMusic.artist;
    audio.play();
}

function next(){
    if(index == musics.length - 1){
        index = 0;
    }else{
        index++;
    }
    playMusic();
}

window.onload = function loadMusics() {
    var url = 'js/music.json';
    var xhr = new XMLHttpRequest();

    xhr.overrideMimeType("application/json");
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            musics =  JSON.parse(xhr.response).musics;
            playMusic();
        }
    };
    xhr.send();
}