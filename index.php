<?php
class message{
	var $name;
	var $time;
	var $content;
	function __construct($n, $t, $c){
		$this->name = $n;
		$this->time = $t;
		$this->content = $c;

	}
	function show(){
		echo "name: ".$this->name;
		echo "time: ".$this->time;
		echo "content: ".$this->content."<br>";
		echo "-----------";
	}

}
	// $m=new Message("ricky","2014-12-12","test");
	// $m->show();
	// var_dump($m);
?>