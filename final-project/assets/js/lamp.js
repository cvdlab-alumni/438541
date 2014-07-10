function makeLamp(scene){ 

 var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(1.81,0, 4.19), new THREE.Vector3(0.89,0, 5.14), new THREE.Vector3(0.69,0, 5.4), new THREE.Vector3(0.78,0, 5.24));
   var points = curve.getPoints(10);

  

 
    var mesh = new THREE.Mesh( new THREE.LatheGeometry( points, 30, 0, 2*Math.PI), 
    new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, metal:true, specular: 0xffffff, shiness:100} ));
  
   var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(0,0, 5.58), new THREE.Vector3(0.62,0, 5.72), new THREE.Vector3(0.75,0, 5.57), new THREE.Vector3(0.78,0, 5.27));
   var points2 = curve.getPoints(10);

  
  var mesh2 = new THREE.Mesh( new THREE.LatheGeometry( points2, 30, 0, 2*Math.PI), 
  new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, metal: true, specular: 0xffffff, shiness: 100} )); 


  var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(1.73,0, 5.59), new THREE.Vector3(2.36,0, 6.05), new THREE.Vector3(1.88,0, 5.87), new THREE.Vector3(2.46,0, 5.6));
   var points3 = curve.getPoints(10);

 
  lamp_head = new THREE.Object3D();
  lamp_head.add(mesh);
  lamp_head.add(mesh2);
  mesh.castShadow=true;
  mesh2.castShadow=true;  
  


  var geometry = new THREE.SphereGeometry( .6, 32, 32 ); 
  var material = new THREE.MeshPhongMaterial( {color: 0xffff00, opacity: 0.5, transparent: true, shiness:100, specular: 0xffffff} ); 
  var lamp_bulb = new THREE.Mesh( geometry, material ); 
  
  lamp_head.add(lamp_bulb);
  lamp_bulb.position.set(0,0,5);


  var target = new THREE.Object3D();
  target.position.set(0,0,-100);
  lamp_bulb.add(target);

  var lamp_spotLight = new THREE.SpotLight( 0xfff000 );
  lamp_spotLight.angle = Math.PI/2;
  lamp_spotLight.intensity = 1.5; 
  lamp_spotLight.castShadow = true; 
  lamp_spotLight.shadowMapWidth = 1024; 
  lamp_spotLight.shadowMapHeight = 1024; 
  lamp_spotLight.shadowCameraNear = .1;
  lamp_spotLight.shadowCameraFar = 1000;
  lamp_spotLight.shadowCameraVisible = false;
  lamp_spotLight.cameraFov = 5000;
  
  var lamp_pointLight = new THREE.PointLight(0xfff000,2,.2);
  
  lamp_bulb.add(lamp_pointLight);

  lamp_spotLight.target = target;
  lamp_bulb.add(lamp_spotLight);

  var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(2.78, 0.47,0), new THREE.Vector3(2.36, 0.49,0), new THREE.Vector3(1.84, 0.26,0), new THREE.Vector3(1.81, 0.14,0));
   var points3 = curve.getPoints(10);
  
  var lamp_base = new THREE.Mesh( new THREE.LatheGeometry( points2, 30, 0, 2*Math.PI), 
  new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, metal:true, shiness:100, specular: 0xffffff} )); 
  lamp_base.castShadow=true;

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(-.03,0.41);
  shape.lineTo(0.5,0.41);
  shape.lineTo(0,0);
  

  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x000fff, side: THREE.DoubleSide} );
    
  joint = new THREE.Mesh(geometry,meshMaterial);
  joint.position.set(-.1,0,-.05);
  joint.castShadow=true;

  var geometry = new THREE.CylinderGeometry( .05, .05, .3, 32 ); 
  var material = new THREE.MeshPhongMaterial( {color: 0xfff000, side: THREE.DoubleSide} ); 
  cylinder = new THREE.Mesh( geometry, material ); 
  cylinder.rotation.x= Math.PI/2;
  cylinder.castShadow=true;

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(0.05,0);
  shape.lineTo(0.05,2);
  shape.lineTo(0,2);
  shape.lineTo(0,0);

  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, metal:true, shiness:100, specular: 0xffffff} );
    
  var connection = new THREE.Mesh(geometry,meshMaterial);
  connection.rotation.y= Math.PI/2;
  connection.castShadow=true;
  //connection.rotation.x= Math.PI/2;
  connection.position.set(0,.3,0.075);

  var connection2 = connection.clone();
  connection2.position.set(.25,.3,.075);

  
  cylinder.add(joint); 
  joint.add(connection);
  joint.add(connection2);

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(-.03,0.41);
  shape.lineTo(0.5,0.41);
  shape.lineTo(0,0);
  

  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x000fff, side: THREE.DoubleSide} );
    
  joint2 = new THREE.Mesh(geometry,meshMaterial);
  joint2.position.set(-.1,0,-.05);
  joint2.castShadow=true;

  var geometry = new THREE.CylinderGeometry( .35, .35, .1, 32 ); 
  var material = new THREE.MeshPhongMaterial( {color: 0xfff000, side: THREE.DoubleSide} ); 
  cylinder2 = new THREE.Mesh( geometry, material ); 
  cylinder2.castShadow = true;
 

  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(0.05,0);
  shape.lineTo(0.05,2);
  shape.lineTo(0,2);
  shape.lineTo(0,0);

  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, metal:true, shiness:100, specular:0xffffff} );
    
  var connection1 = new THREE.Mesh(geometry,meshMaterial);
  connection1.rotation.y= Math.PI/2;
  connection1.castShadow=true;
  //connection.rotation.x= Math.PI/2;
  connection1.position.set(0,.3,0.075);

  var connection12 = connection1.clone();
  connection12.position.set(.25,.3,.075);

  
  cylinder2.add(joint2); 
  joint2.add(connection1);
  joint2.add(connection12);

  cylinder2.position.set(.15,2.3,0);
  joint.add(cylinder2);

   
  shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(-.03,0.41);
  shape.lineTo(0.5,0.41);
  shape.lineTo(0,0);
  

  var geometry = new THREE.ExtrudeGeometry([shape],{amount : 0.1, bevelEnabled: false});
  var meshMaterial = new THREE.MeshPhongMaterial( { color: 0x000fff, side: THREE.DoubleSide} );
    

  joint3 = new THREE.Mesh(geometry,meshMaterial);
  joint3.rotation.z=Math.PI;
  joint3.castShadow=true;

   lamp_head.scale.x= 0.3;
  lamp_head.scale.y= 0.3;
  lamp_head.scale.z= 0.3;
 

  
  lamp_head.rotation.y= Math.PI/2;

  var geometry = new THREE.CylinderGeometry(.05, .05, .4, 32); 
  var material = new THREE.MeshPhongMaterial( {color: 0xfff000, side: THREE.DoubleSide} ); 
  cylinder3 = new THREE.Mesh( geometry, material );    
  cylinder3.position.set(0.1,0,.05);
  cylinder3.castShadow=true;
  
  joint3.position.set(0.4,2.65,-0.01); 
  
  joint3.add(cylinder3);
  joint2.add(joint3); 
  cylinder3.add(lamp_head);
  lamp_head.position.set(-1.63,-0.43,0);

   
  lamp_base.position.set(0,0,-5.3);
  lamp_base.add(cylinder);
  cylinder.position.set(0,0,5.7);
  
  
  lamp_base.position.set(2.3,0.58,0.8);
  lamp_base.scale.set(0.1,0.1,0.1);
  lamp_base.rotation.x=-Math.PI/2;
  scene.add(lamp_base);

 cylinder.rotation.y = 3.8;
 joint.rotation.z = -0.4;
 joint2.rotation.z = -1.02;
 cylinder2.rotation.y = 3.2;
 cylinder3.rotation.z = 0.1;

    lightBox = new THREE.Mesh(new THREE.BoxGeometry(0.35,0.65,0.35), new THREE.MeshBasicMaterial({wireframe:true}));
    lightBox.position.set(2.3,0.58,0.8);
    lightBox.visible = false;
    lightBox.condition = true;
    lightBox.interact = function(){
       if (lightBox.condition) {
          lamp_spotLight.visible=false;
          lamp_pointLight.visible = false;
          lightBox.condition = false;
       } else {
          lamp_spotLight.visible=true;
          lamp_pointLight.visible = true;
          lightBox.condition = true;
       }
    }
    scene.add(lightBox);
    objects2.push(lightBox);
  
 

}  