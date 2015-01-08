<?php
class Comment{
	var $name;
	var $time;
	var $content;
	function __construct($n, $t, $c){
		$this->name = $n;
		$this->time = $t;
		$this->content = $c;

	}
	function show(){
		// echo "name: ".$this->name;
		// echo "time: ".$this->time;
		// echo "content: ".$this->content."<br>";
		// echo "-----------<br>";
		 // echo "<script type='text/javascript'>t();</script>";
		// echo "<script type='text/javascript'>addComment('name','comment');</script>";
	}

}
class DB{
	var $database=null;
	function __construct(){
		$dbhost="mysql.lionfree.net";
		$account="u497706260_v0";
		$password="qwe123";
		$this->database=mysql_connect($dbhost, $account,$password);
		if($this->database){
			// echo "DB connected";
			$result=mysql_select_db("u497706260_v0",$this->database);
			// if($result){
			// 	echo "DB selected";
			// }
			// else{
			// 	echo "DB selected failed";
			// }
		}
		else{
			// echo "DB connected fail";
		}
	}
	function __destruct(){
		mysql_close($this->database);
	}
}
	// $m=new Message("ricky","2014-12-12","test");
	// $m->show();
	// var_dump($m);
	// $db=new DB;
?>