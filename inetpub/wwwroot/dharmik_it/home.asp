<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>YelpCamp</title>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<main>
			<% 
				Dim timeOfDay
				If (hour(Time) > 18) Then
					timeOfDay = "Evening"
				ElseIf (hour(Time) > 12) Then
					timeOfDay = "Afternoon"
				ElseIf (hour(Time) > 3) Then
					timeOfDay = "Morning"
				Else 
					timeOfDay = "Morning"
				End If
			%>
			<div class="bg"></div>
			<div class="content">
				<p style="color: #fff; font-family: 'Poppins'; font-weight: 300; margin-bottom: -1em; font-size: 1.25rem;">Good <% response.write(timeOfDay) %>! Welcome to</p>
				<h1>YelpCamp</h1>
				<a  class="btn btn-success" href="http://localhost:3000/campgrounds">View Campgrounds</a>
			</div>
		</main>
	</body>
</html>
