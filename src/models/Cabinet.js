INTERACTIVEWORLD.Cabinet = function() {
  var that = this;
  THREE.Object3D.call(this);
  this.name = 'Cabinet';

  // load the model
  var loader = new THREE.ColladaLoader();
  loader.load(INTERACTIVEWORLD.CABINET_MODEL, function(result) {
    // fix the offset
    result.scene.position.y = 0.1;
    that.add(result.scene);
  });
};
INTERACTIVEWORLD.Cabinet.prototype.__proto__ = THREE.Object3D.prototype;
