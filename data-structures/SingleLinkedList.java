class SingleLinkedList {
  // k = 0 returns last element.
  public static NodeLL find_kth_from_end (NodeLL head, int k) {
    NodeLL traverse = head;
    NodeLL result = head;
    int count = 0;

    while (traverse != null) {
      if (count > k) {
        result = result.next;
      }
      traverse= traverse.next;
      count += 1;
    }

    return result;
  }
}