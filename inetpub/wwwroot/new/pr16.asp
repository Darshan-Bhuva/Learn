<html>

<body style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-weight: 900;">
    <center>

        <% dim name,address,mono,email,pass,gender,ch1,ch2,ch3 
        
            name=request.querystring("Name") 

            address=request.querystring("address")
            
            mono=request.querystring("Mobile")

            email=request.querystring("EmailID")

            pass=request.querystring("Password")    

            gender=request.querystring("radio1")


            ch1=request.querystring("ch1")


            ch2=request.querystring("ch2")


            ch3=request.querystring("ch3")

            %>

            <table border="1" cellpadding="6" cellspacing="6">
                <tr>
                    <th colspan="2">Details(GET Mathod)</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <%response.write(name) %>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <%response.write(address)%>
                    </td>
                </tr>

                <tr>
                    <td>Mobile no.</td>
                    <td>
                        <%response.write(mono)%>
                    </td>
                </tr>
                <tr>
                    <td>Email id</td>
                    <td>
                        <%response.write(email)%>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <%response.write(gender)%>
                    </td>
                </tr>
                <tr>
                    <td>Hobbies</td>
                    <td>
                        <%response.write(ch1) %> 
                        <%response.write(ch2) %> 
                        <%response.write(ch3) %>

                    </td>
                </tr>
            </table>
    </center>
</body>

</html>