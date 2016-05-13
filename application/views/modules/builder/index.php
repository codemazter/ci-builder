<div id="main-wrapper" class="container-fluid">

<div class="row main-container fg-form-builder  grey-bg">
    <div class="col-md-3 col-xs-3 nopadding">
        <div class="form_column_one" id="element_container_div">
            <p>Form Fields</p>

            <ul>
                <li>
                    <a class="email" onclick="addElement('TextField', 'Email');">
                        <i class="fa fa-envelope"></i><span>Email</span>
                    </a>
                </li>
                <li>
                    <a class="email" onclick="addElement('TextField', 'Password');">
                        <i class="fa fa-key"></i><span>Password</span>
                    </a>
                </li>
                <li>
                    <a class="contact" onclick="addElement('TextField', 'Number');">
                        <i class="fa fa-phone"></i><span>Number</span>
                    </a>
                </li> 
                <li>
                    <a class="input" onclick="addElement('TextField', 'Input');">
                        <i class="fa fa-pencil"></i><span>Single Line Text</span>
                    </a>
                </li>
                <li>
                    <a class="textarea" onclick="addElement('TextArea', 'TextArea');">
                        <i class="fa fa-file-o"></i><span>Multi Line Text</span>
                    </a>
                </li>
                <li>
                    <a class="checkbox" onclick="addElement('Check_Boxes', 'Checkboxes');">
                        <i class="fa fa-check-square"></i><span>CheckBox</span>
                    </a>
                </li>
                <li>
                    <a class="select" onclick="addElement('Select', 'Select');">
                        <i class="fa fa-check"></i><span>Select</span>
                    </a>
                </li>
                <li>
                    <a class="radio" onclick="addElement('Radio_Button', 'Radio Button');">
                        <i class="fa fa-check-circle"></i><span>Radio</span>
                    </a>
                </li>
            </ul>
        </div> 
    </div>
  
    <div class="col-md-9 col-xs-9 nopadding">
        <div class="form_column_grey">
            <div class="fg-left">
             
                <!-- left Section -->
                <div class="form_grey_head" id="element_container_div_123"> 
                    <div id="form_setting" onclick="form_setting();">
                        <h2><span id="form_setting_para_1">Untitled Form</span></h2>
                        <p id="form_setting_para_2">Just Click on Fields on left to start building your form.</p>
                        <input type='hidden' id='submit_label' value='Send Message'/>
                    </div>
                </div> <!---/end -->
                <!-- Middle Section -->
                <div class="form_column_two">
                    <form name="input" action="#" method="get">
                        <ul class="d_content connectedSortable" id="element_container"></ul>
                        <input id="save_form_button" class="fg-btn medium green inline" type="button" value="Create Form"  onclick="heading_check();"/>
                        <a class="fg-btn small red inline" href="<?=base_url()?>">Cancel</a>
                    </form>
                </div> <!--end-->
            </div>
            <!-- right Section -->
            <div class="fg-right">
                <div id="form_column_three" class="form_column_three fg-right">
                    <div id="field_setting_sub" class="field_setting" style="display: none;">

                        <ul id="combo_ul" >
                        </ul>
                    </div>
                </div>
            </div><!--- /end-->
            <div class="fg-clear"></div>
        </div>
    </div>   
    <div id="home-popup" class="home-popup-div" title="" usertype=""></div>
    <div class='conditionLogicDialog' id='conditionLogicDialog' onclick='this.style.display = "none";
            jQuery("#conditionWrapper").css({display: "none"});form_setting();'>
    </div>
</div>

</div><!-- Main wrapper closing -->