public class p2 {
    int x=10;
    
    void Show(int x){
        System.out.println(this.x);
        System.out.println(x);
    }

    void Show2(){
        int x = 20;
        System.out.println(this.x);
        System.out.println(x);
    }
    public static void main(String[] args) {
        p2 obj = new p2();
        p2 obj1 = new p2();
        obj.Show(100);
        obj1.Show2();
    }
}
