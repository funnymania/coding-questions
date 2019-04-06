import java.util.Timer;
import java.util.TimerTask;

class Scheduler {
  private static Timer timer = new Timer("mdm+");

  public static void schedule(Runnable command, int delay) {
    timer.schedule(
      new TimerTask() {
        @Override
        public void run() {
          command.run();
        }
      },
      delay
    );

    timer.schedule(
      new TimerTask() {
        @Override
        public void run() {
          timer.cancel();
        }
      },
      delay
    );
  }
}

/**
 * Timers' schedule methods require a timertask, whose
 * run method will be used by timer.schedule.
 * when running simple timers, it seems a good pattern 
 * is to schedule a TimerTask and override the TimerTask's run
 * method.  
 * 
 * 
 */