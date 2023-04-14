
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name:"song-1" ,
        title: "Kesariya",
        artist : "Arjit Singh",
    },
    {
        name:"song-2" ,
        title: "Soch na Sake",
        artist : "Hardi Sindhu",
    },
    {
        name:"song-3" ,
        title: " Bewadon ka",
        artist : "Ragiv Raja",
    },
    {
        name:"song-4" ,
        title: "Jo din Dhup",
        artist : "Rito Riba",
    },
    {
        name:"song-5" ,
        title: "Dil Janiye",
        artist : "Jubin Nautiyal",
    },
    {
        name:"song-6" ,
        title: "Main Teri",
        artist : "Milind Gaba",
    },
    {
        name:"song-7" ,
        title: "Mere Liye",
        artist : "Akhil Sachdev",
    },
    {
        name:"song-8" ,
        title: "Wallian",
        artist : "Harnoor",
    },
]


let isPlaying = false;

const  playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("anime");
};


const pauseMusic = () => {
    music.pause();
    isPlaying = false;
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () =>  {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})


//change music

 const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "songs/" + songs.name + ".mp3";
    
 };

 songIndex = 0;

 const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 }

 const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
 }

 next.addEventListener("click", nextSong);
 prev.addEventListener("click", prevSong);