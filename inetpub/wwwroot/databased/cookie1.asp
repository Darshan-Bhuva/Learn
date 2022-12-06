<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COOKIES</title>
</head>
<body>
    <form  >
        <input type="text" name="user">
        <input type="text" name="pass">
        <input type="submit" name="submi">
    </form>
    <%
        if request.querystring("submi") = "Submit" then
            response.cookies("namme")("user") = request.querystring("user")
            response.cookies("namme")("pass") = request.querystring("pass")
            response.redirect("cookie.asp")
        end if
    %>
</body>
</html>

    