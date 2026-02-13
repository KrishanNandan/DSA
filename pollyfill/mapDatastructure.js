(function() {
  if (typeof Map !== "undefined") return;

  function MyMap() {
    this._keys = [];
    this._values = [];
    this.size = 0;
  }

  MyMap.prototype.set = function(key, value) {
    const index = this._keys.indexOf(key);
    if (index !== -1) {
      this._values[index] = value; // Update existing
    } else {
      this._keys.push(key);
      this._values.push(value); // Add new
      this.size++;
    }
    return this;
  };

  MyMap.prototype.get = function(key) {
    const index = this._keys.indexOf(key);
    return index !== -1 ? this._values[index] : undefined;
  };

  MyMap.prototype.has = function(key) {
    return this._keys.indexOf(key) !== -1;
  };

  MyMap.prototype.delete = function(key) {
    const index = this._keys.indexOf(key);
    if (index === -1) return false;
    this._keys.splice(index, 1);
    this._values.splice(index, 1);
    this.size--;
    return true;
  };

  window.Map = MyMap; // Attach to global scope
})();
