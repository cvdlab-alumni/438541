function external(scene) {
  
     
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(1,1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(1,1);
  hall_floor = new THREE.Mesh(new THREE.PlaneGeometry(4.96,4.9),
  new THREE.MeshPhongMaterial({
    map: floorTex,bumpMap: bump, bumpScale:0.1
  }))
  
  hall_floor.rotation.x= -Math.PI/2
  hall_floor.position.set(7.36,.21,2.45);

  scene.add(hall_floor);
  

    shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.086,.0);
  shape.lineTo(.086,.62);
  shape.lineTo(.248,.62);
  shape.lineTo(.248,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  



  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  external_wall_1 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale:0.2
  }))
  external_wall_1.scale.set(5.11,3.2,1)
  external_wall_1.position.set(4.7,.2,4.89)
  scene.add(external_wall_1)

  shape = new THREE.Shape();

  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0)
    
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/closet_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  external_wall_2 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale:0.2
  }))
  external_wall_2.rotation.y= Math.PI/2;
  external_wall_2.scale.set(4.9,3.2,1)
  external_wall_2.position.set(4.91,.2,4.9)
  scene.add(external_wall_2)



  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(5,1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(5,1);
  external_wall_3 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex, bumpMap: bump, bumpScale:0.3
  }))
 
  external_wall_3.scale.set(9.8,3.4,1)
  external_wall_3.position.set(0,0,11.81)
  scene.add(external_wall_3)



  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  hole = new THREE.Path();
  hole.moveTo(.232,.33);
  hole.lineTo(.39,.33);
  hole.lineTo(.39,.67);
  hole.lineTo(.232,.67);
  hole.lineTo(.232,.33);

  shape.holes.push(hole)


  hole = new THREE.Path();
  hole.moveTo(.845,.33);
  hole.lineTo(.72,.33);
  hole.lineTo(.72,.67);
  hole.lineTo(.845,.67);
  hole.lineTo(.845,.33);

  shape.holes.push(hole)
  
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(5,1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(5,1);
  external_wall_4 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap:bump,bumpScale:0.3
  }))
  external_wall_4.rotation.y= Math.PI/2;
  external_wall_4.scale.set(6.9,3.4,1)
  external_wall_4.position.set(9.81,0,11.8)
  scene.add(external_wall_4)


  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  hole = new THREE.Path();
  hole.moveTo(.133,.323);
  hole.lineTo(.234,.323);
  hole.lineTo(.234,.67);
  hole.lineTo(.133,.67);
  hole.lineTo(.133,.323);

  shape.holes.push(hole)

  
  hole = new THREE.Path();
  hole.moveTo(.425,.64);
  hole.lineTo(.489,.64);
  hole.lineTo(.489,.785);
  hole.lineTo(.425,.785);
  hole.lineTo(.425,.64);

  shape.holes.push(hole)
  

  hole = new THREE.Path();
  hole.moveTo(.885,.325);
  hole.lineTo(.795,.325);
  hole.lineTo(.795,.67);
  hole.lineTo(.885,.67);
  hole.lineTo(.885,.325);

  shape.holes.push(hole)
  
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(5,1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(5,1);
  external_wall_4 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap:bump,bumpScale:0.3
  }))
  external_wall_4.rotation.y= Math.PI/2;
  external_wall_4.scale.set(11.8,3.4,1)
  external_wall_4.position.set(-0.01,0,11.8)
  scene.add(external_wall_4)


  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-wall-bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(2,1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(2,1);
  external_wall_5 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap:bump,bumpScale:0.3
  }))
  external_wall_5.scale.set(4.9,3.4,1)
  external_wall_5.position.set(0,0,-0.01)
  scene.add(external_wall_5)

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor-bump.jpg")
  external_wall_6 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap:bump,bumpScale:0.1
  }))
  external_wall_6.scale.set(4.91,0.2,1)
  external_wall_6.position.set(4.91,0,-0.01)
  scene.add(external_wall_6)

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/external-floor-bump.jpg")
  external_wall_7 = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap:bump,bumpScale:0.1
  }))
  external_wall_7.rotation.y = Math.PI/2;
  external_wall_7.scale.set(4.91,0.2,1)
  external_wall_7.position.set(9.81,0,4.89)
  scene.add(external_wall_7)

}  