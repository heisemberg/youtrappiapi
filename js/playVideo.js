export const playVideo = async(options) => {
    try {
        /* const [videosResponse, detailsResponse] = await Promise.all([
            fetch("../json/channelVideos.json"),
            fetch("../json/detailsVideos.json")
        ]); */
         const [videosResponse, detailsResponse] = await Promise.all([
            fetch("https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options),
            fetch("https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US",options)
        ]);
        
        const idVideo = localStorage.getItem("ID");
        const videosData = await videosResponse.json();
        const detailsData = await detailsResponse.json();
        const videoPlay = document.querySelector(".play-video");

        const foundVideo = videosData.contents.find(content => content.video.videoId === idVideo);

        if (foundVideo) {
            const videoTitle = foundVideo.video.title;
            const views = foundVideo.video.stats.views;
            const publishedTimeText = foundVideo.video.publishedTimeText;

        videoPlay.insertAdjacentHTML("beforeend", /* html */`
        <iframe height="700px" width="100%" src="https://www.youtube.com/embed/${idVideo}" frameborder="0" allowfullscreen></iframe>
        <div class="tags">
            <a href="">#Coding</a> <a href="">#Html</a> <a href="">#Css</a> <a href="">#JavaScript</a>
        </div>
        <h3>${videoTitle}</h3>
        <div class="play-video-info">
            <p>${views} Views &bull; ${publishedTimeText}</p>
            <div>
                <a href=""><img src="images/like.png">125</a>
                <a href=""><img src="images/dislike.png">2</a>
                <a href=""><img src="images/share.png">Share</a>
                <a href=""><img src="images/save.png">Save</a>
            </div>
        </div>
        <hr>
        <div class="publisher">
                <img src=${detailsData.avatar[0].url}>
                <div>
                    <p>${detailsData.title}</p>
                    <span>${detailsData.stats.subscribers}k Subscribers</span>
                </div>
                <button type="button">Subscribe</button>
            </div>
            <div class="vid-description">
                <p>${detailsData.description}</p>
                
                <hr>
                <h4>134 Comments</h4>
                <div class="add-comment">
                    <img src="images/Jack.png">
                    <input type="text" placeholder="Write Comments...">
                </div>
                <div class="old-comment">
                    <img src="images/Jack.png">
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>A global computer network providing a variety od information and communication facilities,
                            consisting of interconnected networks using standardized communication protocols.</p>
                        </p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png">
                            <span>2</span>
                            <span>REPLY</span>
                            <a href="">ALL Replies</a>
                        </div>
                    </div>
                </div>
                <div class="old-comment">
                    <img src="images/Jack.png">
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>A global computer network providing a variety od information and communication facilities,
                            consisting of interconnected networks using standardized communication protocols.</p>
                        </p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png">
                            <span>2</span>
                            <span>REPLY</span>
                            <a href="">ALL Replies</a>
                        </div>
                    </div>
                </div>
                <div class="old-comment">
                    <img src="images/Jack.png">
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>A global computer network providing a variety od information and communication facilities,
                            consisting of interconnected networks using standardized communication protocols.</p>
                        </p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png">
                            <span>2</span>
                            <span>REPLY</span>
                            <a href="">ALL Replies</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
         } else {
            console.log(`No se encontró ningún video con idVideo ${idVideo}`);
        }
    }
  
    catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}




 

  