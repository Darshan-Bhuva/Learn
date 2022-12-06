<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <title>Show_table</title>
    <link rel="stylesheet" href="./table.css">
</head>

<body>
    <%
        set obj=CreateObject("ADODB.Connection")
        obj.open "DSN=pr19"

        set rs = CreateObject("ADODB.Recordset")
        sql = "select f_name , l_name , Email  from appintment_test3"
    %>
    <table class="table1">
        <tr id="Header">
            <th>Frist_Name</th>
            <th>last_Name</th>
            <th>Email</th>
            <th>Full detail</th>
        </tr>

        <%
            rs.open sql,obj
            while not rs.eof
        %>
        <tr>
            <td class="row" id="row1"><%response.write(rs("f_name"))%></td>
            <td class="row" id="row2"><%response.write(rs("l_name"))%></td>
            <td class="row" id="row3"><%response.write(rs("Email"))%></td>
            <td class="row" id="row4"><a href="./admin.asp?mail=<%response.write(rs("Email"))%>">show</a></td>
        </tr>
        <%
            
            rs.movenext
            wend
        %>
    </table>
    
</body>

</html>