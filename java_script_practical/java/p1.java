class p1{
    static
    {
        System.out.println("Static block executed");
    }
    public static void main(String args[])
    {
        p1 d=new p1();
        System.out.println("Main block executed");
        d.show();
    }
    void show()
    {
        System.out.println("Show method executed");
    }
}
