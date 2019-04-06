class VersionComparison {
    public static int compareVersion(
      String version1,
      String version2
    ) {
        // parse into two lists
        String[] list1 = version1.split("\\.");
        String[] list2 = version2.split("\\.");
        
        // remove or ignore leading zeroes
        for (int i = 0; i < list1.length; i++) {
            String item = list1[i];
            list1[i] = String.valueOf(list1[i].charAt(item.length() - 1));
        }
        for (int i = 0; i < list2.length; i++) {
            String item = list2[i];
            list2[i] = String.valueOf(list2[i].charAt(item.length() - 1));
        }
        
        int size = list1.length > list2.length ? list2.length : list1.length;
        for (int i = 0; i < size; i++) {
            if (list1[i].compareTo(list2[i]) < 0) return 1;
            else if (list1[i].compareTo(list2[i]) > 0) return -1;
        }
        
        return 0;
    }
}