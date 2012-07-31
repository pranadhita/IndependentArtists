<?php
    Header( "HTTP/1.1 301 Moved Permanently" ); 
    Header( "Location: index.php" ); 
?> 


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Independent Artists - Info</title>
<?php include 'includes/_inc-scripts_styles.php';?>
</head>

<body id="p-info">
	<div id="container">
		<?php include 'includes/_inc-header.php';?>
		<div id="content">
			<img src="images/decor/image-info.png" id="info-decor" />
			<div id="primary">
				<h1>Info</h1>
				<h2>About Independent Artists </h2>
				<img src="images/core/title-underlined.png" class="title-breaks" />
				<div id="mcs_container">
					<div class="customScrollBox">
						<div class="container">
  				  		<div class="content">
  				     		<p>Independent Artists was created by Australian comedian Anthony Menchetti ('Gay Conversion School Drop Out' & NBC's - 'Last Comic Standing').</p>
  				     		<p>The aim of the company is to create more work for Australian performers by working with them directly, thus keeping production costs to a minimum. </p>
  				     		<p>Anthony has been in the comedy industry for over ten years and was the national winner of Raw Comedy in 1996. He has toured his shows all over the national and international comedy circuits to critical acclaim</p>
  				     		<p>"Brilliantly funny" - <em>Threeweeks (UK)</em></p>
  				     		<p>"For me, Menchetti's been the stand out, stand up discovery of the comedy festival" - <em>The Age</em></p>
  				     		<p>"One of the top 10 performers to look out for the Edinburgh Fringe and beyond" - <em>The Times (UK)</em></p>
  				     		<p>"Thank your lucky stars you caught him before he goes stellar" - <em>The List (UK)</em></p>
  				     		<p>"You'll float home" - <em>The Age</em></p>
  				     		<p>For more information and video showreels visit: <a href="http://www.anthonymenchetti.com" rel="external">www.anthonymenchetti.com</a></p>
  				     		
								</div>
						</div>
						<div class="dragger_container">
  				  		<div class="dragger"></div>
						</div>
					</div>
  				  <a href="#" class="scrollUpBtn"></a> <a href="#" class="scrollDownBtn"></a>
				</div>
			</div>
			<div id="video">
			 <ul>
			 	<li><a href="http://www.youtube.com/watch?v=AaHMIdJEQJQ&fs=1" class="youtube"><img src="images/video/video-thumb01.jpg" /></a></li>
			 	<li><span id="play_video">Play Video</span></li>
			 </ul>
			
			</div>
		</div>
		<?php include 'includes/_inc-footer.php';?>
	</div>
	
</body>

</html>