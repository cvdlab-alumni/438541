function bedroom2(objects,scene) {
	
    var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/beedroom2-floor.jpg")
    var bump = THREE.ImageUtils.loadTexture("assets/textures/general/beedroom2-floor-bump.jpg")
    floorTex.wrapS = THREE.RepeatWrapping;
    floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(3,3);
    bump.wrapS = THREE.RepeatWrapping;
    bump.wrapT = THREE.RepeatWrapping;
    bump.repeat.set(3,3);
    hall_floor = new THREE.Mesh(new THREE.PlaneGeometry(4.6,4.6),
    new THREE.MeshPhongMaterial({
    map: floorTex,bumpMap: bump, bumpScale:0.2
 }))
  
  hall_floor.rotation.x= -Math.PI/2
  hall_floor.position.set(2.6,.21,2.6);

  scene.add(hall_floor);


  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(.19,.0);
  shape.lineTo(.19,.62);
  shape.lineTo(.74,.62);
  shape.lineTo(.74,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  



  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
  bedroom2_wall_s = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  bedroom2_wall_s.rotation.y = Math.PI
  bedroom2_wall_s.scale.set(1.5,3.2,1)
  bedroom2_wall_s.position.set(4.75,.2,4.885)
  scene.add(bedroom2_wall_s)

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
    floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(1,1);
  bedroom2_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(4.75,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  
  bedroom2_wall_n.position.set(2.4,1.8,0.41)
  scene.add(bedroom2_wall_n)


  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);
  
  
  hole = new THREE.Path();
  hole.moveTo(.33,.29);
  hole.lineTo(.67,.29);
  hole.lineTo(.67,.65);
  hole.lineTo(.33,.65);
  hole.lineTo(.33,.29);
  shape.holes.push(hole)
  
  

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
  bedroom2_wall_e = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  bedroom2_wall_e.rotation.y= Math.PI/2;
  bedroom2_wall_e.scale.set(3,3.2,1)
  bedroom2_wall_e.position.set(0.41,.2,3.4)
  scene.add(bedroom2_wall_e)


  
  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
  bedroom2_wall_w = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  bedroom2_wall_w.rotation.y= Math.PI/2;
  bedroom2_wall_w.scale.set(4.5,3.2,1)
  bedroom2_wall_w.position.set(4.69,.2,4.9)
  scene.add(bedroom2_wall_w)


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
  
  



  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
  bedroom2_wall_s = new THREE.Mesh(new THREE.ShapeGeometry([shape]),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  bedroom2_wall_s.rotation.y = Math.PI/2
  bedroom2_wall_s.scale.set(1.5,3.2,1)
  bedroom2_wall_s.position.set(3.41,.2,4.885)
  scene.add(bedroom2_wall_s)


  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/bedroom2_wall.jpg")
  floorTex.wrapS = THREE.RepeatWrapping;
  floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(1,1);
  bedroom2_wall_n = new THREE.Mesh(new THREE.PlaneGeometry(3.05,3.2),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex
  }))
  
  bedroom2_wall_n.position.set(1.886,1.8,3.385)
  scene.add(bedroom2_wall_n)

 
 
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
  bath_w_hook.rotation.y = Math.PI/2; 
  bath_w_hook.scale.set(0.505,1.2,1)
  
  

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
  bath_w_hook2.scale.set(0.505,1.2,1)
  bath_w_hook2.rotation.y = Math.PI/2;   




  bath_w_hook.position.set(0.25,1.1,2.4)
  bath_w_hook2.position.set(0.25,1.1,1.4)
  scene.add(bath_w_hook)
  scene.add(bath_w_hook2)
  objects.push(bath_w_hook.children[0])
  objects.push(bath_w_hook2.children[0]) 
  objects.push(bath_w_hook.children[1])
  objects.push(bath_w_hook2.children[1]) 

    var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/door.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/door_bump.jpg")
  bedroom2_door = new THREE.Mesh(new THREE.BoxGeometry(.2,2,.8),
  new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide, map: floorTex,bumpMap: bump, bumpScale:0.1
  }))

  var bath_hook = new THREE.Object3D();
  bedroom2_door.position.set(0,0,.4);
  bath_hook.add(bedroom2_door)
  
  bath_hook.rotation.y= Math.PI/2;
  bath_hook.position.set(3.64,1.18,5)
  scene.add(bath_hook)
  objects.push(bath_hook.children[0])

}


function getBed2Door(){
  return bedroom2_door;
}
