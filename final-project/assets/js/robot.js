function robot(scene, objects2) {
  

     robot_base = new THREE.Mesh(new THREE.CylinderGeometry(.125,.25,.3,32,32), new THREE.MeshPhongMaterial({color: 0x00ff00, side: THREE.DoubleSide}))
     robot_upper = new THREE.Mesh(new THREE.CylinderGeometry(.28,.28,.25,32,32), new THREE.MeshPhongMaterial({color: 0xff0000, side: THREE.DoubleSide}))
  
     robot_base.add(robot_upper);
     objects2.push(robot_base);
     robot_base= robot_base;
     sphereSight = new THREE.SphereGeometry(0.2);
     sphereSightMaterial = new THREE.MeshBasicMaterial({color: 0xffff25});
     sphereSightMesh = new THREE.Mesh(sphereSight, sphereSightMaterial);
     sphereSightMesh.position.set(10,0.5,0);
     sphereSightMesh.visible= false;
     robot_base.add(sphereSightMesh);
     robot_base.add(camera3);
     camera3.lookAt(sphereSightMesh.position);
     camera3.position.set(0,0.5,0);
     scene.add(robot_base);
     robot_base.interact = function() {
      door1 = getBed2Door();
      console.log(door1);
     	position = this.position;
        animator = new KF.KeyFrameAnimator;
        animator.init({
          interps:
            [
              {
                keys:[0,.05,.2,.96,1],
                values:[
                  {y:door1.parent.rotation.y},
                  {y:0},
                  {y:0},
                  {y:0},
                  {y:door1.parent.rotation.y},
                                       
                ],
                target:door1.parent.rotation
              },
                {
                keys:[0,.05,.2,.96,1],
                values:[
                  {y:bedroom_door.parent.rotation.y},
                  {y:0},
                  {y:0},
                  {y:0},
                  {y:bedroom_door.parent.rotation.y},
                                       
                ],
                target:bedroom_door.parent.rotation
              },
              {
               keys:[0,.05,.2,.96,1],
                values:[
                  {y:bathroom_door.parent.rotation.y},
                  {y:0},
                  {y:0},
                  {y:0},
                  {y:bathroom_door.parent.rotation.y},
                                       
                ],
                target:bathroom_door.parent.rotation
              },
                {
               keys:[0,.05,.2,.96,1],
                values:[
                  {y:kitchen_door.parent.rotation.y},
                  {y:0},
                  {y:0},
                  {y:0},
                  {y:kitchen_door.parent.rotation.y},
                                       
                ],
                target:kitchen_door.parent.rotation
              }, 
                {
               keys:[0,.05,.2,.96,1],
                values:[
                  {y:kitchen_door2.parent.rotation.y},
                  {y:Math.PI},
                  {y:Math.PI},
                  {y:Math.PI},
                  {y:kitchen_door2.parent.rotation.y},
                                       
                ],
                target:kitchen_door2.parent.rotation
              },    
                  {
               keys:[0,.05,.2,.96,1],
                values:[
                  {y:livroom_door.parent.rotation.y},
                  {y:Math.PI},
                  {y:Math.PI},
                  {y:Math.PI},
                  {y:livroom_door.parent.rotation.y},
                                       
                ],
                target:livroom_door.parent.rotation
              }, 
                {
               keys:[0,.05,.2,.96,1],
                values:[
                  {y:livroom_door2.parent.rotation.y},
                   {y:0},
                  {y:0},
                  {y:0},
                  {y:livroom_door2.parent.rotation.y},
                                       
                ],
                target:livroom_door2.parent.rotation
              },       

              {
                keys:[0,.03,.06,.09,.12,.15,.18,.21,.24,.27,.30,.33,.36,.39,.42,.45,.48,.51,.54,.57,.60,.63,.66,.69,.72,.75,.78,.81,.84,.87,.90,.93,.96,.99],
                values:[
                  {x: position.x,z: position.z,y: position.y},
                  {x: position.x+3.1, z: position.z,y: position.y},
                  {x: position.x+3.1, z: position.z,y: position.y},
                  {x:position.x+3.1,z:position.z+9.3,y:position.y},
                  {x:position.x+3.1,z:position.z+9.3,y:position.y},
                  {x:position.x,z:position.z+9.3,y:position.y},
                  {x:position.x,z:position.z+9.3,y:position.y},
                  {x:position.x,z:position.z+7.5,y:position.y},
                  {x:position.x,z:position.z+7.5,y:position.y},
                  {x:position.x,z:position.z+9.3,y:position.y},
                  {x:position.x,z:position.z+9.3,y:position.y},
                  {x:position.x+3,z:position.z+9.3,y:position.y},
                  {x:position.x+3,z:position.z+9.3,y:position.y},      
                  {x:position.x+3,z:position.z+5.35,y:position.y},
                  {x:position.x+3,z:position.z+5.35,y:position.y},
                  {x:position.x+4.6,z:position.z+5.35,y:position.y},
                  {x:position.x+4.6,z:position.z+5.35,y:position.y},
                  {x:position.x+4.6,z:position.z+9,y:position.y},
                  {x:position.x+4.6,z:position.z+9,y:position.y},
                  {x:position.x+8,z:position.z+9,y:position.y},
                  {x:position.x+8,z:position.z+9,y:position.y},
                  {x:position.x+4.6,z:position.z+9,y:position.y},
                  {x:position.x+4.6,z:position.z+9,y:position.y},
                  {x:position.x+4.6,z:position.z+5.35,y:position.y},
                  {x:position.x+4.6,z:position.z+5.35,y:position.y},
                  {x:position.x+8,z:position.z+5.35,y:position.y},
                  {x:position.x+8,z:position.z+5.35,y:position.y},
                  {x:position.x,z:position.z+5.35,y:position.y},
                  {x:position.x,z:position.z+5.35,y:position.y},
                  {x:position.x+3.1,z:position.z+5.35,y:position.y},
                  {x:position.x+3.1,z:position.z+5.35,y:position.y},
                  {x:position.x+3.1,z:position.z,y:position.y},
                  {x:position.x+3.1,z:position.z,y:position.y},
                  {x:position.x,z:position.z,y:position.y},  
                ],
                target:this.position
              },
              {
                keys:[.03,.06,.09,.12,.15,.18,.21,.225,.24,.27,.30,.33,.36,.39,.42,.45,.48,.51,.54,.57,.60,.615,.63,.66,.69,.72,.75,.765,.78,.81,.825,.84,.87,.90,.93,.96,.99,1],
                values: [
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-(3/2)*Math.PI),y:1,z:-10*Math.sin(-(3/2)*Math.PI)},
                  {x: 10*Math.cos(-(3/2)*Math.PI),y:1,z:-10*Math.sin(-(3/2)*Math.PI)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI/2),y:1,z:-10*Math.sin(-Math.PI/2)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(Math.PI/2),y:1,z:-10*Math.sin(Math.PI/2)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                  {x: 10*Math.cos(-Math.PI),y:1,z:-10*Math.sin(-Math.PI)},
                   {x: 10*Math.cos(Math.PI),y:1,z:-10*Math.sin(Math.PI)},
                ],
                target:this.children[1].position
              },
            
               
            ],
      
          loop: false,
          duration: 100000
        });
      
        animator.start();
     }
     robot_base.position.set(1,0.2,0.95);
}

function getRobot(){
	return robot_base;
}


       

 