<%
    Dim dbm1
    set dbm1 = createobject("ADODB.connection")
    dbm1.open "DSN=itt"

    set rs = server.createobject("ADODB.recordset")
    sql = "SELECT * FROM tour"
    rs.open sql,dbm1

    set rs1 = server.createobject("ADODB.recordset")
    sql = "SELECT * FROM booking"
    rs1.open sql,dbm1
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../admincss/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Smooch&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');
        .section1{
                background-color: black;
                    line-height: 45px;
        }

        .section2 h2 {
    padding: 17px;
}
        .section1 p{
            font-family: 'Roboto', sans-serif;
            font-size: large;
            text-align: center;
            color: white;
        }
        .logo{
            font-size: 47px;
              /* font-family: "Zen Tokyo Zoo", cursive; */
              font-family: 'Smooch', cursive;
              margin-top: 6px;
              color: white;
              margin-left: 60px;
                margin-top: 25px;
        }
        .menu ul{
            color: white;
        }
        .menu a{
                margin-left: 5px;
        }

        .menu_1 {
background-color: white;
    color: black;
    padding-left: 78px;
    border-radius: 70px;
    font-size: 17px;
    padding-top: 2px;
    padding-bottom: 2px;
    margin-bottom: 17px;
}

.menu_1:hover{
    background-color: silver;
    color: black;
}

.user {
    margin-left: 43%;
    font-size: 25px;
}

.section2{
    background-color: rgb(255, 255, 255);
    height: 830px;
    width: 75%;
    margin-left: 5px;
        display: flex;
            margin-top: 10%;
            margin-left: -18%;
}

h2.h2_2 {
    /* margin-left: 5px; */
    padding-left: 1%;
    font-size: 25px;
}

    </style>
    <title>Admin Panel</title>
</head>
<body>
    <div class="body">
        <div class="section1">
            <div class="logo">
                Exploraholic
              
            </div>
            <div class="menu">
                <ul>

                    <div class="menu_1">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <a href="../adminasp/index.asp">Home</a><br>
                    </div>

                    <div class="menu_1">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <a href="../adminasp/user.asp">Manage Users</a><br>
                    </div>

                     <div class="menu_1">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <a href="../adminasp/booking.asp">Manage Booking</a><br>
                     </div>

                     <div class="menu_1">
                    <i class="fa fa-bus" aria-hidden="true"></i>
                    <a href="../adminasp/packageforms.asp">Manage Packages</a><br>
                    </div>

                </ul>
            </div>
        </div>

          <h2 class="h2_2">Welcome to Admin panel</h2>
          <br>
        <div class="section2">
          
            <div class="totaluser">
                <h2>TOTAL USER</h2>

                <div class="user">
                <%
                    Dim counter
                    counter = 0
                    while not rs.eof
                    counter = counter+1
                    rs.movenext
                    wend
                    response.write(counter)
                %>
                </div>
            </div>

            <div class="totaluser">
                <h2>TOTAL Booking</h2>

                <div class="user">
                <%
                    Dim counter1
                    counter1 = 0
                    while not rs1.eof
                    counter1 = counter1+1
                    rs1.movenext
                    wend
                    response.write(counter1)
                %>
                </div>
            </div>
        </div>

        
    </div>
</body>
</html>