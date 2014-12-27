<?php
    
    //取得上傳檔案資訊
    $filename=$_FILES['image']['name'];
    $tmpname=$_FILES['image']['tmp_name'];
    $filetype=$_FILES['image']['type'];
    $filesize=$_FILES['image']['size'];    
    $file=NULL;
    
    if(isset($_FILES['image']['error'])){    
        if($_FILES['image']['error']==0){                                    
            $instr = fopen($tmpname,"rb" );
            $file = addslashes(fread($instr,filesize($tmpname)));        
        }
    }
    
    //新增圖片到資料庫
    $conn=mysql_pconnect("mysql.lionfree.net","u497706260_test","qwe123");        
    mysql_select_db("u497706260_test");
    mysql_query("SET NAMES'utf8'");

    $sql=sprintf("insert into imageDB(image)values(%s)","'".$file."'");
            
    mysql_query($sql);    
    mysql_close($conn);
    
?>