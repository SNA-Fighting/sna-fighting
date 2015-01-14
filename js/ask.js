
window.onload = function() {
   
$(document).ready(function() {
    $("#ll").click(function(){
        bootbox.prompt({
  title: "What is your real name?",
  value: "makeusabrew",
  callback: function(result) {
    if (result === null) {
      Example.show("Prompt dismissed");
    } else {
      Example.show("Hi <b>"+result+"</b>");
    }
  }
});
//                     bootbox.dialog({
//   message: "I am a custom dialog",
//   title: "Custom title",
//   buttons: {
//     success: {
//       label: "Success!",
//       className: "btn-success",
//       callback: function() {
//         Example.show("great success");
//       }
//     },
//     danger: {
//       label: "Danger!",
//       className: "btn-danger",
//       callback: function() {
//         Example.show("uh oh, look out!");
//       }
//     },
//     main: {
//       label: "Click ME!",
//       className: "btn-primary",
//       callback: function() {
//         Example.show("Primary button");
//       }
//     }
//   }
// });
                        });
       $("#rr").click(function(){
                       
                        });
                        var l='<div class="left">'+
                            '<div class="dhead">'+
                                '<img src="img/dog.jpg"/>'+
                            '安安'+
                            '</div>'+

                        '</div>';
   $('#lefth').append(l);
   // alert("0.0");
       });


}

