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
    var bar1 = document.getElementById("bar1");
    var bar2 = document.getElementById("bar2");
    var t = document.getElementById("t");
    var firstUse = false;
    var t0 = document.getElementById("t0");
    var dialog0;
    var userN;
    var userN2;
    var pictureUrl;
    var fbId;
    var haveName, havePic;
    var fd = new FormData();

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
    if (loginB) {
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
                        dialog0 = dialog;
                    }
                }, {
                    label: 'Cancel',
                    cssClass: 'btn-cancel',
                    action: function(dialog) {
                        dialog.close();
                    }
                }]
            });
        }
    }
    askBtn.onclick = function() {
        if (logined) { //testL
            bootbox.dialog({
                title: "問一個問題",
                message: '<div class="row">  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +

                '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name" style="font-size:30px">問題:</label> ' +
                    '<div class="col-md-4"> ' +
                    '<input id="name" name="name" type="text" placeholder="要問什麼呢?" style=" position:relative;  height:40px;width:300px; top:10px;"  class="form-control input-md"> ' +
                    '<span class="help-block" style=" position:relative;  top:10px; width:200px; ">(一個可歸類成2大方向的問題)</span> ' +
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
                '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="name">可填問題相關的資訊</label> ' +
                    '<div class="col-md-4"> ' +
                    '<textarea  id="story" name="story" type="text" placeholder="相關的事件or資料..."  rows="10" cols="30"/> ' +
                // '<span class="help-block">Here goes your name</span> </div> ' +
                '</div> ' +
                    '</div> ' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label" for="awesomeness">或上傳張圖片:</label> ' +
                // '<form action="upload.php" method="POST" name="FileForm" enctype="multipart/form-data">' +
                '<div class="col-md-4"> <div class="radio">' +
                    ' <input id="pic"  type="file" accept="image/*" value="上傳文件">' +
                // '<input type="file" name="file1" size="20" id="file1" />' +
                //   '上傳圖片預覽:<br>' +
                '<div style="width:90px; height:110px; overflow:hidden; border:1px solid red;">' +
                    '<div id="imgDiv"> </div>' +
                    ' </div>' +
                    ' <br>' +
                // ' <input type="file" value="上傳文件">' +

                ' <script type="text/javascript">' +
                    '$(document).ready(function() {' +

                '  $("input#pic").uploadPreview({ width: 90, height: 110, imgDiv: "#imgDiv"});' +
                    '});' +

                '</script>' +

                // '<input type="button" class="btn-warning" value="確定上傳"  /></div>' +
                '</div> ' +
                    '</div> ' +


                '</form> </div>  </div>',
                buttons: {
                    success: {
                        label: "預覽",
                        className: "btn-success",
                        callback: function() {
                            // console.log($("input").files[0]);
                            var name = $('#name').val();

                            var story = $('#story').val();
                            var img = $('#pic');
                            console.log(img[0].files[0]);

                            // fd.append('file', img);
                            // console.log(img);
                            // var answer = $("input[name='awesomeness']:checked").val()
                            // alert("Hello " + name + "  dir1:" + dir1 + "  dir2:" + dir2 + "   story:" + story);
                            //...
                            // var googleLink = $("<a>").attr({
                            //     'href': 'http://www.google.com'
                            // }).text("Google");
                            var card = '<div class="row">' +
                                '<div  class="drop-shadow curved curved-vt-2"    style="width:500px; height:300px;>"  ' +
                                '<div class="col-md-12"> ' +
                                '<form class="form-horizontal"> ' +
                                '</br>' +
                                '</br>' +
                                '<div class="form-group"> ' +
                                '<label class="col-md-4 control-label help-block" for="name">' +
                                '<img height="64px" width="64px" src=' + pictureUrl + ' style="border-radius:40%; border-color:#ffffff; right:"5px">' +
                                userN2 + ' : ' + '</label> ' +
                                '<br>' +
                                '<label class="control-label" style="font-size:30px rows:3">' + name + '</label> ' +
                                '<div style="align: center;">' +
                                '</br>' +
                                '</br>' +
                                '</br>' +
                                '</br>' +
                                '<div class="dd">' +
                                '</t>' +
                                '</t>' +
                                '<div class="blue" style="width:50%;   left:300px;position:relative;"></div>' +
                                '<div class="red" style="width:50%;"></div>' +
                                '<textarea id="Direction1" style="left:0px;position:relative; value="對" class="in1" type="text" rows="3" >' +
                                '對' +
                                '</textarea>' +
                                '</t>' +
                                '</t>' + '</t>' +
                                '<textarea id="Direction2" style="align:right;left:300px;position:relative;" value="不對" class="in2" type="text" rows="3" >' +
                                '不對' +
                                '</textarea>' +
                                '</div>' +
                                '</div>' +
                                // '<div class="form-group"> ' +
                                // '<label class="col-md-4 control-label" for="name">Question:</label> ' +
                                // '<div class="col-md-4"> ' +
                                // '<span class="help-block">' + name + '</span> ' +
                                // '</div> ' +
                                // '</div> ' +
                                // elem.setAttribute("id", "account");
                                '</form> </div></div>  </div>';

                            bootbox.dialog({
                                title: "預覽問題",
                                message: card,
                                buttons: {
                                    success: {
                                        label: "發問",
                                        className: "btn-success",
                                        callback: function() {
                                            var dir1 = $('#Direction1').val();
                                            var dir2 = $('#Direction2').val();
                                            // var img = $('#pic').files;
                                            // console.log(img);
                                            // console.log(userN2+"..."+name+"..."+img+"..."+story+"..."+dir1+"..."+dir2);
                                            // saveQ(name,story,"0000",dir1,dir2,fbId);
                                            // alert(new FormData(img[0].files[0]));
                                            // save2(img[0].files[0]);
                                            // save2(new FormData(img[0].files[0]));
                                            //testl
var da;

    da = new FormData();
    da.append('file', img[0].files[0]);
    // da.append('file', img.val());
console.log(img[0].files[0]);
  
  $.ajax({
        url: 'uploadpic.php',
  data: da,
   // dataType: 'json',
  processData: false,
  contentType: false ,
  type: 'POST',
  success: function(data){
    // alert(data);
    saveQ(name,story,data,dir1,dir2,fbId);
    // console.log(data);
  }
});
    //     data: data,
    //     processData: false,
    //      contentType: false,
    //     type: 'POST',

    //     // This will override the content type header, 
    //     // regardless of whether content is actually sent.
    //     // Defaults to 'application/x-www-form-urlencoded'
    //     contentType: 'multipart/form-data', 

    //     //Before 1.5.1 you had to do this:
    //     // beforeSend: function (x) {
    //     //     if (x && x.overrideMimeType) {
    //     //         x.overrideMimeType("multipart/form-data");
    //     //     }
    //     // },
    //     // Now you should be able to do this:
    //     mimeType: 'multipart/form-data',    //Property added in 1.5.1

    //     success: function (data) {
    //         alert(data);
    //     }
    // });














                                            //
                                            // save(name,story,img[0].files[0],dir1,dir2,fbId);
                                            // alert(img[0]);

                                            // saveQ(name,story,img[0].files[0],dir1,dir2,fbId);

                                            $("aa").append(card);
                                        }
                                    }


                                }
                                // card.append(b);
                            });
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
                    action: function(dialog) {}
                }]
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

    function saveUserData(n, b, i) {
        // alert(name+" "+bighead);
        var formData = {
            name: n,
            bighead: b,
            fbid: i
        };
        jQuery.ajax({
            type: "POST",
            url: 'login.php',
            // 　contentType: "application/json",

            data: formData,
            // dataType: 'json',
            // data: {functionname: 'test',arguments:['f','ox']},
            success: function(data0) {
                alert("登入成功");
            }
        });
    }

    function saveQ(questiontitle, questioncontent, questionimg, questionleft, questionright, fb) {
        // alert(name+" "+bighead);
        // save(questionimg);
        var formData = {
            question_title: questiontitle,
            question_content: questioncontent,
             question_img: questionimg,
            // question_img: "questionimg",
            question_left: questionleft,
            question_right: questionright,
            fb_id: fb
        };
        // alert(fbId);
        jQuery.ajax({
            type: "POST",
            url: 'question.php',
            // 　contentType: "application/json",
            // contentType: false, 
            //    processData: false, 
            //    dataType: 'json',
            data: formData,
            // dataType: 'json',
            // data: {functionname: 'test',arguments:['f','ox']},
            success: function(data0) {
                alert("問題儲存成功");
            },
              error: function(){
                alert("問題儲存失敗");
        }
        });

        // var formData2 = {

        //            question_img: questionimg.files[0],

        //        };
        //  jQuery.ajax({
        //            type: "FILE",
        //            url: 'question.php',
        // contentType: false, 
        //    processData: false, 
        //            data: formData2,

        //            success: function(data0) {
        //                alert("問題儲存成功2");
        //            }
        //        });




    }

    function save(questiontitle, questioncontent, questionimg, questionleft, questionright, fb) {
        // alert(name+" "+bighead);

        var formData = {
            question_title: questiontitle,
            question_content: questioncontent,
            question_img: questionimg,
            question_left: questionleft,
            question_right: questionright,
            fb_id: fb
        };
        $.ajax({
            url: 'uploadpic.php',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                alert("ajax end");
            }
        });
    }
 function save2(questionimg) {
        // alert(name+" "+bighead);
         alert(questionimg);
        // var formData = {
        //     question_img: questionimg

        // };
        $.ajax({
            url: 'uploadpic.php',
            data: questionimg,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                alert(data);
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
            if (response.authResponse) {
                //有接受權限登入

                firstUse = true;

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
    t.onmouseover = function() {
        // alert("00");
        var pinball = '<div  class="drop-shadow curved curved-vt-2"  id="tt"    style="position:absolute; width:500px; height:300px; z-index: 4; background-color:red"></div>';
        $(t0).append(pinball);
        var url = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.29.155.155/s50x50/1654092_743214245703461_1646241684_n.jpg?oh=1e425d1f127c789f00294f41323425b1&oe=5538EC1C&__gda__=1426023047_6cedfd551e9b7010980a042b0a52d949"
        var tt = document.getElementById("tt");
        // tt.style.zIndex="4"
        var elem = document.createElement("img");
        elem.setAttribute('style', 'border-radius:100%; border-color:#ffffff; cursor: pointer');
        elem.setAttribute("height", "64");
        elem.setAttribute("width", "64");
        elem.setAttribute("alt", "Flower");
        elem.setAttribute("id", "accoun");
        // elem.setAttribute("draggable", "true");
        elem.src = url;
        tt.appendChild(elem);
        tt.onmouseout = function() {
            // alert("00");
            $(tt).remove();
            // tt.style.zIndex="1"
        }
        $(document).mousedown(function() {
            // alert("0000");
            // var flag = false;
            var flag = true;
            // alert("2");
            // var stop;
            // stop = setTimeout(function() {//down 1s，才运行。
            //     flag = true;
            //     elem.setAttribute('style', 'border-radius:100%; border-color:#ffffff; cursor: url("https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.29.155.155/s50x50/1654092_743214245703461_1646241684_n.jpg?oh=1e425d1f127c789f00294f41323425b1&oe=5538EC1C&__gda__=1426023047_6cedfd551e9b7010980a042b0a52d949"); ');
            //     // alert("开始处理你的代码.");
            // }, 1000);
            //                 $(accoun).mouseup(function() {//鼠标up时，判断down了多久，不足一秒，不执行down的代码。
            //                     if (!flag) {
            //                         // clearTimeout(stop);
            //                     }
            //                 });
            $(document).mouseup(function() {
                flag = false;
                // alert("1");
            });
            $(document).mousemove(function(e) {
                if (flag)
                    console.log(e.pageX + "," + e.pageY);
                // alert("0.0");
            });
        });
        /*$(accoun).mousedown(function() {
                        // alert("0000");
                        var flag = false;
                        var stop;
                        stop = setTimeout(function() {//down 1s，才运行。
                        flag = true;
                        alert("开始处理你的代码.");
                        }, 1000);
                        $(accoun).mouseup(function() {//鼠标up时，判断down了多久，不足一秒，不执行down的代码。
                        if (!flag) {
                        clearTimeout(stop);
                        }
                        });
                        });*/
    }

    function loginStatus() {
        FB.getLoginStatus(function(res) {
            if (res.status == "connected") {
                FB.api('/me', function(fbUser) {
                    console.log("Open the pod bay doors, " + fbUser.name + ".");
                    userN = fbUser.name;
                    userN2 = fbUser.first_name;
                    fbId = fbUser.id;
                    // alert(fbId);
                    first(0);
                    document.getElementById('account_name').innerText = userN2;
                });
                FB.api('/me/picture', function(response) {
                    // var url = $.parseJSON(fbUser).url;
                    // var data = JSON.parse(response);
                    pictureUrl = response.data.url;

                    // console.log(friendsData);
                    first(1);
                    console.log(pictureUrl);
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
                    elem.src = pictureUrl;
                    userData.appendChild(elem);
                    // userData.insertBefore(elem, document.getElementById('arrow'));
                });

                logined = true;
            } else {
                console.log("NO DOOR");
            }
        });
    }

    function first(code) {
        if (code == 0)
            haveName = true;
        if (code == 1)
            havePic = true;

        if (firstUse && haveName && havePic) {
            firstUse = false;

            // alert(userN+" "+pictureUrl);
            saveUserData(userN, pictureUrl, fbId);
        }
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
    function checkFile() {
        alert("..");
    }

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
    // var start_to_say_hi = setInterval("console.log('h1')",100);
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
jQuery(document).ready(function() {
    // alert("0");
    //interval =  setInterval("checkNewUpdate()",4000); //Set interval for accident checking ajax

});
// var a=0;

function checkNewUpdate() {
    check(function(output) {

        var obj = JSON.parse(output);
        if (obj.length > 0) {
            // alert(obj.length);
            // alert(obj.price);
            for (var i = obj.length - 1; i >= 0; i--) {
                alert(obj[i].price);

            };
        }
    });
}

function check(handleData) {
    var formData = {
        //no data
    };
    jQuery.ajax({
        type: "POST",
        url: 'getHomePageData.php',
        // 　contentType: "application/json",

        data: formData,

        success: function(data0) {

            handleData(data0);

        }
    });

    // alert("1");
    // a++;
    // console.log(a);

}
// $("input").uploadPreview({ width: 360, height: 110, imgDiv: "#imgDiv"});
function addComment(name, comment) {
    // alert("...");
    var newElement = document.createElement("div");
    var newText = document.createTextNode("userName:" + name + "  " + comment);
    // i1.setAttribute("innerText","name:"+inn0.value);
    newElement.appendChild(newText);
    re1.appendChild(newElement);
}


// $(document).ready(function() {
//    // alert("0.0");
//            $("input").uploadPreview({ width: 90, height: 110, imgDiv: "#imgDiv"});
//        });