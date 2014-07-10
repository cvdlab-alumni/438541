function init(){
	
	clock = new THREE.Clock();
    scene = new THREE.Scene();
    camera1 = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,5000);
    camera2 = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,5000);
    camera3 = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,5000);
    camera2.position.set(10,1.5,1)
    camera2.rotation.set(0,0,0);
    camera2.lookAt(new THREE.Vector3(10,1.5,10))
    camera= camera1;
    extcamera = camera1;

 
    camera1.position.set(15,15,15);
    camera1.up = new THREE.Vector3(0,1,0);
   
    renderer = new THREE.WebGLRenderer();
     trackballControls = new THREE.TrackballControls(camera1);
     firstControls = new THREE.FirstPersonControls(camera2);
      firstControls.lookSpeed = 0.05;
      firstControls.movementSpeed = 3;
      firstControls.activeLook = true;
      firstControls.noFly = false;
      firstControls.lookVertical = false;
      firstControls.constrainVertical = false;
      firstControls.verticalMin = 1.0;
      firstControls.verticalMax = 2.0;
      firstControls.lon = -150;
      firstControls.lat = 0;
      controls = trackballControls;
   
    objects = [];
    objects2 = [];
    mouse = new THREE.Vector2(),
    offset = new THREE.Vector3(),
   


    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    
    plane = new THREE.Mesh( new THREE.PlaneGeometry( 500, 500, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.25, transparent: true, wireframe: true } ) );
    plane.visible = false;
    scene.add( plane );
  
    var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/grass.jpg")
    /*  floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(10,10);
    */
    env_floor = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100, 8, 8 ), new THREE.MeshLambertMaterial( {map: floorTex} ) );
    env_floor.rotation.x = -Math.PI/2;
    scene.add( env_floor );


    projector = new THREE.Projector();
}