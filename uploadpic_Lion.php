<?php
mb_internal_encoding('utf-8');
include_once('item.php');
header("Content-Type:text/html; charset=utf-8");
// class question extends DB{
// 	var $comments=array();
// 	// var $output = array();
// 	function __construct(){
// 		parent::__construct();
		
// 		  // $this->receiveComments();
// 		//  $this->loadData();
// 		// $this->showAllComments();
// 		// $this->showInputBlock();

// 	}
	
// 	function saveData($t,$c,$i,$l,$r,$time,$u){
// 		// echo "userName:".$u."<br>";
// 		// echo "time:".$t."<br>";
// 		// echo "comment:".$c."<br>-----<br>";
// 		// $newComment="set names utf8";
// 		$sql = "SELECT user_id FROM user WHERE fb_id='".$u."'";
// 		// $sql = "SELECT `user_id` FROM `user` WHERE user.fb_id=\"\"";
		
// 		// $findId="SELECT `user_id` FROM `user` WHERE fb_id='904230259601858'";
// 		$idd=mysql_query($sql);
// 		$uu=mysql_fetch_array($idd)[0];
// 		// $total_fields=mysqli_num_fields($uu); 
// 		// $image= addslashes(file_get_contents($_FILES['pic']['tmp_name']));
// 		$newComment="INSERT INTO `question`( `question_title`, `question_content`,`question_img`, `question_left`, `question_right`, `ask_time`, `fb_id`, `u_id`) VALUES ('".$t."','".$c."','".$i."','".$l."','".$r."','".$time."','".$u."','".$uu."');";
// 		// echo $d;
// 		mysql_query($newComment);
	
// 	}
// 	// function saveData2($t,$c,$i,$l,$r){
// 	// 	// echo "userName:".$u."<br>";
// 	// 	// echo "time:".$t."<br>";
// 	// 	// echo "comment:".$c."<br>-----<br>";
// 	// 	// $newComment="set names utf8";
	
// 	// 	$newComment="INSERT INTO `question`( `question_title`, `question_content`,`question_img`, `question_left`, `question_right`) VALUES ('".$t."','".$c."','".$i."','".$l."','".$r."');";
// 	// 	mysql_query($newComment);
// 	// }
	

// }
//ttt
// $qq=new question();
// $qq->saveData($_POST['name'],$_POST['bighead'],$_POST['fbid'],$_POST['fbid'],$_POST['fbid']);
date_default_timezone_set('Asia/Taipei');
 // print_r($_POST);
// $b = array (
//     'm' => $_POST['question_title'], 
//     'foo' => $_POST['question_content']
//     );
// $data["question_title"]=$_POST["question_title"] 
// $data["question_content"]=$_POST["question_content"] 
// $data["question_left"]=$_POST["question_left"] 
// $data["question_right"]=$_POST["question_right"] 

// $data["question_right"]="111";
// echo file_put_contents("pic/file.txt", serialize($data));
// echo $_FILES['file']
// echo file_put_contents("pic/test.png",print_r($_POST['question_img'], true));
$target_path = "pic/";

$target_path = $target_path .date("Ymdhis", time()).basename( $_FILES['file']['name']); 

if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
	echo 'http://fighting.lionfree.net/'.$target_path;
    // echo "The file ".  basename( $_FILES['file']['name']). 
    // " has been uploaded";
} else{
    echo "no";
}
 // echo print_r($_POST['file'], true)
 //  file_put_contents('filename2.gif', print_r($_POST['file'], true));
// $qq->saveData($_POST['question_title'],$_POST['question_content'],$_POST['question_img'],$_POST['question_left'],$_POST['question_right'],date("Y-m-d h:i:s", time()),$_POST['fb_id']);
// $qq->saveData($_POST['question_title'],$_POST['question_content'],$_POST['question_left'],$_POST['question_right'],date("Y-m-d h:i:s", time()),$_POST['fb_id']);

?>
      