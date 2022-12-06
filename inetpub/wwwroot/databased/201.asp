<html>
    <body>
        <%
        dim obj
                set obj=CreateObject("ADODB.connection")
                obj.open "DSN=db1"
                set rs=CreateObject("ADODB.recordset")
                sql="select * from stu"
                rs.open sql,obj
                %>
                <table border="1">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>department</th>
                    </tr>
                
                <%
                while not rs.eof
                %>
                <tr>
                    <td><%response.write(rs("id"))%></td>
                    <td><%response.write(rs("name"))%></td>
                    <td><%response.write(rs("department"))%></td>
                </tr>
                <%
                rs.movenext
                wend
    %>
</table>
            </body>
</html>