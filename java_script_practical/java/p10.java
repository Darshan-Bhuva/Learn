import java.io.*;
class p10
{
    public static void main(String args[])
    {
        try
        {
            String f = "D:/p10.txt";
            // Creating new Text file
            File file = new File(f);
            if (!file.exists())
            {
                file.createNewFile();
                System.out.println("File created.");
            }
            FileWriter fwrite = new FileWriter(f);
            // Writing to new Text file
            fwrite.write("Welcome, Jay");
            fwrite.close();
            System.out.println("Writing Complete.");
            FileInputStream fin = new FileInputStream(f);
            // Reading from Text file
            int i;
            while ((i = fin.read()) != -1)
            {
                System.out.print((char) i);
            }
            fin.close();
            FileOutputStream fout = new FileOutputStream(f);
            // Modifying Text file
            String s="My name is Jay.";
            byte b[]=s.getBytes();
            fout.write(b);
            fout.close();
            System.out.println("\nModification Complete.");
            fin = new FileInputStream(f);
            // Reading from Text file
            while ((i = fin.read()) != -1)
            {
                System.out.print((char) i);
            }
            fin.close();
        }
        catch (Exception e)
        {
            System.out.println(e);
        }
    }
}