
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
        title: "Navyane Ath..",
        artist : "Aarya Ambekar",
    },
    {
        name:"song-2" ,
        title: "Chand Tu..",
        artist : "Swapnil Bandodkar",
    },
    {
        name:"song-3" ,
        title: "Hrudayat Vaje..",
        artist : "Vishwjeet Joshi",
    },
    {
        name:"song-4" ,
        title: "Kakan",
        artist : "Kranti  Redkar",
    },
    {
        name:"song-5" ,
        title: "Kevdyach Pan",
        artist : "Ajay Gogavale",
    },
    {
        name:"song-6" ,
        title: "Mala Ved..",
        artist : "Ketaki,Swapnil",
    },
    {
        name:"song-7" ,
        title: "Payee fufa..",
        artist : "Ajay Atul",
    },
    {
        name:"song-8" ,
        title: "Saaj Hyo",
        artist : "Bhaurao Karhade",
    },
    {
        name:"song-9" ,
        title: "Sairat",
        artist : "Ajay Atul",
    },
    {
        name:"song-10" ,
        title: "Fandry",
        artist : "Ajay Gogavale",
    },
    {
        name:"song-11" ,
        title: "Prarthana",
        artist : "Ajit Parab",
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