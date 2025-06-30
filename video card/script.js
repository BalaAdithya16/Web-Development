function Card(title,Cname,views,old,dura,thumbnail) {
    let viwstr
    if(views<1000000){
        viwstr=views/1000+'k';
    }
    let html=`<div class="container">
        <div class="card">
            <div class="img">
            <img src=${thumbnail} alt="Cardimg">
            <div class="time">${dura}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${Cname} • ${viwstr} views • ${old} months</p>
            </div>

        </div>

    </div>`
    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
Card("sigma Adithya video","Adithya",760000,6,"40:00","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA");
