 
 var INTERSECTED, SELECTED;


 function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

 }

  
 function onDocumentMouseMove( event ) {

        event.preventDefault();
                mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                        //

                        var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
                        projector.unprojectVector( vector, camera );

                        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );


                        if ( SELECTED ) {
                          if (panel.switch_control){
                          var intersects = raycaster.intersectObject( box );
                          rotation = SELECTED.parent.rotation.y - (intersects[ 0 ].point.sub( offset ).y/100);
                          } else {
                            var intersects = raycaster.intersectObject( plane );
                            rotation = SELECTED.parent.rotation.y - (intersects[ 0 ].point.sub( offset ).y/50);
                          }
                          
                        
                          if (Math.sin(rotation)>0 && Math.sin(rotation)<1.01) {
                          SELECTED.parent.rotation.y = rotation;
                          console.log(Math.sin(rotation));
                          }
                          
                          return;

                        }


                        var intersects = raycaster.intersectObjects( objects );

                        if ( intersects.length > 0 ) {

                          if ( INTERSECTED != intersects[ 0 ].object ) {

                            if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

                            INTERSECTED = intersects[ 0 ].object;
                            INTERSECTED.currentHex = INTERSECTED.material.color.getHex();

                            plane.position.copy( INTERSECTED.position );

                            plane.lookAt( camera.position );


                          }

                          container.style.cursor = 'pointer';

                        } else {

                          if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );

                          INTERSECTED = null;

                          container.style.cursor = 'auto';

                        }

                      }

                      function onDocumentMouseDown( event ) {

                        event.preventDefault();

                        var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );
                        projector.unprojectVector( vector, camera );

                        var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
                         
                        

                        var intersects = raycaster.intersectObjects( objects );
                        var intersects2 = raycaster.intersectObjects(objects2);

                        if ( intersects.length > 0 ) {

                          controls.enabled = false;

                          SELECTED = intersects[ 0 ].object;

                          var intersects = raycaster.intersectObject( plane );
                          offset.copy( intersects[ 0 ].point ).sub( plane.position );

                          container.style.cursor = 'move';

                        }

                        if (intersects2.length > 0) {
                      
                          intersects2[0].object.interact();
                          
                        }

                      }

                      function onDocumentMouseUp( event ) {

                        event.preventDefault();

                        controls.enabled = true;

                        if ( INTERSECTED ) {

                          plane.position.copy( INTERSECTED.position );

                          SELECTED = null;

                        }

                        container.style.cursor = 'auto';

                      }