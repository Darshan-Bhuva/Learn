<html>
    <body>
        <%
            set obj=CreateObject("ADODB.Connection")
            obj.open "DSN=pr19"

            obj.execute("create table student(name varchar(10) , mono varchar(10) , id varchar(10))")
            response.write("CRAETED")
        %>
    </body>
</html>