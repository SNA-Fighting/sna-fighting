<?php
mb_internal_encoding('utf-8');
include_once('item.php');
header("Content-Type:text/html; charset=utf-8");
class fightingCard extends DB{
	var $comments=array();
	// var $output = array();
	function __construct(){
		parent::__construct();
		  // $this->receiveComments();
		//  $this->loadData();
		// $this->showAllComments();
		// $this->showInputBlock();

	}
	function receiveComments(){
		if(count(_POST)!=0){
			 $this->saveData($_POST['userName'],date("Y-m-d h:i:s", time()),$_POST['comment']);
			// return "....0";
			 $this->loadData();
			 
			$output = array(
                                'price' => '450',
                                'note' => '這是中文'
        	);
			/*var i=0; 
		foreach ($this->comments as $m) {
				// echo $m;
			$tmp= 'name'+"=>" +"'$m->name'";
			array_push($this->output, $tmp);
			 
		 	 
		 }*/
         echo json_encode($output,JSON_UNESCAPED_UNICODE);
         // $output = array("yo","hi");
          // echo "NAME: $_POST['userName']";

         
		}
		
		
		
		
		
	}
	function saveData($u,$t,$c){
		// echo "userName:".$u."<br>";
		// echo "time:".$t."<br>";
		// echo "comment:".$c."<br>-----<br>";
		// $newComment="set names utf8";
		$newComment="INSERT INTO `test`(`name`, `time`, `comment`) VALUES ('".$u."','".$t."','".$c."');";
		// echo $d;
		mysql_query($newComment);
	}
	function loadData(){
		// $tmp=new Comment("ricky","2014-12-12","test");
		// array_push($this->comments, $tmp);
		// $tmp=new Comment("rick","2014-12-13","test2");
		// array_push($this->comments, $tmp);
		$allData="SELECT * FROM `test`;";
		$result=mysql_query($allData);
		while($row=mysql_fetch_array($result)){
				
			$tmp=new Comment($row['name'],$row['time'],$row['comment']); 
			array_push($this->comments, $tmp);
		}


		
	}



	function showAllComments(){
		 foreach ($this->comments as $m) {
				// echo $m;
			  $m->show();
		 	 
		 }
	}
	function showInputBlock(){
		// echo "<form action='' method='POST'>";
		// echo "Name: "."<input type='text' name='userName'>";
		// echo "comment: "."<input type='text' name='comment'>";
		// echo "<input type='submit'>";
		// echo "</form>";

	}
	function test($u,$c){
		$t=date("Y-m-d h:i:s", time());
		$u='RR';
		$newComment="INSERT INTO `test`(`name`, `time`, `comment`) VALUES ('".$u."','".$t."','".$c."');";
		mysql_query($newComment);
	}

}
//ttt
$fr=new fightingCard();
// if(count(_POST)!=0){
			// echo "<script>t();</script>"; 
// 			echo '<script type="text/javascript">'
//    , 't();'
//    , '</script>'
// ;
$fr->receiveComments();
		
		// }
   /* $aResult = array();

    if( !isset($_POST['functionname']) ) { $aResult['error'] = 'No function name!'; }

    if( !isset($_POST['arguments']) ) { $aResult['error'] = 'No function arguments!'; }

    if( !isset($aResult['error']) ) {

        switch($_POST['functionname']) {
        	aler
            case 'test':
               if( !is_array($_POST['arguments']) || (count($_POST['arguments']) < 2) ) {
                   $aResult['error'] = 'Error in arguments!';
               }
               else {
                   $aResult['result'] = test($_POST['arguments'][0], $_POST['arguments'][1]);
               }
               break;

            default:
               $aResult['error'] = 'Not found function '.$_POST['functionname'].'!';
               break;
        }

    }

    json_encode($aResult);*/




//ttt

	 
	// $m->show();
	// var_dump($m);
	/*?><!--
回傳這區
<script type="text/javascript" src="js/homePage.js">
  t();
</script>-->*/
?>
