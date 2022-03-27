function goBeserk(){

    // for starting the confetti 

       const start = () => {
           setTimeout(function() {
               confetti.start()
           }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
       };

       //  for stopping the confetti 
       const stop = () => {
           setTimeout(function() {
               confetti.stop()
           }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
       };
       // after this here we are calling both the function so it works
       start();
       stop();

       
       offer();
       insertBKImg();
       mvgCloud();
}

function offer(){
    
       let btn = document.getElementById("myBtn");

       //  buttonText.innerText("WE ACCEPT!!")
       
       btn.value = 'my value'; // will just add a hidden value
       btn.innerHTML = `<h1 class="innerHTML">WE ACCEPT!!<h1>`;
}

function insertBKImg(){
    let bkImg = document.getElementById("bkImg");
    bkImg.value = "backImage Space"
    bkImg.innerHTML = `<img class="bkImg" src='assets/bkImg.png'></img>`;
   
}

function mvgCloud() {
    let mvgCloudImg = document.getElementById("cloudImg");
    mvgCloudImg.innerHTML = `<img class="movingCloud" src="assets/FinalCloudDraft.png"></img>`;

}

