<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');  
 
require_once APPPATH."/third_party/Classes/PHPExcel.php";
class Excel extends PHPExcel {
    public function __construct() {
        parent::__construct();
    }
}

//See more at: http://arjunphp.com/how-to-use-phpexcel-with-codeigniter/#sthash.IvcCNe5S.dpuf