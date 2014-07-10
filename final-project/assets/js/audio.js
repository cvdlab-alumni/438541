function makeAudio(scene,objects2){ 
    audio1 = document.createElement( 'audio' );
    audio1.src = "assets/audio/mountain_king.mp3"; 
     audio2 = document.createElement( 'audio' );
    audio2.src = "assets/audio/pirate.mp3";
    audio = audio1  
    audioBox = new THREE.Mesh(new THREE.BoxGeometry(0.35,0.1,0.35), new THREE.MeshBasicMaterial({wireframe:true}));
    audioBox.position.set(2.8,1,3);
    audioBox.visible = false;
    audioBox.condition = 0;
    audioBox.interact = function(){
       if (audioBox.condition === 0) {
              audio1.play();
              audioBox.condition = 1;
          } else if (audioBox.condition === 1) {
            audio1.pause();
            audio1.currentTime=0;
            audio = audio2;
            audio2.play();
            audioBox.condition=2;
          } else {
            audio2.pause();
            audio2.currentTime = 0;
            audio = audio1;
            audioBox.condition = 0;
          }
    }
    scene.add(audioBox);
    objects2.push(audioBox);
       
   

  
}

function updateAudio(){
  var distance = audioBox.position.distanceTo(camera.position);
  if ( distance <= 10 ) {
    audio.volume = 1 * ( 1 - distance / 10 );
  } else {
    audio.volume = 0;
  }
}