import java.util.List;
import java.util.ArrayList;

class MeetingScheduler {

  // Returns number of rooms.
  public static int updateSchedule (
    List<ClassTime> classes,
    List<List<ClassTime>> rooms
  ) {
    boolean roomFound = false;
    if (classes.isEmpty()) {
      return rooms.size();
    }
    
    for (int i = 0; i < classes.size(); i++) {
      for (int j = 0; j < rooms.size(); j++) {
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

    return rooms.size();
  }

  public static boolean requiresAnotherRoom (ClassTime check, List<ClassTime> room) {
    for (ClassTime lecture : room) {
      if (check.start < lecture.end && check.start >= lecture.start) {
        return true;
      }
    }
    return false;
  }

  public static void addRoomWithClassTime (List<List<ClassTime>> rooms, ClassTime newClass) {
    List<ClassTime> newRoom = new ArrayList<>();
    newRoom.add(newClass);
    rooms.add(newRoom);
  }
}