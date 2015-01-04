<?php
mb_internal_encoding('utf-8');
include_once('item.php');
header("Content-Type:text/html; charset=utf-8");
class login extends DB{
	var $comments=array();
	// var $output = array();
	function __construct(){
		parent::__construct();
		
		  // $this->receiveComments();
		//  $this->loadData();
		// $this->showAllComments();
		// $this->showInputBlock();

	}
	
	function saveData($u,$h,$i){
		// echo "userName:".$u."<br>";
		// echo "time:".$t."<br>";
		// echo "comment:".$c."<br>-----<br>";
		// $newComment="set names utf8";
		$newComment="INSERT INTO `user`( `user_name`, `user_bighead`,`fb_id`) VALUES ('".$u."','".$h."','".$i."');";
		// echo $d;
		mysql_query($newComment);
	}
	

}
//ttt
$log=new login();
$log->saveData($_POST['name'],$_POST['bighead'],$_POST['fbid']);
?>
