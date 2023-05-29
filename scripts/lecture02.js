let backButton = document.getElementById('backButton02');

backButton.addEventListener("click",function(){
    window.location.replace('/');
    console.log("ITS WOKRING BITCHES");
});

const clouds = document.getElementById("clouds");
const dots = document.getElementById("dots");
const temple = document.getElementById("temple");
const ground = document.getElementById("ground");
const bushColums = document.getElementById("backgroundRocks");
const middle = document.getElementById("middleMove");
const rockBush = document.getElementById("bigRockPillar");
const frontPillars = document.getElementById("frontPillars");
const frontFlowers = document.getElementById("frontFlowers");



// window.addEventListener('mousemove', function(e){

//     dots.style.left = 0.05 * -e.pageY + 'px';
//     clouds.style.left = 0.009 * -e.pageY + 'px';
//     frontFlowers.style.top = 0.005 * e.pageX + 'px';
//     rockBush.style.left = 0.005 * -e.pageX + 'px';
//     rockBush.style.transform = 5 * -e.pageX + 'deg';
// })




//three js stuff
// const scene = new THREE.Scene();


// const layer1 = new THREE.TextureLoader().load("../../clouds.png");
// const layer2 = new THREE.TextureLoader().load("../../temple.png");
// const layer3 = new THREE.TextureLoader().load("../../ground.png");
// const layer4 = new THREE.TextureLoader().load("../../backgroundRocks.png");
// const layer5 = new THREE.TextureLoader().load("../../middleMove.png");
// const layer6 = new THREE.TextureLoader().load("../../bigRockPillar.png");
// const layer7 = new THREE.TextureLoader().load("../../frontPillars.png");
// const layer8 = new THREE.TextureLoader().load("../../frontFlowers.png");

// const layer1_material = new THREE.MeshBasicMaterial({
//     map: layer1,
//     transparent: true,
//     opacity: 1
// });


// const layer1_plane = new THREE.PlaneGeometry( 1, 1 );
// scene.add(layer1_plane);

// const layer1_mesh = new THREE.Mesh(layer1_plane, layer1_material);

// layer1_mesh.position.set(0, 0, 0);
// layer1_mesh.scale.set(imgwidth, imgHeight, 0);

// scene.add(layer1_mesh);

//let imgHeight = 500;
//let imgwidth = 1000;

//layer 1
// const layer1Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer1Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer1, transparent: true} );
// const layer1Plane = new THREE.Mesh(layer1Geo, layer1Mat);
// layer1Plane.position.set(0, 0, 0);
// layer1Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer1Plane);

// //layer 2
// const layer2Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer2Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer2, transparent: true} );
// const layer2Plane = new THREE.Mesh(layer2Geo, layer2Mat);
// layer2Plane.position.set(0, 0, -100);
// layer2Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer2Plane);

// //layer 3
// const layer3Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer3Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer3, transparent: true} );
// const layer3Plane = new THREE.Mesh(layer3Geo, layer3Mat);
// layer3Plane.position.set(0, 0, -200);
// layer3Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer3Plane);

// //layer 4
// const layer4Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer4Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer4, transparent: true} );
// const layer4Plane = new THREE.Mesh(layer4Geo, layer4Mat);
// layer4Plane.position.set(0, 0, -300);
// layer4Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer4Plane);

// //layer 5
// const layer5Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer5Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer5, transparent: true} );
// const layer5Plane = new THREE.Mesh(layer5Geo, layer5Mat);
// layer5Plane.position.set(0, 0, -400);
// layer5Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer5Plane);

// //layer 6
// const layer6Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer6Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer6, transparent: true} );
// const layer6Plane = new THREE.Mesh(layer6Geo, layer6Mat);
// layer6Plane.position.set(0, 0, -500);
// layer6Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer6Plane);

// //layer 7
// const layer7Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer7Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer7, transparent: true} );
// const layer7Plane = new THREE.Mesh(layer7Geo, layer7Mat);
// layer7Plane.position.set(0, 0, -600);
// layer7Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer7Plane);

// //layer 8
// const layer8Geo = new THREE.PlaneGeometry( 1, 1 );
// const layer8Mat = new THREE.MeshBasicMaterial( {side: THREE.DoubleSide, map: layer8, transparent: true} );
// const layer8Plane = new THREE.Mesh(layer8Geo, layer8Mat);
// layer8Plane.position.set(0, 0, -700);
// layer8Plane.scale.set(imgwidth, imgHeight, 0);
// scene.add(layer8Plane);


// const map = new THREE.TextureLoader().load( '../../clouds.png' );
// const material = new THREE.SpriteMaterial( { map: map } );

// const sprite = new THREE.Sprite( material );
// sprite.scale.set(imgwidth, imgHeight, 0);
// sprite.position.set(0, 0, 0);
// sprite.geometry.center();
// scene.add( sprite );



// let aspectRatio = window.innerWidth / window.innerHeight;
// const camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000);

// camera.position.set(0, 0, 10);


// //shows an axis 
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.querySelector('body').appendChild(renderer.domElement);

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// animate();

// const controls = new THREE.OrbitControls(camera, renderer.domElement );

// controls.update();



//adding a box 
// const boxGeo = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({
//     color: 0x00FF00
// });
// const box = new THREE.Mesh(boxGeo, boxMaterial);
// scene.add(box);



// function rotateBox(){
//     box.rotation.x += 0.01;
//     box.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(rotateBox);









// //set up
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1, 
//     1000
// );

// //shows an axis 
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(0, 2, 5);

// const controls = new THREE.OrbitControls( camera, renderer.domElement );

// controls.update();



// //adding a box 
// const boxGeo = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({
//     color: 0x00FF00
// });
// const box = new THREE.Mesh(boxGeo, boxMaterial);
// scene.add(box);



// function rotateBox(){
//     box.rotation.x += 0.01;
//     box.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(rotateBox);

// const map = new THREE.TextureLoader().load( 'sprite.png' );
// const material = new THREE.SpriteMaterial( { map: map } );
// const sprite = new THREE.Sprite( material );


 