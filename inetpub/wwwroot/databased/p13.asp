<html>
    <body>
        <% response.addheader "Set-Cookie" , "username=dhruv&pass=123" %>
        <% response.flush %>
        <%=request.servervariables("HTTP_COOKIE") %>
    </body>
</html>