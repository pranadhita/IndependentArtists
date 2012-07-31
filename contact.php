<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Independent Artists - Contact</title>
<?php include 'includes/_inc-scripts_styles.php';?>
</head>

<body id="p-contact">
	<div id="container">
		<?php include 'includes/_inc-header.php';?>
		<div id="content">
			<div id="primary">
				<h1>Contact</h1>
				<h2>Get in Touch with Anthony </h2>
				<img src="images/core/title-underlined2.png" class="title-breaks-l" />
				<table id="contact_info">
					<tr>
						<td class="table_title">Producer</td>
						<td>Anthony Menchetti</td>
					</tr>
					<tr>
						<td class="table_title">Phone</td>
						<td>+61 402 281 336</td>
					</tr>
					<tr>
						<td class="table_title">Fax</td>
						<td>03 9347 5503</td>
					</tr>
				</table>
				<p>How can I help you?</p>
				<form action="send_mail.php" method="post" id="form" action="submit.action">
					<div id="How_Can_We_Help">
						<textarea name="How_Can_We_Help" class="validate[required] text-input" id="How_Can_We_Help_textarea"></textarea>
					</div>
					<ul class="form_label">
						<li>Subject</li>
						<li>Name</li>
						<li>Email</li>
						<li>Phone</li>
					</ul>
					<ul class="form_input">
						<li>
							<input type="text" name="Subject" class="validate[required] text-input" id="Subject" value="" maxlength="100" />
						</li>
						
						<li>
							<input type="text" name="Name" class="validate[required] text-input" id="Name" value="" maxlength="100" />
						</li>
						
						<li id="input_email">
							<input type="text" name="Email" class="validate[required,custom[email]] text-input" id="Email" value="" maxlength="100" />
						</li>
						
						<li>
							<input type="text" name="Phone" class="validate[required,custom[phone]] text-input" id="Phone" value="" maxlength="100" />
						</li>
					</ul>
					<input type="submit" value="Validate" id="submit_button" />
					
					</form>
				
			</div>
		</div>
		<?php include 'includes/_inc-footer.php';?>
	</div>
</body>

</html>