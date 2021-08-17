<?php
	$conn = mysqli_connect("localhost","root","");
	$database = mysqli_select_db($conn, "new");
	
	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData, true);
	$Email = $DecodedData["Email"];
	$password = $DecodedData["password"];
	
	$query = "select * from employees where Email = '$Email' AND password = '$password' ";
	
	$count = mysqli_query($conn, $query);

	if(mysqli_num_rows($count) == 0){
		$auth = 0; //user not found
	} else {
		$auth = 1; //Login Successful
	}
	$response = json_encode($auth);
	echo $response;
	
?> 