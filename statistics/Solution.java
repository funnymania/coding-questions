
class Solution {

  // Solved in log time by understanding the definition of a median's
  // requirements. We can do list arithmetic to find the point of both
  // arrays in which all elements left of an index of one list
  // are less than all elements to the right of the index of another.
  public double findMedianSortedArraysLog(int[] A, int[] B) {


  }

  // I solved this in linear time, by sorting both
  // into a single array. This results in |A| + |B| mem usage.
  // It fails on a test right now, so not perfect.
  public double findMedianSortedArrays(int[] A, int[] B) {
    int[] C = new int[A.length + B.length];
    
    // For ease of coding, make sure A is the larger array.
    if (A.length < B.length) {
      return findMedianSortedArrays(B, A);
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