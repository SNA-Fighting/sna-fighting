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
		if(count(_POST)!=0){
			//  $this->saveData($_POST['userName'],date("Y-m-d h:i:s", time()),$_POST['comment']);
			// // return "....0";
			//  $this->loadData();
			 
			$output = array(
				array('price' => '450','note' => '這是中文'),
				array('price' => '400','note' => '這是中')
                                
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




}

$fr=new getHomePageData();

$fr->receiveHome();

?>
