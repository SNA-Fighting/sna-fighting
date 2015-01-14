
window.onload = function() {
   
$(document).ready(function() {
    $("#ll").click(function(){
        // bootbox.alert("Hello world!");
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
                                '<img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c23.23.283.283/s50x50/283801_253710801313578_1401511_n.jpg?oh=33d2c2ed846c789b63bd9ca051618bd9&oe=5529FA40&__gda__=1429521094_a8327d1de098ebb04ce93c0501c8f6ba"/>'+
                            '安安'+
                            '</div>'+

                        '</div>';
   $('#lefth').append(l);
   // alert("0.0");
       });


}

