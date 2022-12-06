class Odd extends Thread {
    Odd(String s) {
        super(s);
    }

    public void run() {
        for (int i = 1; i <= 50; i++) {
            if (i % 2 == 1) {
                System.out.print("\nOdd: " + i);
                try {
                    Thread.sleep(1000);
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
    }
}

class Even extends Thread {
    Even(String s) {
        super(s);
    }

    public void run() {
        for (int i = 2; i <= 50; i++) {
            if (i % 2 == 0) {

                System.out.println("\nEven: " + i);
                try {
                    Thread.sleep(1000);
                } catch (Exception e) {

                    System.out.println(e);
                }
            }
        }
    }
}

class p8 {
    public static void main(String args[]) {
        Odd o1 = new Odd("Odd");
        Even e1 = new Even("Even");
        o1.start();
        e1.start();
    }
}