//change top player header

 const topPlayers = document.getElementById('top-player').innerHTML = 'Top Player Board';
   document.getElementById('top-player').style.color = 'red';

/* document.getElementById('top-player').addEventListener('click',function() {

const topPlayer = document.getElementById('top-player').innerHTML = 'Top';
topPlayer.style.color="red";

}) */

// top players list............

document.getElementById('players-card').style.backgroundColor= "rgba(2,200,300,100)";


// function function1() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("Four"));
//     ul.appendChild(li);
//   }


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
  
if(inputValue == 5){
   const btnDisable = document.getElementById('add-btn').disabled = true;
   btnDisable.style.color ='muted';
}

})




