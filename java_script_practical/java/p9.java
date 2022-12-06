class Line 
{ 
    synchronized public void getLine() 
    { 
        for(int i=0;i<3;i++) 
        { 
            System.out.println(i);
            try 
            { 
                Thread.sleep(1000); 
            } 
            catch(Exception e) 
            { 
                System.out.println(e); 
            } 
        } 
    } 
}
class Train extends Thread
{
    Line line;
    Train(Line line)
    {
        this.line = line;
    }
    public void run()
    {
        line.getLine();
    }
}
class p9
{
    public static void main(String args[])
    {
        Line obj = new Line();
        Train t1 = new Train(obj);
        Train t2 = new Train(obj);
        t1.start();
        t2.start();
    }
}