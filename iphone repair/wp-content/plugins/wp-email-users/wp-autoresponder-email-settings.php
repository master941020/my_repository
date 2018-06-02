<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

function weu_email_setting(){

	echo "<div class='wrap'>";

	echo "<h2>Autoresponder Email Settings </h2>";

	echo "</div>"; /*end header */

	echo'</br>';

	echo '<form name="autoresponder" class="wau_form" method="POST" action="#" onsubmit="return validation_responder()">';

	echo '<table id="" class="form-table" >';

	echo '<tbody>';

	global $wpdb; 

	$table_name = $wpdb->prefix.'email_user'; 	

	$myrows = $wpdb->get_results( $wpdb->prepare( "SELECT id, template_key, template_value FROM $table_name WHERE status =%s", 'template' ));

	/*------------------Email for Row-------------*/

	echo  '<tr>';	

	echo  '<th>Send Email For <font color="red">*</font></th>';

	echo  '<td colspan="3"><select name="user_email[]" class="wau_boxlen mail_for" id="email_role" >';

	echo  '<option >-- Select --</option>';

	echo  '<option value="1-New User Register"> New User Register </option>';

	echo  '<option value="2-New Post Publish" > New Post Publish </option>';

	echo  '<option value="3-New Comment Post" > New Comment Post </option>';

	echo  '<option value="4-Password Reset" > Password Reset </option>';

	echo  '<option value="5-User Role Changed" > User Role Changed </option>';	

	echo '</select></td>';

	echo '</tr>';

	/*----End email for--------*/

	$wau_users=get_users();				

	$ar_conf_page = admin_url( "admin.php?page=weu_email_auto_config");

	echo '<tr id="drop_hide">';				

	echo "<th><b>Send Email To <font color=red>*</font>&nbsp; </b></th>";

	echo '<td style="width: 224px"><input type="radio" name="rbtn_respond" id="user_role_email" onclick="radioFunction_responder()" value="user" checked > User &nbsp;</td>';

	echo '<td style="width: 224px"><input type="radio" name="rbtn_respond" id="r_role_email" onclick="radioFunction_responder()" value="role"> Role </td>';

	echo "</tr>";

	/**

    * Select Users

    */ 

	echo '<tr class="wau_user_toggle"><th></th><td colspan="3" class="weu_display">';
	echo '<table id="example4" class="display alluser_datatable" cellspacing="0" width="100%">';
	
	weu_autoresponder_selected_user();

	echo '</table>';    // end user Data table for user

	echo '</td></tr>';

	foreach ( $wau_users as $user ) {

		echo  '<input type="hidden" name="' . esc_html( $user->ID ) . '" value="'. esc_html( $user->user_email ) . '">';

	}

	

//-----------------

	/*---start send to row---*/

	echo  '<tr id="wau_user_responder" style="display:none">';	

	echo  '<th>Select Roles <font color="red">*</font></th>';

	echo  '<td colspan="3"><select name="user_role[]" multiple class="wau_boxlen" id="wau_role" >';

	weu_autoresponder_selected_user_role();

	echo '</select></td>';

	echo '</tr>';

	/*---end send to row---*/

	echo '<tr>';

	$weu_arconf_buff = array();

	$weu_arconf_buff = get_option( 'weu_sample_template' );

	$template_1 = esc_html($weu_arconf_buff['sample_template_1']);

	$template_2 = esc_html($weu_arconf_buff['sample_template_2']);

	$template_3 = esc_html($weu_arconf_buff['new_user_register']);

	$template_4 = esc_html($weu_arconf_buff['new_comment']);

	$template_5 = esc_html($weu_arconf_buff['new_post']);

	$template_6 = esc_html($weu_arconf_buff['new_password']);

	$template_7 = esc_html($weu_arconf_buff['user_role_changed']);

	echo '<th>Template <font color="red">*</font></th><td colspan="3"><select autocomplete="off" id="wau_template_single" name="mail_template[]" class="wau-template-selector" style="width:100%; height: 50px ">

	<option selected disabled>Select Template Here...</option>

	<option disabled >----Default Template---</option>

	<option value="'.$template_1.'" id="wau_template_t1"> Default Template - 1 </option>

	<option value="'.$template_2.'" id="wau_template_t2"> Default Template - 2 </option>';

	echo '<option disabled >------New Event Template------ </option>';    

	echo '<option value=" '.$template_3.' "> New User Register </option>';

	echo '<option value=" '.$template_5.' "> New Post Publish </option>';

	echo '<option value=" '.$template_4.' "> New Comment Post </option>';

	echo '<option value=" '.$template_6.' "> Password Reset </option>';

	echo '<option value=" '.$template_7.' "> User Role Changed </option>';

	echo '<option disabled>------ User Created Template------ </option>';

	for ($i=0;$i<count($myrows);$i++) {

		?>
		<option value="<?php echo htmlspecialchars($myrows[$i]->template_value, ENT_QUOTES, 'UTF-8'); ?>" id="am" ><?php echo $myrows[$i]->template_key; ?> </option>
		
		<?php
	}

	echo'</select></td>';

	$mail_content="";

	echo '</tr>';

	echo '<tr>';

	echo '<th>Template Name <font color="red">*</font></th>';

	echo '<td colspan="3"><input type="text" name="wau_temp" class="wau_boxlen" id="weu_temp_name" placeholder="Template Name" required=""></td>';

	echo '</tr>';

	echo '<tr>';

	echo '<th>Email Subject <font color="red">*</font></th>';

	echo '<td colspan="3"><input type="text" name="wau_temp_subject" class="wau_boxlen" id="weu_sub_name" placeholder="Email Subject"></td>';

	echo '</tr>';

	echo '<th scope="row" valign="top"><label for="weu_show_area">Message</label></th>';

	echo '<td colspan="2">';

	echo '<div id="msg" class="wau_boxlen" name="weu_show_area">';	

	wp_editor($mail_content, "weu_show_area",array('wpautop'=>false,'media_buttons' => true));

	echo '</div><p>Please make sure you turned autoresponder emails on <a href='.$ar_conf_page.'>here</a></p></td>';

	echo '</tbody>';

	echo '</table>';

	echo '<input type="submit" value="Save" style="margin-left: 30%;" class="button button-hero button-primary" name="save_template">  ';

	/*echo '<input type="submit" value="Delete" id="weu_delete_template" class="button button-hero button-primary" name="delete_template" >';*/

	echo '</form>';

}
function weu_autoresponder_selected_user_role(){
	global $wpdb;
	$html = '';
	$filename_id =  substr($_POST['filename_id'],2); 
	$table_name = $wpdb->prefix.'weu_user_notification';
	$myrows = $wpdb->get_results($wpdb->prepare("SELECT email_value FROM ".$table_name." WHERE email_for = %s",$filename_id));
	$array = array();
	foreach ($myrows as $key => $value) {
		$unserialize_array = unserialize($value->email_value);
	}
	foreach ($unserialize_array as $key => $value) {
		if($value == 'Administrator'){
			$flag1 = 1;
			$flag6 = 6;
		}
		if($value == 'Subscriber'){
			$flag2 = 2;
			$flag6 = 6;
		}
		if($value == 'Contributor'){
			$flag3 = 3;
			$flag6 = 6;
		}
		if($value == 'Author'){
			$flag4 = 4;
			$flag6 = 6;
		}
		if($value == 'Editor'){
			$flag5 = 5;
			$flag6 = 6;
		}

	}
	if($flag6 == 6){
		$html .= '<option value="" disabled >-- Select Role --</option>';
	}else{
		$html .= '<option value="" selected disabled >-- Select Role --</option>'; }

	if($flag1 == 1){
		$html .=  '<option value="Administrator" selected="selected"> Administrator </option>';
	}else{
		$html .= '<option value="Administrator"> Administrator </option>'; }

		if($flag2 == 2){
		$html .= '<option value="Subscriber" selected="selected"> Subscriber </option>';
	}else{
		$html .= '<option value="Subscriber"> Subscriber </option>'; }

		if($flag3 == 3){
		$html .=  '<option value="Contributor" selected="selected"> Contributor </option>';
	}else{
		$html .=  '<option value="Contributor"> Contributor </option>'; }

		if($flag4 == 4){
		$html .=  '<option value="Author" selected="selected"> Author </option>';
	}else{
		$html .=  '<option value="Author"> Author </option>'; }

		if($flag5 == 5){
		$html .=  '<option value="Editor" selected="selected"> Editor </option>';	
	}else{
		$html .=  '<option value="Editor"> Editor </option>'; }

	echo $html;
}
function weu_autoresponder_selected_user(){
	global $wpdb;
	$wau_users=get_users();	
	$html = '';
	$filename_id =  substr($_POST['filename_id'],2); 
	$table_name = $wpdb->prefix.'weu_user_notification';
	$myrows = $wpdb->get_results($wpdb->prepare("SELECT email_value FROM ".$table_name." WHERE email_for = %s",$filename_id));
	$array = array();
	foreach ($myrows as $key => $value) {
		$unserialize_array = unserialize($value->email_value);
	}
	$html = '<thead>';

	$html .= '<tr style="text-align:left"> <th style="text-align:center" ><input name="select_all" value="1" id="example-responder" class="select-all" type="checkbox"></th>';

	$html .= '<th>Display name <font color="red">*</font></th>';

	$html .= '<th>Email <font color="red">*</font></th>';

	$html .= '</tr>';

	$html .= '</thead>'; 

	$html .= '<tbody>'; 

	foreach ( $wau_users as $user ){
		$html .= '<tr style="text-align:left">';
		$flag = 0;
		foreach ($unserialize_array as $key => $value) {
			if($value == $user->user_email){
				$flag = 1;
			}
		}
		if($flag == 1){
			$html .= '<td style="text-align:center"><input type="checkbox" name="ea_user_name[]" value="'.$user->ID.'" class="select-all" checked></td>';
		}else{
			$html .= '<td style="text-align:center"><input type="checkbox" name="ea_user_name[]" value="'.$user->ID.'" class="select-all"></td>';
		}
		$html .= '<td><span id="getDetail">'. esc_html( $user->display_name ).'</span></td>';

		$html .= '<td><span >'.esc_html( $user->user_email ).'</span></td>';

		$html .= '</tr>';}
		$html .= '</tbody>';
		echo $html;
	}

if(isset($_POST['rbtn_respond'])&& $_POST['rbtn_respond'] !=''){

	$wau_to=array();

	if(isset($_POST['rbtn_respond']) && $_POST['rbtn_respond'] =='user'){

		if(isset($_POST['ea_user_name'])) {
			$user_arr = $_POST['ea_user_name'];
			for($j=0;$j<count($user_arr);$j++){

				$user= $user_arr[$j];

				array_push($wau_to,$_POST[$user]);
			}

			$get_role_value=serialize($wau_to);
		}
	}

	elseif(isset($_POST['rbtn_respond']) && $_POST['rbtn_respond'] =='role'){
		$user_roles = sanitize_text_field($_POST['user_role']);
		for($k=0;$k<count($user_roles);$k++){

			$group_role = array(

				'role' => $user_roles[$k]

				);

			    	$wau_grp_users=get_users( $group_role ); //get all users

			    	for($m=0;$m<count($wau_grp_users);$m++){

			    		array_push($wau_to,$wau_grp_users[$m]->data->user_email);

			    	}

			    }

			$get_role_value=serialize($_POST['user_role']); // get all selected roles

			

		}
		
		/*For email By Dropdown */
		 $user_mail = $_POST['user_email'];

		$user_email_count=isset($user_mail)? $user_mail:'';

		for($k=0;$k<count($user_email_count);$k++){

			$email_by_val = array(

				'role' => $user_mail[$k]

				);

		}


		$event_val=$email_by_val['role'];

		$event_val=explode("-",$event_val);
		/*End*/

		/*For Template Dropdown Menu*/
		$template_user = sanitize_text_field($_POST['mail_template']);
		for($k=0;$k<count($template_user);$k++){

			$temp_url = array(

				'role' => $template_user[$k]

				);

		}

		/* End*/

		weu_setup_activation_data();
		global $wpdb;

		$table_name = $wpdb->prefix.'weu_user_notification';

		$myrows = $wpdb->get_results("SELECT template_id FROM $table_name");

		$all_temp_id=array();

		for($i=0;$i<count($myrows);$i++){

			array_push($all_temp_id, $myrows[$i]->template_id);

		}
		$temp_sub = sanitize_text_field($_POST['wau_temp_subject']);



		switch($event_val[0]){

			case 1:

			if(isset($temp_sub) && $temp_sub !=''){

				update_option( 'weu_new_user_register', $temp_sub );

			}

			break;

			case 2:

			if(isset($temp_sub) && $temp_sub !=''){

				update_option( 'weu_new_post_publish', $temp_sub );

			}

			break;



			case 3:

			if(isset($temp_sub) && $temp_sub !=''){

				update_option( 'weu_new_comment_post', $temp_sub );

			}

			break;



			case 4:

			if(isset($temp_sub) && $temp_sub !=''){

				update_option( 'weu_password_reset', $temp_sub );

			}

			break;



			case 5:

			if(isset($temp_sub) && $temp_sub !=''){

				update_option( 'weu_user_role_changed', $temp_sub );

			}

			break;

		}

		$show_area = $_POST['weu_show_area'];

		$respond_btn = sanitize_text_field($_POST['rbtn_respond']);

		if(in_array( $event_val[0],$all_temp_id)){ 

			$wpdb->query($wpdb->prepare("UPDATE $table_name SET `template_value` = %s, `email_for` = %s, `email_by` = %s, `email_value` = %s WHERE `template_id` = ".$event_val[0].";",$show_area, $event_val[1], $respond_btn, $get_role_value) );

			// echo "SETTING UPDATED";

		} else { 
			$wpdb->query($wpdb->prepare( "INSERT INTO `".$table_name."`(`template_id`,`template_value`,`email_for`,`email_by`,`email_value`) VALUES (%d,%s,%s,%s,%s)",

				$event_val[0],$show_area,$event_val[1],$respond_btn,$get_role_value));

			// echo "SETTING SAVED";
		}

	}