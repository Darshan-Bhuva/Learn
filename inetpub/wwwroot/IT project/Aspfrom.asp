<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet" />
    <link rel="stylesheet" href="Aspform.css">
    <title>From  asp</title>
</head>
<body>
  <%
    f_name = request.form("fname")  
    s_name = request.form("lname")  
    phono = request.form("phono")
    email = request.form("email")
    r1 = request.form("radio")
  %>
    <div class="main_from" id="main_form1">
        <form action="./storedata.asp" method="post">
              <input type="text" name="fname" id="fname" class="form_detail" placeholder="First Name" autocomplete="off"  value =  "<% =(f_name) %>" readonly>

              <input type="text" name="lname" id="lname" class="form_detail" placeholder="Last Name" autocomplete="off" value =  "<% =(s_name) %>" readonly>
              
              <input type="number" name="phono" id="phone" class="form_detail" placeholder="Phone" autocomplete="off"  value =  "<% =(phono) %>"readonly>

              <input type="email" name="email" id="date" class="form_detail" placeholder="Date" autocomplete="off" value =  "<% =(email) %>"readonly/>

              <%
                  if r1 = "male" then 
              %>
              <input type="radio" name="radio" value="male" id="male" class="form_detail gender"  autocomplete="off" checked />Male

              <input type="radio" name="radio" value="female"id="female" class="form_detail gender"  autocomplete="off" />Female 
              <% else %>
              <input type="radio" name="radio" value="male" id="male" class="form_detail gender"  autocomplete="off"  />Male

              <input type="radio" name="radio" value="female"id="female" class="form_detail gender"  autocomplete="off" checked />Female
              <% end if %>

              <!-- <input type="button" value="drashna" textmode="number"> -->

              <input type="date" name="d1" id="services" class="form_detail">

              <input type="time" name="t1" id="services" class="form_detail">

              <select id="services" class="form_detail" name="dieses" placeholder="Select Your Services" autocomplete="off" >
                <option class="opt" value="">Select Your Services</option>
                <option class="opt" value="Neurology">Neurology</option>
                <option class="opt" value="SkinProblem">SkinProblem</option>  
                <option class="opt" value="Dental">Dental</option>
                <option class="opt" value="Opthalmology">Opthalmology</option>
                <option class="opt" value="Other Services">Other Services</option>
              </select>

              <textarea name="description" id="message" cols="50" rows="10" class="form_detail" placeholder="Describe Your problem"autocomplete="off" ></textarea>

              <input type="submit"  class="form_detail" id="form_appointment" autocomplete="off"  name="submi"/>
          </form>
    </div>
    <!-- <img id="c1" class="circle" src="./images/output-onlinepngtools (1).png" alt="">
    <img id="c2" class="circle" src="./images/output-onlinepngtools (1).png" alt=""> -->


    <div class="box"></div>

    
  </body> 
</html>