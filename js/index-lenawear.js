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
$ (function(){
   $('#subPage').hide();

$('#plan').click(function(){
    $('#plan').show();
  });
})
 

