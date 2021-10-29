// Thank you to this article https://steve-condylios.medium.com/how-to-change-the-speed-of-a-facebook-video-bb09346d15b9

const videos = document.getElementsByTagName("video");

for(var i = 0; i < videos.length; i++){
    videos[i].playbackRate = 2;
}
