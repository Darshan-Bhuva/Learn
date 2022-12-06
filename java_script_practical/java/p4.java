import java.util.Scanner;
class p4
{ 
    public static void main(String arg[]) 
    { 
        int n, rev=0;
        Scanner sc=new Scanner(System.in); 
        System.out.print("Enter any number to Reverse: "); 
        n=123;
        while(n!=0) 
        { 
            rev=rev*10;
            rev=rev+n%10;
            n=n/10; 
        } 
        System.out.print("p4: "+rev); 
        sc.close();
    } 
}