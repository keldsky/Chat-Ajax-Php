<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Ton appli !</title>
	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/logout.js"></script>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/monStyle.css">

   
</head>
<body>
<!-- j'ai le droit de mettre des commentaires dans mon fichier HTML -->
	<div class="container loginTEMPLATE">
		<div  id="notif" <?php echo $context->show ?> class="marge row col-sm-offset-4 col-sm-4 alert alert-<?php echo $context->alert?> alert-dismissible" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    			<span aria-hidden="true">&times;</span>
  			</button>
			<h3><?php echo $context->notification?></h3>
		</div>
		<div id="templ" class="row col-sm-offset-3 col-sm-4"><?php include($template_view)?></div>	
	</div>
    
</body>
</html>
