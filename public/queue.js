let songList;
const getQueuedSongs  = async()=>{
   await fetch("https://piedpiperplayer.herokuapp.com/getAllQueuedSongs")
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
            songList = res
        });
}

function createElement(thumbnail,title,videoId,userName) {
    const insertElementHere = document.getElementById("insertElementHere")

    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("id", "parentDiv");
    parentDiv.className = "parentDiv";
  
    const imageDiv = document.createElement("img");
    imageDiv.setAttribute("id", "imageDiv");
    imageDiv.src = thumbnail;
  
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("id", "infoDiv");
  
    const headerText = document.createElement("h3");
    headerText.setAttribute("id", "headerText");
    headerText.innerText = title;
  
    const addtoPlaylistBtn = document.createElement("button");
    addtoPlaylistBtn.setAttribute("id", "addtoPlaylist");
    addtoPlaylistBtn.innerText = userName;
  
    parentDiv.appendChild(imageDiv);
    parentDiv.appendChild(infoDiv);
    infoDiv.appendChild(headerText);
    infoDiv.appendChild(addtoPlaylistBtn);
    insertElementHere.appendChild(parentDiv);
  
}


// Socket 
var socket = io.connect('https://piedpiperplayer.herokuapp.com/');

socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx

  socket.on("addElementToQueue",(args,userName)=>{
    const {thumbnail,title,videoId} = args;
    createElement(thumbnail,title,videoId,userName)
  });
});