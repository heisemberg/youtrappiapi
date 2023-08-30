export const playVideo = async() => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]);
        
        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();
        const idVideo = localStorage.getItem("ID");
       
        const videoPlay = document.querySelector(".play-video");
        
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
        

    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}




 

  