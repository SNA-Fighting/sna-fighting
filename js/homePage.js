window.onload = function() {

    var loginB = document.getElementById("loginBtn");
    var reB = document.getElementById("reBtn");
    var askBtn = document.getElementById("askBtn");
    var inn0 = document.getElementById("in0");
    var inn1 = document.getElementById("in1");
    var re1 = document.getElementById("re1");
    var userData = document.getElementById("userD");
    var logined = false;
    var myMenu = document.getElementById("myMenu");
    var myMenu_con = document.getElementById("acc_opt");
    // var test = document.getElementById("testBtn");
    var card = document.getElementById("card");
var dialog0;
    var userN;
    var userN2;
    document.onclick = function(event) {
        var e = event || window.event;
        var elem = e.srcElement || e.target;

        // while(elem)  
        // {   
        if (elem.id == "account") {
            // alert('1');
            openclose();
            return;
        }
        // alert('2');
        // elem = elem.parentNode;       
        // }  
        var panel = document.getElementById('sections_panel'),
            maxH = "200px";
        if (panel.style.height == maxH) {
            panel.style.height = "0px";
            document.getElementById('account').setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:0px;  ');
            // navarrow.innerHTML = "&#9662;";
        }
    }
    loginB.onclick = function() {
        // alert("0.0");
        BootstrapDialog.show({
            title: 'Login',
            message: 'Login to join fighting',
            cssClass: 'login-dialog',
            buttons: [{
                    label: 'Login with Facebook',
                    cssClass: 'btn-primary',
                    action: function(dialog) {
                        fbLogin();
                        dialog0=dialog;
                    }
                }, {
                    label: 'Cancel',
                    cssClass: 'btn-cancel',
                    action: function(dialog) {
                      dialog.close();
                    }
                }


            ]
        });

    }
    askBtn.onclick = function() {
        if (logined) {
            bootbox.dialog({
                title: "TO ask a question.",
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +

                '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Question</label> ' +
                    '<div class="col-md-4"> ' +
                    '<input id="name" name="name" type="text" placeholder="What to ask" class="form-control input-md"> ' +
                    '<span class="help-block">Here goes your question with 2 direction</span> ' +
                    '</div> ' +
                    '</div> ' +

                '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="awesomeness">2 Direction</label> ' +
                    '<div class="col-md-4"> <div class="radio">' +
                    '<input id="Direction1" name="Direction" type="text" placeholder="First" class="form-control input-md"> ' +
                    '<input id="Direction2" name="Direction" type="text" placeholder="Second" class="form-control input-md"> ' +

                '</div> ' +
                    '</div> ' +
                    '</div>' +

                '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">Story about this question.</label> ' +
                    '<div class="col-md-4"> ' +
                    '<textarea id="story" name="story" type="text" placeholder="More information"  rows="10" cols="30"/> ' +
                // '<span class="help-block">Here goes your name</span> </div> ' +
                '</div> ' +



                '</form> </div>  </div>',
                buttons: {
                    success: {
                        label: "Ask",
                        className: "btn-success",
                        callback: function() {
                            var name = $('#name').val();
                            var dir1 = $('#Direction1').val();
                            var dir2 = $('#Direction2').val();
                            var story = $('#story').val();
                            // var answer = $("input[name='awesomeness']:checked").val()
                            // alert("Hello " + name + "  dir1:" + dir1 + "  dir2:" + dir2 + "   story:" + story);

                            //...
                            // var googleLink = $("<a>").attr({
                            //     'href': 'http://www.google.com'
                            // }).text("Google");

                            var card = '<div class="row"   style="width: 714px; height:424px; background: url(img/card.png) repeat center; background-size:100%;">  ' +
                                '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                '</br>' +
                                '</br>' +
                                '</br>' +
                                '</br>' +
                                '</br>' +
                                '</br>' +

                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">' + userN + '</label> ' +
                                '</div> ' +



                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label" for="name">Question:</label> ' +
                                '<div class="col-md-4"> ' +

                                '<span class="help-block">' + name + '</span> ' +
                                '</div> ' +
                                '</div> ' +

                                // '<div class="form-group"> ' +
                                //     '<label class="col-md-4 control-label" for="awesomeness">2 Direction</label> ' +
                                //     '<div class="col-md-4"> <div class="radio">' +
                                //     '<input id="Direction1" name="Direction" type="text" placeholder="First" class="form-control input-md"> ' +
                                //     '<input id="Direction2" name="Direction" type="text" placeholder="Second" class="form-control input-md"> ' +

                                // '</div> ' +
                                //     '</div> ' +
                                //     '</div>' +

                                // '<div class="form-group"> ' +
                                //     '<label class="col-md-4 control-label" for="name">Story about this question.</label> ' +
                                //     '<div class="col-md-4"> ' +

                                //     '<textarea id="story" name="story" type="text" placeholder="More information"  rows="10" cols="30" value="dir1"/> ' +
                                // // '<span class="help-block">Here goes your name</span> </div> ' +
                                // '</div> ' +



                                '</form> </div>  </div>';

                            $("aa").append(card);

                            // card.append(b);








                            //...




                        }
                    }
                }
            });
        } else {
            BootstrapDialog.show({
                title: 'Login',
                message: 'Login to ask question',
                cssClass: 'login-dialog',
                buttons: [{
                        label: 'Login with Facebook',
                        cssClass: 'btn-primary',
                        action: function(dialog) {
                            fbLogin();
                        }
                    }, {
                        label: 'Cancel',
                        cssClass: 'btn-cancel',
                        action: function(dialog) {

                        }
                    }


                ]
            });


        }
    }

    reB.onclick = function() {
        // form00.userName.innerTex='';

        // alert("---"+form00.userName.innerText);
        // alert("---"+inn.value);
        /*$.ajax({
        　　type: "POST",
        　　url: "fightCard.php",
        　　contentType: "application/json",
        　　dataType: "json",
        　　success: function(output){
                        var str = output.price + "//" + output.note;
        　　　　window.alert(str);
        　　},
        　　error: function(){
        　　　　window.alert("error");
        　　}
});*/
        myAjax(function(output) {
            // here you use the output
            // $("#result").text(JSON.stringify(output));
            var obj = JSON.parse(output);
            alert(obj.price);
            // alert("price: "+ output[0].price);
            // alert("output: "+output);
        });


        // alert("....");

    }
    /*  $("reB").click(function(){
  $.ajax({url:"fightCard.php",success:function(result){
    alert("....");
     // $("#form0").userName.html("result");
  }});
});*/

    function myAjax(handleData) {
        var formData = {
            userName: inn0.value,
            comment: inn1.value
        };
        jQuery.ajax({
            type: "POST",
            url: 'fightCard.php',
            // 　contentType: "application/json",
            　　
            data: formData,
            // dataType: 'json', 
            // data: {functionname: 'test',arguments:['f','ox']},
            success: function(data0) {
                // success: function (obj, textstatus) {

                var newElement = document.createElement("div");
                var newText = document.createTextNode("userName:" + inn0.value + "  " + inn1.value);
                // i1.setAttribute("innerText","name:"+inn0.value); 
                newElement.appendChild(newText);
                re1.appendChild(newElement);
                handleData(data0);
                // t();
                // alert("..");
                // if( !('error' in obj) ) {
                //     yourVariable = obj.result;
                //     alert("back");
                // }
                // else {
                //     console.log(obj.error);
                //      alert("back error");
                // }

            }

        });
    }

    function addComment(name, comment) {
        // alert("...");
        var newElement = document.createElement("div");
        var newText = document.createTextNode("userName:" + name + "  " + comment);
        // i1.setAttribute("innerText","name:"+inn0.value); 
        newElement.appendChild(newText);
        re1.appendChild(newElement);
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: '1036093649749863',
            xfbml: true,
            version: 'v2.2'
        });
        loginStatus();
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    function fbLogin() {
        FB.login(function(response) {
            if (response.session) {
                 alert("logged");
                //user is logged in, reload page
                // window.location.reload(true);
                loginStatus();
                dialog0.close();
            } else {
                // user is not logged in
                 // alert("not");
                 loginStatus();
                 dialog0.close();
            }
        }, {
            scope: 'publish_actions,user_friends'
        });
    }

    function loginStatus() {
        FB.getLoginStatus(function(res) {
            if (res.status == "connected") {

                FB.api('/me', function(fbUser) {
                        console.log("Open the pod bay doors, " + fbUser.name + ".");
                        userN = fbUser.name;
                         userN2 = fbUser.first_name;
                         document.getElementById('account_name').innerText=userN2;
                    }


                );
                FB.api('/me/picture', function(response) {
                    // var url = $.parseJSON(fbUser).url;
                    // var data = JSON.parse(response);

                    var friendsData = response.data;
                    // console.log(friendsData);

                    console.log(friendsData.url);
                    userData.removeChild(loginB)
                    // loginB.innerText = "";


                    var elem = document.createElement("img");
                    elem.setAttribute('style', 'border-radius:40%; border-color:#ffffff; cursor: pointer; ');
                    elem.setAttribute("height", "64");
                    elem.setAttribute("width", "64");
                    elem.setAttribute("alt", "Flower");
                    elem.setAttribute("id", "account");



                    elem.onmouseover = function() {
                        elem.setAttribute('style', 'border-radius:40%;  cursor: pointer; border-width:40px;  border: solid #fff; border-style:outset;');
                    }
                    elem.onmouseout = function() {
                        var panel = document.getElementById('sections_panel'),
                            maxH = "200px";
                        if (panel.style.height != maxH) {
                            elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:0px;  ');
                            // alert("0...0");
                        } else {
                            elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:40px; border: solid #ababab; ');

                        }
                    }
                    elem.onclick = function() {
                        elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:40px; border: solid #ababab; ');
                        // alert("0.0");
                        // openclose();


                        // alert("...");
                    }
                    elem.src = friendsData.url;
                    userData.appendChild(elem);
                    // userData.insertBefore(elem, document.getElementById('arrow'));
                });
                logined = true;
            } else {
                console.log("NO DOOR");
            }
        });
    }


    /* myMenu.onclick = function() {
        // show_hide('myMenu');
        // alert("....");
        if (myMenu_con.style.display == '') {
            myMenu_con.style.display = 'none';
            // alert("1");
        } else {
            // alert("2");
            myMenu_con.style.display = '';
            $('#' + 'acc_opt').focus();
        }




    }*/
    function openclose() {
        var panel = document.getElementById('sections_panel'),
            tri = document.getElementById("arrow-up"),
            maxH = "200px";
        if (panel.style.height == maxH) {
            panel.style.height = "0px";
            // navarrow.innerHTML = "&#9662;";
            // userData.appendChild(elem);

        } else {
            panel.style.height = maxH;
//             tri.setAttribute('style', ' position: absolute;left: 10px;width: 0; height: 0;  border-left: 15px solid transparent;border-right: 15px solid transparent;border-bottom: 15px solid black;
// overflow: hidden;
//     transition: height 0.3s linear 0s;');
            //          tri.style.border-left= 15px solid transparent;
            //  tri.style.border-right: 15px solid transparent;

            // tri.style. border-bottom: 15px solid black;
            //           var elem = document.createElement("div");
            //       elem.setAttribute("class","arrow-up");
            //       elem.setAttribute("id","tri");
            // userData.appendChild(elem);
            // navarrow.innerHTML = "&#9652;";
        }
    }
    /*test.onclick = function() {
        alert("0.0");
        var panel = document.getElementById('sections_panel'),
            // navarrow = document.getElementById("navarrow"),
            maxH = "200px";
        if (panel.style.height == maxH) {
            panel.style.height = "0px";
            // navarrow.innerHTML = "&#9662;";
        } else {
            panel.style.height = maxH;
            // navarrow.innerHTML = "&#9652;";
        }




    }*/

    // function show_hide(id) {
    //   alert("...");
    //       ID = document.getElementById(id);
    //       if (ID.style.display == 'block') {
    //           ID.style.display = 'none';
    //       } else {
    //           ID.style.display = '';
    //           $('#' + id).focus();
    //       }
    //   }
}
// function addComment(name,comment){
//   alert("...");
//           var newElement = document.createElement("div");
//           var newText = document.createTextNode("userName:"+name+"  "+comment);
//           // i1.setAttribute("innerText","name:"+inn0.value); 
//           newElement.appendChild(newText);
//           re1.appendChild(newElement); 

// }