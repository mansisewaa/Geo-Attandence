<?php
	$cn = mysqli_connect("localhost","root","");
	$database = mysqli_select_db($cn, "attendence");
	
    $EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData, true);

	$email = $DecodedData['email'];
    $date = $DecodedData['date'];
    $time = $DecodedData['time'];
    
    
	$query = "INSERT INTO record(email, date, time) values('$email', '$date', '$time') ";
	
	$count = mysqli_query($cn, $query);

	if($count) {
		$msg = 1;
	} else {
		$msg = 0;
	}
	
	$response = json_encode($msg);
    echo $response;
?>