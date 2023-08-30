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
        videoPlay.insertAdjacentHTML("beforeend", /* html */`
        <iframe height="700px" width="100%" src="https://www.youtube.com/embed/${idVideo}" frameborder="0" allowfullscreen></iframe>
        `)
        const videoSidebar = document.querySelector(".right-sidebar");
        videoSidebar.insertAdjacentHTML("beforeend", /* html */`
        <div class="side-video-list">
            <a href="" class="small-thumbnail"><img src="images/thumbnail1.png"></a>
            <div class="vid-info">
                <a href="">Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
            </div>
        </div>
        `)   
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}




 

  