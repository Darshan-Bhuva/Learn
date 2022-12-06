<html>
    <link rel="stylesheet" href="./admin.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <body>
    <%
        set obj=CreateObject("ADODB.Connection")
        obj.open "DSN=pr19"

        a = request.querystring("mail")

        set rs = CreateObject("ADODB.Recordset")
        sql = "select * from appintment_test3 where Email = '"&a&"'"
        %>
        <div>
            
            <table class="table1">
                
                <%
                rs.open sql , obj
                while not rs.eof

            %>
            <tr>
                <td class="row" id="row1">First name  </td>
                <td class="row" id="row2"><%response.write(rs("f_name"))%></td>
            </tr>
            <tr>
                
                <td class="row" id="row3">Last name  </td>
                <td class="row" id="row4"><%response.write(rs("l_name"))%></td>
            </tr>
            <tr>
                
                <td class="row" id="row5">Dieses </td>
                <td class="row" id="row6"><%response.write(rs("dieses"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Phone Number</td>
                <td class="row" id="row6"><%response.write(rs("Phone_Number"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Gmail</td>
                <td class="row" id="row6"><%response.write(rs("Email"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Gender</td>
                <td class="row" id="row6"><%response.write(rs("gender"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Date</td>
                <td class="row" id="row6"><%response.write(rs("date"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Time</td>
                <td class="row" id="row6"><%response.write(rs("time"))%></td>
            </tr>
            <tr>
                <td class="row" id="row7">Descripiton</td>
                <td class="row" id="row6"><%response.write(rs("description"))%></td>
            </tr>
            <%
            rs.movenext
            wend
            %>
        </table>
    </div>
    </body>
</html>