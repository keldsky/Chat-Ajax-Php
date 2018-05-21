<?php
//AUTEUR =GADIGBE KOSSI GABY

// Inclusion de la classe utilisateur
//require_once "chat.class.php";

class chatTable{

  public static function getChats(){
  	$em = dbconnection::getInstance()->getEntityManager() ;

	$chatRepository = $em->getRepository('chat');
	$chats = $chatRepository->findAll();	
	
	return $chats; 
  }

	public static function getLastChat(){
  		$em = dbconnection::getInstance()->getEntityManager() ;
		$lastchat=null;
		$chat = $em->getRepository('chat')->findOneById(37);
	
		return $chat;
	}
	
	public static function addChat($chat){
  	$em = dbconnection::getInstance()->getEntityManager() ;
	$em->persist($chat);
	$em->flush();
	
  }
   public static function getTotalChats(){
  	$em = dbconnection::getInstance()->getEntityManager() ;

	$chatRepository = $em->getRepository('chat');
	$chats = $chatRepository->findAll();	
	$result = count($chats);

	return $result; 
  }
}

?>
