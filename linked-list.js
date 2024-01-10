/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error("Can't pop from an empty list");

    let removed = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }

    this.length--;

    return removed.val;
  }
  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error("Can't shift from an empty list");

    let removed = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;

    return removed.val;
  }
  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }
  /** setAt(idx, val): set val at idx to val */


  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }
  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);

    let current = this.head;
    let count = 0;

    while (count !== idx - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.length++;
  }
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index");
    }

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let current = this.head;
    let count = 0;

    while (count !== idx - 1) {
      current = current.next;
      count++;
    }

    let removed = current.next;
    current.next = removed.next;

    this.length--;

    return removed.val;
  }
  /** average(): return an average of all values in the list */

 
  average() {
    if (!this.head) return 0;

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }

  avgOfList(){
    if (!this.head) return 0; // If list is empty, return 0

    let sum = 0;
    let current = this.head;
    let count = 0;

    // Traverse the list, summing the values
    while (current) {
      sum += current.val;
      count++;
      current = current.next;
    }

    // Return the average (sum / count)
    return sum / count;
  }

}

module.exports = LinkedList;
