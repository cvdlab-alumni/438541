function makeVideo(scene,objects2){ 
    video1 = document.createElement( 'video' );
    video1.src = "assets/textures/general/ice_age.mp4";
    video1.load(); 
    video2 = document.createElement( 'video' );
    video2.src = "assets/textures/general/sintel.mp4";
    video2.load();
    video = video1; 
    videoImage = document.createElement( 'canvas' );
    videoImage.width =  800;
    videoImage.height = 450;
    videoImageContext = videoImage.getContext( '2d' );
    videoImageContext.fillStyle = '#000000';
    videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
    videoTexture = new THREE.Texture( videoImage );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
    var movieGeometry = new THREE.PlaneGeometry( 2.25, 1.28, 4, 4 );
    movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
    movieScreen.rotation.y = Math.PI;   
    //movieScreen.position.set(3.8,4.4,9); //il primo avvicina lo schermo alla tv
    movieScreen.position.set(8,1.08,11);
    scene.add(movieScreen);
    movieScreen.visible = true; 
    movieScreen.condition = 0;  
       
    movieScreen.interact = function(){
   
          if (movieScreen.condition === 0) {
              video1.play();
              movieScreen.condition = 1;
          } else if (movieScreen.condition === 1) {
            video1.pause();
            video1.currentTime=0;
            video = video2;
            video2.play();
            movieScreen.condition=2;
          } else {
            video2.pause();
            video2.currentTime = 0;
            video = video1;
            movieScreen.condition = 0;
          }
      
    }

    objects2.push(movieScreen);
}

function updateVideo(){
  var distance = movieScreen.position.distanceTo(camera.position);
  if ( distance <= 10 ) {
    video.volume = 1 * ( 1 - distance / 10 );
  } else {
    video.volume = 0;
  }
     if ( video.readyState === video.HAVE_ENOUGH_DATA ) {
          videoImageContext.drawImage( video, 0, 0 );
          if ( videoTexture ) 
            videoTexture.needsUpdate = true;
        }
     
}