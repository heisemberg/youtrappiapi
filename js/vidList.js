export const vidList = async(options) => {
    try {
        const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]);

       /*  const [videosResponse, detailsResponse] = await Promise.all([
            fetch("https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options),
            fetch("https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options)
        ]); */

        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();

        const videosList = document.querySelector(".list-container");
        videosList.insertAdjacentHTML("beforeend", /* html */`
        ${videosData.contents.map((value)=> /*html*/ `   
        <div class="vid-list" idVideo=${value.video.videoId}>
            <a href="play-video.html"><img class="thumbnail" src="${value.video.thumbnails[3].url}" alt=""></a>
            <div class="flex-div">
                <img src="${detailsData.avatar[0].url}">
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
        const banner = document.querySelector(".banner");
        banner.insertAdjacentHTML("beforeend", /* html */`
        <img src="${detailsData.banner.desktop[5].url}">
        `)

        const vidList = document.querySelectorAll(".vid-list")
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

