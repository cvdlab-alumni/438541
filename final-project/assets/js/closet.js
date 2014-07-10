function closet(objects,scene) {
	
  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.13,.0);
  shape.lineTo(.13,.62);
  shape.lineTo(.65,.62);
  shape.lineTo(.65,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  closet_wall_s = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale: 0.1
  }))
  closet_wall_s.rotation.y = Math.PI/2
  closet_wall_s.scale.set(1.5,3.2,1)
  closet_wall_s.position.set(3.199,.2,4.885)
  scene.add(closet_wall_s);

    shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  closet_wall_n = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale: 0.1
  }))
  closet_wall_n.rotation.y = Math.PI/2
  closet_wall_n.scale.set(1.5,3.2,1)
  closet_wall_n.position.set(0.41,.2,4.885)
  scene.add(closet_wall_n);

   var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
   var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(2,2);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(2,2);
  bedroom2_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(3.05,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale: 0.1
  }))
  
  bedroom2_wall_n.position.set(1.883,1.8,4.882)
  scene.add(bedroom2_wall_n)

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(2,2);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(2,2);
  bedroom2_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(3.05,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale: 0.1
  }))
  
  bedroom2_wall_n.position.set(1.883,1.8,3.71)
  scene.add(bedroom2_wall_n)

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet-door.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet-door-bump.jpg")
  closet_door = new THREE.Mesh(new THREE.BoxGeometry(.76,2,.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale: 0.1
  }))

  var bath_hook = new THREE.Object3D();
  closet_door.position.set(-.38,0,0);
  bath_hook.add(closet_door)
  bath_hook.rotation.y = Math.PI/2;
  
  bath_hook.position.set(3.31,1.18,3.92)
  scene.add(bath_hook)
  objects.push(bath_hook.children[0]);
}