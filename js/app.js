//change top player header

 const topPlayers = document.getElementById('top-player');
 topPlayers.innerHTML = 'Top Player Board';
 topPlayers.style.color = 'tomato';
   

//blog section

   document.getElementById('top-blog').innerHTML = 'Blogs Section';


// access top players Name .............

const PlayersName = document.getElementsByClassName('player-name');
for(const player of PlayersName){
  player.style.fontSize = "20px";
  player.style.backgroundColor = "rgba(189, 153, 156, 0.8)";
}


// input field..........

document.getElementById('add-btn').addEventListener('click',function(){
    //get input ...
    const inputText = document.getElementById('items-field');
    const inputValue = inputText.value;
    inputText.value = '';

    //set input in li...........

  const li = document.createElement("li"); // whats u want to create..
  li.innerText = inputValue// value

  const liList =  document.getElementById('content-list'); // where is parent...
  liList.appendChild(li); // add child in parent nodes

// error handle......
  
if(inputValue==5){
   const btnDisable = document.getElementById('add-btn').disabled = true;
   
}

});




