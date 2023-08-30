export const rightSidebar = async() => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../jsonjson/channelVideos.json"),
            fetch("../json/json/detailsVideos.json")
        ]);

        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();

        const videosList = document.querySelector(".right-sidebar");
        videosList.insertAdjacentHTML("beforeend", /* html */`
        ${videosData.contents.map((value)=> /*html*/ `   
        <div class="side-video-list" idVideo=${value.video.videoId}>
        <a href="" class="small-thumbnail"><img src=${value.video.thumbnails[3].url}></a>
        <div class="vid-info">
            <a href="">${value.video.title}</a>
            <p>${detailsData.title}</p>
            <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
        </div>
        </div>
        `).join("")
        } 
        `)
        const vidList = document.querySelectorAll(".side-video-list")
        vidList.forEach(video => {
        video.addEventListener("click", () => {
        let vidList = video.getAttribute("idVideo")
        localStorage.setItem("ID",vidList)
        })
        })
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
