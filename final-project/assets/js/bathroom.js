function bathroom(objects,scene) {  
   
  bathroom = new THREE.Object3D();

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  hole = new THREE.Path();
  hole.moveTo(.215,.17);
  hole.lineTo(.215,.83);
  hole.lineTo(.785,.83);
  hole.lineTo(.785,.17);
  hole.lineTo(.215,.17);

  shape.holes.push(hole)

  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/Frame_by_tmm_textures.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/Frame-bump.jpg")
  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.01, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: floorTex, bumpMap: bump, bumpScale: 2} );
    
  var connection = new THREE.Mesh(geometry,meshMaterial);


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/antique-mirror.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/antique-mirror-bump.jpg")


  

verticalMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003, textureWidth: window.innerWidth, textureHeight: window.innerHeight, map: floorTex } );


// create a mesh with cubeCamera.renderTarget as a value of envMap
  sphere = new THREE.Mesh(
  new THREE.PlaneGeometry(.570, .66, 32,32),
  verticalMirror.material
);
 sphere.add(verticalMirror)
 sphere.rotation.y = Math.PI
 
sphere.position.set(0,0,0)

  
  

  connection.position.set(-0.5,-0.5,0)
   
 
  mirror = new THREE.Object3D();
  mirror.add(connection);
  mirror.add(sphere);
   
  mirror.position.set(2,1.5,7.63)
  mirror.scale.y=2

  bathroom.add(mirror);
 

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/tile-floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/tile-floor-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  bathroom_floor = new THREE.Mesh(new THREE.PlaneGeometry(3,2.8),
  new THREE.MeshPhongMaterial({
    map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  
  bathroom_floor.rotation.x= -Math.PI/2
  bathroom_floor.position.set(1.9,0.21,6.5);

  bathroom.add(bathroom_floor);

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall-bump.jpg")
  bathroom_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(2.8,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  
  bathroom_wall_s = bathroom_wall_n.clone()
  bathroom_wall_n.position.set(1.8,1.8,7.64)
  bathroom.add(bathroom_wall_n)
  bathroom_wall_s.position.set(1.8,1.8,5.16)
  bathroom.add(bathroom_wall_s)

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  hole = new THREE.Path();
  hole.moveTo(.357,.61);
  hole.lineTo(.644,.61);
  hole.lineTo(.644,.775);
  hole.lineTo(.357,.775);
  hole.lineTo(.357,.61);

  shape.holes.push(hole)
  
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall-bump.jpg")
  bathroom_wall_e = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  bathroom_wall_e.rotation.y= Math.PI/2;
  bathroom_wall_e.scale.set(2.5,3.2,1)
  bathroom_wall_e.position.set(.41,.2,7.65)
  bathroom.add(bathroom_wall_e)

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.32,.0);
  shape.lineTo(.32,.62);
  shape.lineTo(.68,.62);
  shape.lineTo(.68,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bathroom-wall-bump.jpg")
  bathroom_wall_w = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  bathroom_wall_w.rotation.y= Math.PI/2;
  bathroom_wall_w.scale.set(2.5,3.2,1)
  bathroom_wall_w.position.set(3.19,.2,7.65)
  bathroom.add(bathroom_wall_w)
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bath-door.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bath-door-bump.jpg")
  bathroom_door = new THREE.Mesh(new THREE.BoxGeometry(.9,2,.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.2
  }))

  var bath_hook = new THREE.Object3D();
  bathroom_door.position.set(-0.45,0,0);
  bath_hook.add(bathroom_door)
  bath_hook.rotation.y = Math.PI/2;

  bath_hook.position.set(3.31,1.18,5.96)
  bathroom.add(bath_hook)
  objects.push(bath_hook.children[0]) 
  

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  hole = new THREE.Path();
  hole.moveTo(.247,.1);
  hole.lineTo(.82,.1);
  hole.lineTo(.82,.9);
  hole.lineTo(.247,.9);
  hole.lineTo(.247,.1);

  shape.holes.push(hole)


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bath-window.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bath-window-bump.jpg")
  bathroom_window = new THREE.Mesh(new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false}),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))





  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/window_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/window_glass_bump.jpg")
  bathroom_window_glass = new THREE.Mesh(new THREE.BoxGeometry(.57,.8,.1),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1, opacity:0.98 ,transparent: true
  }))

 
  
  var bath_w_hook = new THREE.Object3D();
  bathroom_window.position.set(0,0,0);
  bath_w_hook.add(bathroom_window)
  bathroom_window_glass.position.set(0.53,0.5,0.05);
  bath_w_hook.add(bathroom_window_glass);
  bath_w_hook.rotation.y = Math.PI/2
  bath_w_hook.rotation.x = Math.PI/2
  bath_w_hook.scale.set(0.541,0.716,1)
  



  


  bath_w_hook.position.set(0.15,2.15,6.05)
  bathroom.add(bath_w_hook)
  objects.push(bath_w_hook.children[0])
  objects.push(bath_w_hook.children[1])

  scene.add(bathroom);
}
