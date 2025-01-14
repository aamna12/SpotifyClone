let songIndex=0;

let audioElement=new Audio("songs/The-Weeknd-Timeless-ft-Playboi-Carti-(HipHopKit.com).mp3.crdownload");

let masterPlay=document.getElementById("master-play");

let progressBar=document.getElementById("play-bar");

let gif=document.getElementById("gif");

let songname=document.getElementsByClassName("song-name");

let songItems=Array.from(document.getElementsByClassName("song-item"));

const songsList=[
    {
        songName:"Timeless",
        filePath:"songs/The-Weeknd-Timeless-ft-Playboi-Carti-(HipHopKit.com).mp3.crdownload",
        coverPath:"covers/images.jpg"
    },
    {
        songName:"Reminder",
        filePath:"songs/The Weeknd - Reminder.mp3",
        coverPath:"covers/download.jpg"
    },
    {
        songName:"Starboy",
        filePath:"songs/The Weeknd - Starboy (official) ft. Daft Punk.mp3",
        coverPath:"covers/ab67616d0000b2734718e2b124f79258be7bc452.jpg"
    },
    {
        songName:"Die For You",
        filePath:"songs/Die-For-You(PagalNew.Com.Se).mp3",
        coverPath:"covers/ab67616d0000b2734718e2b124f79258be7bc452.jpg"
    },
    {
        songName:"One of the Girls",
        filePath:"songs/One-Of-The-Girls(PagalNew.Com.Se).mp3",
        coverPath:"covers/ab67616d00001e02b0dd6a5cd1dec96c4119c262.jpg"
    },

]

masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log("time update");
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

audioElement.addEventListener("change",()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songsList[i].coverPath;
    element.getElementsByClassName("song-name")[0].innerText=songsList[i].songName;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("song-item-play")).forEach((element)=>{
        element.classList.add("fa-pause");
        element.classList.add("fa-play");
    })
}

Array.from(document.getElementsByClassName("song-item-play")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songname.innerText=songsList[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src=`${songsList[songIndex].filePath}`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    })
})

document.getElementById("next").addEventListener("click",(element)=>{
    if (songIndex>=0){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`${songsList[songIndex-1].filePath}`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})

document.getElementById("prev").addEventListener("click",(element)=>{
    if (songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`${songsList[songIndex-1].filePath}`;
    songname.innerText=songsList[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})



