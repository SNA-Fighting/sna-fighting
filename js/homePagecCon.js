var currCardId = 88;
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
    // var card = document.getElementById("card");
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
    var card;
    // document.onclick = function(event) {
    //     var e = event || window.event;
    //     var elem = e.srcElement || e.target;
    //     // while(elem)
    //     // {
    //     if (elem.id == "account") {
    //         // alert('1');
    //         openclose();
    //         return;
    //     }
    //     // alert('2');
    //     // elem = elem.parentNode;
    //     // }
    //     var panel = document.getElementById('sections_panel'),
    //         maxH = "200px";
    //     if (panel.style.height == maxH) {
    //         panel.style.height = "0px";
    //         document.getElementById('account').setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:0px;  ');
    //         // navarrow.innerHTML = "&#9662;";
    //     }
    // }

    // if (loginB) {
    //     loginB.onclick = function() {
    //         // alert("0.0");
    //         BootstrapDialog.show({
    //             title: 'Login',
    //             message: 'Login to join fighting',
    //             cssClass: 'login-dialog',
    //             buttons: [{
    //                 label: 'Login with Facebook',
    //                 cssClass: 'btn-primary',
    //                 action: function(dialog) {
    //                     fbLogin();
    //                     dialog0 = dialog;
    //                 }
    //             }, {
    //                 label: 'Cancel',
    //                 cssClass: 'btn-cancel',
    //                 action: function(dialog) {
    //                     dialog.close();
    //                 }
    //             }]
    //         });
    //     }
    // }
    /* var objContainer = document.getElementById( "containerpy" ),
    intLevels = 2,
    strBlocksHTML = '';
    
// Using innerHTML is faster than DOM appendChild
for( var i=0; i<intLevels; i++ ){
    for( var n=0; n<i+1; n++ ){
        strBlocksHTML += '<img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.29.155.155/s50x50/1654092_743214245703461_1646241684_n.jpg?oh=1e425d1f127c789f00294f41323425b1&oe=5538EC1C&__gda__=1428615047_43cb49b5c5e7b2f6381b6ee1d8907161" class="buildingBlock"></img>';
    }
    strBlocksHTML += '<div></div>'; // Line break after each row
}

objContainer.innerHTML = strBlocksHTML;*/


    if (askBtn)
        askBtn.onclick = function() {
            if (!logined) { //testL
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
                    '<div style="width:300px; height: 360px; overflow:hidden; position:relative; top:10px; border-width:medium; border-style:dashed;">' +
                        '<div id="imgDiv"> </div>' +
                        ' </div>' +
                        ' <br>' +
                    // ' <input type="file" value="上傳文件">' +

                    ' <script type="text/javascript">' +
                        '$(document).ready(function() {' +

                    '  $("input#pic").uploadPreview({ width: 300, height: 360, imgDiv: "#imgDiv"});' +
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
                                // console.log(img[0].files[0]);

                                // fd.append('file', img);
                                // console.log(img);
                                // var answer = $("input[name='awesomeness']:checked").val()
                                // alert("Hello " + name + "  dir1:" + dir1 + "  dir2:" + dir2 + "   story:" + story);
                                //...
                                // var googleLink = $("<a>").attr({
                                //     'href': 'http://www.google.com'
                                // }).text("Google");
                                card = '<div class="post">' +
                                    '<h2 class="title"><a href="#">' + name + '</a></h2>' +
                                    '<p class="meta">2014-1-13 12:10 Posted by <a href="#">' + userN2 + '</a></p>' +

                                '<div class="entry" align="center">' +
                                    '<div class="opt1">' +
                                    '<a href="#" class="tip1"><span>' + '左方' + '</span></a>' +
                                    '<img class="man"id="man1" src="img/man1.png"/>' +
                                    '</div>' +
                                    '<div class="opt2">' +
                                    '<a href="#" class="tip2"><span>' + '右方' + '</span></a>' +
                                    '<img class="man"id="man2" src="img/man2.png"/>' +
                                    '</div>' +
                                    '<!-- book start -->' +
                                    '<figure align="center" id="dd" class="book">' +
                                    '<!-- Front -->' +
                                    '<ul class="hardcover_front">' +
                                    '<li>' +
                                    '<div class="coverDesign blue">' +
                                    '<span class="ribbon">hot</span>' +
                                    '<img style="position:relative;top:10px;" src="' + pictureUrl + '">' +
                                    '<h1>' + name + '</h1>' +

<<<<<<< HEAD
                                '</div>' +
                                    '</li>' +
                                //        '<div style="width:300px; height: 360px; overflow:hidden; position:relative; top:10px; border-width:medium; border-style:dashed;">' +
                                // '<div id="imgDiv"> </div>' +
                                // ' </div>' +
                                // '  $("input#pic").uploadPreview({ width: 300, height: 360, imgDiv: "#imgDiv"});' +
                                // '});' +
                                '<li></li>' +
                                    '</ul>' +
                                    '<!-- Pages -->' +
                                    '<ul class="page">' +
                                    '<li></li>' +
                                    '<li>' +
                                    story +
                                // 'Andorid因為買不起Ios'+
                                '</li>' +
                                    '<li></li><li></li>' +
                                    '<li></li>' +
                                    '</ul>' +
                                    '<!-- Back -->' +
                                    '<ul class="hardcover_back">' +
                                    '<li></li>' +
                                    '<li></li>' +
                                    '</ul>' +
                                    '<ul class="book_spine">' +
                                    '<li></li>' +
                                    '<li></li>' +
                                    '</ul>' +

                                '</li>' +
                                    '<li>' +
                                    '<!-- book end -->' +
                                    '</div>' +
                                    '<div class="progress">' +
                                    '<div class="progress-bar progress-bar-red progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">' +
                                    '</div>' +
                                    '<div class="progress-bar progress-bar-black progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">' +
                                    '</div>' +

                                '</div>';




                                /*var card2 ='<div class="card" >'+
=======

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
                            // console.log(img[0].files[0]);

                            // fd.append('file', img);
                            // console.log(img);
                            // var answer = $("input[name='awesomeness']:checked").val()
                            // alert("Hello " + name + "  dir1:" + dir1 + "  dir2:" + dir2 + "   story:" + story);
                            //...
                            // var googleLink = $("<a>").attr({
                            //     'href': 'http://www.google.com'
                            // }).text("Google");
 card='<div class="post" style="top:-10px;width:100%;left:-50px;">'+
                    '<h2 class="title"><a href="#">'+name +'</a></h2>'+
                    '<p class="meta">2014-1-13 12:10 Posted by <a href="#">'+userN2+'</a></p>'+
                    '<div class="entry" align="center">'+
                      '<div class="opt1">'+
                        '<a href="#" class="tip1"><span>'+'左方'+'</span></a>'+
                        '<img class="man"id="man1" style="top:35px;"src="img/man1.png"/>'+
                      '</div>'+
                      '<div class="opt2">'+
                        '<a href="#" class="tip2"><span>'+'右方'+'</span></a>'+
                        '<img class="man"id="man2" style="top:35px;" src="img/man2.png"/>'+
                      '</div>'+
                      '<!-- book start -->'+
                      '<figure align="center" id="dd" class="book">'+
                        '<!-- Front -->'+
                        '<ul class="hardcover_front">'+
                          '<li>'+
                            '<div class="coverDesign blue">'+
                              '<span class="ribbon">hot</span>'+
                              '<img style="position:relative;top:10px;" src="'+pictureUrl+'">'+
                              '<h1>'+name+'</h1>'+ 
                            '</div>'+
                          '</li>'+
                    //        '<div style="width:300px; height: 360px; overflow:hidden; position:relative; top:10px; border-width:medium; border-style:dashed;">' +
                    // '<div id="imgDiv"> </div>' +
                    // ' </div>' +
                    // '  $("input#pic").uploadPreview({ width: 300, height: 360, imgDiv: "#imgDiv"});' +
                    // '});' +
                          '<li></li>'+
                        '</ul>'+
                        '<!-- Pages -->'+
                        '<ul class="page">'+
                          '<li></li>'+
                          '<li>'+story+// 'Andorid因為買不起Ios'+
                          '</li>'+
                          '<li></li><li></li>'+
                          '<li></li>'+
                        '</ul>'+
                        '<!-- Back -->'+
                        '<ul class="hardcover_back">'+
                          '<li></li>'+
                          '<li></li>'+
                        '</ul>'+
                        '<ul class="book_spine">'+
                          '<li></li>'+
                          '<li></li>'+
                        '</ul>'+
                        '<!-- book end -->'+
                      '</div>'+
                      '<div class="progress">'+
                        '<div class="progress-bar progress-bar-red progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">'+
                        '</div>'+
                        '<div class="progress-bar progress-bar-black progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">'+
                       '</div>'+
					'</div>'+
              '</div>';




 /*var card2 ='<div class="card" >'+
>>>>>>> origin/master
                           ' <div class="title">'+
                                '<img src=" ' +pictureUrl + '" class="img-circle"/>'+userN2 + ' : ' +name+
                            '</div>'+
                            '<div class="qcontent">'+
                                '<textarea style="overflow: hidden" class="red" id="Direction1">'+'對'+'</textarea>'+
                                    '<div class="progress">'+
                                    '<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">'+
                                    '</div>'+
                                    '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">'+
                                    '</div>'+
                               ' </div>'+
                               
                             '   <textarea style="overflow: hidden"  class="blue" id="Direction2">'+'不對'+'</textarea>'+
                            '</div>'+
                        '</div>';*/
                                /* var card = '<div class="row">' +
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
                                '</form> </div></div>  </div>';*/

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
                                                // alert(dir2);
                                                // var img = $('#pic').files;
                                                // console.log(img);
                                                // console.log(userN2+"..."+name+"..."+img+"..."+story+"..."+dir1+"..."+dir2);
                                                // saveQ(name,story,"0000",dir1,dir2,fbId);
                                                // alert(new FormData(img[0].files[0]));
                                                // save2(img[0].files[0]);
                                                // save2(new FormData(img[0].files[0]));
                                                //testl
                                                $("#aa").prepend(card);
                                                var da;

                                                da = new FormData();
                                                if (img[0].files[0]) {
                                                    da.append('file', img[0].files[0]);
                                                    // da.append('file', img.val());
                                                    // console.log(img[0].files[0]);
                                                }
                                                $.ajax({
                                                    url: 'uploadpic.php',
                                                    timeout: 3000,
                                                    data: da,
                                                    // dataType: 'json',
                                                    processData: false,
                                                    contentType: false,
                                                    type: 'POST',
                                                    success: function(data) {

                                                        saveQ(name, story, data, dir1, dir2, fbId);
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
                $('#DemoModal').modal('show');
                // BootstrapDialog.show({
                //     title: 'Login',
                //     message: 'Login to ask question',
                //     cssClass: 'login-dialog',
                //     buttons: [{
                //         label: 'Login with Facebook',
                //         cssClass: 'btn-primary',
                //         action: function(dialog) {
                //             fbLogin();
                //         }
                //     }, {
                //         label: 'Cancel',
                //         cssClass: 'btn-cancel',
                //         action: function(dialog) {}
                //     }]
                // });
            }
        }
        /*reB.onclick = function() {
        // form00.userName.innerTex='';
        // alert("---"+form00.userName.innerText);
        // alert("---"+inn.value);
        $.ajax({
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
                        });
        myAjax(function(output) {
            // here you use the output
            // $("#result").text(JSON.stringify(output));
            var obj = JSON.parse(output);
            alert(obj.price);
            // alert("price: "+ output[0].price);
            // alert("output: "+output);
        });
        // alert("....");
    }*/
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
                // alert("登入成功");
                $('#inout').innerText = 'logout';
                $('#DemoModal').modal('hide');
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
            timeout: 3000,
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
            error: function() {
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
            appId: '583196705148076',
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
    // t.onmouseover = function() {
    //     // alert("00");
    //     var pinball = '<div  class="drop-shadow curved curved-vt-2"  id="tt"    style="position:absolute; width:500px; height:300px; z-index: 4; background-color:red"></div>';
    //     $(t0).append(pinball);
    //     var url = "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.29.155.155/s50x50/1654092_743214245703461_1646241684_n.jpg?oh=1e425d1f127c789f00294f41323425b1&oe=5538EC1C&__gda__=1426023047_6cedfd551e9b7010980a042b0a52d949"
    //     var tt = document.getElementById("tt");
    //     // tt.style.zIndex="4"
    //     var elem = document.createElement("img");
    //     elem.setAttribute('style', 'border-radius:100%; border-color:#ffffff; cursor: pointer');
    //     elem.setAttribute("height", "64");
    //     elem.setAttribute("width", "64");
    //     elem.setAttribute("alt", "Flower");
    //     elem.setAttribute("id", "accoun");
    //     // elem.setAttribute("draggable", "true");
    //     elem.src = url;
    //     tt.appendChild(elem);
    //     tt.onmouseout = function() {
    //         // alert("00");
    //         $(tt).remove();
    //         // tt.style.zIndex="1"
    //     }
    //     $(document).mousedown(function() {
    //         // alert("0000");
    //         // var flag = false;
    //         var flag = true;
    //         // alert("2");
    //         // var stop;
    //         // stop = setTimeout(function() {//down 1s，才运行。
    //         //     flag = true;
    //         //     elem.setAttribute('style', 'border-radius:100%; border-color:#ffffff; cursor: url("https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.29.155.155/s50x50/1654092_743214245703461_1646241684_n.jpg?oh=1e425d1f127c789f00294f41323425b1&oe=5538EC1C&__gda__=1426023047_6cedfd551e9b7010980a042b0a52d949"); ');
    //         //     // alert("开始处理你的代码.");
    //         // }, 1000);
    //         //                 $(accoun).mouseup(function() {//鼠标up时，判断down了多久，不足一秒，不执行down的代码。
    //         //                     if (!flag) {
    //         //                         // clearTimeout(stop);
    //         //                     }
    //         //                 });
    //         $(document).mouseup(function() {
    //             flag = false;
    //             // alert("1");
    //         });
    //         $(document).mousemove(function(e) {
    //             if (flag)
    //                 console.log(e.pageX + "," + e.pageY);
    //             // alert("0.0");
    //         });
    //     });
    //     /*$(accoun).mousedown(function() {
    //                     // alert("0000");
    //                     var flag = false;
    //                     var stop;
    //                     stop = setTimeout(function() {//down 1s，才运行。
    //                     flag = true;
    //                     alert("开始处理你的代码.");
    //                     }, 1000);
    //                     $(accoun).mouseup(function() {//鼠标up时，判断down了多久，不足一秒，不执行down的代码。
    //                     if (!flag) {
    //                     clearTimeout(stop);
    //                     }
    //                     });
    //                     });*/
    // }
    $(document).ready(function() {
        $('.open-modal').click(function() {
            $('#DemoModal').modal('show');
            $('#facebook').click(function() {
                fbLogin();
            });
        });
        $('.close-modal').click(function() {
            $('#DemoModal').modal('hide');
            $('#DemoModal2').modal('hide');
        });
    });

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
                    // document.getElementById('account_name').innerText = userN2;
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
                    // elem.setAttribute('style', 'border-radius:40%; border-color:#ffffff; cursor: pointer; ');
                    elem.setAttribute('style', ' position: relative; right:5px;top: -13px; border-radius:40%; float:left; cursor: pointer; ');
                    elem.setAttribute("height", "48");
                    elem.setAttribute("width", "48");
                    // elem.setAttribute("alt", "Flower");
                    elem.setAttribute("id", "account");
                    $('#inout').text('logout');
                    // elem.onmouseover = function() {
                    //     elem.setAttribute('style', 'border-radius:40%;  cursor: pointer; border-width:40px;  border: solid #fff; border-style:outset;');
                    // }
                    // elem.onmouseout = function() {
                    //     var panel = document.getElementById('sections_panel'),
                    //         maxH = "200px";
                    //     if (panel.style.height != maxH) {
                    //         elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:0px;  ');
                    //         // alert("0...0");
                    //     } else {
                    //         elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:40px; border: solid #ababab; ');
                    //     }
                    // }
                    // elem.onclick = function() {
                    //     elem.setAttribute('style', ' border-radius:40%;  cursor: pointer; border-width:40px; border: solid #ababab; ');
                    //     // alert("0.0");
                    //     // openclose();
                    //     // alert("...");
                    // }
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

    $('#dd').click(function() {
        $('#DemoModal2').modal('show');
        // alert("..");
        // window.open ('ask.html','_self',false);

        // $('#big').modal('show');
        //    $('#dd').animate({
        //    height: ($(this).height()*2),
        //    width: ($(this).width()*2)
        // }, 1000);
    });

    // $('#loginButton').click(function() {

    // bootbox.dialog({

    //                 message: 
    // '<div id="loginform">'+
    // '<div id="facebook"><i class="fa fa-facebook"></i><div id="connect">Connect with Facebook</div></div>'+
    // '<div id="mainlogin">'+
    // '<div id="or">or</div>'+
    // '<h1>Log in with awesome new thing</h1>'+
    // '<form action="#">'+
    // '<input id="bootbox1" type="text" placeholder="username or email" value="" required>'+
    // '<input id="bootbox2" type="password" placeholder="password" value="" required>'+
    // '<button  id="bootboxBtn"  type="submit"><i class="fa fa-arrow-right"></i></button>'+
    // '</form>'+
    // '<div id="note"><a href="#">Forgot your password?</a></div>'+
    // '</div>'+
    // '</div>'

    //             }
    //         );

    // });
    /* checkNewUpdate();
    interval = setInterval("checkNewUpdate()", 4000); //Set interval for accident checking ajax*/
    // interval = setInterval("testt()", 4000); //Set interval for accident checking ajax
});
// var a=0;
function testt() {
    console.log("now: " + currCardId);
    // alert("now: "+currCardId);
    var formData = {
        currCardId: currCardId
    };
    $.ajax({
        type: "POST",
        timeout: 3000,
        url: 'getHomePageDataTest.php',
        // 　contentType: "application/json",

        data: formData,
        success: function(data) {
            console.log("max: " + data);
            // alert(data);
        }
    });
}

function checkNewUpdate() {
    // alert("...");
    check(function(output) {
        // console.log(output);
        // alert(currCardId);
        // alert(output);
        console.log("in0  " + output.length);
        if (output.length) {
            console.log("in");
            var obj = JSON.parse(output);

            // console.log("0.0  "+obj.question_img);
            console.log("in2");
            if (obj.length > 0) {
                console.log("in3");
                currCardId = obj[obj.length - 1].question_id;

                // alert(obj.price);
                // console.log(obj.length+"  "+obj[1].question_img);
                for (var i = 0; i < obj.length; i++) {
                    // for (var i = obj.length - 1; i >= 0; i--) {
                    console.log("aa  " + obj[i].question_title);
                    /* var card = '<div class="row" id="card' + obj[i].question_id + '">' +
                    '<div  class="drop-shadow curved curved-vt-2"    style="width:500px; height:300px;>"  ' +
                    '<div class="col-md-12"> ' +
                    '<form class="form-horizontal"> ' +
                    '</br>' +
                    '</br>' +
                    '<div class="form-group"> ' +
                    '<label class="col-md-4 control-label help-block" for="name">' +
                    '<img height="64px" width="64px" src=' + obj[i].head + ' style="border-radius:40%; border-color:#ffffff; right:"5px">' +
                    obj[i].name + ' : ' + '</label> ' +
                    '<br>' +
                    '<label class="control-label" style="font-size:30px rows:3">' + obj[i].question_title + '</label> ' +
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
                    '<textarea disabled style="left:0px;position:relative; value="對" class="in1" type="text" rows="3" >' +
                    // '對' +
                    obj[i].question_left +
                    '</textarea>' +
                    '</t>' +
                    '</t>' + '</t>' +
                    '<textarea disabled style="align:right;left:300px;position:relative;" value="不對" class="in2" type="text" rows="3" >' +
                    // '不對' +
                    obj[i].question_right +
                    '</textarea>' +
                    '</div>' +
                    '</div>';*/

                    var card = '<div class="card" id="card' + obj[i].question_id + '">' +
                        ' <div class="title">' +
                        '<img src=" ' + obj[i].head + '" class="img-circle"/>' + obj[i].name + ' : ' + obj[i].question_title +
                        '</div>' +
                        '<div class="qcontent">' +
                        '<textarea style="overflow: hidden" class="red">' + obj[i].question_left + '</textarea>' +
                        '<div class="progress">' +
                        '<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">' +
                        '</div>' +
                        '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">' +
                        '</div>' +
                        ' </div>' +
                        '   <textarea style="overflow: hidden" class="blue">' + obj[i].question_right + '</textarea>' +
                        '</div>' +
                        '</div>';
                    // alert(obj[i].price);
                    // $("aa").append(card);
                    $('#aa').prepend(card);
                    // $("aa").prependTo(card);
                };
            }
        }
    });
}

function check(handleData) {
    var formData = {
        currCardId: currCardId
    };
    console.log("check  " + currCardId);
    jQuery.ajax({
        type: "POST",
        timeout: 3000,
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

// $(".modal").on("shown.bs.modal", function() {
//   $("img").cropper({
//     multiple: true,
//     data: originalData,
//     done: function(data) {
//       console.log(data);
//     }
//   });
// })
