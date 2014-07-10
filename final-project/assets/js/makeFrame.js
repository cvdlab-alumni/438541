function makeFrame(scene){
	
  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(1,0);
  shape.lineTo(1,1);
  shape.lineTo(0,1);
  shape.lineTo(0,0);

  var floorTex = THREE.ImageUtils.loadTexture("assets/textures/general/frame2.jpg");
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/frame2-bump.jpg");
  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.01, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, map: floorTex, bumpMap: bump, bumpScale: 2} );
    
  var frame = new THREE.Mesh(geometry,meshMaterial);
  frame.scale.set(2,1,1);
  frame.position.set(1.5,2,11.38);
  scene.add(frame);

}

