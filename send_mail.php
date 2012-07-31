<?php
/*
This first bit sets the email address that you want the form to be submitted to.
You will need to change this value to a valid email address that you can access.
*/
$webmaster_email = "amenchetti@optusnet.com.au";

/*
This bit sets the URLs of the supporting pages.
If you change the names of any of the pages, you will need to change the values here.
*/
$feedback_page = "contact.php";
$error_page = "error_message.php";
$thankyou_page = "thank_you.php";

/*
This next bit loads the form field data into variables.
If you add a form field, you will need to add it here.
*/
$Subject = $_REQUEST['Subject'] ;
$How_Can_We_Help = $_REQUEST['How_Can_We_Help'] ;
$Name = $_REQUEST['Name'] ;
$Email = $_REQUEST['Email'] ;
$Phone = $_REQUEST['Phone'] ;

$body = "From: $Name\n\n Phone: $Phone\n\n E-Mail: $Email\n\n Message:\n\n $How_Can_We_Help";

/*
The following function checks for email injection.
Specifically, it checks for carriage returns - typically used by spammers to inject a CC list.
*/
function isInjected($str) {
	$injections = array('(\n+)',
	'(\r+)',
	'(\t+)',
	'(%0A+)',
	'(%0D+)',
	'(%08+)',
	'(%09+)'
	);
	$inject = join('|', $injections);
	$inject = "/$inject/i";
	if(preg_match($inject,$str)) {
		return true;
	}
	else {
		return false;
	}
}

// If the user tries to access this script directly, redirect them to the feedback form,
if (!isset($_REQUEST['Email'])) {
header( "Location: $feedback_page" );
}

// If the form fields are empty, redirect to the error page.
elseif (empty($Email) || empty($How_Can_We_Help)) {
header( "Location: $error_page" );
}

// If email injection is detected, redirect to the error page.
elseif ( isInjected($Email) ) {
header( "Location: $error_page" );
}

// If we passed all previous tests, send the email then redirect to the thank you page.
else {
mail( "$webmaster_email", "Enquiry From Independent Artists",
  $body, "From: $Email" );
header( "Location: $thankyou_page" );
}
?>