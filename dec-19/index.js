let ball = document.getElementById("ball");
let ballLeft = 600;
let balltop = 250;
let interval_top;
let interval_bottom, interval_left, interval_right;
window.addEventListener("keydown", (Event) => {
    console.log(Event.keyCode)
   
    if (Event.keyCode == 37) {
        clearInterval(interval_right);
        clearInterval(interval_top);
        clearInterval(interval_bottom)
        interval_left=  setInterval(() => {
            if (ballLeft > 0) {
                ballLeft -= 1;
                ball.style.left = ballLeft + "px";
            }
            else {
                clearInterval(interval_left);
            }
        }, 10);
        
  }
    else if (Event.keyCode == 38) {
        clearInterval(interval_right);
        clearInterval(interval_left);
        clearInterval(interval_bottom)
       interval_top=  setInterval(() => {
            if (balltop > 0) {
                balltop -= 1;
                ball.style.top = balltop + "px";
            } else {
                clearInterval(interval_top);
            }
        }, 10);
       
  }
    else if (Event.keyCode == 39) {
        clearInterval(interval_left);
        clearInterval(interval_top);
        clearInterval(interval_bottom)
        interval_right= setInterval(() => {
            if (ballLeft<1260) {
                ballLeft += 1;
                ball.style.left = ballLeft + "px";
            }
            else {
                clearInterval(interval_right);
            }
        },10);
       
  }
    else if (Event.keyCode == 40) {
        clearInterval(interval_right);
        clearInterval(interval_top);
        clearInterval(interval_left)
       interval_bottom=  setInterval(() => {
          if (balltop < 510) {
                
                balltop += 1;
                ball.style.top = balltop + "px";
          } 
          else {
              clearInterval(interval_bottom);
          }
        }, 10);
      
  }
});
