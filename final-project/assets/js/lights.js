function external_lights(scene) {
	 
	  var ambiColor = "#1c1c1c";
      var ambientLight = new THREE.AmbientLight(ambiColor);
      ambientLight.intensity = 0.01;
      scene.add(ambientLight);
 
      sphereLight = new THREE.SphereGeometry(2);
      sphereLightMaterial = new THREE.MeshBasicMaterial({color: 0xfffc25});
      sphereLightMesh = new THREE.Mesh(sphereLight, sphereLightMaterial);

      sphereLightMesh.position = new THREE.Vector3(25, 25, 25);
      scene.add(sphereLightMesh);

      var pointColor = "#ffffff";
      directionalLight = new THREE.DirectionalLight(pointColor);
      directionalLight.position.set(-40, 60, -10);
      directionalLight.castShadow = true;
      directionalLight.shadowCameraNear = 2;
      directionalLight.shadowCameraFar = 100;
      directionalLight.shadowCameraLeft = -100;
      directionalLight.shadowCameraRight = 100;
      directionalLight.shadowCameraTop = 100;
      directionalLight.shadowCameraBottom = -100;

      directionalLight.intensity = 1;
      directionalLight.shadowMapHeight = 1024;
      directionalLight.shadowMapWidth = 1024;


      scene.add(directionalLight);

}


function wall_lamp() {

  var tex = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/door_glass_bump.jpg")
  var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(0.14,0,0), new THREE.Vector3(0.14,0, 0.73), new THREE.Vector3(1.42,0,0.13), new THREE.Vector3(1.51,0, 1.43));
  var points = curve.getPoints(10);
  var wall_lamp = new THREE.Mesh( new THREE.LatheGeometry( points, 30, 0, Math.PI), 
  new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, map:tex, bumpMap: bump, bumpScale: 0.2} )); 

  var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.2), new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide}))
  cylinder.rotation.x = Math.PI/2;
  cylinder.position.set(0,.1,0);
  wall_lamp.add(cylinder);
  var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(0.14,0,0), new THREE.Vector3(0.14,0, 0.74), new THREE.Vector3(1.08,0,1.04), new THREE.Vector3(0,0, 1.63));
  var points = curve.getPoints(10);
  var lamp_bulb = new THREE.Mesh( new THREE.LatheGeometry( points, 30, 0, Math.PI), 
  new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, transparent: true, opacity: 0.5} )); 
  lamp_bulb.scale.z = 0.8; 
  wall_lamp.add(lamp_bulb)
  var pointLight = new THREE.PointLight(0xffff00,10,0.22);
 
  lamp_bulb.add(pointLight);
  pointLight.position.set(0,1,2);
  return wall_lamp
     
}

function roof_lamp() {
  var  roof_lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.5,.3,32,32), new THREE.MeshPhongMaterial({color: 0xffff00, side: THREE.DoubleSide}))
  var curve = new THREE.CubicBezierCurve3(new THREE.Vector3(1.4,0,0.15), new THREE.Vector3(1.44,0, 0.54), new THREE.Vector3(0.5,0,0.83), new THREE.Vector3(0,0, 0.83));
  var points = curve.getPoints(10);
  var lamp_bulb = new THREE.Mesh( new THREE.LatheGeometry( points, 30, 0, 2*Math.PI), 
  new THREE.MeshPhongMaterial( { color: 0xb2b2b2, side: THREE.DoubleSide, transparent: true, opacity: 0.5} )); 
  roof_lamp.add(lamp_bulb)
  lamp_bulb.rotation.x= -Math.PI/2;
  var pointLight = new THREE.PointLight(0xffff00,3,0.1);
   lamp_bulb.add(pointLight);
    pointLight.position.set(0,0.5,0.5);

  return roof_lamp;
}


function hall_light(scene) {
  hall_lamp = wall_lamp();
  hall_lamp.rotation.x = -Math.PI/2;
  hall_lamp.scale.set(0.1,0.1,0.1)
  hall_lamp.position.set(4.8,2,7.66);
  hall_pointLight = new THREE.PointLight(0xfffff0,3,2.1);
  hall_pointLight.position.set(4.1,2,6.9);
  scene.add(hall_pointLight);
  hall_pointLight2 = new THREE.PointLight(0xfffff0,3,2.1);
  hall_pointLight2.position.set(5.5,2,6.9);
  scene.add(hall_pointLight2);
  hall_pointLight3 = new THREE.PointLight(0xfffff0,3,2.1);
  hall_pointLight3.position.set(5.5,2,5.9);
  scene.add(hall_pointLight3);
  hall_pointLight4 = new THREE.PointLight(0xfffff0,3,2.1);
  hall_pointLight4.position.set(4.1,2,5.9);
  scene.add(hall_pointLight4);
  scene.add(hall_lamp);
}

function bathroom_light(scene){
  bathroom_light = wall_lamp();
  bathroom_light.rotation.x = -Math.PI/2;
  bathroom_light.rotation.z = Math.PI;
  bathroom_light.position.set(2,2,5.16)
  bathroom_light.scale.set(0.1,0.1,0.1);
  scene.add(bathroom_light);
  bathroom_pointLight = new THREE.PointLight(0xfffff0,3,2.1);
  bathroom_pointLight.position.set(1.1,2,6.9);
  scene.add(bathroom_pointLight);
  bathroom_pointLight2 = new THREE.PointLight(0xfffff0,3,2.1);
  bathroom_pointLight2.position.set(2.5,2,6.9);
  scene.add(bathroom_pointLight2);
  bathroom_pointLight3 = new THREE.PointLight(0xfffff0,3,2.1);
  bathroom_pointLight3.position.set(2.5,2,5.9);
  scene.add(bathroom_pointLight3);
  bathroom_pointLight4 = new THREE.PointLight(0xfffff0,3,2.1);
  bathroom_pointLight4.position.set(1.1,2,5.9);
  scene.add(bathroom_pointLight4);
}

function kitchen_light(scene) {
  kitchen_light = roof_lamp();
  kitchen_light.rotation.x = Math.PI;
  kitchen_light.scale.set(0.1,0.1,0.1);
  kitchen_light.position.set(8,3.35,6.5);
  kitchen_pointLight = new THREE.PointLight(0xfffff0,3,2.1);
  kitchen_pointLight.position.set(7.1,2,6.9);
  scene.add(kitchen_pointLight);
  kitchen_pointLight2 = new THREE.PointLight(0xfffff0,3,2.1);
  kitchen_pointLight2.position.set(8.5,2,6.9);
  scene.add(kitchen_pointLight2);
  kitchen_pointLight3 = new THREE.PointLight(0xfffff0,3,2.1);
  kitchen_pointLight3.position.set(8.5,2,5.9);
  scene.add(kitchen_pointLight3);
  kitchen_pointLight4 = new THREE.PointLight(0xfffff0,3,2.1);
  kitchen_pointLight4.position.set(7.1,2,5.9);
  scene.add(kitchen_pointLight4);
  scene.add(kitchen_light); 
}

function bedroom2_light(scene){
 
  bedroom2_light = roof_lamp();
  bedroom2_light.rotation.x = Math.PI;
  bedroom2_light.scale.set(0.1,0.1,0.1);
  bedroom2_light.position.set(3,3.35,2);
  scene.add(bedroom2_light);
  bedroom2_pointLight = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight.position.set(1.2,2,2.5);
  scene.add(bedroom2_pointLight);
  bedroom2_pointLight2 = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight2.position.set(2.5,2,2.5);
  scene.add(bedroom2_pointLight2);
  bedroom2_pointLight3 = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight3.position.set(2.5,2,0.9);
  scene.add(bedroom2_pointLight3);
  bedroom2_pointLight4 = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight4.position.set(1.2,2,0.9);
  scene.add(bedroom2_pointLight4);
  bedroom2_pointLight5 = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight5.position.set(3.5,2,2.5);
  scene.add(bedroom2_pointLight5);
  bedroom2_pointLight6 = new THREE.PointLight(0xfffff0,3,2.3);
  bedroom2_pointLight6.position.set(3.5,2,0.9);
  scene.add(bedroom2_pointLight6);
  bedroom2_pointLight7 = new THREE.PointLight(0xfffff0,3,2);
  bedroom2_pointLight7.position.set(4,2,4);
  scene.add(bedroom2_pointLight7);
  scene.add(bedroom2_light); 
}

function bedroom_light(scene){
  bedroom_light = roof_lamp();
  bedroom_light.rotation.x = Math.PI;
  bedroom_light.scale.set(0.1,0.1,0.1);
  bedroom_light.position.set(2.5,3.35,9);
  scene.add(bedroom_light);
  bedroom_pointLight = new THREE.PointLight(0xfffff0,3,2.7);
  bedroom_pointLight.position.set(1.1,2,10.9);
  scene.add(bedroom_pointLight);
  bedroom_pointLight2 = new THREE.PointLight(0xfffff0,3,2.7);
  bedroom_pointLight2.position.set(3.5,2,10.9);
  scene.add(bedroom_pointLight2);
  bedroom_pointLight3 = new THREE.PointLight(0xfffff0,3,2.7);
  bedroom_pointLight3.position.set(3.5,2,8.9);
  scene.add(bedroom_pointLight3);
  bedroom_pointLight4 = new THREE.PointLight(0xfffff0,3,2.7);
  bedroom_pointLight4.position.set(1.1,2,8.9);
  scene.add(bedroom_pointLight4);
 
}

function livroom_light(scene){
  livroom_light = roof_lamp();
  livroom_light.rotation.x = Math.PI;
  livroom_light.scale.set(0.1,0.1,0.1);
  livroom_light.position.set(8,3.35,9.5);
  scene.add(livroom_light);
  livroom_pointLight = new THREE.PointLight(0xfffff0,3,2.7);
  livroom_pointLight.position.set(6.1,2,10.9);
  scene.add(livroom_pointLight);
  livroom_pointLight2 = new THREE.PointLight(0xfffff0,3,2.7);
  livroom_pointLight2.position.set(8.5,2,10.9);
  scene.add(livroom_pointLight2);
  livroom_pointLight3 = new THREE.PointLight(0xfffff0,3,2.7);
  livroom_pointLight3.position.set(8.5,2,8.9);
  scene.add(livroom_pointLight3);
  livroom_pointLight4 = new THREE.PointLight(0xfffff0,3,2.7);
  livroom_pointLight4.position.set(6.1,2,8.9);
  scene.add(livroom_pointLight4);
 
}

function closet_light(scene){
  closet_light = wall_lamp();
  closet_light.rotation.x = -Math.PI/2;
  closet_light.rotation.z = -Math.PI/2;
  closet_light.position.set(0.4,2,4.2)
  closet_light.scale.set(0.1,0.1,0.1);
  scene.add(closet_light);
  closet_pointLight = new THREE.PointLight(0xfffff0,3,2);
  closet_pointLight.position.set(1,2,4.2);
  scene.add(closet_pointLight);
  closet_pointLight2 = new THREE.PointLight(0xfffff0,3,2);
  closet_pointLight2.position.set(1.7,2,4.2);
  scene.add(closet_pointLight2);
  closet_pointLight3 = new THREE.PointLight(0xfffff0,3,2);
  closet_pointLight3.position.set(2.6,2,4.2);
  scene.add(closet_pointLight3);
}


function checkAutomatized(){
  if (panel.automatized_ls && sphereLightMesh.position.y <=0) {
     box.switched = true;
     box2.switched = true;
     box3.switched = true;
     box4.switched = true;
     box5.switched = true;
     box6.switched = true;
     box7.switched = true;
     box8.switched = true;
  } 
  if (panel.automatized_ls && sphereLightMesh.position.y >0) {
     box.switched = false;
     box2.switched = false;
     box3.switched = false;
     box4.switched = false;
     box5.switched = false;
     box6.switched = false;
     box7.switched = false;
     box8.switched= false; 
   }

}

function update_sl_position(step){
	  
    if (panel.dinamic_sun){
    sphereLightMesh.position.z = 0;
    sphereLightMesh.position.y = (50 * (Math.sin(step / 3)));
    sphereLightMesh.position.x = (50 * (Math.cos(step / 3)));
    directionalLight.position = sphereLightMesh.position;
    }
    checkAutomatized();
    if (box.switched) {
 
       hall_pointLight.visible=true;
       hall_pointLight2.visible=true;
       hall_pointLight3.visible=true;
       hall_pointLight4.visible=true;
    } else {
     
       hall_pointLight.visible=false;
       hall_pointLight2.visible=false;
       hall_pointLight3.visible=false;
       hall_pointLight4.visible=false;
    }   
    if (box2.switched) {
      bathroom_light.children[1].children[0].visible = true;
       bathroom_pointLight.visible=true;
       bathroom_pointLight2.visible=true;
       bathroom_pointLight3.visible=true;
       bathroom_pointLight4.visible=true;
    } else {
      bathroom_light.children[1].children[0].visible = false;
      bathroom_pointLight.visible=false;
      bathroom_pointLight2.visible=false;
      bathroom_pointLight3.visible=false;
      bathroom_pointLight4.visible=false;
    }
    if (box3.switched) {
       kitchen_light.children[0].children[0].visible = true;
       kitchen_pointLight.visible=true;
       kitchen_pointLight2.visible=true;
       kitchen_pointLight3.visible=true;
       kitchen_pointLight4.visible=true;
    } else {
      kitchen_light.children[0].children[0].visible = false;
      kitchen_pointLight.visible=false;
       kitchen_pointLight2.visible=false;
       kitchen_pointLight3.visible=false;
       kitchen_pointLight4.visible=false;
    }  

    if (box4.switched) {
       bedroom_light.children[0].children[0].visible = true;
       bedroom_pointLight.visible=true;
       bedroom_pointLight2.visible=true;
       bedroom_pointLight3.visible=true;
       bedroom_pointLight4.visible=true;
    } else {
      bedroom_light.children[0].children[0].visible = false;
       bedroom_pointLight.visible=false;
       bedroom_pointLight2.visible=false;
       bedroom_pointLight3.visible=false;
       bedroom_pointLight4.visible=false;
    }  

    if (box5.switched)  {
      livroom_light.children[0].children[0].visible = true;
       livroom_pointLight.visible=true;
       livroom_pointLight2.visible=true;
       livroom_pointLight3.visible=true;
       livroom_pointLight4.visible=true;
    } else {
       livroom_light.children[0].children[0].visible = false;
        livroom_pointLight.visible=false;
       livroom_pointLight2.visible=false;
       livroom_pointLight3.visible=false;
       livroom_pointLight4.visible=false;
    }   
    if (box6.switched) {
      bedroom2_light.children[0].children[0].visible = true;
       bedroom2_pointLight.visible=true;
       bedroom2_pointLight2.visible=true;
       bedroom2_pointLight3.visible=true;
       bedroom2_pointLight4.visible=true;
       bedroom2_pointLight5.visible=true;
       bedroom2_pointLight6.visible=true;
       bedroom2_pointLight7.visible=true;
    } else {
      bedroom2_light.children[0].children[0].visible = false;
       bedroom2_pointLight.visible=false;
       bedroom2_pointLight2.visible=false;
       bedroom2_pointLight3.visible=false;
       bedroom2_pointLight4.visible=false;
       bedroom2_pointLight5.visible=false;
       bedroom2_pointLight6.visible=false;
       bedroom2_pointLight7.visible=false;
    }
    if (box7.switched) {
      closet_light.children[1].children[0].visible = true;
      closet_pointLight.visible = true;
      closet_pointLight2.visible = true;
      closet_pointLight3.visible = true;
    } else {
      closet_light.children[1].children[0].visible = false;
       closet_pointLight.visible = false;
      closet_pointLight2.visible = false;
      closet_pointLight3.visible = false;
    }
    if (box8.switched){
             hall_lamp.children[1].children[0].visible = true;
      hall_pointLight.visible=true;
       hall_pointLight2.visible=true;
       hall_pointLight3.visible=true;
       hall_pointLight4.visible=true;
    } else {
             hall_lamp.children[1].children[0].visible = false;
       hall_pointLight.visible=false;
       hall_pointLight2.visible=false;
       hall_pointLight3.visible=false;
       hall_pointLight4.visible=false;
    }
}

function makeBox() {
  var tex = THREE.ImageUtils.loadTexture("assets/textures/general/switch.jpg")
  var bump = THREE.ImageUtils.loadTexture("assets/textures/general/switch_bump.jpg")
   elem = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.1,0.05), new THREE.MeshPhongMaterial({map:tex,bumpMap: bump, bumpScale:0.1}))
      elem.switched = true;
   
      elem.interact = function() {
       
        if (this.switched) {
           this.switched = false;
        } else {
          this.switched = true;
        }
      }
      return elem;
}


  function light_switch(scene, objects2) {
      box= makeBox();
      box2 = makeBox()
      box3 = makeBox();
      box4 = makeBox();
      box5 = makeBox();
      box7 = makeBox();
      box6 = makeBox(); 
      box8 = makeBox();
      box.visible=false;

      
    
      box2.rotation.y = Math.PI/2;
      box3.rotation.y = Math.PI/2;
      box6.rotation.y = Math.PI/2;
      box2.position.set(3.2,1.3,5.35); 
      box3.position.set(6.4,1.3,5.35);
      box4.position.set(3.45,1.3,7.91);
      box5.position.set(6.6,1.3,7.91);
      box6.position.set(3.4,1.3,3.7);
      box7.position.set(3,1.3,3.7);
      box8.position.set(4.8,1.3,5.16);
      scene.add(box);
      scene.add(box2);
      scene.add(box3);
      scene.add(box6);
      scene.add(box4);
      scene.add(box5);
      scene.add(box7);
      scene.add(box8);
      objects2.push(box);
      objects2.push(box2);
      objects2.push(box3);
      objects2.push(box4);
      objects2.push(box5);
      objects2.push(box7);
      objects2.push(box6);
      objects2.push(box8);
    }

