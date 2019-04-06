import java.util.Timer;
import java.util.TimerTask;

class Scheduler {
  private static Timer timer = new Timer("mdm+");

  public static void schedule(Runnable function, int delay) {
    timer.schedule(
      new TimerTask() {
        @Override
        public void run() {
          function.run();
        }
      },
      delay
    );
  }
}