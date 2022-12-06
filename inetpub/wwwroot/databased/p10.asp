<html>
    <body>
        <%
            application("name")="TDEC"
            application("dept")="IT"
            Application.Contents.RemoveAll()
            for each x in application.contents
            response.write(x & "=" & application.contents(x) & "<br>")
            next
            Application.Lock
            Application.UnLock
        %>
    </body>
</html>