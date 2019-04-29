// Log(n+m) or better required.
// I solved this in linear time, by sorting both
// into a single array. This results in |A| + |B| mem usage.
// It fails on a test right now, so not perfect.

class Solution {
  public double findMedianSortedArrays(int[] A, int[] B) {
    int[] C = new int[A.length + B.length];
    
    // For ease of coding, make sure A is the larger array.
    if (A.length < B.length) {
      int[] swap = new int[B.length];
      swap = B;
      B = A;
      A = swap;
    }
    
    boolean isEven = C.length % 2 == 0
      ? true
      : false;
    
    // If length is even, we operate on midPoint and
    // midPoint - 1. 
    int midPoint = (C.length + 1) / 2;
    
    int i = 0;
    int j = 0;
    while (j < B.length && i < A.length) {
      if (A[i] <= B[j]) {
        C[i] = A[i]; 
        i++;
      } else {
        C[i] = B[j];
        j++;
      }
    }
    
    // Move over the remainder.
    if (i < A.length) {
      System.arraycopy(A, i, C, i+j, A.length - i);
    } else if (j < B.length) {
      System.arraycopy(B, j, C, i+j, B.length - j);
    }
    
    if (isEven) {
      return (C[midPoint] + C[midPoint - 1]) / 2.0;
    } else {
      return C[midPoint - 1];
    }
  }
}