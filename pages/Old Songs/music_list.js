
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
        title: "Bahar Banke",
        artist : "Udit Narayan",
    },
    {
        name:"song-2" ,
        title: "De De Pyar",
        artist : "Tarique Aziz",
    },
    {
        name:"song-3" ,
        title: "Dekha Ek",
        artist : "Kishore Kumar",
    },
    {
        name:"song-4" ,
        title: "Ek Din Aap",
        artist : "Alka Yagnik",
    },
    {
        name:"song-5" ,
        title: "Ek Sanam",
        artist : "Kumar Sanu",
    },
    {
        name:"song-6" ,
        title: "Kehadoon Tum..",
        artist : "Aasha Bhosale",
    },
    {
        name:"song-7" ,
        title: "Pyar Ki..",
        artist : "Lata Mangeshkar",
    },
    {
        name:"song-8" ,
        title: "Mere Sa..",
        artist : "Kishore Kumar",
    },
    {
        name:"song-9" ,
        title: "Yara Teri",
        artist : "Kishore Kumar",
    },
    {
        name:"song-10" ,
        title: "Tune O..",
        artist : "R.D.Burman",
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