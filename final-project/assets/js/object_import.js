function importObjects(scene,objects2) {

	var loaderSofa = new THREE.OBJMTLLoader(); 
	loaderSofa.addEventListener('load', function (event) { 
		var object = event.content; 
		
		mesh = object; 
		scene.add(mesh); 
		object.scale.set(1,1,1);
        object.position.set(8,.2,8.5) 	
	
	 }); 
	 loaderSofa.load( 'assets/models/simple_sofa.obj', 'assets/models/simple_sofa.mtl', {side: THREE.DoubleSide} );
    
      var loaderTv = new THREE.OBJMTLLoader(); 
  loaderTv.addEventListener('load', function (event) { 
    var object = event.content; 
    
    mesh = object; 
    scene.add(mesh); 
    object.rotation.y = Math.PI;
    object.scale.set(.03,.03,.03);
        object.position.set(8,.2,11)  
    object.children[0].children[3].visible=false;
    
    
    
   }); 
   loaderTv.load( 'assets/models/led_tv.obj', 'assets/models/led_tv.mtl', {side: THREE.DoubleSide} );

    var loaderBed = new THREE.OBJMTLLoader(); 
   loaderBed.addEventListener('load', function (event) { 
    var object = event.content; 
    
    mesh = object; 
    scene.add(mesh); 
    
    object.scale.set(.01,.011,.01);
  
    object.position.set(2.5,.5,10)
    
    
    
    
   }); 
   loaderBed.load( 'assets/models/lit.obj', 'assets/models/lit.mtl', {side: THREE.DoubleSide} );

   var loaderToilets = new THREE.OBJMTLLoader(); 
   loaderToilets.addEventListener('load', function (event) { 
    var object = event.content; 
    
    mesh = object; 
    scene.add(mesh); 
    
    object.scale.set(.01,.01,.01);
  
    object.position.set(1,.2,5.1)
    
    
    
    
   }); 
   loaderToilets.load( 'assets/models/toiletsUnit.obj', 'assets/models/toiletsUnit.mtl', {side: THREE.DoubleSide} );

   
    var loaderBed2 = new THREE.OBJMTLLoader(); 
    loaderBed2.addEventListener('load', function (event) { 
    var object = event.content; 
    
    mesh = object; 
    scene.add(mesh); 
    
    object.scale.set(.0095,.0095,.0095);
  
    object.position.set(1,1,1)
    object.rotation.y = Math.PI/2;
    object.position.set(0.4,0.2,0.7)
    
    
    
    
   }); 
   loaderBed2.load( 'assets/models/bunkBed.obj', 'assets/models/bunkBed.mtl', {side: THREE.DoubleSide} );
   
   
   var loaderBedTable = new THREE.OBJMTLLoader(); 
   loaderBedTable.addEventListener('load', function (event) { 
    var object = event.content; 
    
    mesh = object; 
    scene.add(mesh); 
    
    object.scale.set(.015,.015,.015);
  
    object.position.set(1,1,1)
    object.rotation.y = Math.PI
    object.position.set(2.8,0.2,3.2)
    
    
    
    
   }); 
   loaderBedTable.load( 'assets/models/bedsideTable.obj', 'assets/models/bedsideTable.mtl', {side: THREE.DoubleSide} );
   
   
   var loaderAudio = new THREE.OBJMTLLoader(); 
   loaderAudio.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
    
   object.scale.set(.015,.015,.015);
  
   object.position.set(1,1,1)
   object.rotation.y = Math.PI
   object.position.set(2.8,0.9,3)
    
    
    
    
   }); 
   loaderAudio.load( 'assets/models/audio.obj', 'assets/models/audio.mtl', {side: THREE.DoubleSide} );
   

   var loaderDesk = new THREE.OBJMTLLoader(); 
   loaderDesk.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
    
   object.scale.set(.0125,.0125,.0125);
   object.rotation.t = Math.PI
   object.position.set(1,1,1)
   object.position.set(-5,0.2,-0.35)
    
    
    
    
   }); 
   loaderDesk.load( 'assets/models/scrivania160W.obj', 'assets/models/scrivania160W.mtl', {side: THREE.DoubleSide} );

   var loaderPc = new THREE.OBJMTLLoader(); 
   loaderPc.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
    
   object.scale.set(1,1,1);
  
   object.position.set(1,1,1)
   object.position.set(3,1.1,0.75)
    
    
    
    
   }); 
   loaderPc.load( 'assets/models/apple-ibook-2001.obj', 'assets/models/apple-ibook-2001.mtl', {side: THREE.DoubleSide} );


   var loaderFridge = new THREE.OBJMTLLoader(); 
   loaderFridge.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
    
   object.scale.set(.175,.175,.175);
  
  
   object.position.set(9,1,5.4)
    
    
    
    
   }); 
   loaderFridge.load( 'assets/models/fridge.obj', 'assets/models/fridge.mtl', {side: THREE.DoubleSide} );



  var loaderShelf = new THREE.OBJMTLLoader(); 
   loaderShelf.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
   object.rotation.y = Math.PI/2;
   object.scale.set(.01,.01,.01);
  
  
   object.position.set(5,.2,9.8)
    
    
    
    
   }); 
   loaderShelf.load( 'assets/models/dining_room.obj', 'assets/models/dining_room.mtl', {side: THREE.DoubleSide} );


   
   var loaderChair = new THREE.OBJMTLLoader(); 
   loaderChair.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
  object.rotation.y = -Math.PI/4
   object.scale.set(.09,.09,.09);
  

   object.position.set(2.8,.6,1.8)
    
    
    
    
   }); 
   loaderChair.load( 'assets/models/office-chair.obj', 'assets/models/office-chair.mtl', {side: THREE.DoubleSide} );



   var loaderChair = new THREE.OBJMTLLoader(); 
   loaderChair.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
  
   object.scale.set(.01,.01,.01);
  

   object.position.set(2.3,.2,5.11)
    
    
    
    
   }); 
   loaderChair.load( 'assets/models/bath_jay_hardy.obj', 'assets/models/bath_jay_hardy.mtl', {side: THREE.DoubleSide} );


   var loaderChair = new THREE.OBJMTLLoader(); 
   loaderChair.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
   object2 = object.clone();
   scene.add(object2)
   object.rotation.y = Math.PI;
   object2.rotation.y = Math.PI/2;
   object.scale.set(.01,.01,.01);
   object2.scale.set(.01,.01,.01);
   
   object.position.set(3.8,.2,11.25);
   object2.position.set(0.8,.2,10.7)
    
    
    
    
   }); 
   loaderChair.load( 'assets/models/mobileangoloCiliegio.obj', 'assets/models/mobileangoloCiliegio.mtl', {side: THREE.DoubleSide} );


   var loaderTable = new THREE.OBJMTLLoader(); 
   loaderTable.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
   object.rotation.y = Math.PI/2;
   object.scale.set(1,1,1);
  

   object.position.set(6.5,.2,10.5)
    
    
    
    
   }); 
   loaderTable.load( 'assets/models/saloon_table.obj', 'assets/models/saloon_table.mtl', {side: THREE.DoubleSide} );


   var loaderTable = new THREE.OBJMTLLoader(); 
   loaderTable.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
   object.rotation.y = Math.PI/2;
   object.scale.set(1,1,1);
  

   object.position.set(6.5,.2,10.3)
    
    
    
    
   }); 
   loaderTable.load( 'assets/models/saloon_table.obj', 'assets/models/saloon_table.mtl', {side: THREE.DoubleSide} );



   var loaderOven = new THREE.OBJMTLLoader(); 
   loaderOven.addEventListener('load', function (event) { 
   var object = event.content; 
    
   mesh = object; 
   scene.add(mesh); 
   object.rotation.y = Math.PI;
   object.scale.set(.12,.12,.12);
  

   object.position.set(8.5,0.85,7.33)
    
    
    
    
   }); 
   loaderOven.load( 'assets/models/stove1.obj', 'assets/models/stove1.mtl', {side: THREE.DoubleSide} );







   

   










}
   

 
