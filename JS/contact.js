$(document).ready(function(){
    $("form#contact").submit(function(event){
  event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var number = $("textarea#number").val();
      var message = $("textarea#message").val();
      if ($("input#name").val() && $("input#email").val()){
        
        swal (name+ " ","We have received your message. Thank you for reaching out to us. Please proceed to Subscribe","success");
         
    }
  
  });
 
});
