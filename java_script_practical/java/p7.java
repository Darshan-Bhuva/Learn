class Invalid extends Exception
{
    Invalid(String s)
    {
        super(s);
    }
} 
class p7 
{ 
    static Double deposit = 1000.0; 
    static void withdraw(double amount) throws Invalid 
    { 
        if(deposit<amount) 
        { 
            throw new Invalid("Not Sufficient Fund...."); 
        } 
        else 
        { 
            deposit = deposit - amount;
            System.out.println("Balance After Withdraw : "+deposit); 
        } 
    } 
    public static void main(String arg[]) 
    { 
        try 
        {
            withdraw(400);
            withdraw(300);
            withdraw(500);
        }
        catch(Exception m)
        {
            System.out.println(m);
        }    
    }
}