<?php
mb_internal_encoding('utf-8');
include_once('item.php');
header("Content-Type:text/html; charset=utf-8");
class getHomePageData extends DB{
	var $comments=array();
	// var $output = array();
	function __construct(){
		parent::__construct();
		  // $this->receiveComments();
		//  $this->loadData();
		// $this->showAllComments();
		// $this->showInputBlock();

	}
	function receiveHome(){
		// output;
		if(count(_POST)!=0){
			//  $this->saveData($_POST['userName'],date("Y-m-d h:i:s", time()),$_POST['comment']);
			// // return "....0";
			//  $this->loadData();
			 $output=array();
			$sql = "SELECT MAX(question_id) FROM `question`";
			/*$maxId=mysql_query($sql);

			// echo "max:"maxId ;
			 if($_POST['currCardId']<$maxId){*/

			 	$re=mysql_query($sql);
			$maxId = mysql_fetch_array($re);
  // $row[0];
			// echo "max:"maxId ;
			 if($_POST['currCardId']<$maxId[0]){
			 	$sql2 = "SELECT * FROM `question` HAVING question.question_id >'".$_POST['currCardId']."' ORDER BY question_id";

			 	 $addMore=mysql_query($sql2);
			 	 while ($tmp=mysql_fetch_array($addMore)) {
			 	 	
//u_id to Name
			 	 	$sqlName = "SELECT user_name FROM `user` WHERE user_id= '".$tmp['u_id']."' ";
			 	 	$re=mysql_query($sqlName);
				$sqlN = mysql_fetch_array($re);
			 	 	$tmp['name']=$sqlN[0];
//u_id to head
			 	 $sqlHead = "SELECT user_bighead FROM `user` WHERE user_id= '".$tmp['u_id']."' ";
			 	 	$re=mysql_query($sqlHead);
				$sqlH = mysql_fetch_array($re);
			 	 	$tmp['head']=$sqlH[0];
			 	 	/*$tmpName= 'name'+"=>" +"名字";
			array_push($tmp, $tmpName);*/
			 	 	// echo json_encode($tmp,JSON_UNESCAPED_UNICODE);
            // echo 
            array_push($output, $tmp);
        }
			 	   //  $tmp=mysql_fetch_array($addMore);
			 	   // echo json_encode($tmp,JSON_UNESCAPED_UNICODE);
			 	  // echo print_r($output);
			 	  echo json_encode($output,JSON_UNESCAPED_UNICODE);
			 	   // echo $output=mysql_fetch_array($addMore)[3];
			// echo "...";
		 }
		 /*else{
// $maxId=99;
		 	$output = array(
				array('question_id' => $maxId,'question_img'=> '450', 'u_id'=> '450', 'question_title'=> $maxId, 'question_left'=> '450', 'question_right'=> '450','note' => '這是中文'));
		 	echo json_encode($output,JSON_UNESCAPED_UNICODE);
				// array('question_id' => '400','note' => '這是中')
		 }*/

		// $output = array(
		// 		array('price' => '450','note' => '這是中文'),
		// 		array('price' => '400','note' => '這是中')
                                
  //       	);
			/*var i=0; 
		foreach ($this->comments as $m) {
				// echo $m;
			$tmp= 'name'+"=>" +"'$m->name'";
			array_push($this->output, $tmp);
			 
		 	 
		 }*/
		 // echo $output;
         // echo json_encode($output,JSON_UNESCAPED_UNICODE);
         // $output = array("yo","hi");
          // echo "NAME: $_POST['userName']";

         
		}
		
		
		
		
		
	}




}

$fr=new getHomePageData();

$fr->receiveHome();

?>
