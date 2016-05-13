
var id = 0;
var userType = true;
var global_increment_variable = 0;
var edit_check_varible = 0;
var select_increment_varible = 3;
var radio_increment_varible = 3;
var checkboxes_increment_varible = 3;
var element_selected_Effect = "blind";
var captcha_flage = 0;
var select_flage = true;
var payment_flage = 0;

var isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var isMobile = true;
    $('html').addClass('is_mobile');
}


var isApple = false;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    var isApple = true;
}

function create_li_for_ul(unorder_list_container)
{
    var list_item = document.createElement("li");
    list_item.setAttribute('id', global_increment_variable);

    if (isMobile == true) {
        list_item.setAttribute('class', 'element_container_li is-apple');
    } else {
        list_item.setAttribute('class', 'element_container_li');
        list_item.setAttribute('onmouseover', "close_botton(this.id); ");
    }

//logicedit start/
    list_item.setAttribute('data-targetlogic', "1");
    list_item.setAttribute('data-Sourcelogic', "1");
    list_item.setAttribute('data-visible', "block");
//logicedit end/

    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    if (!isIE) {
        if (!isMobile) {
            list_item.setAttribute('onmouseout', "mouse_out_remove();");
        }
    }
	
	if(/Edge\/12./i.test(navigator.userAgent)){
	   if (!isMobile) {
		  list_item.setAttribute('onmouseout', "");
	    }
	}
	
    unorder_list_container.appendChild(list_item);
    return list_item;
}

function create_div_for_li(unorder_listitem_container, elementName)
{
    var list_item_div = document.createElement("div");
    list_item_div.setAttribute('id', 'div_' + unorder_listitem_container.id);
    list_item_div.setAttribute('title', elementName);
    list_item_div.setAttribute('class', 'remove_error_container');
    if (isMobile == true) {
        list_item_div.setAttribute('ontouchend', "close_botton(" + unorder_listitem_container.id + "); setDivClass(this); Dynamic_field_setting(" + unorder_listitem_container.id + ");");
    } else {
        list_item_div.setAttribute('onclick', "setDivClass(this); Dynamic_field_setting(" + unorder_listitem_container.id + ");");
    }
    unorder_listitem_container.appendChild(list_item_div);
    var options = {};
    jQuery(".remove_error_container").click(function() {
        jQuery("#field_setting_sub").show(selectedEffect, options, 280);
    });
    return unorder_listitem_container.id;
}

function addTextField(unorder_listitem_container_id, label_title) {
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    break_line.setAttribute('class', 'element_drag');
    list_container_div.appendChild(break_line);
    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    info.setAttribute('class', 'form_desc');
    list_container_div.appendChild(info);

    var element_text = document.createElement("INPUT");
    element_text.setAttribute('type', 'text');
    element_text.setAttribute('readonly', 'true');
    /*logicedit start*/
    element_text.setAttribute('class', 'ui-draggable element');
    /*logicedit end*/
    element_text.setAttribute('id', 'text_element' + unorder_listitem_container_id);
    element_text.setAttribute('required', "false");
    element_text.setAttribute('placeholder', label_title);
    element_text.required = false;
    var wrapper_span = document.createElement('span');
    wrapper_span.setAttribute('class', 'fg-outline');
    wrapper_span.appendChild(element_text);
    list_container_div.appendChild(wrapper_span);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}


function addPassword(unorder_listitem_container_id, label_title)
{
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
    break_line.setAttribute('class', 'element_drag');
    list_container_div.appendChild(break_line);
    var element_text = document.createElement("INPUT");

    element_text.setAttribute('readonly', 'true');
    element_text.setAttribute('type', 'password');
    element_text.setAttribute('id', 'text_element' + unorder_listitem_container_id);
    element_text.setAttribute('required', "false");
    /*logicedit start*/
    element_text.setAttribute('class', "element");
    /*logicedit end*/
    element_text.required = false;
    list_container_div.appendChild(element_text);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}


function addTextArea(unorder_listitem_container_id, label_title)
{
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
    break_line.setAttribute('class', 'element_drag');
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    list_container_div.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);

    var element_paregraph = document.createElement("textarea");

    element_paregraph.setAttribute('readonly', 'true');
    element_paregraph.setAttribute('rows', '4');
    /*logicedit start*/
    element_paregraph.setAttribute('class', "element");
    /*logicedit end*/
    element_paregraph.setAttribute('cols', '30');
    element_paregraph.setAttribute('id', 'text_element' + unorder_listitem_container_id);
    element_paregraph.setAttribute('required', "false");
    element_paregraph.setAttribute('placeholder', label_title);
    element_paregraph.required = false;
    var wrapper_span = document.createElement('span');
    wrapper_span.setAttribute('class', 'fg-outline');
    wrapper_span.appendChild(element_paregraph);
    list_container_div.appendChild(wrapper_span);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}

/* add new paragraph field */
function addParagraph(unorder_listitem_container_id, label_title)
{

    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
    break_line.setAttribute('class', 'element_drag');
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    list_container_div.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);


    var ele_paragraph_heading = document.createElement("h3");
    /*logicedit start*/
    // ele_paragraph_heading.setAttribute('class', "element");
    /*logicedit end*/
    ele_paragraph_heading.setAttribute('id', 'para_header' + unorder_listitem_container_id);
    ele_paragraph_heading.innerHTML = "Heading";
    ele_paragraph_heading.style.fontSize = "18px";
    ele_paragraph_heading.style.borderBottom = "1px solid rgb(233, 232, 232)";
    ele_paragraph_heading.style.paddingBottom = "5px";

    var ele_paragraph = document.createElement("div");
    // ele_paragraph.style.color='rgb(0,0,0)';
    /*logicedit start*/
    // ele_paragraph.setAttribute('class', "element");
    /*logicedit end*/
    ele_paragraph.setAttribute('id', 'text_element' + unorder_listitem_container_id);
    ele_paragraph.innerHTML = 'You can add Paragraph/ Image/ Video IFrame here.';
    //ele_paregraph.setAttribute('placeholder', label_title);

    var wrapper_span = document.createElement('span');
    wrapper_span.setAttribute('class', 'fg-outline');
	/*logicedit start*/
    wrapper_span.setAttribute('class',"element");
    /*logicedit end*/
    wrapper_span.style.background = "none";
    wrapper_span.style.borderStyle = "none";
    wrapper_span.appendChild(ele_paragraph_heading);
    wrapper_span.appendChild(ele_paragraph);
    list_container_div.appendChild(wrapper_span);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}

function addFileUpload(unorder_listitem_container_id, label_title) {
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
	break_line.setAttribute('class', 'element_drag');
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    list_container_div.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);


    var file_button = document.createElement("input");
    file_button.setAttribute('type', 'file');
    /*logicedit start*/
    file_button.setAttribute('class', 'file element');
    /*logicedit end*/
    file_button.setAttribute('required', "false");
    file_button.setAttribute('value', label_title);
    file_button.setAttribute('style', 'display:none;');
    file_button.required = false;
    file_button.setAttribute('id', 'File_Upload' + unorder_listitem_container_id);

    var file_text1 = document.createElement("input");
    file_text1.setAttribute('readonly', 'true');
    file_text1.setAttribute('type', 'text');
    file_text1.setAttribute('placeholder', label_title);
	 file_text1.setAttribute('value', label_title);
     file_text1.setAttribute('id', 'file_upload_button' + unorder_listitem_container_id);


    var file_text2 = document.createElement("input");
    file_text2.setAttribute('type', 'button');
    file_text2.setAttribute('value', '');
    file_text2.setAttribute('class', 'upload');
   // file_text2.setAttribute('id', 'file_upload_button' + unorder_listitem_container_id);

    var wrapper_span = document.createElement('span');
    wrapper_span.setAttribute('class', 'fg-outline');
    wrapper_span.appendChild(file_button);
    wrapper_span.appendChild(file_text1);
    wrapper_span.appendChild(file_text2);
    list_container_div.appendChild(wrapper_span);

    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}

/*
function that check element-type and build li,div and element according to element-type
*/
function addElement(element_type, element_name) {

    var unorder_list_container = document.getElementById("element_container");
    var liCounter = $('.element_container_li').length;

    switch (element_type)
    {
        case "TextArea":
            addTextArea(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "Select":
            addSelect(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "TextField":
            addTextField(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "Check_Boxes":
            addCheck_Boxes(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "Radio_Button":
            addRadio_Button(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "Password":
            addPassword(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "FileUpload":
            addFileUpload(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
        case "paragraph":
            addParagraph(create_div_for_li(create_li_for_ul(unorder_list_container), element_name), element_name);
            break;
    }
    global_increment_variable++;
	edit_check_varible++;
}

function remove_checkbox_option(option_id, li_container_id)
{
    var page_type = "" + window.location;
    if (document.getElementById('checkboxes' + li_container_id).getElementsByTagName('input').length > 1)
    {
        if ((page_type.indexOf("edit_form") < 0))
        {
            var radio_element = document.getElementById('checkboxes' + li_container_id);
            radio_element.removeChild(document.getElementById('checkboxes_li' + li_container_id + '.' + option_id));
            var option_ul = document.getElementById('temp_ul');
            var option_li = document.getElementById('li_for_checkbox_option' + option_id);
            option_ul.removeChild(option_li);
        } else
        {
			 var edit_del_first = document.getElementById('delete_editform_first');
             edit_del_first.innerHTML = "On <b>Deleting</b> this Checkbox Option.<li>You will lose <b>all User Entry </b>of this element.</li><li>All agent relation of this category will be lost.</li>You are suggested to please export your entries to keep a record of it.";
            jQuery("#delete_editform_first").dialog({
title:"Delete : Checkbox Field Option",
                resizable: false,
                height: 140,
                modal: true,
                buttons: {
                    "Delete this item": function() {
						var edit_del_sec = document.getElementById('delete_editform_sec');
                        edit_del_sec.innerHTML = "Are you sure you want to delete?"; 
                        jQuery("#delete_editform_sec").dialog({
                            title: "Confirmation",
                            resizable: false,
                            height: 140,
                            modal: true,
                            buttons: {
                                "Yes": function() {
                                    var radio_element = document.getElementById('checkboxes' + li_container_id);
                                    radio_element.removeChild(document.getElementById('checkboxes_li' + li_container_id + '.' + option_id));
                                    var option_ul = document.getElementById('temp_ul');
                                    var option_li = document.getElementById('li_for_checkbox_option' + option_id);
                                    option_ul.removeChild(option_li);
                                    delete_entry(li_container_id + "." + option_id);
                                    jQuery(this).dialog("close");
                                },
                                "No": function() {
                                    jQuery(this).dialog("close");
                                }
                            }
                        });
                        jQuery(this).dialog("close");
                    },
                    Cancel: function() {
                        jQuery(this).dialog("close");
                    }
                }
            });
        }
    }
}

function checkbox_option_value_change(option_text_element_refrence, option_li_id, li_container_id)
{
    var value_change_option = document.getElementById('checkboxes_label' + li_container_id + '.' + option_li_id);
    value_change_option.innerHTML = option_text_element_refrence.value;
    var str_status_verification = edit_value_change_check(option_text_element_refrence.value);
    if (!str_status_verification) {
        value_change_option.innerHTML = 'Type Again';
        option_text_element_refrence.value = 'Type Again';

    }
}

function addCheck_Boxes(unorder_listitem_container_id, label_title)
{
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var checkboxes_ul = document.createElement("ul");
    checkboxes_ul.setAttribute('id', 'checkboxes' + unorder_listitem_container_id);
    /*logicedit start*/
    checkboxes_ul.setAttribute('class', 'element');
    /*logicedit end*/
    var element_label = document.createElement("label");
    element_label.setAttribute('class', 'multipal_label');
    element_label.setAttribute('id', 'label_element' + unorder_listitem_container_id);
    element_label.innerHTML = "Multiple Choice";
    checkboxes_ul.appendChild(element_label);
    var break_line = document.createElement("span");
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    checkboxes_ul.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);

    var tenp_array_checkbox = Array('First Choice', 'Second Choice', 'Third Choice');
    for (var i = 0; i < 3; i++)
    {
        var checkboxes_li = document.createElement("li");
        /*** sorting checkbox **/
        checkboxes_li.setAttribute('data-class', 'this-checkbox-' + unorder_listitem_container_id + '.' + i);
        /*** sorting checkbox end **/
        checkboxes_li.setAttribute('id', 'checkboxes_li' + unorder_listitem_container_id + '.' + i);
        var element_checkbox = document.createElement("INPUT");
        element_checkbox.setAttribute('type', 'checkbox');
        element_checkbox.setAttribute('id', 'checkboxes' + unorder_listitem_container_id + '.' + i);
        checkboxes_li.appendChild(element_checkbox);
        var element_checkbox1_label = document.createElement("label");
        element_checkbox1_label.setAttribute('class', 'checkbox_label');
        element_checkbox1_label.innerHTML = tenp_array_checkbox[i];
        element_checkbox1_label.id = 'checkboxes_label' + unorder_listitem_container_id + '.' + i;
        checkboxes_li.appendChild(element_checkbox1_label);
        checkboxes_ul.appendChild(checkboxes_li);
    }
    list_container_div.appendChild(checkboxes_ul);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}

function add_checkbox_option(container_li_id)
{
    var temp_ul = document.getElementById('temp_ul');
    var element_ul = document.getElementById('checkboxes' + container_li_id);
    var li_for_checkboxes_option = document.createElement('li');
    /*** sorting checkbox **/
    li_for_checkboxes_option.setAttribute('data-class', 'this-checkbox-' + container_li_id + '.' + checkboxes_increment_varible);
    /*** sorting checkbox end**/
    li_for_checkboxes_option.id = 'li_for_checkbox_option' + checkboxes_increment_varible;
    var li_for_checkboxes_option_element = document.createElement('li');
    li_for_checkboxes_option_element.setAttribute('id', 'checkboxes_li' + container_li_id + '.' + checkboxes_increment_varible);

    /*** sorting checkbox **/
    li_for_checkboxes_option_element.setAttribute("data-class", 'this-checkbox-' + container_li_id + '.' + checkboxes_increment_varible);
    var move_button = document.createElement('span');
    move_button.className = 'move_arrow';
    /*** sorting checkbox end**/

    var element_checkbox = document.createElement("INPUT");
    element_checkbox.setAttribute('type', 'checkbox');
    element_checkbox.setAttribute('id', 'checkboxes' + container_li_id + '.' + checkboxes_increment_varible);
    li_for_checkboxes_option_element.appendChild(element_checkbox);
    var element_checkbox1_label = document.createElement("label");
    element_checkbox1_label.innerHTML = 'Checkbox' + checkboxes_increment_varible;
    element_checkbox1_label.setAttribute('class', 'checkbox_label');
    element_checkbox1_label.id = 'checkboxes_label' + container_li_id + '.' + checkboxes_increment_varible;
    li_for_checkboxes_option_element.appendChild(element_checkbox1_label);
    element_ul.appendChild(li_for_checkboxes_option_element);
    var remove_button = document.createElement('button');
    remove_button.setAttribute('class', 'fa fa-minus-circle');
    remove_button.setAttribute('id', checkboxes_increment_varible);
    remove_button.setAttribute('onclick', 'remove_checkbox_option(' + checkboxes_increment_varible + ',' + container_li_id + ')');
    var option_text_field = document.createElement('input');
    option_text_field.type = 'text';
    option_text_field.setAttribute('class', 'check-radio');
    option_text_field.setAttribute('onkeyup', 'checkbox_option_value_change(this,' + checkboxes_increment_varible + ',' + container_li_id + ')');
    var add_button = document.createElement('button');
    add_button.setAttribute('class', 'fa fa-plus-circle');
    add_button.setAttribute('onclick', 'add_checkbox_option(' + container_li_id + ')');
    li_for_checkboxes_option.appendChild(option_text_field);
    /*** sorting checkbox **/
    li_for_checkboxes_option.appendChild(move_button);
    /*** sorting checkbox end**/

    li_for_checkboxes_option.appendChild(remove_button);
    li_for_checkboxes_option.appendChild(add_button);
    temp_ul.appendChild(li_for_checkboxes_option);
    checkboxes_increment_varible++;
}

function add_radio_option(container_li_id)
{
    var temp_ul = document.getElementById('temp_ul');
    var element_ul = document.getElementById('Radio' + container_li_id);
    var li_for_radio_option_element = document.createElement('li');

    /*** sorting radio **/
    li_for_radio_option_element.setAttribute('data-class', 'this-radio-' + container_li_id + '.' + radio_increment_varible);
    /*** sorting radio end**/
    li_for_radio_option_element.id = 'Radio_li' + container_li_id + '.' + radio_increment_varible;
    var element_radio = document.createElement("INPUT");
    element_radio.setAttribute('type', 'radio');
    element_radio.setAttribute('name', 'multipal_Radio');
    element_radio.id = 'Radio' + container_li_id + '.' + radio_increment_varible;
    li_for_radio_option_element.appendChild(element_radio);
    var element_radio_label = document.createElement("label");
    element_radio_label.setAttribute('class', 'Radio_label');
    element_radio_label.innerHTML = 'Radio' + radio_increment_varible;
    element_radio_label.id = 'Radio_label' + container_li_id + '.' + radio_increment_varible;
    li_for_radio_option_element.appendChild(element_radio_label);
    element_ul.appendChild(li_for_radio_option_element);
    var li_for_radio_option = document.createElement('li');
    li_for_radio_option.id = 'li_for_radio_option' + radio_increment_varible;

    /*** sorting radio **/
    li_for_radio_option.setAttribute("data-class", 'this-radio-' + container_li_id + '.' + radio_increment_varible);
    var move_button = document.createElement('span');
    move_button.className = 'move_arrow';
    /*** sorting radio end **/
    var remove_button = document.createElement('button');
    remove_button.setAttribute('class', 'fa fa-minus-circle');
    remove_button.setAttribute('id', radio_increment_varible);
    remove_button.setAttribute('onclick', 'remove_radio_option(' + radio_increment_varible + ',' + container_li_id + ')');
    var option_text_field = document.createElement('input');
    option_text_field.type = 'text';
    option_text_field.setAttribute('class', 'check-radio');
    option_text_field.setAttribute('onkeyup', 'radio_option_value_change(this,' + radio_increment_varible + ',' + container_li_id + ')');
    var add_button = document.createElement('button');
    add_button.setAttribute('class', 'fa fa-plus-circle');
    add_button.setAttribute('onclick', 'add_radio_option(' + container_li_id + ')');
    li_for_radio_option.appendChild(option_text_field);
    /*** sorting radio **/
    li_for_radio_option.appendChild(move_button);
    /*** sorting radio end **/
    li_for_radio_option.appendChild(remove_button);
    li_for_radio_option.appendChild(add_button);
    temp_ul.appendChild(li_for_radio_option);
    radio_increment_varible++;
}


function remove_radio_option(option_id, li_container_id)
{
    var page_type = "" + window.location;
    if (document.getElementById('Radio' + li_container_id).getElementsByTagName('input').length > 1)
    {
        if ((page_type.indexOf("edit_form") < 0))
        {
            var radio_element = document.getElementById('Radio' + li_container_id);
            radio_element.removeChild(document.getElementById('Radio_li' + li_container_id + '.' + option_id));
            var option_ul = document.getElementById('temp_ul');
            var option_li = document.getElementById('li_for_radio_option' + option_id);
            option_ul.removeChild(option_li);
        }
        else
        {
			 var edit_del_first = document.getElementById('delete_editform_first');
             edit_del_first.innerHTML = "On <b>Deleting</b> this Radio Option.<li>You will lose <b>all User Entry </b>of this element.</li><li>All agent relation of this category will be lost.</li>You are suggested to please export your entries to keep a record of it.";
            jQuery("#delete_editform_first").dialog({
                title:"Delete : Radio Field Option",
                resizable: false,
                height: 140,
                modal: true,
                buttons: {
                    "Delete this item": function() {
                        var edit_del_sec = document.getElementById('delete_editform_sec');
                        edit_del_sec.innerHTML = "Are you sure you want to delete?"; 
                        jQuery("#delete_editform_sec").dialog({
                            title: "Confirmation",
                            resizable: false,
                            height: 140,
                            modal: true,
                            buttons: {
                                "Yes": function() {
                                    var radio_element = document.getElementById('Radio' + li_container_id);
                                    radio_element.removeChild(document.getElementById('Radio_li' + li_container_id + '.' + option_id));
                                    var option_ul = document.getElementById('temp_ul');
                                    var option_li = document.getElementById('li_for_radio_option' + option_id);
                                    option_ul.removeChild(option_li);
                                    delete_entry(li_container_id + "." + option_id);
                                    jQuery(this).dialog("close");
                                },
                                "No": function() {
                                    jQuery(this).dialog("close");
                                }
                            }
                        });
                        jQuery(this).dialog("close");
                    },
                    Cancel: function() {
                        jQuery(this).dialog("close");
                    }
                }
            });
        }
    }
}

function radio_option_value_change(option_text_element_refrence, option_li_id, li_container_id)
{
    var value_change_option = document.getElementById('Radio_label' + li_container_id + '.' + option_li_id);
    value_change_option.innerHTML = option_text_element_refrence.value;
    var str_status_verification = edit_value_change_check(option_text_element_refrence.value);
    if (!str_status_verification) {
        value_change_option.innerHTML = 'Type Again';
        option_text_element_refrence.value = 'Type Again';

    }
}


function addRadio_Button(unorder_listitem_container_id, label_title)
{
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var radio_ul = document.createElement("ul");
    var element_label = document.createElement("label");
    element_label.setAttribute('class', 'multipal_label');
    element_label.setAttribute('id', 'label_element' + unorder_listitem_container_id);
    element_label.innerHTML = "Select a Choice";
    radio_ul.appendChild(element_label);
    var break_line = document.createElement("span");
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    radio_ul.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);

    for (var i = 0; i < 3; i++)
    {
        var radio_li = document.createElement("li");
        var element_radio = document.createElement("INPUT");
        element_radio.setAttribute('type', 'radio');
        element_radio.setAttribute('name', 'multipal_Radio');
        element_radio.id = 'Radio' + unorder_listitem_container_id + '.' + i;
        /*** sorting radio  **/
        radio_li.setAttribute('data-class', 'this-radio-' + unorder_listitem_container_id + '.' + i);
        /*** sorting radio end **/

        radio_li.setAttribute('id', 'Radio_li' + unorder_listitem_container_id + '.' + i);
        radio_li.appendChild(element_radio);
        var temp_array_radio = Array('First Choice', 'Second Choice', 'Third Choice');
        var element_radio_label = document.createElement("label");
        element_radio_label.setAttribute('class', 'Radio_label');
        element_radio_label.innerHTML = temp_array_radio[i];
        element_radio_label.id = 'Radio_label' + unorder_listitem_container_id + '.' + i;
        radio_li.appendChild(element_radio_label);
        radio_ul.appendChild(radio_li);
    }

    radio_ul.setAttribute('id', 'Radio' + unorder_listitem_container_id);
    /*logicedit start*/
    radio_ul.setAttribute('class', 'element');
    /*logicedit end*/
    list_container_div.appendChild(radio_ul);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}


function add_select_option(container_li_id)
{
    var temp_ul = document.getElementById('temp_ul');
    var li_for_select_option = document.createElement('li');

    /*** sorting option **/
    li_for_select_option.setAttribute('data-class', 'this-option-' + container_li_id + '.' + select_increment_varible);
    var move_button = document.createElement('span');
    move_button.className = 'move_arrow';
    /*** sorting option end **/
    li_for_select_option.id = "li_for_select_option" + select_increment_varible;
    var created_option = document.createElement('option');

    created_option.id = 'select' + container_li_id + '.' + select_increment_varible;
    /*** sorting option **/
    created_option.setAttribute("data-class", 'this-option-' + container_li_id + '.' + select_increment_varible);
    /*** sorting option end **/
    created_option.id = 'select' + container_li_id + '.' + select_increment_varible;
    var element_select = document.getElementById('select' + container_li_id);
    element_select.appendChild(created_option);
    var remove_button = document.createElement('button');
    remove_button.setAttribute('class', 'fa fa-minus-circle');
    remove_button.setAttribute('id', select_increment_varible);
    remove_button.setAttribute('onclick', 'remove_select_option(' + select_increment_varible + ',' + container_li_id + ')');
    var option_text_field = document.createElement('input');
    option_text_field.type = 'text';
    option_text_field.setAttribute('class', 'check-radio');
    option_text_field.setAttribute('onkeyup', 'select_option_value_change(this,' + select_increment_varible + ',' + container_li_id + ')');
    li_for_select_option.appendChild(option_text_field);

    /*** sorting option **/
    li_for_select_option.appendChild(move_button);
    /*** sorting option end **/
    var add_button = document.createElement('button');
    add_button.setAttribute('class', 'fa fa-plus-circle');
    add_button.setAttribute('onclick', 'add_select_option(' + container_li_id + ')');
    li_for_select_option.appendChild(remove_button);
    li_for_select_option.appendChild(add_button);
    temp_ul.appendChild(li_for_select_option);
    select_increment_varible++;
}


function addSelect(unorder_listitem_container_id, label_title)
{
    var list_container_div = document.getElementById('div_' + unorder_listitem_container_id);
    var break_line = document.createElement("span");
    var element_label = document.createElement("label");
    element_label.setAttribute('class', 'multipal_label');
    element_label.setAttribute('id', 'label_element' + unorder_listitem_container_id);
    element_label.innerHTML = "Select a Choice";
    list_container_div.appendChild(element_label);
    break_line.setAttribute('id', 'break_line' + unorder_listitem_container_id);
    list_container_div.appendChild(break_line);

    var info = document.createElement('div');
    info.setAttribute('style', 'display:none');
    info.setAttribute('class', 'form_desc');
    info.setAttribute('id', 'info' + unorder_listitem_container_id);
    list_container_div.appendChild(info);

    var element_select = document.createElement("select");
    /*logicedit start*/
    element_select.setAttribute('class', 'element');
    /*logicedit end*/
    element_select.setAttribute('required', "false");
    element_select.required = false;
    var temp_array_select = Array('First Choice', 'Second Choice', 'Third Choice');
    for (var i = 0; i < 3; i++)
    {
        var op1 = document.createElement("option");
        op1.innerHTML = temp_array_select[i];
        op1.id = 'select' + unorder_listitem_container_id + '.' + i;
        /*** sorting option  **/
        op1.setAttribute('data-class', 'this-option-' + unorder_listitem_container_id + '.' + i);
        /*** sorting option end **/
        element_select.appendChild(op1);
    }

    element_select.setAttribute('id', 'select' + unorder_listitem_container_id);
    var wrapper_span = document.createElement('span');
    wrapper_span.setAttribute('class', 'fg-outline');
    wrapper_span.appendChild(element_select);
    list_container_div.appendChild(wrapper_span);
    jQuery(list_container_div).hide();
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery(list_container_div).show(element_selected_Effect, options, 500);
}


function remove_select_option(option_id, li_container_id)
{
    if (document.getElementById('select' + li_container_id).length > 1)
    {
        var page_type = "" + window.location;
        if ((page_type.indexOf("edit_form") < 0))
        {
            var select_element = document.getElementById('select' + li_container_id);
            select_element.removeChild(document.getElementById('select' + li_container_id + '.' + option_id));
            var option_ul = document.getElementById('temp_ul');
            var option_li = document.getElementById('li_for_select_option' + option_id);
            option_ul.removeChild(option_li);
        }
        else
        {
			 var edit_del_first = document.getElementById('delete_editform_first');
             edit_del_first.innerHTML = "On <b>Deleting</b> this Select Option.<li>You will lose <b>all User Entry </b>of this element.</li><li>All agent relation of this category will be lost.</li>You are suggested to please export your entries to keep a record of it.";
            jQuery("#delete_editform_first").dialog({
                title:"Delete : Select Field Option",
                resizable: false,
                height: 140,
                modal: true,
                buttons: {
                    "Delete this item": function() {
                        var edit_del_sec = document.getElementById('delete_editform_sec');
                        edit_del_sec.innerHTML = "Are you sure you want to delete?"; 
                        jQuery("#delete_editform_sec").dialog({
                            title: "Confirmation",
                            resizable: false,
                            height: 140,
                            modal: true,
                            buttons: {
                                "Yes": function() {
                                    var select_element = document.getElementById('select' + li_container_id);
                                    select_element.removeChild(document.getElementById('select' + li_container_id + '.' + option_id));
                                    var option_ul = document.getElementById('temp_ul');
                                    var option_li = document.getElementById('li_for_select_option' + option_id);
                                    option_ul.removeChild(option_li);
                                    delete_entry(li_container_id + "." + option_id);
                                    jQuery(this).dialog("close");
                                },
                                "No": function() {
                                    jQuery(this).dialog("close");
                                }
                            }
                        });
                        jQuery(this).dialog("close");
                    },
                    Cancel: function() {
                        jQuery(this).dialog("close");
                    }
                }
            });
        }
    }
}


function select_option_value_change(option_text_element_refrence, option_li_id, li_container_id)
{
    var value_change_option = document.getElementById('select' + li_container_id + '.' + option_li_id);
    value_change_option.innerHTML = option_text_element_refrence.value;
    var str_status_verification = edit_value_change_check(option_text_element_refrence.value);
    if (!str_status_verification) {
        value_change_option.innerHTML = 'Type Again';
        option_text_element_refrence.value = 'Type Again';

    }
}


function set_required_for_text(element_refranc, field_type, li_container_id)
{
    if (element_refranc.checked)
    {
        if (field_type == 'text_element')
        {
            document.getElementById('text_element' + li_container_id).required = true;
        }

        if (field_type == 'FileUpload')
        {
            document.getElementById('File_Upload' + li_container_id).required = true;
        }

        if (field_type == 'Select')
        {
            document.getElementById('select' + li_container_id).required = true;
        }

        if (field_type == 'Checkboxes')
        {
            document.getElementById('break_line' + li_container_id).title = true;
        }

        if (field_type == 'Radio_Button')
        {
            document.getElementById('break_line' + li_container_id).title = true;
        }

    }
    else
    {
        if (field_type == 'text_element')
        {
            document.getElementById('text_element' + li_container_id).required = false;
        }

        if (field_type == 'FileUpload')
        {
            document.getElementById('File_Upload' + li_container_id).required = false;
        }

        if (field_type == 'Select')
        {
            document.getElementById('select' + li_container_id).required = false;
        }

        if (field_type == 'Checkboxes')
        {
            document.getElementById('break_line' + li_container_id).title = false;
        }

        if (field_type == 'Radio_Button')
        {
            document.getElementById('break_line' + li_container_id).title = false;
        }
    }
}

function setMaxlength(maxlength_value, li_container_id)
{
    var temp = document.getElementById('text_element' + li_container_id);
    temp.setAttribute('maxlength', maxlength_value);
}


function edit_value_change_check(placeholder_value_to_chk) {
	var get_placeholder_value_to_send=placeholder_value_to_chk;
	var str_chk_index;
    var val_check=edit_value_change_check_without_special_char(get_placeholder_value_to_send); 
    if(val_check==true){
        return true;
    }else{
        return false;
    }
}


function edit_value_change_check_without_special_char(get_placeholder_value_to) {
    var str_chk_index_s;
    var str_chk_index_arr_s = new Array("<script>","</script>");
    
    var get_placeholder_value_to     = get_placeholder_value_to.replace(/\s+/g,'');      /* to remove space */
        get_placeholder_value_to     = get_placeholder_value_to.toLowerCase();           /* to convert it in lowercase */
    for (str_chk_index_s = 0; str_chk_index_s < str_chk_index_arr_s.length; str_chk_index_s++)     {
        if (get_placeholder_value_to.indexOf(str_chk_index_arr_s[str_chk_index_s]) !== -1) {
            alert("Creating "+str_chk_index_arr_s[str_chk_index_s]+" field is not allowed.");
            return false;
        }
        }
        return true;
}


function show_dialog_for_edit_value_change_check(dialog_message) {
    var get_page_body_tag = document.getElementsByTagName('body')[0];
    var show_dialog_for_edit_div = document.createElement('div');
    show_dialog_for_edit_div.setAttribute('id','show_dialog_for_edit_div');
    show_dialog_for_edit_div.setAttribute('style','color:#9F6000; background-color: #FEEFB3; width: auto; height: 30px; font-size: 25px; padding: 20px 50px 20px 50px;max-width: 350px;');
    get_page_body_tag.appendChild(show_dialog_for_edit_div);
    var get_show_dialog_for_edit_div = document.getElementById('show_dialog_for_edit_div');
    get_show_dialog_for_edit_div.innerHTML = dialog_message + " is not allowed.";
    jQuery("#show_dialog_for_edit_div").dialog({
        resizable: false,
        height: 140,
        modal: true,
    });
}

function paragraph_value_change(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("text_element" + li_container_id);
    target_textField_label.innerHTML = Element_label_textfield_refrence.value;
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value);
    if (!str_status_verification) {
        target_textField_label.placeholder = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
    }
}
function paragraph_head_value_change(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("para_header" + li_container_id);
    target_textField_label.innerHTML = Element_label_textfield_refrence.value;
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value);
    if (!str_status_verification) {
        target_textField_label.placeholder = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
    }
}
function heading_font_size_change(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("para_header" + li_container_id);
    if (Element_label_textfield_refrence != '') {
        target_textField_label.style.fontSize = Element_label_textfield_refrence.value + 'px';
    }
}
function edit_value_change(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("text_element" + li_container_id);
    target_textField_label.placeholder = Element_label_textfield_refrence.value;
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value);
    if (!str_status_verification) {
        target_textField_label.placeholder = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
    }
}

function edit_value_change_payment(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("text_element" + li_container_id);
    var total_head_span = document.getElementById("total_head_" + li_container_id);
    var li_div_id = document.getElementById("div_" + li_container_id);

    var paymentValue = target_textField_label.placeholder;
    paymentValue = paymentValue.substr(paymentValue.indexOf(':'), paymentValue.length);

    if (li_div_id.getAttribute('data-npay') == 'new_payment') {
        target_textField_label.placeholder = Element_label_textfield_refrence.value;
        total_head_span.innerHTML = Element_label_textfield_refrence.value;
    } else {
        target_textField_label.placeholder = Element_label_textfield_refrence.value + paymentValue;
    }
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value + paymentValue);
    if (!str_status_verification) {
        target_textField_label.placeholder = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
        total_head_span.innerHTML = 'Type Again';
    }
}


function edit_value_change1(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("label_element" + li_container_id);
    target_textField_label.innerHTML = Element_label_textfield_refrence.value;
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value);
    if (!str_status_verification) {
        target_textField_label.innerHTML = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
    }
}

function edit_value_change_file(Element_label_textfield_refrence, li_container_id)
{
    var target_textField_label = document.getElementById("file_upload_button" + li_container_id);
    target_textField_label.value = Element_label_textfield_refrence.value;
	target_textField_label.placeholder = Element_label_textfield_refrence.value; //upload u28042015
    var str_status_verification = edit_value_change_check(Element_label_textfield_refrence.value);
    if (!str_status_verification) {
        target_textField_label.value = 'Type Again';
        Element_label_textfield_refrence.value = 'Type Again';
    }
}

function instruction_value_change(instraction_TextArea_id, li_container_id)
{
    var target_instruction_div = document.getElementById('info' + li_container_id);
    target_instruction_div.setAttribute('original-title', document.getElementById('instraction_textField').value);
    if (target_instruction_div.getAttribute('original-title') != '')
    {
        document.getElementById('info' + li_container_id).setAttribute('style', 'display:block');
        jQuery('.form_desc').tipsy({
            gravity: 's'
        });
        var str_status_verification = edit_value_change_check(document.getElementById('instraction_textField').value);
        if (!str_status_verification) {
            document.getElementById('instraction_textField').value = 'Type Again';
            target_instruction_div.setAttribute('original-title', 'Type Again');

        }
    }
    else
    {
        document.getElementById('info' + li_container_id).setAttribute('style', 'display:none');
    }
}


function remove_li_container(li_container_id, temp)
{
    /*logicedit start*/
    var li_for_Delete = document.getElementById(li_container_id);
    if (li_for_Delete.hasAttribute('data-targetlogic'))
    {
        var val = li_for_Delete.getAttribute('data-targetlogic');
        if (val > 1)
        {
            alert("can not delete this field because it contains data logic as Target.");
            return;
        }
    }

    var val2 = document.getElementById(li_container_id).getAttribute('data-sourcelogic');
    if (val2)
    {
        if (val2 > 1)
        {
            alert("can not delete this field because it contains data logic as Source.");
            return;
        }
    }
    /*logicedit end*/

    var title = document.getElementById("div_" + li_container_id).title;
    if (title === "Captcha" && temp != "captcha")
    {
        captcha_flage = 0;
    }

    if ((("" + window.location).indexOf("edit_form") > 0))
    {
        if (jQuery("#" + li_container_id + " div").first().attr('title') != 'Captcha')
        {
            var edit_del_first = document.getElementById('delete_editform_first');
            edit_del_first.innerHTML = "On <b>Deleting</b> this form element.<li>You will lose <b>all User Entry </b>of this element.</li><li>All agent relation of this category will be lost.</li>You are suggested to please export your entries to keep a record of it.";
			
			//alert(edit_check_varible+' : '+li_container_id);
            if (edit_check_varible >= li_container_id)
            {
                jQuery("#delete_editform_first").dialog({
					title : "Delete : Form Element",
                    resizable: false,
                   // height: 140,
                    modal: true,
                    buttons: {
                        "Delete": function() {
                            var edit_del_sec = document.getElementById('delete_editform_sec');
                            edit_del_sec.innerHTML = "Are you sure you want to delete?<br/>Note: As this Element will be permanently deleted and you can't recover it.";
                            jQuery("#delete_editform_sec").dialog({
                                title : "Confirmation",
                                resizable: false,
                               // height: 140,
                                modal: true,
                                buttons: {
                                    "Yes": function() {
                                        jQuery(this).dialog("close");
                                        delete_entry(li_container_id);
                                        delete_element(li_container_id);
                                        /** new payment start  **/
                                        if (jQuery("#" + li_container_id + " div").first().attr('title') === 'Payment') {
                                            payment_flage = 0;
                                            /** new payment end **/
                                        }
										edit_check_varible--;
                                    },
                                    "No": function() {
                                    jQuery(this).dialog("close");
                                    }
                                }
                            });
                            jQuery(this).dialog("close");
                        },
                        Cancel: function() {
                            jQuery(this).dialog("close");
                        }
                    }
                });
            }
            else
            {
                delete_element(li_container_id);
            }
        }
        else
        {
            delete_element(li_container_id);
            if (jQuery("#" + li_container_id + " div").first().text().length != 0)
            {
                captcha_flage = 0;
            }
        }
    } else
    {
        delete_element(li_container_id);
        if (jQuery("#" + li_container_id + " div").first().attr('title') === 'Captcha')
        {
            if (jQuery("#" + li_container_id + " div").first().text().length != 0)
            {
                captcha_flage = 0;
            }
        }
        /** new payment start **/
        else if ((jQuery("#" + li_container_id + " div").first().attr('title') === 'Payment')) {
            payment_flage = 0;

        }
        /** new payment end **/
    }
	
}

function delete_element(li_container_id)
{
    var options = {};
    if (element_selected_Effect === "scale") {
        options = {
            percent: 0
        };
    } else if (element_selected_Effect === "size") {
        options = {
            to: {
                width: 200,
                height: 60
            }
        };
    }
    jQuery("#" + li_container_id).hide(element_selected_Effect, options, 300, callback);
    function callback()
    {
        setTimeout(function() {
            var element_cointaner = document.getElementById('element_container');
            element_cointaner.removeChild(document.getElementById(li_container_id));
            document.getElementById('field_setting_sub').innerHTML = '';
            jQuery("#field_setting_sub").hide();
            jQuery("#form_column_three p").first().remove();
        }, 70);
    }
}


function delete_entry(element_id)
{
    var form_id = parseInt(document.getElementsByTagName('form')[0].id.match(/[0-9]+/)[0], 10);
    var global_array_string = "";
    var r_c_temp = jQuery("#" + element_id + " ul input");
    var s_temp = jQuery("#" + element_id + " select option");
    if (r_c_temp.length > 0 || s_temp.length > 0)
    {
        for (var i = 0; i < s_temp.length; i++)
        {
            var id = parseFloat(s_temp[i].id.match(/[\d\.\0]+/));
            if (id === element_id)
            {
                id += ".0";
            }
            global_array_string += id + ",";
        }

        for (var i = 0; i < r_c_temp.length; i++)
        {
            var id = parseFloat(r_c_temp[i].id.match(/[\d\.\0]+/));
            if (id === element_id)
            {
                id += ".0";
            }
            global_array_string += id + ",";
        }
    } else
    {

        global_array_string += element_id + ",";
    }
    global_array_string = global_array_string.substring(0, global_array_string.lastIndexOf(','))
    /*jQuery.ajax({
        url: base_url + "Edit_Element_Delete/delete_element",
        type: "POST",
        data: {
            ele_del_id: global_array_string,
            ele_formid: form_id
        },
        success: function(data) {
            // alert(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //   alert("error");
        }
    });*/
}

//--------------------------Dynamic Field Settings------------------------------------->//
//logical segment
var css_flage_back_id = document.createElement("br");

var selectedEffect = "drop";

window.onload = function() { // document ready
    var page_type = "" + window.location;
}


function setRedirectValue(ref)
{
    document.getElementById('form_setting').setAttribute('data-redirect',ref.value);
}

function submit_lable_change(ref)
{
    document.getElementById('submit_label').value = ref.value;
}

//change form-head color when form-title change to default 
function form_title_change(id)
{
    document.getElementById('form_setting_para_1').innerHTML = id.value;
    
    var str_status_verification = edit_value_change_check(id.value);
    if (!str_status_verification) {
        document.getElementById('form_setting_para_1').innerHTML = 'Type Again';
        id.value = 'Type Again';
    }
}

function form_description_change(id)
{
    document.getElementById('form_setting_para_2').innerHTML = id.value;
    var str_status_verification = edit_value_change_check(id.value);
    if (!str_status_verification) {
        document.getElementById('form_setting_para_2').innerHTML = 'Type Again';
        id.value = 'Type Again';
    }
}

function Dynamic_field_setting(container_li_id)
{
	document.getElementById("form_column_three").style.display = "block";
    jQuery("#field_setting_sub").hide();
    /*logicedit start*/
    jQuery("#conditionLogicDiv").remove();
    /*logicedit end*/
    var target_div = document.getElementById('div_' + container_li_id);
    css_flage_back_id = target_div;
    var field_type = target_div.title;
    var field_setting_sub = document.getElementById('field_setting_sub');
    field_setting_sub.innerHTML = '';
    var Field_Label = document.createElement('label');
    Field_Label.id = 'Field_Label';
    Field_Label.innerHTML = 'Field Label';
    var Field_heading = document.createElement('p');
    Field_heading.id = 'heading';
    Field_heading.innerHTML = 'Form Settings';
    field_setting_sub.appendChild(Field_heading);
    field_setting_sub.appendChild(Field_Label);

    if (field_type == 'Checkboxes')
    {
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('label_element' + container_li_id).innerHTML;
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'edit_value_change1(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'edit_value_change1(this,' + container_li_id + ')');
        field_setting_sub.appendChild(Field_Label_text);

        /** sorting checkbox  **/
        var add_Field_Label = document.createElement('label');
        add_Field_Label.innerHTML = 'Multiple Items';
        field_setting_sub.appendChild(add_Field_Label);
        /** sorting checkbox end **/
        var required_checkbox = document.createElement('input');
        required_checkbox.type = 'checkbox';
        required_checkbox.setAttribute('id', 'required_checkbox');
        required_checkbox.setAttribute('onchange', "set_required_for_text(this,'Checkboxes'," + container_li_id + ")");
        if (document.getElementById('break_line' + container_li_id).title == 'true')
        {
            required_checkbox.checked = true;
        }
        else
        {
            required_checkbox.checked = false;
        }
        var checkbox_ul = document.getElementById('checkboxes' + container_li_id);
        var checkbox_ul_li_array = checkbox_ul.getElementsByTagName('li');
        var ul_for_checkbox_option = document.createElement('ul');
        ul_for_checkbox_option.id = "temp_ul";
        

        for (var i = 0; i < checkbox_ul_li_array.length; i++)
        {
            var li_for_checkbox_option = document.createElement('li');
            var orignal_id = checkbox_ul_li_array[i].id;
            var lastindex = orignal_id.substring(orignal_id.lastIndexOf(".") + 1, orignal_id.length);
            li_for_checkbox_option.id = 'li_for_checkbox_option' + lastindex;
            var checkbox_li_label_element_array = checkbox_ul_li_array[i].getElementsByTagName('label');
            var checkbox_li_input_element_array = checkbox_ul_li_array[i].getElementsByTagName('input');
            var option_text_field = document.createElement('input');
            option_text_field.type = 'text';
            option_text_field.value = checkbox_li_label_element_array[0].innerHTML;

            /** sorting checkbox **/
            var thisParent = checkbox_li_input_element_array[0].parentNode;
            li_for_checkbox_option.setAttribute("data-class", thisParent.getAttribute("data-class"));
            var move_button = document.createElement('span');
            move_button.className = 'move_arrow';
            /** sorting checkbox end **/

            option_text_field.setAttribute('onkeyup', 'checkbox_option_value_change(this,' + lastindex + ',' + container_li_id + ')');
            option_text_field.setAttribute('class', 'check-radio');
            var remove_button = document.createElement('button');
            remove_button.setAttribute('class', 'fa fa-minus-circle');
            remove_button.setAttribute('id', lastindex);
            remove_button.setAttribute('onclick', 'remove_checkbox_option(this.id,' + container_li_id + ')');
            var add_button = document.createElement('button');
            add_button.setAttribute('class', 'fa fa-plus-circle');
            add_button.setAttribute('onclick', 'add_checkbox_option(' + container_li_id + ')');
            li_for_checkbox_option.appendChild(option_text_field);

            /** sorting checkbox  **/
            li_for_checkbox_option.appendChild(move_button);
            /** sorting checkbox end **/
            li_for_checkbox_option.appendChild(remove_button);
            li_for_checkbox_option.appendChild(add_button);
            ul_for_checkbox_option.appendChild(li_for_checkbox_option);

            /** sorting checkbox  **/
            $(li_for_checkbox_option).parents("ul").sortable({
                axis: "y",
                containment: "#field_setting_sub",
                handle: ".move_arrow",
                update: function(event, ui) {
                    var prev = ui.item.prev().attr('data-class');
                    if (ui.item.prev().attr('data-class')) {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('li[data-class="' + className + '"]');
                        $('.form_column_two').find(element).insertAfter($('.form_column_two').find('li[data-class="' + prev + '"]'));
                    }
                    else {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('li[data-class="' + className + '"]');
                        $('.form_column_two').find(element).insertBefore($('.form_column_two').find('li[data-class="' + className + '"]').parent().find("li:first"));
                    }
                }
            });
            /** sorting checkbox end **/
        }

        field_setting_sub.appendChild(ul_for_checkbox_option);
        var instraction_Label = document.createElement('label');
        instraction_Label.innerHTML = "Field Instruction";
        field_setting_sub.appendChild(instraction_Label);
        var instraction_text = document.createElement('textarea');
        instraction_text.rows = '4';
        instraction_text.cols = '30';

        var instraction_text_value = document.getElementById('info' + container_li_id).getAttribute('original-title');
        if (instraction_text_value == 'null' || instraction_text_value == null) {
            instraction_text.value = '';
        } else {
            instraction_text.value = instraction_text_value;
        }


        instraction_text.id = 'instraction_textField';
        instraction_text.setAttribute('onkeyup', 'instruction_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(instraction_text);
        var form_get_span_required = document.createElement('span');
        form_get_span_required.setAttribute('class', 'requirred-check');
        form_get_span_required.appendChild(required_checkbox);
        var required_checkbox_label = document.createElement('label');
        required_checkbox_label.innerHTML = "Required"
        form_get_span_required.appendChild(required_checkbox_label);
        field_setting_sub.appendChild(form_get_span_required);
    }
    if (field_type == 'Select')
    {
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('label_element' + container_li_id).innerHTML;
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'edit_value_change1(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'edit_value_change1(this,' + container_li_id + ')');
        field_setting_sub.appendChild(Field_Label_text);

        /** sorting option **/
        var add_Field_Label = document.createElement('label');
        add_Field_Label.innerHTML = 'Multiple Items';
        field_setting_sub.appendChild(add_Field_Label);
        /** sorting option end **/

        var required_checkbox = document.createElement('input');
        required_checkbox.type = 'checkbox';
        required_checkbox.setAttribute('id', 'required_checkbox');
        required_checkbox.setAttribute('onchange', "set_required_for_text(this,'Select'," + container_li_id + ")");
        if (document.getElementById('select' + container_li_id).required == true)
        {
            required_checkbox.checked = true;
        }
        else
        {
            required_checkbox.checked = false;
        }
        var ul_for_select_option = document.createElement('ul');
        ul_for_select_option.id = "temp_ul";
        

        var select_element = document.getElementById("select" + container_li_id);
        for (var i = 0; i < select_element.options.length; i++)
        {
            var li_for_select_option = document.createElement('li');
            var orignal_id = select_element.options[i].id;
            var lastindex = orignal_id.substring(orignal_id.lastIndexOf(".") + 1, orignal_id.length);
            //select_increment_varible = parseInt(lastindex) + 1;
            li_for_select_option.id = "li_for_select_option" + lastindex;
            var option_text_field = document.createElement('input');
            option_text_field.type = 'text';
            option_text_field.value = select_element.options[i].value;
            option_text_field.setAttribute('onkeyup', 'select_option_value_change(this,' + lastindex + ',' + container_li_id + ')');
            option_text_field.setAttribute('class', 'check-radio');

            /** sorting option  **/
            var thisParent = select_element.options[i];
            li_for_select_option.setAttribute("data-class", thisParent.getAttribute("data-class"));
            var move_button = document.createElement('span');
            move_button.className = 'move_arrow';
            /** sorting option end **/

            var remove_button = document.createElement('button');
            remove_button.setAttribute('class', 'fa fa-minus-circle');
            remove_button.setAttribute('id', lastindex);
            remove_button.setAttribute('onclick', 'remove_select_option(this.id,' + container_li_id + ')');
            var add_button = document.createElement('button');
            add_button.setAttribute('class', 'fa fa-plus-circle');
            add_button.setAttribute('onclick', 'add_select_option(' + container_li_id + ')');
            li_for_select_option.appendChild(option_text_field);

            /** sorting option**/
            li_for_select_option.appendChild(move_button);
            /** sorting option end **/
            li_for_select_option.appendChild(remove_button);
            li_for_select_option.appendChild(add_button);
            ul_for_select_option.appendChild(li_for_select_option);

            /** sorting option **/
            $(li_for_select_option).parents("ul").sortable({
                axis: "y",
                containment: "#field_setting_sub",
                handle: ".move_arrow",
                update: function(event, ui) {
                    var prev = ui.item.prev().attr('data-class');
                    if (ui.item.prev().attr('data-class')) {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('option[data-class="' + className + '"]');
                        $('.form_column_two').find(element).insertAfter($('.form_column_two').find('option[data-class="' + prev + '"]'));
                        $('.form_column_two').find('option[data-class="' + className + '"]').parent().find("option[selected='selected']").removeAttr('selected');
                        $('.form_column_two').find('option[data-class="' + className + '"]').parent().find("option:first").attr('selected', 'selected');
                    }
                    else {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('option[data-class="' + className + '"]');
                        $('.form_column_two').find('option[data-class="' + className + '"]').parent().find("option[selected='selected']").removeAttr('selected');
                        $('.form_column_two').find(element).insertBefore($('.form_column_two').find('option[data-class="' + className + '"]').parent().find("option:first")).attr('selected', 'selected');
                    }
                }
            });
            /** sorting option end **/
        }
        field_setting_sub.appendChild(ul_for_select_option);
        var instraction_Label = document.createElement('label');
        instraction_Label.innerHTML = "Field Instruction";
        field_setting_sub.appendChild(instraction_Label);
        var instraction_text = document.createElement('textarea');
        instraction_text.rows = '4';
        instraction_text.cols = '30';
        var instraction_text_value = document.getElementById('info' + container_li_id).getAttribute('original-title');
        if (instraction_text_value == 'null' || instraction_text_value == null) {
            instraction_text.value = '';
        } else {
            instraction_text.value = instraction_text_value;
        }
        instraction_text.id = 'instraction_textField';
        instraction_text.setAttribute('onkeyup', 'instruction_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(instraction_text);
        var form_get_span_required = document.createElement('span');
        form_get_span_required.setAttribute('class', 'requirred-check');
        form_get_span_required.appendChild(required_checkbox);
        var required_checkbox_label = document.createElement('label');
        required_checkbox_label.innerHTML = "Required"
        form_get_span_required.appendChild(required_checkbox_label);
        field_setting_sub.appendChild(form_get_span_required);
    }


    if (field_type == 'Radio Button')
    {
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('label_element' + container_li_id).innerHTML;
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'edit_value_change1(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'edit_value_change1(this,' + container_li_id + ')');

        field_setting_sub.appendChild(Field_Label_text);

        /** sorting radio **/
        var add_Field_Label = document.createElement('label');
        add_Field_Label.innerHTML = 'Multiple Items';
        field_setting_sub.appendChild(add_Field_Label);
        /** sorting radio end **/

        var required_checkbox = document.createElement('input');
        required_checkbox.type = 'checkbox';
        required_checkbox.setAttribute('id', 'required_checkbox');
        required_checkbox.setAttribute('onchange', "set_required_for_text(this,'Radio_Button'," + container_li_id + ")");
        if (document.getElementById('break_line' + container_li_id).title == 'true')
        {
            required_checkbox.checked = true;
        }
        else
        {
            required_checkbox.checked = false;
        }
        var radio_ul = document.getElementById('Radio' + container_li_id);
        var radio_ul_li_array = radio_ul.getElementsByTagName('li');
        var ul_for_radio_option = document.createElement('ul');
        ul_for_radio_option.id = "temp_ul";
        
        for (var i = 0; i < radio_ul_li_array.length; i++)
        {
            var li_for_radio_option = document.createElement('li');
            var orignal_id = radio_ul_li_array[i].id;
            var lastindex = orignal_id.substring(orignal_id.lastIndexOf(".") + 1, orignal_id.length);
            li_for_radio_option.id = 'li_for_radio_option' + lastindex;
            var radio_ul_li_label_element_array = radio_ul_li_array[i].getElementsByTagName('label');
            var radio_ul_li_input_element_array = radio_ul_li_array[i].getElementsByTagName('input');
            var option_text_field = document.createElement('input');
            option_text_field.type = 'text';
            option_text_field.value = radio_ul_li_label_element_array[0].innerHTML;

            /** sorting radio **/
            var thisParent = radio_ul_li_input_element_array[0].parentNode;
            li_for_radio_option.setAttribute("data-class", thisParent.getAttribute("data-class"));
            var move_button = document.createElement('span');
            move_button.className = 'move_arrow';
            /** sorting radio end **/
            option_text_field.setAttribute('onkeyup', 'radio_option_value_change(this,' + lastindex + ',' + container_li_id + ')');
            option_text_field.setAttribute('class', 'check-radio');
            var remove_button = document.createElement('button');
            remove_button.setAttribute('id', lastindex);
            remove_button.setAttribute('onclick', 'remove_radio_option(this.id,' + container_li_id + ')');
            remove_button.setAttribute('class', 'fa fa-minus-circle');
            var add_button = document.createElement('button');
            add_button.setAttribute('onclick', 'add_radio_option(' + container_li_id + ')');
            add_button.setAttribute('class', 'fa fa-plus-circle');
            li_for_radio_option.appendChild(option_text_field);
            /** sorting radio end **/
            li_for_radio_option.appendChild(move_button);
            /** sorting radio end **/

            li_for_radio_option.appendChild(remove_button);
            li_for_radio_option.appendChild(add_button);
            ul_for_radio_option.appendChild(li_for_radio_option);

            /** sorting radio **/
            $(li_for_radio_option).parents("ul").sortable({
                axis: "y",
                containment: "#field_setting_sub",
                handle: ".move_arrow",
                update: function(event, ui) {
                    var prev = ui.item.prev().attr('data-class');
                    if (ui.item.prev().attr('data-class')) {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('li[data-class="' + className + '"]');
                        $('.form_column_two').find(element).insertAfter($('.form_column_two').find('li[data-class="' + prev + '"]'));
                    }
                    else {
                        var className = ui.item.attr('data-class');
                        var element = $('.form_column_two').find('li[data-class="' + className + '"]');
                        $('.form_column_two').find(element).insertBefore($('.form_column_two').find('li[data-class="' + className + '"]').parent().find("li:first"));
                    }
                }
            });
            /** sorting radio end **/
        }

        field_setting_sub.appendChild(ul_for_radio_option);
        var instraction_Label = document.createElement('label');
        instraction_Label.innerHTML = "Field Instruction";
        field_setting_sub.appendChild(instraction_Label);
        var instraction_text = document.createElement('textarea');
        instraction_text.rows = '4';
        instraction_text.cols = '30';
        var instraction_text_value = document.getElementById('info' + container_li_id).getAttribute('original-title');
        if (instraction_text_value == 'null' || instraction_text_value == null) {
            instraction_text.value = '';
        } else {
            instraction_text.value = instraction_text_value;
        }
        instraction_text.id = 'instraction_textField';
        instraction_text.setAttribute('onkeyup', 'instruction_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(instraction_text);
        var form_get_span_required = document.createElement('span');
        form_get_span_required.setAttribute('class', 'requirred-check');
        form_get_span_required.appendChild(required_checkbox);
        var required_checkbox_label = document.createElement('label');
        required_checkbox_label.innerHTML = "Required"
        form_get_span_required.appendChild(required_checkbox_label);
        field_setting_sub.appendChild(form_get_span_required);
    }



    if (field_type == 'FileUpload')
    {
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('file_upload_button' + container_li_id).value;
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'edit_value_change_file(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'edit_value_change_file(this,' + container_li_id + ')');
        field_setting_sub.appendChild(Field_Label_text);

        var instraction_Label = document.createElement('label');
        instraction_Label.innerHTML = "Field Instruction";
        field_setting_sub.appendChild(instraction_Label);
        var instraction_text = document.createElement('textarea');
        instraction_text.rows = '4';
        instraction_text.cols = '30';
        var instraction_text_value = document.getElementById('info' + container_li_id).getAttribute('original-title');
        if (instraction_text_value == 'null' || instraction_text_value == null) {
            instraction_text.value = '';
        } else {
            instraction_text.value = instraction_text_value;
        }
        instraction_text.id = 'instraction_textField';
        instraction_text.setAttribute('onkeyup', 'instruction_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(instraction_text);
        var form_get_span_required = document.createElement('span');
        form_get_span_required.setAttribute('class', 'requirred-check');
        var required_checkbox = document.createElement('input');
        required_checkbox.type = 'checkbox';
        required_checkbox.setAttribute('id', 'required_checkbox');
        required_checkbox.setAttribute('onchange', "set_required_for_text(this,'FileUpload'," + container_li_id + ")");
        if (document.getElementById('File_Upload' + container_li_id).required == true)
        {
            required_checkbox.checked = true;
        }
        else
        {
            required_checkbox.checked = false;
        }
        form_get_span_required.appendChild(required_checkbox);
        var required_checkbox_label = document.createElement('label');
        required_checkbox_label.innerHTML = "Required"
        form_get_span_required.appendChild(required_checkbox_label);
        field_setting_sub.appendChild(form_get_span_required);
    }

    

    if (field_type == 'Name' || field_type == 'Email' || field_type == 'Number' || field_type == 'Message' || field_type == 'Password' || field_type == 'Input' || field_type == 'TextArea')
    {
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('text_element' + container_li_id).getAttribute('placeholder');
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'edit_value_change(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'edit_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(Field_Label_text);

        var instraction_Label = document.createElement('label');
        instraction_Label.innerHTML = "Field Instruction";
        field_setting_sub.appendChild(instraction_Label);
        var instraction_text = document.createElement('textarea');
        instraction_text.rows = '4';
        instraction_text.cols = '30';
        var instraction_text_value = document.getElementById('info' + container_li_id).getAttribute('original-title');
        if (instraction_text_value == 'null' || instraction_text_value == null) {
            instraction_text.value = '';
        } else {
            instraction_text.value = instraction_text_value;
        }
        instraction_text.id = 'instraction_textField';
        instraction_text.setAttribute('onkeyup', 'instruction_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(instraction_text);
        var form_get_span_required = document.createElement('span');
        form_get_span_required.setAttribute('class', 'requirred-check');
        var required_checkbox = document.createElement('input');
        required_checkbox.type = 'checkbox';
        required_checkbox.setAttribute('id', 'required_checkbox');
        required_checkbox.setAttribute('onchange', "set_required_for_text(this,'text_element'," + container_li_id + ")"); //'+field_type+','')');
        if (document.getElementById('text_element' + container_li_id).required == true)
        {
            required_checkbox.checked = true;
        }
        else
        {
            required_checkbox.checked = false;
        }

        form_get_span_required.appendChild(required_checkbox);
        var required_checkbox_label = document.createElement('label');
        required_checkbox_label.innerHTML = "Required"
        form_get_span_required.appendChild(required_checkbox_label);
        field_setting_sub.appendChild(form_get_span_required);
        var form_get_span = document.createElement('span');
        
        form_get_span.setAttribute('class', 'max-length');
        var Field_Label_maxlength = document.createElement('label');
        Field_Label_maxlength.innerHTML = 'Max Length';
        form_get_span.appendChild(Field_Label_maxlength);
        var maxlength_text = document.createElement('input');
        maxlength_text.type = 'text';
        maxlength_text.setAttribute('class', 'max-length-field');
        maxlength_text.setAttribute("onkeypress", "return check_number(event)");
        if (document.getElementById('text_element' + container_li_id).hasAttribute('maxlength'))
        {
            maxlength_text.value = document.getElementById('text_element' + container_li_id).getAttribute('maxlength');
        }
        maxlength_text.id = 'maxlength_textField';
        maxlength_text.setAttribute('onkeyup', 'setMaxlength(this.value,' + container_li_id + ')');
        form_get_span.appendChild(maxlength_text);
        jQuery(".requirred-check").before(form_get_span);
        

    }
    //Paragraph
    if (field_type == "Paragraph") {
        Field_Label.innerHTML = 'Heading(optional)';
        var Field_Label_text = document.createElement('input');
        Field_Label_text.type = 'text';
        Field_Label_text.value = document.getElementById('para_header' + container_li_id).innerHTML;
        Field_Label_text.id = 'Element_Label_textField';
        Field_Label_text.setAttribute('onkeyup', 'paragraph_head_value_change(this,' + container_li_id + ')');
        Field_Label_text.setAttribute('onmouseout', 'paragraph_head_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(Field_Label_text);
        var paragraph_head_Label = document.createElement('label');
        paragraph_head_Label.innerHTML = "Heading Size in px";
        field_setting_sub.appendChild(paragraph_head_Label);
        var para_heading_size_text = document.createElement('input');
        para_heading_size_text.type = 'text';
        para_heading_size_text.value = parseInt(document.getElementById('para_header' + container_li_id).style.fontSize);
        para_heading_size_text.id = 'Element_Label_textField';
        para_heading_size_text.setAttribute('onkeyup', 'heading_font_size_change(this,' + container_li_id + ')');
        para_heading_size_text.setAttribute('onmouseout', 'heading_font_size_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(para_heading_size_text);
        var paragraph_Label = document.createElement('label');
        paragraph_Label.innerHTML = "Paragraph/ Image/ Video Iframe";
        field_setting_sub.appendChild(paragraph_Label);
        var paragraph_text = document.createElement('textarea');
        paragraph_text.rows = '4';
        paragraph_text.cols = '30';
        paragraph_text.value = document.getElementById('text_element' + container_li_id).innerHTML;
        paragraph_text.id = 'paragraph_textField';
        paragraph_text.setAttribute('onkeyup', 'paragraph_value_change(this,' + container_li_id + ')');
        field_setting_sub.appendChild(paragraph_text);

		/** paragraph file upload div's **/
		var upload_div = document.createElement('div');
		upload_div.setAttribute('class', 'upload-media');
		
		var input_upload = document.createElement('input');
		input_upload.type ="file";
		input_upload.id = "para_upload";
		input_upload.setAttribute('class', "para-upload");
		input_upload.value="";
	    //input_upload.setAttribute('onchange', 'para_upload_img(this,'+ container_li_id +')');
	    
		var upload_span = document.createElement('span');
		upload_span.innerHTML = "CLICK TO UPLOAD";
		
		
		upload_div.appendChild(input_upload);
		upload_div.appendChild(upload_span);
		field_setting_sub.appendChild(upload_div); 
		
		var upload_prog = document.createElement('div');
		upload_prog.setAttribute("class", "upload_loader");
		upload_prog.setAttribute("style", "margin-top:4px;");
		field_setting_sub.appendChild(upload_prog);

    }
    jQuery("#form_column_three").css("margin-top", document.getElementById('div_' + container_li_id).offsetTop - 55);
}

function set_paypal_product_name(refrence, div_id)
{
    var div = document.getElementById('div_' + div_id);
    div.setAttribute('data-product', refrence.value);
}

function set_paypal_email(refrence, div_id)
{
    var div = document.getElementById('div_' + div_id);
    div.setAttribute('data-email', refrence.value);
}

function set_currency_value(refrence, div_id)
{
    var div = document.getElementById('div_' + div_id);
    var paymentElement = document.getElementById('text_element' + div_id);
    var paymentValue = paymentElement.placeholder;
    var price = document.getElementById('productPrice' + div_id).value;
    paymentValue = paymentValue.substr(0, paymentValue.indexOf(':'));
    paymentElement.placeholder = paymentValue + ": " + price + " " + refrence.value;
    div.setAttribute('data-currency', refrence.value);
}

function set_paypal_value(refrence, div_id)
{
    var div = document.getElementById('div_' + div_id);
    var paymentElement = document.getElementById('text_element' + div_id);
    var paymentValue = paymentElement.placeholder;
    var currency = document.getElementById('paymentSelect' + div_id).value;
    paymentValue = paymentValue.substr(0, paymentValue.indexOf(':'));
    paymentElement.placeholder = paymentValue + ": " + refrence.value + " " + currency;
    div.setAttribute('data-value', refrence.value);
}


function validate_paypal_email(refrence, div_id)
{
    var email_value = refrence.value;
    if (!ValidateEmail(email_value))
    {
        refrence.placeholder = 'Enter Valide Email';
        refrence.value = '';
        var div = document.getElementById('div_' + div_id);
        div.setAttribute('data-email', refrence.value);
    }
}


function close_botton(container_li_id)
{
    if (document.getElementById('remove_button'))
    {
        var minus = document.getElementById('remove_button');
        var container_div = minus.parentNode;
        var numb = container_div.id.match(/\d/g);
        container_div.removeChild(minus);
        var minus = document.createElement("img");
        minus.setAttribute('src', base_url+"assets/builder/img/stop.png");
        minus.setAttribute('style', 'float:right');
        minus.setAttribute('id', 'remove_button');
        if (isMobile == true) {
            minus.setAttribute('class', 'remove_button_2 ipad');
        }
        else {
            minus.setAttribute('class', 'remove_button_2');
        }
        minus.setAttribute('onmouseover', "close_botton(" + container_li_id + "); ");
        minus.setAttribute('onmousedown', 'remove_li_container(' + container_li_id + ')');
        minus.setAttribute('ontouchend', 'remove_li_container(' + container_li_id + ')');
        var labelElement_breakline = document.getElementById('break_line' + container_li_id);
        labelElement_breakline.parentNode.insertBefore(minus, labelElement_breakline);
    }
    else
    {
        var minus = document.createElement("img");
        minus.setAttribute('src', base_url+"assets/builder/img/stop.png");
        minus.setAttribute('style', 'float:right');
        minus.setAttribute('id', 'remove_button');
        if (isMobile == true) {
            minus.setAttribute('class', 'remove_button_2 ipad');
        }
        else {
            minus.setAttribute('class', 'remove_button_2');
        }
        minus.setAttribute('onmouseover', "close_botton(" + container_li_id + "); ");
        minus.setAttribute('onmousedown', 'remove_li_container(' + container_li_id + ')');
        minus.setAttribute('ontouchend', 'remove_li_container(' + container_li_id + ')');
        var labelElement_breakline = document.getElementById('break_line' + container_li_id);
        labelElement_breakline.parentNode.insertBefore(minus, labelElement_breakline);
    }
	
	jQuery(".rmv_para_img").mouseover(function(event){
		var b_id = jQuery(this).attr("id");
		paragraph_img_hover(jQuery(this), b_id);
		});
}


function check_number(e)
{
    if ((e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46 || e.which == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function setDivClass(element_refrence)
{
    removeDivClass();
    if (((element_refrence.className).indexOf('test_class')) == '-1')
    {
        element_refrence.className += ' test_class';
        select_flage = false;
    }
    css_flage_back_id = element_refrence;
    jQuery(css_flage_back_id).animate({
        backgroundColor: "##f8f8f8"
    }, 50);
}

function removeDivClass()
{
    var reg = new RegExp('(\\s|^)' + 'test_class' + '(\\s|$)');
    css_flage_back_id.className = css_flage_back_id.className.replace(reg, ' ');
    jQuery(css_flage_back_id).animate({
        backgroundColor: "##"
    }, 50);
}

function mad_effect()
{
    var options = {};
    if (selectedEffect === "scale") {
        options = {
            percent: 100
        };
    } else if (selectedEffect === "size") {
        options = {
            to: {
                width: 280,
                height: 185
            }
        };
    }
    jQuery("#field_setting_sub").show(selectedEffect, options, 280);
}

function mouse_out_remove()
{
    jQuery("#remove_button").remove();
}

function set_date_format(li_id, ref)
{
    document.getElementById('element_date_hidden' + li_id).value = ref.value;
}

function set_time_required_for_date(ref, li_id)
{
    document.getElementById('element_date_hidden' + li_id).title = ref.checked;
}

/* new cahnge start */
$(function() {
    jQuery("body").click(function() {
        if (select_flage)
        {
            jQuery("div").removeClass("test_class");
        }
        else
        {
            select_flage = true;
        }
    });

    jQuery("#field_setting_sub").on("mousedown", function()
    {
        select_flage = false;
        jQuery(css_flage_back_id).addClass('test_class');
    });
});

function ValidateEmail(email_value)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_value.match(mailformat))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function form_setting()
{
    jQuery("#form_column_three").css("margin-top", 0);
    jQuery("#form_column_three p").first().remove();
    jQuery("#field_setting_sub").hide();
    var options = {
    };



    var field_setting_sub = document.getElementById('field_setting_sub');
    field_setting_sub.innerHTML = '';
    var form_title = document.createElement('label');
    form_title.id = 'form_title';
    form_title.innerHTML = 'Form Title';
    field_setting_sub.appendChild(form_title);
    var Field_Label_text = document.createElement('input');
    Field_Label_text.type = 'text';
    Field_Label_text.value = document.getElementById('form_setting_para_1').innerHTML;
    Field_Label_text.id = 'Element_Label_textField';
    Field_Label_text.setAttribute('onkeyup', 'form_title_change(this); hide_heading_image();');
    Field_Label_text.setAttribute('onmouseout', 'form_title_change(this)');
    field_setting_sub.appendChild(Field_Label_text);
    var form_title = document.createElement('label');
    form_title.id = 'description';
    form_title.innerHTML = 'Description';
    field_setting_sub.appendChild(form_title);
    var element_paregraph = document.createElement("textarea");
    /* new cahnge */
    element_paregraph.setAttribute('rows', '4');
    element_paregraph.setAttribute('cols', '30');
    element_paregraph.setAttribute('id', 'form_description');
    element_paregraph.innerHTML = document.getElementById('form_setting_para_2').innerHTML;
    element_paregraph.setAttribute('onkeyup', "form_description_change(this)");
    element_paregraph.setAttribute('onmouseout', "form_description_change(this)");
    field_setting_sub.appendChild(element_paregraph);
    var submit_label = document.createElement('label');
    submit_label.innerHTML = 'Form Submit Button Text';
    field_setting_sub.appendChild(submit_label);
    var submit_value = document.createElement("input");
    submit_value.setAttribute('type', 'text');
    submit_value.value = document.getElementById('submit_label').value;
    submit_value.setAttribute('onkeyup', "submit_lable_change(this)");
    submit_value.setAttribute('onmouseout', "submit_lable_change(this)");
    field_setting_sub.appendChild(submit_value);
    var redirect_label = document.createElement('label');
    redirect_label.innerHTML = 'Form Redirect URL';
    field_setting_sub.appendChild(redirect_label);
    var redirect_value = document.createElement("input");
    redirect_value.setAttribute('type', 'text');
    redirect_value.value = document.getElementById('form_setting').getAttribute('data-redirect');
    redirect_value.setAttribute('onkeyup', "setRedirectValue(this)");
    redirect_value.setAttribute('onmouseout', "setRedirectValue(this)");
    field_setting_sub.appendChild(redirect_value);
	
	 var customize_instruction = document.createElement('label');
	 customize_instruction.setAttribute("style", "margin-bottom:18px;");
     field_setting_sub.appendChild(customize_instruction);
		
    /*if (jQuery("#Logic_container").length > 0)
    {
        if (jQuery("#conditionWrapper").attr('data-logicapply') == "true")
        {
            jQuery("<input id='conditionCheckbox' type='checkbox' onclick='buildConditionLogic(this)' checked disabled><label>Apply Conditional Logic</label><br/>" +
                    "<input style='display:block' id='setting_show_condition' type='button' onclick='showConditionDialog(this);' value='View Conditional Logic'/>").appendTo(field_setting_sub);
        } else
        {
            jQuery("<input id='conditionCheckbox' type='checkbox' onclick='buildConditionLogic(this)'><label>Apply Conditional Logic</label><br/>" +
                    "<input style='display:none' id='setting_show_condition' type='button' onclick='showConditionDialog(this);' value='Show'/>").appendTo(field_setting_sub);
            jQuery("#Logic_container").remove();
        }
    } else {
        jQuery("<input id='conditionCheckbox' type='checkbox' onclick='buildConditionLogic(this)'><label>Apply Conditional Logic</label><br/>" +
                "<input style='display:none' id='setting_show_condition' type='button' onclick='showConditionDialog(this);' value='View Conditional Logic'/>").appendTo(field_setting_sub);
    }*/
    jQuery("#field_setting_sub").show(selectedEffect, options, 280);
    removeDivClass();
}


/*       complete      */
function showConditionDialog(ref, li)
{
    jQuery("#Logic_container").css({display: "block"});
    jQuery("#conditionLogicDialog").css({display: "block"});
	jQuery(".conditionLogicDiv").each(function(){
	if(!jQuery(this).find('each_logic_close').length)
	{
		jQuery(this).append('<div class="each_logic_close fa fa-minus-circle" onclick="removeParticularLogic(this)"></div>');
	}
	});
	if(!jQuery("#conditionWrapper").find('logic_main_div').length){
		jQuery(".logic_header").nextAll().wrapAll("<div class='logic_main_div'></div>" );
	}
}

function buildConditionLogic(ref, li_id)
{
    if (jQuery("#Logic_container").length > 0)
    {
        if (!ref.checked) {
            jQuery("#Logic_container").remove();
            form_setting();
        } else
        {
            jQuery("#conditionLogicDialog").css({display: "block"});
            jQuery("#Logic_container").css({display: "block"});
        }
        return;
    }


    if (ref.checked)
    {
        var globalOptionString = buildAllLabelString();
        if (globalOptionString == "null")
        {
            alert("add at least one Element");
            jQuery("#conditionCheckbox").attr('checked', false);
            return;
        }
        var globalLogicString = "";
        globalLogicString += "<div id='conditionWrapper' data-logicapply='false'><div class='logic_header'><div id='logic_close' class='logic_close'></div><p>Powerful Logic Form</p><div class='logic_drag'></div></div>" +
                "<div class='logic_main_div'><div class='sourcefield add_logic_block'><a class='add_logic' onclick='buildAnotherConditionLogic(\"+\"," + li_id + ")'>Add Logic <span>+</span></a>" +
                "<a class='remove_logic' onclick='buildAnotherConditionLogic(\"-\"," + li_id + ")'>Remove Logic <span>-</span></a></div>" +
                "<div style='' class='conditionLogicDiv sourcefield'><div class='each_logic_close fa fa-minus-circle' onclick='removeParticularLogic(this)'></div><div class='sourceCondition'><select  onchange='setOption(this);changeValueInput(this);' class='sourceSelect'>" + globalOptionString[0] + "</select>" +
                '<select data-value="is" onchange="setOption(this);" class="logicSelect" >' +
                '<option>is</option>' +
                '<option>is not</option>' +
                '<option>contains</option>' +
                '<option>does not contain</option>' +
                '<option>begins with</option>' +
                '<option>ends with</option>' +
                '</select>';
        switch (globalOptionString[2])
        {
            case"Checkboxes":
                globalLogicString += '<input class="valueInput" type="text" value="Checked" readonly>';
                break;

            case"Radio Button":

                var allRadioLabel = jQuery("#Radio" + globalOptionString[3] + " .Radio_label");
                var radioLableString = "";
                for (var i = 0; i < allRadioLabel.length; i++)
                {
                    radioLableString += "<option>" + allRadioLabel[i].innerHTML + "</option>"
                }
                globalLogicString += '<select onchange="setOption(this);" class="valueInput" type="text" >' + radioLableString + '</select>';
                break;

            case"Select":
                var selectElement = jQuery("#select" + globalOptionString[3]).html();
                globalLogicString += '<select onchange="setOption(this);" class="valueInput">' + selectElement + '</select>';
                break;

            default:
                globalLogicString += '<input onkeyup="this.setAttribute(\'data-value\',this.value);this.setAttribute(\'value\',this.value);" class="valueInput" type="text" />';
                break;
        }
        globalLogicString += '<input class="logic_add" type="button" value="+" onclick="addMultipalCondition(\'' + li_id + '\',this)"/></div>' +
                "<div class='targetCondition'><select  onchange='setOption(this);' class='visibleSelect'><option>show</option><option>hide</option></select>" +
                "<select onchange='setOption(this);setApplyFlage(this);' class='targetSelect'>" + globalOptionString[1] + "</select></div></div><input type='button' class='logic_apply' value='Apply' onclick='addConditionLogic(" + li_id + ")'/></div></div>";
        jQuery("#conditionLogicDialog").css({display: "block"});
        jQuery('body').append("<div id='Logic_container'>" + globalLogicString + "</div>");
        jQuery("#conditionWrapper").draggable();
        jQuery("#logic_close").click(function() {
            jQuery("#Logic_container").css({display: "none"});
        });
    }
    else
    {
        jQuery("#Logic_container").remove();
    }
}

function buildAllLabelString()
{
    var globalOptionString = "";
    var globalTargetString = "";
    var firstElemetType = '';
    var allli_id = "";
    var f_ele_set = "";
    var allLi = jQuery(".element_container_li");
    if (allLi.length == 0)
        return "null";
    for (var i = 0; i < allLi.length; i++)
    {
        var ele_div = jQuery(allLi[i]).find(".remove_error_container");
        if (i == 0 && ele_div.attr('title') != 'Payment' && ele_div.attr('title') != 'Captcha' && ele_div.attr('title') != 'Paragraph') {
            firstElemetType = ele_div.attr('title');
            allli_id = allLi[i].id;
            f_ele_set = "set";
        } else if (ele_div.attr('title') != 'Payment' && ele_div.attr('title') != 'Captcha' && ele_div.attr('title') != 'Paragraph') {
            if (f_ele_set != 'set') {
                firstElemetType = ele_div.attr('title');
                allli_id = allLi[i].id;
                f_ele_set = "set";
            }
        }
        switch (ele_div.attr('title'))
        {
            case "Checkboxes":
                {
                    var checkBoxArray = jQuery("#checkboxes" + jQuery(allLi[i]).attr('id')).find('input[type="checkbox"]');
                    var checkBoxLabelArray = jQuery("#checkboxes" + jQuery(allLi[i]).attr('id')).find('.checkbox_label');
                    for (var j = 0; j < checkBoxArray.length; j++)
                    {
                        globalOptionString += "<option data-type='CheckBox' data-sourceId='" + checkBoxArray[j].getAttribute('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + checkBoxLabelArray[j].innerHTML + "</option>";
                    }
                    var ele_id = jQuery(allLi[i]).find(".element");
                    var label = jQuery(allLi[i]).find('.multipal_label').html();
                    globalTargetString += "<option data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + label + "</option>";
                    break;
                }
            case "Select":
                {
                    var label = jQuery(allLi[i]).find('.multipal_label').html();
                    var ele_id = jQuery(allLi[i]).find(".element");
                    globalOptionString += "<option data-type='Select' data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + label + "</option>";
                    globalTargetString += "<option data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + label + "</option>";
                    break;
                }
            case "Paragraph":
                {
			var ele_id = jQuery(allLi[i]).find(".element");
             var para_head = jQuery(allLi[i]).find(".element h3");
             if (ele_id.length >= 1) {
            globalTargetString += "<option data-sourceId='" + allLi[i].getAttribute('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + para_head.html() + "</option>";
             }
                  break;
                }

            case "FileUpload":
                {
                    var ele_id = jQuery(allLi[i]).find(".element");
					var ele_id_button = 'file_upload_button'+allLi[i].getAttribute('id'); //u28042015
					var ele_label = jQuery("#"+ele_id_button).attr("placeholder");		//u28042015
					
                    globalOptionString += "<option data-type='text' data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + ele_label + "</option>";
                    globalTargetString += "<option data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + ele_label + "</option>";
                    break;
                }

            case "Radio Button":
                {
                    var label = jQuery(allLi[i]).find('.multipal_label').html();
                    var ele_id = jQuery(allLi[i]).find(".element");
                    globalOptionString += "<option data-type='Radio' data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + label + "</option>";
                    globalTargetString += "<option data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + label + "</option>";
                    break;
                }

            default :
                {
                    var ele_id = jQuery(allLi[i]).find(".element");
                    if (ele_id.length >= 1)
                    {
                        globalOptionString += "<option data-type='text' data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + ele_id.attr('placeholder') + "</option>";
                        globalTargetString += "<option data-sourceId='" + ele_id.attr('id') + "' data-targetId='" + allLi[i].getAttribute('id') + "'>" + ele_id.attr('placeholder') + "</option>";
                    }
                }
        }

    }
    var stringArray = new Array(globalOptionString, globalTargetString, firstElemetType, allli_id);
    return stringArray;
}


function setOption(ref)
{
    jQuery(ref).attr("data-value", jQuery(ref).find("option:selected").text());

}


/*          Complete          */
function changeValueInput(ref)
{
    var elementType = jQuery(ref).find(":selected").data('type');
    var liId = jQuery(ref).find(":selected").data('targetid');
    switch (elementType)
    {
        case"CheckBox":
            jQuery(ref).parent().find('.valueInput').remove();
            jQuery('<input class="valueInput" type="text" value="Checked" readonly> ').insertAfter(jQuery(ref).parent().find('.logicSelect'));
            break;

        case"Radio":
            var allRadioLabel = jQuery("#Radio" + liId + " .Radio_label");
            var radioLableString = "";
            for (var i = 0; i < allRadioLabel.length; i++)
            {
                radioLableString += "<option>" + allRadioLabel[i].innerHTML + "</option>"
            }
            jQuery(ref).parent().find('.valueInput').remove();
            jQuery('<select onchange="setOption(this);" class="valueInput" type="text" >' + radioLableString + '</select>').insertAfter(jQuery(ref).parent().find('.logicSelect'));
            break;

        case"Select":
            var testselectElement = jQuery("#select" + liId).clone();
            jQuery(testselectElement).find('option').each(function() {
                jQuery(this).removeAttr('id');
            });
            var selectElement = jQuery(testselectElement).html();
            jQuery(ref).parent().find('.valueInput').remove();
            jQuery('<select onchange="setOption(this);" class="valueInput">' + selectElement + '</select>').insertAfter(jQuery(ref).parent().find('.logicSelect'));
            break;

        default:
            jQuery(ref).parent().find('.valueInput').remove();
            jQuery('<input class="valueInput" onkeyup="this.setAttribute(\'data-value\',this.value);this.setAttribute(\'value\',this.value);" type="text" />').insertAfter(jQuery(ref).parent().find('.logicSelect'));
            break;
    }
}

function addMultipalCondition(li_id, ref)
{
    var globalOptionString = buildAllLabelString();
    var globalLogicString = "<div class='sourceCondition'>" +
            "<select onchange='setOption(this)' class='boolLogic'><option data-sign='&&'>AND</option><option data-sign='||'>OR</option></select>" +
            "<select onchange='setOption(this);changeValueInput(this);' class='sourceSelect'>" + globalOptionString[0] + "</select>" +
            '<select class="logicSelect" onchange="setOption(this)">' +
            '<option>is</option>' +
            '<option>is not</option>' +
            '<option>contains</option>' +
            '<option>does not contain</option>' +
            '<option>begins with</option>' +
            '<option>ends with</option>' +
            '</select>';

    switch (globalOptionString[2])
    {
        case"Checkboxes":
            globalLogicString += '<input class="valueInput" type="text" value="Checked" readonly> ';
            break;

        case"Radio Button":
            var allRadioLabel = jQuery("#Radio" + globalOptionString[3] + " .Radio_label");
            var radioLableString = "";
            for (var i = 0; i < allRadioLabel.length; i++)
            {
                radioLableString += "<option>" + allRadioLabel[i].innerHTML + "</option>"
            }
            globalLogicString += '<select onchange="setOption(this);" class="valueInput" type="text" >' + radioLableString + '</select>';
            break;

        case"Select":
            var selectElement = jQuery("#select" + globalOptionString[3]).html();
            globalLogicString += '<select onchange="setOption(this);" onchange="" class="valueInput">' + selectElement + '</select>';
            break;

        default:
            globalLogicString += '<input onkeyup="this.setAttribute(\'data-value\',this.value);this.setAttribute(\'value\',this.value);" class="valueInput" type="text" />';
            break;
    }
    globalLogicString += '<input class="logic_add" type="button" value="+" onclick="addMultipalCondition(\'' + li_id + '\',this)"/>' +
            '<input class="logic_remove" type="button" value="-" onclick="removeMultipalCondition(\'' + li_id + '\',this)"/>' +
            '</div>';
    jQuery(globalLogicString).insertAfter(jQuery(ref).parent());
}


function removeMultipalCondition(li_id, ref)
{
    jQuery(ref).parent().remove();

}

function addConditionLogic(liId)
{
    if (globalConditionFlage)
    {
        alert("can't apply two logic at one field");
        return;
    }
    jQuery("#conditionWrapper").attr('data-logicapply', 'true');
    var sourceArray = jQuery("#conditionWrapper" + liId).find('.sourceSelect');
    for (var i = 0; i < sourceArray.length; i++)
    {
        var sourceId = jQuery(sourceArray[i]).find(":selected").data('targetid');
        var source = document.getElementById(sourceId);
        if (source.hasAttribute('data-Sourcelogic'))
        {
            var val = parseInt(source.getAttribute('data-Sourcelogic'));
            source.setAttribute('data-Sourcelogic', ++val);
        } else
        {
            source.setAttribute('data-Sourcelogic', '2');
        }
    }

    var targetArray = jQuery("#conditionWrapper" + liId).find('.targetSelect');
    for (var i = 0; i < targetArray.length; i++)
    {
        var targetId = jQuery(targetArray[i]).find(":selected").data('targetid');
        var target = document.getElementById(targetId);
        if (target.hasAttribute('data-Targetlogic'))
        {
            var val = parseInt(target.getAttribute('data-Targetlogic'));
            target.setAttribute('data-Targetlogic', ++val);
        } else
        {
            target.setAttribute('data-Targetlogic', '2');
        }
    }
	condition_logic();
    //jQuery('#setting_show_condition').css({display: 'block'})
    jQuery("#Logic_container").css({display: "none"});
    jQuery("#conditionLogicDialog").css({display: "none"});

}

function buildAnotherConditionLogic(val, li_id)
{
    if (val == '+')
    {
        var globalOptionString = buildAllLabelString();
        var globalLogicString = "";
        globalLogicString += "<div style='' class='conditionLogicDiv sourcefield'>" +
			    "<div class='each_logic_close fa fa-minus-circle' onclick='removeParticularLogic(this)'></div>"+
                "<div class='sourceCondition'><select  onchange='setOption(this);changeValueInput(this);' class='sourceSelect'>" + globalOptionString[0] + "</select>" +
                '<select onchange="setOption(this);" class="logicSelect" >' +
                '<option>is</option>' +
                '<option>is not</option>' +
                '<option>contains</option>' +
                '<option>does not contain</option>' +
                '<option>begins with</option>' +
                '<option>ends with</option>' +
                '</select>';
        switch (globalOptionString[2])
        {
            case"Checkboxes":
                globalLogicString += '<input class="valueInput" type="text" value="Checked" readonly>';
                break;

            case"Radio Button":
                var allRadioLabel = jQuery("#Radio" + globalOptionString[3] + " .Radio_label");
                var radioLableString = "";
                for (var i = 0; i < allRadioLabel.length; i++)
                {
                    radioLableString += "<option>" + allRadioLabel[i].innerHTML + "</option>"
                }
                globalLogicString += '<select onchange="setOption(this);" class="valueInput" type="text" >' + radioLableString + '</select>';
                break;

            case"Select":
                var selectElement = jQuery("#select" + globalOptionString[3]).html();
                globalLogicString += '<select onchange="setOption(this);" class="valueInput">' + selectElement + '</select>';
                break;

            default:
                globalLogicString += '<input onkeyup="this.setAttribute(\'data-value\',this.value);this.setAttribute(\'value\',this.value);" class="valueInput" type="text" />';
                break;
        }
        globalLogicString += '<input  class="logic_add" type="button" value="+" onclick="addMultipalCondition(\'' + li_id + '\',this)"/></div>' +
                "<div class='targetCondition'><select  onchange='setOption(this);' class='visibleSelect'><option>show</option><option>hide</option></select>" +
                "<select onchange='setOption(this);setApplyFlage(this);' class='targetSelect'>" + globalOptionString[1] + "</select></div></div>";
        jQuery("#conditionLogicDialog").css({display: "block"});
        jQuery(jQuery("#conditionWrapper").find('input[value="Apply"]')).before(globalLogicString);
		condition_logic_set(1);
    }
    else
    {
        jQuery("#conditionWrapper").find(".conditionLogicDiv:last").remove();
        globalConditionFlage = false;
		condition_logic_set(0);
    }
}
var globalConditionFlage = false;
function setApplyFlage(ref) {
    //attr('data-targetid')
    var elem = jQuery(ref).find("option:selected").attr('data-targetid');
    var count = 0;
    jQuery(".targetSelect").each(function() {
        if (jQuery(this).find("option:selected").attr('data-targetid') == elem)
        {
            count++;
        }
    });
    if (count > 1)
    {
        globalConditionFlage = true;
    } else
    {
        globalConditionFlage = false;
    }

}




function paragraph_img_hover(ele, b_id){
	if (jQuery("#"+b_id+"-out").length==0 && jQuery("#"+b_id+"-del").length==0){
	       var cont_div = document.createElement("div");
		   cont_div.setAttribute('id', b_id+'-out');
		   cont_div.setAttribute('class', 'outer_img_div');
		   cont_div.setAttribute('style', 'width:100%; cursor:pointer; border:1px dashed #96CADA; position:relative; min-height:25px;');
		   cont_div.setAttribute('onmouseout', "remove_paragraph_img(this, event);");
		   var rem_icon = document.createElement("img");
		   rem_icon.setAttribute('src',base_url+"assets/builder/img/image-delete.png");
		   rem_icon.setAttribute('onclick', 'del_img(this);event.cancelBubble=true;');
		   rem_icon.setAttribute('id', b_id+'-del');
  		   rem_icon.setAttribute('data-id', b_id);
		   rem_icon.setAttribute('style', 'cursor:pointer; position:absolute; top:0; right:0;');
		     jQuery(ele).wrap(cont_div);
		     jQuery(ele).parent().children().before(rem_icon);
			 
	}
}


function remove_paragraph_img(ele, event){
	var current_mouse_target = null;
			if( event.toElement ) {				
				current_mouse_target  = event.toElement;
			} else if( event.relatedTarget ) {				
				current_mouse_target  = event.relatedTarget;
			}
			if( !is_child_of(ele, current_mouse_target) && ele != current_mouse_target ) {
	    var id = jQuery(ele).children(":last").attr("id");
     	jQuery(ele).children(":first").unwrap();
    	jQuery("#"+id+"-del").remove();
}
}

function is_child_of(parent, child) {
			if( child != null ) {			
				while( child.parentNode ) {
					if( (child = child.parentNode) == parent ) {
						return true;
					}
				}
			}
			return false;
		}


function del_img(ele){
		var id = jQuery(ele).attr("data-id");
		jQuery("#"+id).remove();
		jQuery(ele).parent().remove();
		var html =jQuery.parseHTML(jQuery("#paragraph_textField").val());
		jQuery("#paragraph_textField").val().find("#"+id).remove();
	}	
	
	
/** Payment Alert function */
var payment = '0';


var fileupload = '0';

function move_loader() {
 $img = $("#theImg");
   var d = 10;
   $img.animate({
       bottom: "+="+d+'px'
   }, 1000, 'linear', function () {
       $("#theImg").animate({
           bottom: "-="+d+'px'
       }, 1000, 'linear', move_loader);
   });
}
function hide_heading_image(){
   jQuery('.heading-pointer').css('display','none');
};

/** prevent page to load before save form */
window.onbeforeunload = function reload()
{
    var created_form = document.getElementById("element_container");
    var element_div = created_form.getElementsByTagName("div");
    var element_type;
    var element_container_array = new Array();
    /*logicedit start*/
    var form = new Form();
    /*logicedit end*/
    var radio_checkbox_select_array = new Array();
    if (element_div.length === 0)
    {
        return null;
    }
    else{
        return 'Do remember to save your form before you leave the window. To save click on "Next Step" button.';
    }
};
// condition Logic disabled
function removeAllConditionLogic(){
       jQuery("#conditionWrapper").find(".conditionLogicDiv").remove();
       condition_logic_set(0);
       globalConditionFlage = false;
}

function condition_logic(){
if(jQuery(".add_logic_block").attr("data_block") == 0){
        jQuery('#setting_show_condition').css({display: 'none'});
        jQuery("#conditionCheckbox").attr('disabled', false);
        jQuery("#conditionCheckbox").attr('checked', false);
        jQuery(".add_logic_block").removeAttr("data_block");
        jQuery("#Logic_container").remove();
    }
    else{
        jQuery("#conditionCheckbox").attr('disabled', true);
        jQuery("#conditionCheckbox").prop('checked', true);
        jQuery('#setting_show_condition').css({display: 'block'});
    }
}

function condition_logic_set(cond){
    if(cond == 1){
        jQuery(".add_logic_block").attr("data_block", "1");
    }
    else{
    if(jQuery("#conditionWrapper").find(".conditionLogicDiv").length){
          jQuery(".add_logic_block").attr("data_block", "1");
        }
        else{
          jQuery(".add_logic_block").attr("data_block", "0");
          jQuery('#setting_show_condition').css({display: 'none'});
          jQuery("#conditionCheckbox").attr('disabled', false);
          jQuery("#conditionCheckbox").attr('checked', false); 
           
        }
    }
}

// Remove particular logic condition from popup
function removeParticularLogic(ref)
{
    jQuery(ref).parent().remove();
}