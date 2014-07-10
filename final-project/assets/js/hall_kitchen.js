function kitchen(objects,scene){
 

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/hall_floor.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/hall_floor_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  kitchen_floor = new THREE.Mesh(new THREE.PlaneGeometry(3,3),
  new THREE.MeshPhongMaterial({
    map: floorTex,bumpMap: bump, bumpScale:0.2
  }))
  
  kitchen_floor.rotation.x= -Math.PI/2
  kitchen_floor.position.set(4.9,.21,6.4);

  scene.add(kitchen_floor);

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  kitchen_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(3.2,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.3
  }))
  
  kitchen_wall_s = kitchen_wall_n.clone()
  kitchen_wall_n.position.set(7.8,1.8,7.64)
  scene.add(kitchen_wall_n)
  kitchen_wall_s.position.set(7.8,1.8,5.16)
  scene.add(kitchen_wall_s)

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  hole = new THREE.Path();
  hole.moveTo(.335,.29);
  hole.lineTo(.665,.29);
  hole.lineTo(.665,.65);
  hole.lineTo(.335,.65);
  hole.lineTo(.335,.29);

  shape.holes.push(hole)
  
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  kitchen_wall_e = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.3
  }))
  kitchen_wall_e.rotation.y= Math.PI/2;
  kitchen_wall_e.scale.set(2.5,3.2,1)
  kitchen_wall_e.position.set(9.39,.2,7.65)
  scene.add(kitchen_wall_e)

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
  
  



  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/kitchen_wall_bump.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(3,3);
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(3,3);
  kitchen_wall_w = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.3
  }))
  kitchen_wall_w.rotation.y= Math.PI/2;
  kitchen_wall_w.scale.set(2.5,3.2,1)
  kitchen_wall_w.position.set(6.41,.2,7.65)
  scene.add(kitchen_wall_w)


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


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/window2_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/window2_glass_bump.jpg")
  bathroom_window_glass = new THREE.Mesh(new THREE.BoxGeometry(.57,.8,.1),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1, opacity:0.89 ,transparent: true
  }))

 
  
  var bath_w_hook = new THREE.Object3D();
  bathroom_window.position.set(0,0,0);
  bath_w_hook.add(bathroom_window)
  bathroom_window_glass.position.set(0.53,0.5,0.05);
  bath_w_hook.add(bathroom_window_glass);
  bath_w_hook.scale.set(0.44,1.2,1)
  bath_w_hook.rotation.y = Math.PI/2; 



    shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  hole = new THREE.Path();
  hole.moveTo(.192,.1);
  hole.lineTo(.766,.1);
  hole.lineTo(.766,.9);
  hole.lineTo(.192,.9);
  hole.lineTo(.192,.1);

  shape.holes.push(hole)
  
  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bath-window2.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/bath-window-bump2.jpg")
  bathroom_window2 = new THREE.Mesh(new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false}),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/window2_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/window2_glass_bump.jpg")
  bathroom_window_glass2 = new THREE.Mesh(new THREE.BoxGeometry(.57,.8,.1),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1, opacity:0.89 ,transparent: true
  }))

 
  var bath_w_hook2 = new THREE.Object3D();
  bathroom_window2.position.set(-1,0,0);
  bath_w_hook2.add(bathroom_window2)
  bathroom_window_glass2.position.set(-0.52,0.5,0.05);
  bath_w_hook2.add(bathroom_window_glass2);
  bath_w_hook2.scale.set(0.44,1.2,1)
  bath_w_hook2.rotation.y = Math.PI/2;   


  


  bath_w_hook.position.set(9.5,1.1,6.85)
  bath_w_hook2.position.set(9.5,1.1,5.98)
  scene.add(bath_w_hook)
  scene.add(bath_w_hook2)
    objects.push(bath_w_hook.children[0])
  objects.push(bath_w_hook2.children[0]) 
  objects.push(bath_w_hook.children[1])
  objects.push(bath_w_hook2.children[1]) 




  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  hole = new THREE.Path();
  hole.moveTo(.15,.1);
  hole.lineTo(.15,.955);
  hole.lineTo(.85,.955);
  hole.lineTo(.85,.1);
  hole.lineTo(.15,.1);

  shape.holes.push(hole)


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/double-door.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/double-door-bump.jpg")
  kitchen_door = new THREE.Mesh(new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false}),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass_bump.jpg")
  bathroom_window_glass = new THREE.Mesh(new THREE.BoxGeometry(.7,.855,.1),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1, opacity:0.89 ,transparent: true
  }))

 
  
  var bath_w_hook = new THREE.Object3D();
  kitchen_door.position.set(-1,0,0);
  bath_w_hook.add(kitchen_door)
  bathroom_window_glass.position.set(-0.5,0.53,0.05);
  bath_w_hook.add(bathroom_window_glass);
  bath_w_hook.rotation.y = Math.PI/2
  bath_w_hook.scale.set(.65,2,1)
  

    var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/double-door-2.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/double-door-bump2.jpg")
  kitchen_door2 = new THREE.Mesh(new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false}),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass_bump.jpg")
  bathroom_window_glass2 = new THREE.Mesh(new THREE.BoxGeometry(.7,.855,.1),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1, opacity:0.89 ,transparent: true
  }))


  var bath_w_hook2 = new THREE.Object3D();
  kitchen_door2.position.set(0,0,0);
  bath_w_hook2.add(kitchen_door2)
  bathroom_window_glass2.position.set(0.5,0.53,0.05);
  bath_w_hook2.add(bathroom_window_glass2);
  bath_w_hook2.rotation.y = Math.PI/2
  bath_w_hook2.scale.set(.65,2,1)
  


  bath_w_hook.position.set(6.28,0.21,5.75);
  bath_w_hook2.position.set(6.28,0.21,7.05);
  
  scene.add(bath_w_hook);
  scene.add(bath_w_hook2);
  objects.push(bath_w_hook.children[0])
  objects.push(bath_w_hook2.children[0]) 
  objects.push(bath_w_hook.children[1])
  objects.push(bath_w_hook2.children[1]) 

}

