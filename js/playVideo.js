export const playVideo = async() => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]);
        
        const idVideo = localStorage.getItem("ID");
        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();
        const videoPlay = document.querySelector(".play-video");

        const foundVideo = videosData.contents.find(content => content.video.videoId === idVideo);

        if (foundVideo) {
            const videoTitle = foundVideo.video.title;

        videoPlay.insertAdjacentHTML("beforeend", /* html */`
        <iframe height="700px" width="100%" src="https://www.youtube.com/embed/${idVideo}" frameborder="0" allowfullscreen></iframe>
        <div class="tags">
            <a href="">#Coding</a> <a href="">#Html</a> <a href="">#Css</a> <a href="">#JavaScript</a>
        </div>
        <h3>${videoTitle}</h3>
        <div class="play-video-info">
            <p>1225 Views &bull; 2 days ago</p>
            <div>
                <a href=""><img src="images/like.png">125</a>
                <a href=""><img src="images/dislike.png">2</a>
                <a href=""><img src="images/share.png">Share</a>
                <a href=""><img src="images/save.png">Save</a>
            </div>
        </div>
        <hr>
        `)
         } else {
            console.log(`No se encontró ningún video con idVideo ${idVideo}`);
        }
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}




 

  