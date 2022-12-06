class p3
{
    int a;
    p3(int a, int b) 
    { 
        System.out.println("Addition is "+(a+b)); 
    }
    p3(int a) 
    {
        this.a=a;
        System.out.println("Parameterized Constructor A = "+a); 
    }
    p3(p3 c) 
    { 
        this.a=c.a;
        System.out.println("Copy Constructor A "+a); 
    } 
    public static void main(String arg[]) 
    { 
        p3 o1=new p3(5,6); 
        p3 o2=new p3(5); 
        p3 o3=new p3(o2); 
    } 
}
