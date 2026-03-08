import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@0.142.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, earthMesh, moonMesh, controls;

// ページが読み込まれたら初期化
window.addEventListener("load", init);

// 初期化
function init() {
  // シーンの作成
  scene = new THREE.Scene();

  // カメラの作成
  // PerspetiveCamera(視野角, アスペクト比, 開始距離, 終了距離)
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(0, 0, 500);

  // レンダラーの作成
  renderer = new THREE.WebGLRenderer({ alpha: true });
  document.body.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.render(scene, camera);

  // テクスチャを追加
  const earthTexture = new THREE.TextureLoader().load("earth.jpg");
  const moonTexture = new THREE.TextureLoader().load("moon.jpg");
  // ジオメトリを作成
  // SphereGeometry(半径, 横分割数, 縦分割数)
  const earthGeometry = new THREE.SphereGeometry(100, 64, 32);
  // マテリアルを作成
  const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
  // メッシュを作成
  earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  // シーンに追加
  scene.add(earthMesh);



  // SphereGeometry(半径, 横分割数, 縦分割数)
  const moonGeometry = new THREE.SphereGeometry(30, 64, 32);
  // マテリアルを作成
  const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
  // メッシュを作成
  moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
  // シーンに追加
  scene.add(moonMesh);

  // アンビエントライト（環境光）
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // ディレクショナルライト（太陽光のような光）
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // マウス操作　有効化
  controls = new OrbitControls(camera, renderer.domElement);
  // 画面がリサイズされたら、レンダラー・カメラを更新
  window.addEventListener("resize", onWindowResize);

  animate();
}

// ウィンドウサイズ変更に対応
function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  // カメラのアスペクト比を更新
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// フレームごとのアニメーション
function animate() {
  moonMesh.position.set(
    300 * Math.sin(Date.now() / 1000),
    300 * Math.sin(Date.now() / 1000),
    300 * Math.cos(Date.now() / 1000),
  );
  moonMesh.rotation.y += 0.01;
  earthMesh.rotation.y += 0.005;
  requestAnimationFrame(animate);
  // レンダリング
  renderer.render(scene, camera);
}
