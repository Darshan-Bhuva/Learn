<html>
<body>
<center>
<h1> details are</h1>
</center>
<center>
<p>
<%
    dim name,enrollno,branch,sem,addd
    addd=request.form("address")
    enrollno=cint(request.form("en"))
    name=request.form("name")
    branch=request.form("branch")
     sem=request.form("sem")
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
      response.write("address is...")
     response.write addd
%>
</p>
</center>
</body>
</html>