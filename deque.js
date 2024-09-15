// node class for doubly linked list.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Deque: chained-together nodes where you can
 *  remove or add from the top or bottom. */
class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to the beginning
  appendleft(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first.prev = newNode;
      this.first = newNode;
    }
    this.size++;
  }

  // add to the end
  appendright(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
    this.size++;
  }

  // remove and return from the beginning
  popleft() {
    if (!this.first) throw new Error("The deque is empty");
    const temp = this.first;
    this.first = this.first.next;

    if (this.first) {
      this.first.prev = null;
    } else {
      this.last = null;
    }
    this.size--;
    return temp.val;
  }

  // remove and return from the end
  popright() {
    if (!this.first) throw new Error("The deque is empty");
    const temp = this.last;
    this.last = temp.prev;
    if (this.last) {
      this.last.next = null;
    } else {
      this.first = null;
    }
    this.size--;
    return temp.val;
  }

  // Return (dont remove) from the beginning
  peekleft() {
    if (!this.first) throw new Error("Deque is empty.");
    return this.first.val;
  }

  // Return (dont remove) from the beginning
  peekright() {
    if (!this.first) throw new Error("Deque is empty.");
    return this.last.val;
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

