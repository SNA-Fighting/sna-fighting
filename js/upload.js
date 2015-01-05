 
//上傳預覽start
 (function($) {
            jQuery.fn.extend({
                uploadPreview: function(opts) {
                    opts = jQuery.extend({
                        width: 0,
                        height: 0,
                        imgDiv: $(opts.imgDiv),
                        maxSize:4000,
                        imgType: ["gif", "jpeg", "jpg", "bmp", "png"],
                        callback: function() { return false; }
                    }, opts || {});
                    //var _self = this;
                    var _this = $(this);
                    var imgDiv = $(opts.imgDiv);
                    imgDiv.width(opts.width);
                    imgDiv.height(opts.height);
                    
                    var version = parseInt($.support.version,10);
                  
                    autoScaling = function() {
                     
                        if (version == 7 || version == 8  || version == 9) imgDiv.get(0).filters.item("DXImageTransform.Microsoft.AlphaImageLoader").sizingMethod = "image";
                        var img_width = imgDiv.width();
                        var img_height = imgDiv.height();
                        if (img_width > 0 && img_height > 0) {
                            var rate = (opts.width / img_width < opts.height / img_height) ? opts.width / img_width : opts.height / img_height;
                            if (rate <= 1) {
                                if (version == 7 || version == 8  || version == 9) imgDiv.get(0).filters.item("DXImageTransform.Microsoft.AlphaImageLoader").sizingMethod = "scale";
                                imgDiv.width(img_width * rate);
                                imgDiv.height(img_height * rate);
                            } else {
                                imgDiv.width(img_width);
                                imgDiv.height(img_height);
                            }
                            var left = (opts.width - imgDiv.width()) * 0.5;
                            var top = (opts.height - imgDiv.height()) * 0.5;
                            imgDiv.css({ "margin-left": left, "margin-top": top });
                            imgDiv.show();
                        }
                    },
                   
                    createImg = function(){
                  imgDiv.html('');
                  
                        var img = $("<img />");
                        imgDiv.replaceWith(img);
                        imgDiv = img;
                        
                    },
          
                    _this.change(function() {
                     
                        if (this.value) {
                            if (!RegExp("\.(" + opts.imgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                                alert("圖片類型必須是" + opts.imgType.join("，") + "中的一種");
                                this.value = "";
                                return false;
                            }
                            imgDiv.hide();
                            if ($.support.msie && version < 10) {
                             
                                if (version == 6) {
                                 
                                    var image = new Image();
                                    image.onload = function(){
                                        if( (image.fileSize/1024) > opts.maxSize) {
                                         alert('圖片大小不能超過'+opts.maxSize+'K');
                                         return false;
                                        }
                                    }
                                    image.src = 'file:///' + this.value;
       
                                    createImg();
                                    imgDiv.attr('src', image.src);
                                    autoScaling();
                                }  else {
                                 // alert(e.target.result);
                                      console.log("...");
                                 //this.select();
                                 //var img = document.selection.createRange().text;/
                                    var image = new Image();
                                    image.onload = function(){
                                        if( (image.fileSize/1024) > opts.maxSize) {
                                         alert('圖片大小不能超過'+opts.maxSize+'K');
                                         return false;
                                        }
                                    }
                                    image.src = this.value;                         
                                   
                                 imgDiv.html('');                         
                                    imgDiv.css({ filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image)" });
                                    imgDiv.get(0).filters.item("DXImageTransform.Microsoft.AlphaImageLoader").sizingMethod = "image";                          
                                   
                                    try {
                                        imgDiv.get(0).filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = this.value;
                                    } catch (e) {
                                        alert("無效的圖片文件！");
                                        return;
                                    }                           
                                   
                                    setTimeout("autoScaling()", 100);                           
                                }
                            }
                            else {
                             try{  
                              var file = null;
                              var size = 0;
                              if(this.files && this.files[0] ){
                               file = this.files[0];
                               size = file.size;
                              }else if(this.files && this.files.item(0)) {                       
                               file = this.files.item(0);  
                               size = file.fileSize;
                                 }
        
                              if((size/1024) > opts.maxSize){
                               alert('圖片大小不能超過'+opts.maxSize+'K');
                                     return false;
                           }
                           
                           createImg();
                              
                              //Firefox 因安全性問題已無法直接通過input[file].value 獲取完整的文件路徑
                              try{
                               //Firefox7.0 以下                       
                               imgDiv.attr('src', file.getAsDataURL());

                              }catch(e){
                               //Firefox8.0以上                       
                               imgDiv.attr('src', window.URL.createObjectURL(file));
                              }
                              
                                 imgDiv.css({ "vertical-align": "middle" });
                                 setTimeout("autoScaling()", 100);
                             }catch(e){                      
                              //支持html5的瀏覽器,比如高版本的firefox、chrome、ie10
                              if (this.files && this.files[0]) {                      
                               if((this.files[0].size/1024) > opts.maxSize){
                                         alert('圖片大小不能超過'+opts.maxSize+'K');
                                         return false;
                               }
                               
                                     var reader = new FileReader();
                                     reader.onload = function (e) {                                
                                      imgDiv.attr('src', e.target.result); 
                                      //  alert(e.target.result);
                                      // console.log("...");
                                     };
                                     reader.readAsDataURL(this.files[0]);
                                     setTimeout("autoScaling()", 100);
                                 } 
                             };
                            }
                        }
                    });
                }
            });
        })(jQuery);
        //上傳預覽end