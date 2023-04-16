
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
        title: "Hossana",
        artist : "A.R.Rahman",
    },
    {
        name:"song-2" ,
        title: "Aisa Kyu",
        artist : "Raghav Chaitanya",
    },
    {
        name:"song-3" ,
        title: "Agneepath",
        artist : "AjayAtul",
    },
    {
        name:"song-4" ,
        title: "Shouq Bada",
        artist : "Tripti Dimri",
    },
    {
        name:"song-5" ,
        title: "LuppaChuppi",
        artist : "A.R.Rahman",
    },
    {
        name:"song-6" ,
        title: "Bandeya",
        artist : "Arjit Singh",
    },
    {
        name:"song-7" ,
        title: "Hawa Sa",
        artist : "Shaan",
    },
    {
        name:"song-8" ,
        title: "Bolna",
        artist : "ArjitSingh",
    },
    {
        name:"song-9" ,
        title: "Pasoori",
        artist : "Zulfiqar Khan",
    },
    {
        name:"song-10" ,
        title: "Tune Ja..",
        artist : "Gajendra Varma",
    },
    {
        name:"song-11" ,
        title: "Iktara",
        artist : "Amit Trivedi",
    },
    {
        name:"song-12" ,
        title: "Laree",
        artist : "Wormono",
    },
    {
        name:"song-13" ,
        title: "Naina",
        artist : "ArjitSingh",
    },
    {
        name:"song-14" ,
        title: "Samjhawa",
        artist : "ArjitSingh",
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