export const playVideo = async() => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]);

        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();

        const videoPlay = document.querySelector(".play-video");
        videoPlay.insertAdjacentHTML("beforeend", /* html */`
        <video controls autoplay>
            <source src="images/video.mp4" type="video/mp4">
        </video>
        `)
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
