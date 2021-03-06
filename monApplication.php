

<?php

//nom de l'application
$nameApp = "monApplication";

// Inclusion des classes et librairies
require_once 'lib/core.php';
require_once $nameApp.'/controller/mainController.php';
session_start();
//action par défaut
$action = "index";

if(key_exists("action", $_REQUEST))
	$action =  $_REQUEST['action'];
	


$context = context::getInstance();
$context->init($nameApp);

$user = $context->getSessionAttribute('user') ;
if(!isset($user) || $user == NULL){
	$action = "login" ;
}


$view=$context->executeAction($action, $_REQUEST);

//traitement des erreurs de bases, reste a traiter les erreurs d'inclusion
if($view===false){
	echo "Une grave erreur s'est produite, il est probable que l'action ".$action." n'existe pas...";
	die;
}

//inclusion du layout qui va lui meme inclure le template view
elseif($view!=context::NONE){
	
	$profil_view=$nameApp."/view/profil.php";
	$logout_template=$nameApp."/view/".$action.$view.".php";
	$chat_view=$nameApp."/view/chatSuccess.php";
	$template_view=$nameApp."/view/".$action.$view.".php";
	$mur_view=$nameApp."/view/mur.php";
	$friends_view=$nameApp."/view/friends.php";
	include($nameApp."/layout/".$context->getLayout().".php");
}

?>