class MeetingScheduler {

  // Returns number of rooms.
  public static int updateSchedule (
    List<ClassTime> classes,
    List<List<ClassTime>> rooms
  ) {
    bool roomFound = false;
    if (classes.isEmpty()) {
      return rooms.length;
    }
    
    for (int i = 0; i < classes.length(); i++) {
      for (int j = 0; j < rooms.length(); j++) {
        if (!requiresAnotherRoom(classes.get(i), rooms.get(j))) {
          rooms.get(j).add(classes.get(i));
          roomFound = true;
          break;
        }
      }
      if(!roomFound) {
        addRoomWithClassTime(rooms, classes.get(i));
      } else {
        roomFound = false;
      }
    }

    return rooms.length;
  }

  public static bool requiresAnotherRoom (ClassTime check, List<ClassTime> room) {
    for (ClassTime lecture : room) {
      if (check.start < lecture.start && check.start >= lecture.start) {
        return true;
      }
    }
    return false;
  }

  public static void addRoomWithClassTime (List<List<ClassTime>> rooms, ClassTime newClass) {
    List newRoom = new ArrayList<ClassTime>();
    newRoom.add(newClass);
    rooms.add(newRoom);
  }
}