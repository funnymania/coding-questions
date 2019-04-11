import java.util.Hashtable;

class CircularList {

  private int[] orderIds;
  private int ptr;
  private int capacity;
  
  CircularList(int cap) {
    capacity = cap;
    orderIds = new int[capacity];
    ptr = 0;
  }

  public void record (int order_id) {
    if (orderIds.length == capacity) {
      orderIds[ptr] = order_id;
      ptr += 1;
      if (ptr == capacity) {
        ptr = 0;
      }
    }
  }

  public int get (int i) {
    int indexToGet = ptr - 1 - i;
    if (indexToGet < 0) {
      return orderIds[capacity + indexToGet];
    } else {
      return orderIds[indexToGet];
    }
  }
}
// plain Array, not storing more than N elements
// add to end O(1)... but if we are at N element
// capacity, we need to then Remove the oldest
// added element, and replace it with the new one.
// Using plain implementation, this is O(n), 
// as we need to shift every element in the array.

// Instead, when we add an element at N capacity,
// with a pointer to the earliest element, 
// we merely overwrite the earliest element with the
// new element, and increment the pointer. 
// Our structure will be based around this pointer
// to the oldest element, which will move about the
// list as items are added. when the pointer would 
// be incremented beyond array bounds, we would 
// set it to the zero index of the array (the "beginning").
// This is known as a Circular Array, since the pointer
// is moving through the array until the end, and then
// is at the beginning, and circles over and over throughout
// the data structures lifetime.