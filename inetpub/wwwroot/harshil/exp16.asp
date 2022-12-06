<html>
<body>
<center>
<h1> details are</h1>
</center>
<center>
<p>
<%
    dim name,enrollno,branch,sem
    enrollno=cint(request.querystring("en"))
    name=request.querystring("name")
    branch=request.querystring("branch")
     sem=request.querystring("sem")
    response.write("enrollment no is...")
     response.write enrollno
     response.write("<br>")
     response.write("name is...")
     response.write name
     response.write("<br>")
     response.write("branch is...")
     response.write branch
     response.write("<br>")
     response.write("current sem is...")
     response.write sem
     response.write("<br>")
%>
</p>
</center>
</body>
</html>