<?php

//AUTEUR =GADIGBE KOSSI GABY

	/**
	* @Entity
	* @Table(name="fredouil.chat")
	*/

class chat{

	/**
	* @Id @Column(type="integer")
	* @GeneratedValue
	*/
	public $id;


	/**
	* @OnetoOne(targetEntity="post")
	* @JoinColumn(name="post", referencedColumnName ="id")
	*/
	public $post;
	
	
	/**
	* @ManytoOne(targetEntity="utilisateur")
	* @JoinColumn(name="emetteur", referencedColumnName ="id")
	*/
	public $emetteur;



}

?>