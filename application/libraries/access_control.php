<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Access_control {

    public $GRO_USER_SESSION;
    public $DEVELOPER_USER_SESSION;

    public function __construct() {
        $this->ci = & get_instance();
        $this->ci->GRO_USER_SESSION = $this->ci->session->userdata('get_user_session');
        $this->ci->DEVELOPER_USER_SESSION = $this->ci->session->userdata('admin_user_session');
    }
}

/* End of file page_access.php */