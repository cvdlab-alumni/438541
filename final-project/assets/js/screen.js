function makeScreenSaver(scene,objects2){
	
    explosionTexture = new THREE.ImageUtils.loadTexture( 'assets/textures/general/vu-meter1.jpg' );
	boomer = new TextureAnimator( explosionTexture, 4, 4, 16, 50 ); // texture, #horiz, #vert, #total, duration.
	var explosionMaterial = new THREE.MeshBasicMaterial( { map: explosionTexture } );
	var cubeGeometry = new THREE.PlaneGeometry( .5, .4);
	var blackScreen = new THREE.Mesh(cubeGeometry, new THREE.MeshPhongMaterial({color: 0x000000}))
	cube = new THREE.Mesh( cubeGeometry, explosionMaterial );
	cube.rotation.x = -0.172
	blackScreen.rotation.x = -0.172;
	blackScreen.condition = true;
	blackScreen.interact = function() {
		if (this.condition) {
			cube.visible = false;
			this.condition = false;
		} else {
			cube.visible=true;;
			this.condition= true;
		}
	}
	blackScreen.position.set(3.01,1.33,0.47);
	cube.position.set(3.01,1.33,0.47);
	objects2.push(blackScreen);
	scene.add(cube);
	scene.add(blackScreen);
}


function TextureAnimator(texture, tilesHoriz, tilesVert, numTiles, tileDispDuration) 
{	
	// note: texture passed by reference, will be updated by the update function.
		
	this.tilesHorizontal = tilesHoriz;
	this.tilesVertical = tilesVert;
	// how many images does this spritesheet contain?
	//  usually equals tilesHoriz * tilesVert, but not necessarily,
	//  if there at blank tiles at the bottom of the spritesheet. 
	this.numberOfTiles = numTiles;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping; 
	texture.repeat.set( 1 / this.tilesHorizontal, 1 / this.tilesVertical );

	// how long should each image be displayed?
	this.tileDisplayDuration = tileDispDuration;

	// how long has the current image been displayed?
	this.currentDisplayTime = 0;

	// which image is currently being displayed?
	this.currentTile = 0;
		
	this.update = function( milliSec )
	{
		this.currentDisplayTime += milliSec;
		while (this.currentDisplayTime > this.tileDisplayDuration)
		{
			this.currentDisplayTime -= this.tileDisplayDuration;
			this.currentTile++;
			if (this.currentTile == this.numberOfTiles)
				this.currentTile = 0;
			var currentColumn = this.currentTile % this.tilesHorizontal;
			texture.offset.x = currentColumn / this.tilesHorizontal;
			var currentRow = Math.floor( this.currentTile / this.tilesHorizontal );
			texture.offset.y = currentRow / this.tilesVertical;
		}
	};
}		