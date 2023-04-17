
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
        title: "Love Ma..",
        artist : "ArjitSingh",
    },
    {
        name:"song-2" ,
        title: "Nazam..",
        artist : "Aayushman",
    },
    {
        name:"song-3" ,
        title: "Feel..🧡",
        artist : "Atif Aslam",
    },
    {
        name:"song-4" ,
        title: "Nigh..🎷🎶",
        artist : "Arjit&..",
    },
    {
        name:"song-5" ,
        title: "Janu..",
        artist : "KishoreKumar",
    },
    {
        name:"song-6" ,
        title: "KabirSi..",
        artist : "Sachet Tandon",
    },
    {
        name:"song-7" ,
        title: "Badam",
        artist : "Bhuwan",
    },
    {
        name:"song-8" ,
        title: "Khalnayak",
        artist : "Balram",
    },
    {
        name:"song-9" ,
        title: "Marathi🧡",
        artist : "KokanSinger",
    },
    {
        name:"song-10" ,
        title: "FEEL💖",
        artist : "No One",
    },
    {
        name:"song-11" ,
        title: "Mashup💔",
        artist : "AtifAslam",
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