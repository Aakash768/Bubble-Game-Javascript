
function bubble() {
    var clutter = "";

    for (i = 1; i <= 70; i++) {
        var random_num = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random_num}
                </div>`;

    }
    document.querySelector(".game-section").innerHTML = clutter;


}
var timer = 15;
function runtimer(){
    setInterval(function (){

        if (timer>0){

        timer--;
        document.getElementById("timer-box").textContent = timer;
        }
        else{
            clearInterval(timer);
            document.querySelector(".game-section").innerHTML = `<h2>Game Over </h2>`;

        }

    }, 1000);
}

var hit_random = 0;
function hit (){
    hit_random = Math.floor(Math.random()*10);
    document.getElementById("hit-box").innerHTML = hit_random;

}

var score_n = 0;
function score(){
    score_n += 10;
    document.getElementById("score-box").innerHTML = score_n
}



function num_hit(){
    var bubb = document.querySelector(".game-section");
    
    
    bubb.addEventListener("click", function(dets){
        clicked = (Number(dets.target.textContent));

        if(clicked == hit_random){
            score();
            bubble();
            hit();

        }
    })
}

runtimer();
hit()

bubble()
num_hit();