
export let vidList = async() =>{
    let peticion = await fetch("../json/channelVideos.json");
    let res1 = await peticion.json();
    let peticion2 = await fetch("../json/detailsVideos.json");
    let res2 = await peticion2.json();
  
    let videosList = document.querySelector(".list-container");
    videosList.insertAdjacentHTML("beforeend", /* html */`
    ${res1.contents.map((value)=> /*html*/ `   
    <div class="vid-list">
        <a href="play-video.html"><img class="thumbnail" src="${value.video.thumbnails[3].url}" alt=""></a>
        <div class="flex-div">
            <img src="${res2.avatar[0].url}" alt="">
            <div class="vid-info">
                <a href="play-video.html">${value.video.title}</a>
                <p>${res2.title}</p>
                <p>${value.video.stats.views} Views &bull; ${value.video.publishedTimeText}</p>
            </div>
        </div>
    </div>
    `).join("")}
    `)
}
  
  
