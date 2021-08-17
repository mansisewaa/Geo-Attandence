<?php
	$cn = mysqli_connect("localhost","root","");
	$database = mysqli_select_db($cn, "new");
	
    $EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData, true);

	$name = $DecodedData['name'];
    $leavet = $DecodedData['leavet'];
    $reason = $DecodedData['reason'];
    $date   = $DecodedData['date'];
	$period = $DecodedData['period'];
	$status = $DecodedData['status'];
    
	$query = "INSERT INTO leaves(name, leavet, reason, period, date, status) values('$name', '$leavet', '$reason', '$period', '$date', '$status')";
	
	$count = mysqli_query($cn, $query);

	if($count) {
		$msg = 1;
	} else {
		$msg = 0;
	}
	
	$response = json_encode($msg);
    echo $response;
?>
	