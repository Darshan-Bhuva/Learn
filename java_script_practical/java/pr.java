interface A{
    double pi = 3.14;
    void show();
}

interface B {
    double pi = 3.14;
    void show1(); 
}

class pr implements A,B{
    public void show(){
        System.out.println(A.pi);
    }
    public void show1(){
        System.out.println(B.pi);
    }
    public static void main(String[] args) {
        pr obj = new pr();
        obj.show();
        obj.show1();
    }
}