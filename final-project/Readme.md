**COMPUTATIONAL GRAPHICS - FINAL PROJECT**
=======================================

Alessio Cialini - 438541
--------------------------

**Code organization :**

* [index](index.html) scripts recall and rendering.
* [init](assets/js/init.js) creates basical elements such as cameras, renderer. it also creates the external floor, and the elements used for basical raycasting and object picking.
* [control_panel] (assets/js/control_panel.js) creates the control panel and intizialize the control parameters
* the functions [bathroom](assets/js/bathroom.js),[kitchen](assets/js/hall_kitchen.js),[bedroom](assets/js/bedroom.js),[bedroom2](assets/js/bedroom2),[living_room](assets/js/living_room.js),[closet](assets/js/closet.js) and [external](assets/js/external.js) add some basical details to rooms and external elements of the apartment, such as textures, windows and doors.
* [import_objects](assets/js/import_objects.js) used to import all of the .obj files added in the scene.
* [makeVideo](assets/js/video.js) creates and manage the status of some videos imported and rendered in the scene with proper interactions.
* [makeAudio](assets/js/audio.js) creates and manage the status of some audio files and played during the rendering with proper interactions.
* [robot](assets/js/robot.js) creates a simple model of a cleaner robot, with a defined pattern animation, door controls and fixed camera switching.
* [makeScreenSaver](assets/js/screen.js) creates a sort of screen saver effect using the sprite animation of a tiled texture.
* [makeFrame](assets/js/makeFrame.js) creates a picture frame, with proper bump map effect.
* [makeLamp](assets/js/lamp.js) creates a model of a table lamp, similar to the pixar lamp, the model was former created for one of the homeworks for cvdlab.
* [lights](assets/js/lights.js) defines general light effects such as ambient and directional lights. It also provides the functions to create room lights and self-created lamp models, and to manage an automatic or interactive light switiching.
* [skybox](assets/js/skybox.js) creates the day and night versions for the skybox.

=======

**Graphic techniques :**

* STATIC TEXTURES AND BUMP MAPS for several elements such as floors, walls, windows, doors and wall lamps. 
* KEYFRAME for robot and door animations
* VIDEO TEXTURE for the tv screen
* AUDIO for the mp3 base player
* SKYBOX with day/night switch
* AUDIO FADING for video and audio elements
* DIRECTIONAL LIGHT + AMBIENT LIGHT for day/night effect
* CONTROL PANEL
* OBJ + MTL IMPORT for room detailing
* **AUTOMATIZED ROOM LIGHTS** 
* **MIRROR EFFECT** 
* **FIRST PERSON CAMERA** with camera switch controls
* **FIXED CAMERA** for robot view
* **PARTICLE ENGINE** for clouds
* **OBJECT PICKING** for element interactions
* **OBJECT CONTROL** for mouse control door and windows opening

