function nightBox(scene){
	
	var imagePrefix = "assets/textures/general/skybox/powderpeaknight_";
	var directions  = ["right", "left", "top", "top", "front", "back"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 100, 100, 100 );	
	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	night_skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	scene.add( night_skyBox );
	night_skyBox.position.set(0,25,0);
}

function dayBox(scene){
	
	var imagePrefix = "assets/textures/general/skybox/powderpeak_";
	var directions  = ["right", "left", "top", "top", "front", "back"];
	var imageSuffix = ".jpg";
	var skyGeometry = new THREE.BoxGeometry( 100, 100, 100 );	
	
	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
		}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	day_skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	day_skyBox.position.set(0,25,0);
	scene.add(day_skyBox );
}	

function updateSkybox(scene){

     if (sphereLightMesh.position.y <= 0){
   	   scene.add(night_skyBox);
   	   scene.remove(day_skyBox);
       box = night_skyBox;
   } else {
       scene.add(day_skyBox);
   	   scene.remove(night_skyBox);
   	   box = day_skyBox;
   }

}