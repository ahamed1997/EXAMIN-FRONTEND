// var h3 = document.getElementsByTagName("h3");
// h3[0].HTML = "Countdown Timer With JS";

// var sec         = 1800,
//     countDiv    = document.getElementById("timer"),
//     secpass,
//     countDown   = setInterval(function () {
//         'use strict';
        
//         secpass();
//     }, 1000);

// function secpass() {
//     'use strict';
    
//     var min     = Math.floor(sec / 60),
//         remSec  = sec % 60;
    
//     if (remSec < 10) {
        
//         remSec = '0' + remSec;
    
//     }
//     if (min < 10) {
        
//         min = '0' + min;
    
//     }
//     countDiv.innerHTML = min + ":" + remSec;
    
//     if (sec > 0) {
        
//         sec = sec - 1;
        
//     } else {
        
//         clearInterval(countDown);
        
//         countDiv.innerHTML = 'countdown done';
        
//     }
// }
// // function greeting(){
// //     var thehours = new Date().getHours();
// //     var themessage;
// //     var morning = ('Good morning');
// //     var afternoon = ('Good afternoon');
// //     var evening = ('Good evening');
  
// //     if (thehours >= 0 && thehours < 12) {
// //       themessage = morning; 
  
// //     } else if (thehours >= 12 && thehours < 17) {
// //       themessage = afternoon;
  
// //     } else if (thehours >= 17 && thehours < 24) {
// //       themessage = evening;
// //     }
  
// //     $('.greeting').append(themessage);
// //   }
var temp;
 var timer;
 var fiveMinutes;
function stopwatch(count){
    temp = count;
    
function startTimer(duration, display) {
  var  timer = duration, minutes, seconds;
    
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        
        if (--timer < 0) {
            //this.time=  
           //timer = duration;
           window.location.assign("/resultspage");
           //timer = this.myRoutes.navigate(['/firstpage']);
        }
    }, 1000);
}



jQuery(function ($) {
    var fiveMinutes = 60 * temp,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
}


function myStopFunction() {
  clearTimeout(fiveMinutes);
  clearTimeout(timer);
  clearTimeout(temp);

}


function datevalidation(){
  $(function(){
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    var maxDate = year + '-' + month + '-' + day;

    $('#txtDate').attr('min', maxDate);
});
}
    function check() {
        $(document).ready(function () {
            var butEl = document.getElementsByClassName('btn btn-info'),
                count = butEl.length;
            for (i = 0; i < count; i++){
                butEl[i].click();
                return;
            }
        });
   }


   function testpayment() {
    $(document).ready(function () {
        var butEl = document.getElementsByClassName('btn btn-outline-primary'),
            count = butEl.length;
        for (i = 0; i < count; i++){
            butEl[i].click();
            return;
        }
    });
}


function welcome(){
    $(document).on("click", ".navbar-right .dropdown-menu", function(e){
		e.stopPropagation();
	});
    
    
}

function m14(){
    var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
}


function mt19(){
    var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}



 function mt16(){
     var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
 }





  function motion(){


    anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  }



   function loop(){
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
      }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
      });
   }


function slideshow(){
  $('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
}



function circleeffect(){
  anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});
}


 
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


  function minutesSeconds($this, opts) {
    var id = $this.attr('id');
    var time = "";
    if (window['minutes_MS' + id] === opts.minutes && window['seconds_MS' + id] === opts.seconds) {
        time = prepareTime($this, opts, 0, 0, 0, 0, window['minutes_MS' + id], window['seconds_MS' + id]);
        html($this, time, opts);
        if (typeof window['beforeExpiry_MS' + id] !== 'undefined') {
            beforeExpiryTime($this, opts, time, 'MS');
        }
        if (window['minutes_MS' + id] !== 0 && window['seconds_MS' + id] === 0) {
            window['minutes_MS' + id]--;
            window['seconds_MS' + id] = 60 - opts.tickInterval;
        } else if (window['minutes_MS' + id] === 0 && window['seconds_MS' + id] === 0) {
            clearTimerInterval($this, "MS", opts);
        } else {
            window['seconds_MS' + id] -= opts.tickInterval;
        }
        if ($this.data('countdowntimer').destroy === true) clearTimerInterval($this, "MS", opts);
    } else {
        time = prepareTime($this, opts, 0, 0, 0, 0, window['minutes_MS' + id], window['seconds_MS' + id]);
        html($this, time, opts);
        if (typeof window['beforeExpiry_MS' + id] !== 'undefined') {
            beforeExpiryTime($this, opts, time, 'MS');
        }
        window['seconds_MS' + id] -= opts.tickInterval;
        if (window['minutes_MS' + id] !== 0 && window['seconds_MS' + id] < 0) {
            window['minutes_MS' + id]--;
            window['seconds_MS' + id] = 60 - opts.tickInterval;
        }
        if ((window['minutes_MS' + id] === 0 && window['seconds_MS' + id] < 0) || $this.data('countdowntimer').destroy === true) {
            clearTimerInterval($this, "MS", opts);
        }
    }
    id = null;
}


  