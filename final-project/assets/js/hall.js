function hall(objects, scene) {
	
  hall = new THREE.Object3D();
     
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/hall_floor_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  hall_floor = new THREE.Mesh(new THREE.PlaneGeometry(3,3),
  new THREE.MeshPhongMaterial({
    map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  
  hall_floor.rotation.x= -Math.PI/2
  hall_floor.position.set(7.9,.21,6.4);

  hall.add(hall_floor);
  

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.25,.0);
  shape.lineTo(.25,.62);
  shape.lineTo(.75,.62);
  shape.lineTo(.75,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_wall.jpg")
  hall_wall_w = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  hall_wall_w.rotation.y= Math.PI/2;
  hall_wall_w.scale.set(2.5,3.2,1)
  hall_wall_w.position.set(6.19,.2,7.65)
  hall.add(hall_wall_w)

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
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_wall.jpg")
  hall_wall_e = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  hall_wall_e.rotation.y= Math.PI/2;
  hall_wall_e.scale.set(2.5,3.2,1)
  hall_wall_e.position.set(3.41,.2,7.65)
  hall.add(hall_wall_e)
  
  
  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.08,.0);
  shape.lineTo(.08,.62);
  shape.lineTo(.35,.62);
  shape.lineTo(.35,0);
  shape.lineTo(.53,.0);
  shape.lineTo(.53,.62);
  shape.lineTo(.9,.62);
  shape.lineTo(.9,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

   var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_wall.jpg")
  hall_wall_s = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  hall_wall_s.scale.set(3,3.2,1)
  hall_wall_s.position.set(3.4,.2,7.649)
  hall.add(hall_wall_s)


  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.08,.0);
  shape.lineTo(.08,.62);
  shape.lineTo(.35,.62);
  shape.lineTo(.35,0);
  shape.lineTo(.58,.0);
  shape.lineTo(.58,.62);
  shape.lineTo(.85,.62);
  shape.lineTo(.85,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

   var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_wall.jpg")
  hall_wall_n = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  hall_wall_n.scale.set(3,3.2,1)
  hall_wall_n.position.set(3.4,.2,5.16)
  hall.add(hall_wall_n)


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/front-door.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/front-door-bump.jpg")
  bathroom_door = new THREE.Mesh(new THREE.BoxGeometry(.2,2,.9),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))

  var bath_hook = new THREE.Object3D();
  bathroom_door.position.set(0,0,-.45);
  bath_hook.add(bathroom_door)
  
  bath_hook.rotation.y= Math.PI/2;
  bath_hook.position.set(6.05,1.18,5.05)
  hall.add(bath_hook)
 
  scene.add(hall);

  objects.push(bathroom_door)
}