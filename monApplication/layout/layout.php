<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title>Ton appli !</title>

	<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/logout.js"></script>
	<script type="text/javascript" src="js/chat.js"></script>
	<script type="text/javascript" src="js/post.js"></script>
	<script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/monStyle.css">
	<link rel="stylesheet" type="text/css" href="css/chat.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	

</head>
<body style="font-family:Verdana">
<!-- j'ai le droit de mettre des commentaires dans mon fichier HTML -->
	<div class="container" >
		<nav class="row navbar navbar-default navbar-fixed-top">
  			<span class="pan_title col-sm-offset-1 col-sm-3" >Ourface</span>
  			<!--<div id="notif" <?php echo $context->show ?> class="alert alert-<?php echo $context->alert?> alert-dismissible" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    			<span aria-hidden="true">&times;</span>
  			</button>
			<h3><?php echo $context->notification?></h3>
		</div>-->
  			<button type="button" data-target="#navbarColor01" data-toggle="collapse" class="navbar-toggle ">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
         </button>
         <div class="collapse navbar-collapse col-sm-offset-9" id="navbarColor01">
  				<ul class="list-inline">
  					<li class="list-inline-item l">
  						
  						<ul class="list-inline">
  						
  							<li id="lip"><a href="monApplication.php?action=index&id=<?php echo ($context->userHost->id)?>"><img width="50" class="img-circle"src="<?php echo ($context->userHost->avatar==null)?"images/user.png":$user->avatar; ?>"></a></li>
  							<li><h3><a href=""><?php echo $context->userHost->nom;?></h3></li></a>
  							<li>
    							<div id="chat" class="animated-chat tada" >Chat </div>
    							
    						</li>
    						<li>
    							 <button id="notification-icon" style="background: transparent;border: 0;position:relative;cursor:pointer;" name="button" onclick="" class="dropbtn"><span id="notification-count">
    							 <span  style="color:red;"class="glyphicon glyphicon-envelope"><div id="zonetif"></div></span></button>
				                 <div id="notification-latest"></div>
    							
    						</li>
  						</ul>
						
					</li>
					<li class="list-inline-item nav-divider"></li>
					<li class="list-inline-item l">
						<button class="btn btn-danger" id="logout"><i class="glyphicon glyphicon-off"></i></button>
					</li>
  				</ul>
  			</div>
		</nav>
		
		<div id="templIndex" class="row">
			<div>&nbsp;</div>
			<div class="col-sm-3">
			
				<section class="row">
					<?php include($profil_view);?>
				</section>

				<section class="row">
					<?php include($friends_view);?>
				</section>
			
			</div>
			
			<div class="col-sm-6">
				<section id="mur_view" class="row" style="min-height: 200px;max-height: 500px;">
					<?php include($mur_view);?>
				</section>
			</div>
			<div class="col-sm-3" id="chat_view">
				<section >
					<?php include($chat_view);?>
				</section>
			</div>
			
		</div>
		
		
		
		
	</div>
    
</body>
</html>
