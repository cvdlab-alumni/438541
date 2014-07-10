
function initControls() {
    
    panel = new function () {
       this.alpha = 3.85; 
       this.beta = 0.4; 
       this.gamma = 1.02; 
       this.delta = 3.2; 
       this.epsilon = 0.1;
    	 this.automatized_ls = true;
    	 this.dinamic_sun = true;
    	 this.update_mirror = false;
    	 this.robot_view = false;
        this.switch_control = false;
    }

    gui = new dat.GUI(); 
     gui.add(panel, 'alpha', 0, 2*Math.PI).onChange(function (value) { 
    cylinder.rotation.y = value; }); 
  gui.add(panel, 'beta', 0, Math.PI/2).onChange(function (value) { 
    joint.rotation.z = -value; }); 
  gui.add(panel, 'gamma', 0, Math.PI/2).onChange(function (value) { 
    joint2.rotation.z = -value; }); 
  gui.add(panel, 'delta', 0, 2*Math.PI).onChange(function (value) { 
    cylinder2.rotation.y = value; }); 
    gui.add(panel, 'epsilon', 0, Math.PI/2).onChange(function (value) { 
    cylinder3.rotation.z = -value; });  
    gui.add(panel,'automatized_ls');
    gui.add(panel, 'dinamic_sun');
    gui.add(panel,'update_mirror');
    gui.add(panel, 'robot_view').onChange(function(value){
       if (value){
          extcamera = camera3; 
          verticalMirror.camera = extcamera;

       } else {

          extcamera = camera;
          verticalMirror.camera = extcamera;
       }

    });
    gui.add(panel,'switch_control').onChange(function(value){
       if (value && !panel.robot_view) {
        camera = camera2;
        extcamera = camera;
        verticalMirror.camera = extcamera;
        controls = firstControls;

       } else {
        verticalMirror.camera = camera1;
        camera = camera1;
        extcamera = camera;
         verticalMirror.camera = extcamera;
        controls = trackballControls;
       } 
    });
}