class Operations {

  // Calculates number of operations for alSize inserts into a 
  // non-empty ArrayList
  public static int ArrayListInsertCount(int alSize) {
    int count = 1;
    int currentSize = 10;

    // Java initially assigns 10 blocks of memory, and
    // requests twice the current capacity when more 
    // space than the array size is required.
    for (int i = 1; i<alSize; i++) {
      if (i % currentSize == 0) {
        count += currentSize + 1;
        currentSize *= 2;
      } else {
        count += 1;
      }
    }

    return count;
  }
}

// If we had an ArrayList of 11 elements, it took 21 operations for
// all 11 inserts.
// First, the 10 inserts, and for the eleventh insert, a request of 
// twice the memory for an ArrayList to copy the original arraylist's
// values into. for 10 items, this is ten operations, plus the insert
// of the eleventh value.
// I was curious how this scaled with large values of N.
// It seems to be roughly 2N, so I suppose it is fair to say
// inserting to the end of an ArrayList is O(1) time. 