export const vidList = async() => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]);

        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();

        const videosList = document.querySelector(".list-container");
        const vidList = document.querySelector(".vid-list");
        videosList.insertAdjacentHTML("beforeend", /* html */`
        ${videosData.contents.map((value)=> /*html*/ `   
        <div class="vid-list" idVideo=${value.video.videoId}>
            <a href="play-video.html"><img class="thumbnail" src="${value.video.thumbnails[3].url}" alt=""></a>
            <div class="flex-div">
                <img src="${detailsData.avatar[0].url}" alt="">
                <div class="vid-info">
                    <a href="play-video.html">${value.video.title}</a>
                    <p>${detailsData.title}</p>
                    <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
                </div>
            </div>
        </div>
        `).join("")
        } 
        `)
        vidList.addEventListener("click", function(event) {
            const clickedItem = event.target;
    
            if (clickedItem) {
                const id = localStorage.idVideo
            }
        }
        )
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
