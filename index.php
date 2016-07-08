
<!DOCTYPE html>
<html lang="en">
  <head profile="http://isabelleteran.com/favicon.ico">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Web and graphic designer Paris- France. Development, Wordpress, mobile first, UX, SEO, UI  artist since 2000 <br/>Creative webdesigner born in mexico and based in paris. Creat your sites in html5 css3 javascript php and wordpress, mockup design SEO UX UI mobile first photoshop illustrator sketch indesign">
    <meta name="keywords" content="design, webdesign, codding, html, css, php, javascript, wordpress, graphic design, art, photos, illustrator, photoshop, paris, mexico, english, painting, htlm5, css3, javascript, php, creation, redesign, french, spanish, angency, web angency ">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Monstertruck Web agency-webdesigners-developers-creatives-paris-artists-photographers-painteres-designeres-web-mobilefirst-wordpress-UX-UI</title>
    <link rel="stylesheet" href="../css/reset.css"/>
	<link rel="stylesheet" href="../css/load.css"/>
	 <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,600,500' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Josefin+Slab:400,300,100italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:400,100' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Dancing+Script:400,700' rel='stylesheet' type='text/css'>
<!-- ICON NEEDS FONT AWESOME FOR CHEVRON UP ICON -->
    <link href="../css/font-awesome.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Hind' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100' rel='stylesheet' type='text/css'>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    rel="stylesheet">
	 <link href="../img/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<link href="../css/style.css" rel="stylesheet">
	<script src="../js/load.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="../js/jquery.easing.1.3.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
	<script src="../js/ajax.js"></script>
	
  </head>

  <body>
	  <div id="load"></div>
	  <div id="contents">
		  <header id="header">

		  </header>
		  <main id="main" class="content">



		  </main>

		  <footer> 

			  <div class="community">

				  <a target="_blank" href="https://www.facebook.com/monstertruckagency"><i class="fa fa-facebook-square"></i></a>
				  <a target="_blank" href="https://www.instagram.com/monstertruckagency"><i class="fa fa-instagram"></i></a>
				  <a target="_blank" href="https://twitter.com/isabelleteran"> <i class="fa fa-twitter-square"></i></a>
			</div>
			<p> © 2016 MONSTER TRUCK AGENCY ALL RIGHTS RESERVED  </p>
		  </footer>
	</div>
  </body>
	  
	 
	<?php
	
	
	if (isset($_GET['path'])) {
	
	$page = $_GET['path'];
	
	}
	
	else { $page = '/pages/home.html'; };
	
	
	
	 ?>
<script>
	var pagephp = '<? echo $page; ?>';
	

	$(document).ready(function(){
		
		firstLoad(pagephp);
		
	});
	
	
</script>
	
</html>
    

