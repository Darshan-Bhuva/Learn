<html>
    <body>
        <%
        response.cookies("name")("email")=request.querystring("email")
        response.cookies("name")("pass")=request.querystring("pass")

        if response.write(request.cookies("name")("email")) = 
        %>
    </body>
</html>