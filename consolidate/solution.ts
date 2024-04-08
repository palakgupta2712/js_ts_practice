interface Array<T> {
  consolidate(): T;
}

Array.prototype.consolidate = function() {
  while (this.length > 1) {   
    this.sort((a, b) => (b as number) - (a as number));
    let largestNums = this.splice(0, 2)
    this.push(largestNums[0] - largestNums[1])
  }
  return this[0];
};

const array: number[] = [100,75,120,90,150,110]
const result: number = array.consolidate(); // 5
console.log(result)
