
let quotes = ['Sorry Currently Don\'t any Prediction\'s Right Now. Please Come Back Later','People\'s lives do not end when they die. It ends when they lose faith', 'Teachings that do not speak of pain have no meaning, for humankind cannot gain anything in return','If you want to know who you are, you have to look at your real self and acknowledge what you see', 'You don\'t become the Hokage to be acknowledged by everyone. The one who is acknowledged by everyone becomes the Hokage.', 'Even the strongest of opponents always has a weakness.','It’s foolish to fear what we have yet to see and know.','It is not wise to judge others based on your own preconceptions and by their apperances.', 'Time doesn\'t heal anything, it just teaches us how to live with pain.'];
var answer = document.getElementById("answer");
var question = document.getElementById("yo");


     





function Quote() {
    if (question.value == "") {
    answer.innerText = "You have not asked a question."
}else{
    god();
}
function changeImage() {
    var image = document.getElementById("");
    if (image.src.match("bulbon")) {
      image.src = "https://cdn.discordapp.com/attachments/898333320688074824/917827782820642826/maxresdefaultedited.png";
    } else {
      image.src = "https://i.ytimg.com/vi/vk0rg6Kt3PQ/maxresdefault.jpg";
    }
  }



}

function god() {
const randomNumber = Math.floor(Math.random() *8);

switch(randomNumber){
    case 0:
        console.log('0')
        answer.innerText = quotes[0];
        break;
    case 1:
        console.log('1')
        answer.innerText = quotes[1]
        break;
    case 2:
        console.log('2')
        answer.innerText = quotes[2]
        break;
    case 3:
        console.log('3')
        answer.innerText = quotes[3] 
        break;
    case 4:
        console.log('4')
        answer.innerText = quotes[4]
        break;
    case 5:
        console.log('5')
        answer.innerText = quotes[5]
    case 6:
        console.log('6')
        answer.innerText = quotes[6]
        break
    case 7:
        console.log('7')        
        answer.innerText = quotes[6]
        break
    case 8:
        console.log('8')
        answer.innerText = quotes[6]
        break

}
}
``