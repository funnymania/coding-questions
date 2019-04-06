class Main {
  public static void main(String[] args) {
    Scheduler.schedule(
      () -> {
        System.out.println("Your random value is: "
            + Math.random());
      },
      1000
    );
  }
}