<?php
	$conn = mysqli_connect("localhost","root","");
	$database = mysqli_select_db($conn, "new");
	
	$EncodedData = file_get_contents('php://input');
	$DecodedData = json_decode($EncodedData, true);
	$Email = $DecodedData["Email"];
	
	
	$query = "select fname, lname, birth, number, Address, city, started_at from employees where Email = '$Email' ";
	
	$count = mysqli_query($conn, $query);

	if(mysqli_num_rows($count)>0)
    {
		$Row=mysqli_fetch_assoc($count);
        $fname=$Row["fname"];
        $lname=$Row["lname"];
        $birth=$Row["birth"];
        $number=$Row["number"];
        $Address=$Row["Address"];
        $city=$Row["city"];
        $started_at=$Row["started_at"];

	} else {
		$Email="";
        $fname="";
        $lname="";
        $birth="";
        $number="";
        $Address="";
        $city="";
        $started_at="";
	}
    
	$response[] =array("fname"=>$fname,"lname"=>$lname, "birth"=>$birth, "number"=>$number,
    "Address"=>$Address,"city"=>$city, "started_at"=>$started_at) ;
	echo json_encode($response);
	
?> 