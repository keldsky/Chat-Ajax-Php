$(function () {
	
	//Afficher la fenetre modal pour edition de statut
$('#myBtn').click(function(){
        $('#myModal').modal();
    });


var functionUp = function(e) {
   //...
  e.preventDefault();
  //formdata = new FormData($('form').get(0));
  var fd = new FormData();    
	//fd.append( 'file', $('form')[0].files[0]);
	var data;

    data = new FormData($('form').get(0));
    //data.append('file', $('#file')[0].files[0]);
    $('#profilUser > .img').html('<img width="40" class="img-circle col-sm-offset-3" src="images/loader.gif">');
	$.ajax({
    	url : "ajax_dispatcher.php?action=updatePhoto",
    	type: "POST",
    	data : data,
    	processData: false,
    	contentType: false,
    	success:function(data, textStatus, jqXHR){
        	var user=jQuery.parseJSON(data);
					var image;
					if (user.avatar!=null) {
						image='<img width="90" src="'+user.avatar+'" class="col-sm-offset-3 img-circle">';
					}
					else {
						image='<img width="90" src="images/user.png" class="col-sm-offset-3 img-circle">';
					}


					eleUser=image+
					'<form id="formupload" ENCTYPE="multipart/form-data">'+
          			'<input type="file" id="upload-file" name="userImage">'+    
        			'</form>'+
					'<a href="#" id="upload"><span style="color: #587096;" class="glyphicon glyphicon-camera" ></span></a>'+
					$('#profilUser > .img').html(image);
					$('#navbarColor01 > ul > li > ul > #lip').html('<a href=""><img width="50" class="img-circle"src="'+user.avatar+'"></a>');
					
    	},
    	error: function(jqXHR, textStatus, errorThrown){
        	//if fails     
    	}
});
}


$('#upload').on('click',function(e){
	e.preventDefault();
	$('#upload-file:hidden').trigger('click');
});
$('#upload-file').change(functionUp);
$('#formphoto').submit(functionUp);




//Fermer la fenetre modal après click sur le bouton de sauvegarde des modifications
$('#uploadimageprofil').click(function(){
        
      	$('#modaldialog').modal('toggle');

    });






//envoyer donnée saisie au dispatcher ajax pour la mise  jour dans la base de donnée après soumission du formulaire formstatus


$('#formstatus').submit(function (e){
			e.preventDefault();
			
			statut = $('#formstatus').find( "textarea[name='status']" ).val();

		$.post(
			'ajax_dispatcher.php',
			{
				action:'updateStatus',
				texte:statut,
			},
			function (data) {
				var userS=jQuery.parseJSON(data);
				//alert(data);
				//Mise à jour du satut en raffraichissant la zone concernée	
				  $('#statut_context').html(userS.statut);		
			},

		);
	} );
//Fermer la fenetre modal après click sur le bouton de sauvegarde des modifications
	$('#save').click(function(){
        $('#myModal').modal('toggle');
    });



    
  
function  refresh_tchat()
    {
		  
     $.ajax({
		     type: 'POST',
            url: 'ajax_dispatcher.php?action=loadChat',
			
           
            success: function(data1) {
				
            var count = jQuery.parseJSON(data1);
			
			
			if(count.premier>count.deuxieme)
			{
			var nb = count.premier-count.deuxieme;
                 
			
			  document.getElementById('zonetif').innerHTML = ''+nb;
			
			
			   $.ajax({
			    type: "GET",
                url: "ajax_dispatcher.php?action=QueryChat&nb="+nb,
                
               
				
                success: function (data2) {
                 
				      
				 var chat = data2;
				 
				 //alert(chat);
				
				var newchat= '<li class="list-inline-item">'+
            			'<div class="msj macro liL">'+
            				'<div>'+
            					'<ul class="avatar list-inline">'+
            						'<li class="list-inline-item"><img class="img-circle" style="width:15%;" src="" /></li>'+
            						'<li class="list-inline-item em"><p><small> </small></p></li>'+
            						'<li class="list-inline-item"><p><small></small></p></li>'+
            					'</ul>'+
            				'</div>'+
                			'<div class="text text-l">'+
                    			//'<p style="word-wrap:break-word;width:200px;">'+chat.post.id+'</p>'+
                    		
                			'</div>'+
            			'</div>'+
       				'</li>';
					$("#zone_chat").append(newchat);
			
                }
            });
			
			
			}

       
 
  	
            }
        });
	}
    
  


	
setInterval(refresh_tchat, 3000);

	//$('.chl').scrollMaxY = $('.chl').scrollHeight;
	$('#chat').click(function(){
		$('#chatbox').css('display','inline');
		$('#maxi-chat').css('display','none');
		$('#minim-chat').css('display','inline');
		$('#chat_view').draggable({enabled:true});
	
	});
	
	$('#minim-chat').click(function(){
		$('#chat_view').draggable({disabled:true});
		$('#chatbox').css({'width':'25%','bottom':'-498px','right':'15px','position':'fixed'});
		$('#maxi-chat').css('display','inline');
		$('#minim-chat').css('display','none');

	
	});
	
	$('#maxi-chat').click(function(){
		$('#chatbox').css({'margin-top':'0','width':'100%','float':'right','position':'absolute'});
		$('#maxi-chat').css('display','none');
		$('#minim-chat').css('display','inline');
		$('#chat_view').draggable({disabled:false});
	
	
	});
	
	$('#close-chat').click(function(){
		$('#chatbox').css('display','none');
		$('#chatbox').css({'margin-top':'0','width':'100%','position':'absolute'});
		
	
	});
	$('#Message').keyup(function () {
		if ($('#Message').val()!="") {
			$('#sendMessage').prop('disabled',false);
		}
		else {
			$('#sendMessage').prop('disabled',true);
		}
		
	});
	
	$('#formChat').submit(function (e){
			e.preventDefault();
			
			msg = $('#formChat').find( "textarea[name='msg']" ).val();
		$.post(
			'ajax_dispatcher.php',
			{
				action:'addMessage',
				texte:msg,
			},
			function (data) {
				//alert(data);
				var chat=jQuery.parseJSON(data);
				var chatp='<li class="list-inline-item">'+
                        		'<div class="msj macro liL">'+
                        			'<div>'+
                        				'<ul class="avatar list-inline">'+
                        				'<li class="list-inline-item"><img class="img-circle" style="width:15%;" src="'+chat.emetteur.avatar+'" /></li>'+
                        				'<li class="list-inline-item em"><p><small>'+chat.post.date.date+'</small></p></li>'+
                        				'<li class="list-inline-item"><p><small>@'+chat.emetteur.identifiant+'</small></p></li>'+
                        				
                        			'</ul></div>'+
                            		'<div class="text text-l">'+
                                		'<p style="word-wrap:break-word;width:200px;">'+chat.post.texte+'</p>'+
                                		
                            		'</div>'+
                        		'</div>'+
                   			'</li>';
            $('#Message').val("");
				
				$('.chl').append(chatp);							
			},
		);
	} );
	
	
	
	
	
	
	

   /*$('#friendslist a').click(function(e){
   		e.preventDefault();
   		$('#profilUser > .info').html('<img width="40" class="img-circle col-sm-offset-3" src="images/loader.gif">');
   		
   		post=$(this).attr('href');
   		$.post(
			'ajax_dispatcher.php',
			{
				action:'refreshProfilHost',
				texte:post,
			},
			function (data) {
					var user=jQuery.parseJSON(data);
					var image;
					var date=new Date(user.date_de_naissance.date.substring(0,10))
					if (user.avatar!=null) {
						image='<img width="90" src="<?php echo filter_var(user.avatar, FILTER_SANITIZE_STRING);?>" class="col-sm-offset-3 img-circle">';
					}
					else {
						image='<img width="90" src="images/user.png" class="col-sm-offset-3 img-circle">';
					}


					eleUser='<div >'+
					'<h8 class="col-sm-offset-3">'+user.nom+' '+user.prenom+'</br></h8>'+
					'<h4 class="col-sm-offset-1">'+user.date_de_naissance.date.substring(0,10)+'</br></h4>'+

				'</div>';
					$('#profilUser > .img').html(image);
					$('#profilUser > .info').html(eleUser);
			},
		);
   		
   		
   });*/

});
