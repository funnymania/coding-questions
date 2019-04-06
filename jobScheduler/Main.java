class Main {
  public static void main(String[] args) {
    for (String arg : args) {
      System.out.println(arg);
    }

    Scheduler.schedule(
      new Runnable() {
        @Override
        public void run() {
          System.out.println("Your random value is: "
            + Math.random());
        }
      },
      1000
    );
  }
}