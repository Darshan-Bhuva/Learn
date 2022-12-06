<html>
    <head>
        <title>connection
            </title>
            </head>
            <body>
                <%
                dim obj
                set obj=CreateObject("ADODB.connection")
                obj.open "DSN=db1"
                response.write("hello")
                'obj.execute("create table stu(id int(10), name varchar(20),department varchar(10))")
                obj.execute("insert into stu values(34,'darshan','electrical')")
                
                response.write("table created")
               ' obj.execute("update stu set id=45 where id=44")
                response.write("updated")


                %>
            </body>