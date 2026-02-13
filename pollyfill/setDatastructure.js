(function() {
  if (typeof Set !== "undefined") return;

  function MySet(initialArray = []) {
    this._items = [];
    this.size = 0;

    // If an array is passed to the constructor, add its elements
    initialArray.forEach(val => this.add(val));
  }

  MySet.prototype.add = function(value) {
    if (!this.has(value)) {
      this._items.push(value);
      this.size++;
    }
    return this; // Allows chaining: set.add(1).add(2)
  };

  MySet.prototype.has = function(value) {
    return this._items.indexOf(value) !== -1;
  };

  MySet.prototype.delete = function(value) {
    const index = this._items.indexOf(value);
    if (index === -1) return false;
    
    this._items.splice(index, 1);
    this.size--;
    return true;
  };

  MySet.prototype.clear = function() {
    this._items = [];
    this.size = 0;
  };

  window.Set = MySet;
})();
