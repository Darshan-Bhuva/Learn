<html>

<body style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-weight: 900;">
    <center>

        <% dim name,address,mono,email,pass,gender,ch1,ch2,ch3 
        
            name=Request.Form("Name") 

            address=Request.Form("address")
            
            mono=Request.Form("Mobile")

            email=Request.Form("EmailID")

            pass=Request.Form("Password")    

            gender=Request.Form("radio1")


            ch1=Request.Form("ch1")


            ch2=Request.Form("ch2")


            ch3=Request.Form("ch3")

            %>

            <table border="1" cellpadding="6" cellspacing="6">
                <tr>
                    <th colspan="2">Details(POST Mathod)</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <% Response.Write(name) %>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <%Response.Write(address)%>
                    </td>
                </tr>

                <tr>
                    <td>Mobile no.</td>
                    <td>
                        <%Response.Write(mono)%>
                    </td>
                </tr>
                <tr>
                    <td>Email id</td>
                    <td>
                        <%Response.Write(email)%>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <%Response.Write(gender)%>
                    </td>
                </tr>
                <tr>
                    <td>Hobbies</td>
                    <td>
                        <%Response.Write(ch1) %> 
                        <%Response.Write(ch2) %> 
                        <%Response.Write(ch3) %>

                    </td>
                </tr>
            </table>
    </center>
</body>

</html>