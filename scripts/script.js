var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
// pointLight.position.set( 10, 10, 10 );
// scene.add(pointLight);

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 150, 100 );

spotLight.castShadow = true;

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;

// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;

scene.add( spotLight );

var geometry = new THREE.BoxGeometry( 3, .3, 2 );
var texture = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/9/92/White_stone_texture_%2801%29.jpg');
var material = new THREE.MeshLambertMaterial({color: '#f2f2f2', map: texture, opacity: 1, transparent: false});
var tablet = new THREE.Mesh( geometry, material );
scene.add( tablet );

camera.position.z = 5;
camera.position.y = 2;

function animate() {
  requestAnimationFrame( animate );
  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;
  renderer.render( scene, camera );
}
animate();