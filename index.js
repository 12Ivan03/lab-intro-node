class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error("OutOfBounds");
    } else if(typeof pos === 'number'){
      return this.items[pos];
    }
  }

  max() {
    let heightstNum = this.items.sort((a,b) => a-b);

    if(this.items.length === 0){
      throw new Error("OutOfBounds");
    } else {
      return heightstNum[heightstNum.length - 1];
    }
  }

  min() {
    let heightstNum = this.items.sort((a,b) => a-b);

    if(this.items.length === 0){
      throw new Error("OutOfBounds");
    } else {
      return heightstNum[0];
    }
  }

  sum() {
    if(this.items.length > 0){
      return this.items.reduce((acc, curValue) => acc + curValue);
    } else {
      return 0
    }
  }

  avg() {
    if(this.items.length > 0){
      const totalNum = this.items.reduce((acc, curValue) => acc + curValue);
      return totalNum/this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
