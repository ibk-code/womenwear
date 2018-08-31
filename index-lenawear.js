// (function($) {
//   $.fn.uncheckableRadio = function() {
//     var $root = this;
//     $root.each(function() {
//       var $radio = $(this);
//       if ($radio.prop('checked')) {
//         $radio.data('checked', true);
//       } else {
//         $radio.data('checked', false);
//       }
        
//       $radio.click(function() {
//         var $this = $(this);
//         if ($this.data('checked')) {
//           $this.prop('checked', false);
//           $this.data('checked', false);
//           $this.trigger('change');
//         } else {
//           $this.data('checked', true);
//           $this.closest('form').find('[name="' + $this.prop('name') + '"]').not($this).data('checked', false);
//         }
//       });
//     });
//     return $root;
//   };
// }
// $('[type=radio]').uncheckableRadio();
// $('button').click(function() {
//   $('[value=V2]').prop('checked', true).trigger('change').trigger('click');
// });
// $("#plan").click(function(){
//     $('#main_page').addclass('displayNoContent')
//       $('#sub_page').removeclass('displayNoContent')
//   });
// $("#plan").click(function(){
//       $('#mainPage').addClass('displayNoContent')
//         $('#subPage').removeClass('displayNoContent')   
//     })
//     $("#goBack").click(function(){
//       $('#firstPage').removeClass('displayNoContent')
//       $('#seconpage').addClass('displayNoContent')
// $(function(){
//     $('#plan').click(function(){
//       alert('welcome everyone')
//     })
//   }
$(document).ready(function() {
	$('#time');
	time.innerHTML=Date()

	$('#FullPage').hide()

$(window).load (function () {
$('#loader').fadeOut(5000 , function(){ 
	$(this).remove() ;
	 })
$('#FullPage').fadeIn(10000);
});
// $(window) .load(function(){
// 	$('#loader').fadeOut(1000, function(){
// 				$(this).remove ();
// 			});
// 	$('#FullPage').fadeIn(3000)
// });
// setTimeout(function(){
// 	$('#loader').fadeOut('slow' function(){
// 		$(this).remove();
// 	})
// 	} , 1500);
// $('#FullPage').show()
// })eRW
   $('#subPage').hide()
$('#plan').click(function(){
    // $('#plan').show();
    $('#subPage').show()
    $('#gertt').hide()
  });
$('#Back').click(function(){
	$('#gertt').show()
	$('#subPage').hide()
}); 

	$('.form_Regist').hide()
	$('#signUp').click(function(){
		$('.form_Regist').show()
		$('#gertt').hide()
	});
$('.form_Regist').hide()
	$('#forword').click(function(){
		$('.form_Regist').show()
		$('#subPage').hide()
	});
	$('#Home').click(function(){
		$('#gertt').show()
		$('.form_Regist').hide()
		});


	// var flag=0
	// function username (){
	// 	user=loginform.username.value;
	// 	if (user= ="") {
	// 		document.getElementById('errorO').innerHTML="Enter UserID";
	// 		flag =1;
	// 	}
	// }
	// function password (){
	// 	pass=loginform.password.value;
	// 	if (pass= = "") {
	// 		document.getElementById("errorL").innerHTML="Enter password";
	// 		      flag1;
	// 	}
	// }
	// function check (form){
	// 	flag=0;      username();  password();
	// 	if (flag = =)
	// 		return
	// 	false;
	// 	else
	// 		return
	// 	true;
	// }
	var usern
	var email = document.getElementById("mail")
	email.addEventListener("keyup", function (event){
		if (email.validity.typeMismatch) {
			email.setCustomValidity("I expect an email");
		} else{
			email.setCustomValidity("");
		}
		});
	// function validate (f){
	// 	var err={};
	// 	if (f.fname.value= = ""){
	// 		err.message="missing first name";
	// 		err.field=f.fname;
	// 	} 
	// 	else if (f.mail.value= = " ") {
	// 		err.message="missing mail";
	// 		err.field=f.mail;
	// 	}
	// 	if (err.message) {
	// 		alert (err.message);
	// 		err.field.focus ();
	// 		return false;
	// 	}
	// 	return true;
	// }
	// var freg= document.getElementById('#mail').addEventListener('focus' function(){
	// 	if (freg.validity.typeMismatch){
	// 		freg.setCustomValidity('I WILL Soon get u');
	// 	}else{
	// 		freg.setCustomValidity('');
	// 	}
	// });
// 	var myVar;

// 	function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// 	function showPage() {
//  $("#loader").style.display = "none";
//   $("#gertt").style.display = "block";
// }
})