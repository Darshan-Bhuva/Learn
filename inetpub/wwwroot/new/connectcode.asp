<html>
    <body>
        <%
        dim obj
        set obj = CreateObject("ADODB.Connection")
        response.write "hello"
        open Connection
        obj.open "DSN=pr19"
        obj.execute("create table stu(id INT(10), name varchar(100))")
        response.write "created"
            %>
        </body>
        </html>