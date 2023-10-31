class Stack {
  public stack: Array<number>;

  constructor() {
    this.stack = [];
  }

  addValue(val: number) {
    this.stack.push(val);
    return this.stack;
  }

  removeValue() {
    this.stack.pop();
    return this;
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const stack = new Stack();

stack.addValue(1);
stack.addValue(2);
stack.addValue(3);
stack.removeValue();

const nextString = (s: string) => {
  let main = "";
  const w = s.split(" ");

  while (w.length !== 0) {
    let val = w.pop();
    main += ` ${val}`;
  }
  return main;
};

const reverseNumber = (n: number) => {
  let num = n.toString().split("");
  let c = "";

  while (num.length !== 0) {
    let popped = num.pop();
    c += popped;
  }
  return parseInt(c);
};

const largestNumber = (n: number) => {
  let num = n
    .toString()
    .split("")
    .sort((a: any, b: any) => b - a);
  return parseInt(num[0]);
};

const smallestNumber = (n: number) => {
  let num = n
    .toString()
    .split("")
    .sort((a: any, b: any) => a - b);
  return parseInt(num[0]);
};

console.log(largestNumber(2001029));
console.log(smallestNumber(2129));
