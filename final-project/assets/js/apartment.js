function initStructure() {
	 apartment = new THREE.Object3D();
	 var mesh;

    var loader = new THREE.OBJLoader();
    loader.load('assets/models/apartment.obj', function (geometry) {
      
      var material = new THREE.MeshLambertMaterial({color: 0xe2e2e2 ,side: THREE.DoubleSide});
      
      // geometry is a group of children. If a child has one additional child it's probably a mesh
      geometry.children.forEach(function (child) {
         
          if (child instanceof THREE.Mesh) {
            child.material = material;
            
          }
          
      });


        
        mesh = geometry;
       
        apartment.add(mesh);
    });
  
    scene.add(apartment);

}