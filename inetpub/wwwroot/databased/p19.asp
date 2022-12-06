<html>
    <body>
        <%
            set obj=CreateObject("ADODB.Connection")
            obj.open "DSN=pr19"
            

            s_name = request.querystring("s_name")
            s_id = request.querystring("s_id")
            s_upname = request.querystring("s_upname")
            s_upiname = request.querystring("s_upiname")
            s_deiname = request.querystring("s_deiname")
            
            <!-- obj.execute("create table stu(name varchar(10),  id int(10))") -->
            obj.execute("insert into stu values(d'"&s_name&"' , "&s_id&")") 
            <!-- obj.execute("update stu set name = '" &s_upname&"' where id = "&s_upiname&"") -->
            <!-- obj.execute("delete from stu where id = "&s_deiname&" ") -->
            

            set rs = CreateObject("ADODB.Recordset")

            sql = "select * from stu"
        %>
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>       
                </tr>
                <%
                    rs.open sql,obj
                    while not rs.eof
                %>
                <tr>
                    <td><%response.write(rs("id"))%></td>  
                    <td><%response.write(rs("name"))%></td>  
                </tr>
                <%
                    rs.movenext
                    
                    wend
                %>
            </table>
    </body>
</html>
        
        
        
