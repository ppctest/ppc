AFRAME.registerComponent('markerhandler', {
    init: function() {

        /** 當curosr 指住 object 時
        this.el.addEventListener('raycaster-intersected', function () {
             console.log('Player hit something!');
           });
           **/

        this.el.addEventListener('raycaster-intersected', function() {
            console.log('Player hit something!');
        });
        const animatedMarker = document.querySelector("#animated-marker");

        // every click, we make our model grow in size
        /*   animatedMarker.addEventListener('mouseup', function(ev, target) {
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model');
                //  const scale = entity.getAttribute('scale');

                // Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.002);
                //  entity.setAttribute('scale', scale);
            }
        });
*/
        /*  animatedMarker.addEventListener('touch', function(ev, target){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
           
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.002);
                entity.setAttribute('scale', scale);
            }
        });
*/

    }
});
AFRAME.registerComponent('gallery', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersected', function () {
      //console.log(this.el);
    });
  }
});

 AFRAME.registerComponent('website', {
  //dependencies: ['raycaster'],

  init: function () {
    var url = this.data;
//      this.el.addEventListener('raycaster-intersected', function(ev,target) {
this.el.addEventListener('click', function(ev,target) {
            
                   console.log(window.onmousedown);
                // window.location.href = url;
               
   

              
        });


}
});

/*
 var targetEl = document.querySelector('#videoScreen');
 var video = document.querySelector('video');
   targetEl.addEventListener('mouseup', function(ev, target){
         if (videoMarker.object3D.visible == true && ev.detail.cursorEl) {
                   console.log ("click");
              if (video.paused == true) {
                video.play();
              } else {
                video.pause();
              }

        }
    });
**/
/**
AFRAME.registerComponent('markerhandler2', {
  init: function () {
    const sceneEl = document.querySelector('a-scene').querySelector('a-assets');
    const video = sceneEl.querySelector('video');
    const videoMarker = document.querySelector("#video-marker");

    var cv = document.getElementsByClassName('a-canvas');

    cv[0].addEventListener('click', function(ev, target){
         if (videoMarker.object3D.visible == true && ev.detail.cursorEl) {
                   console.log (cv[0]);
              if (video.paused == true) {
                video.play();
              } else {
                video.pause();
              }

        }
    });
  }
});**/
AFRAME.registerComponent('rote-on-hover', {
    schema: {
        color: { default: 'red' }
    },

    init: function() {
        var data = this.data;
        var el = this.el; // <a-box>
        // var defaultColor = el.getAttribute('material').color;

        el.addEventListener('mousedown', function() {
            console.log("hello");
            //el.object3D.rotation.y += Math.PI;
        });
        el.addEventListener('touchstart', function() {
            console.log("hello");
            //el.object3D.rotation.y += Math.PI;
        });

        el.addEventListener('mouseleave', function() {
           // el.object3D.rotation.y -= Math.PI;
        });
    }
});


var currentIndx = 1;
var imgSize={};

var img = new Image();
img.onload = function() {
  imgSize.width=this.width; 
  imgSize.height=this.height;
}
img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';


function nextImg(target, id) {

    var tg = $(target);


    var total = $(id).length;
     console.log(currentIndx);
    if (currentIndx < $(id).length) {
      currentIndx++;
        $(tg).attr("src", ("#img" + (currentIndx)));

    } else{
      currentIndx=1;
        $(tg).attr("src", ("#img" + (currentIndx)));
    }
   
  /* if(currentIndx>$(id).length)
        {
          currentIndx=1;
        }*/
    /* , [..] More settings */
}

function prevImg(target, id) {

    var tg = $(target);


    var total = $(id).length;
     console.log(currentIndx);
    if (currentIndx > 1) {
      currentIndx--;
        $(tg).attr("src", ("#img" + (currentIndx)));

    } else{
     currentIndx= $(id).length;
      $(tg).attr("src", ("#img" + (currentIndx)));
    }
  /* if(currentIndx<1)
        {
          currentIndx=$(id).length;
        }*/
    /* , [..] More settings */
}


function goto(href) {
    //window.location.href = href;
    window.open(href, '_blank');
}

function playVideo(id) {
    var video = document.querySelector(id);
    if (video.paused == true) {
        video.play();
    } else {
        video.pause();
    }
}