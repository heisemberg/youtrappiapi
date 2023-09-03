export const searhAll = async(wanted,options) => {
    try {
        /* const [searchResponse] = await Promise.all([
            fetch("../json/searchVideos.json"),
        ]); */
        const [searchResponse] = await Promise.all([
            fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${wanted}&hl=en&gl=US`,options),
        ]);
        
        const videosFound = await searchResponse.json();

        let h = 0, cont = 0;
        let array = videosFound.contents.map((value,id)=>{
            if(value.playlist) return undefined;
            cont++;
            if(cont<=10) h= 30*cont;
            return /*html*/ `<li class="searchVideo" idFound="${value.video.videoId}"><a href="play-video.html">${value.video.title}</a></li>`
        })

        document.querySelector("#active").style.height = `${h}px`;
        document.querySelector("#SearchAll").innerHTML = null;
        document.querySelector("#SearchAll").insertAdjacentHTML("beforeend", array.join(""));
    
        const vidFound = document.querySelectorAll(".searchVideo")
        vidFound.forEach(video => {
        video.addEventListener("click", () => {
        let videoFound = video.getAttribute("idFound")
        localStorage.setItem("ID",videoFound)
        })
        })
    }
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}
