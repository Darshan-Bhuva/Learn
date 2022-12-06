<html>
    <body>
        <%

        set obj=CreateObject("ADODB.Connection")
        obj.open "DSN=pr19"

            f_name = request.form("fname")  
            l_name = request.form("lname")  
            dieses = request.form("dieses")
            phono = request.form("phono")
            email = request.form("email")
            gender = request.form("radio")  
            d = request.form("d1")
            t=request.form("t1")
            description = request.form("description")

            obj.execute("insert into appintment_test3 values('"&f_name&"' , '"&l_name&"' , '"&dieses&"' , '"&phono&"' , '"&email&"' , '"&gender&"' , '"&d&"' , '"&t&"' , '"&description&"')")

            %>

        </body>
        <script>
            alert("Your appoimntment is successfully placed")
            window.location.href="./index1.html"
        </script>
        </html>
    


