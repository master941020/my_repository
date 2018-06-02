<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_action( 'wp_ajax_weu_selected_users_1', 'callbackfunction_select' );

function callbackfunction_select() {

	global $wpdb;

	$table_name = $wpdb->prefix.'weu_user_notification';
	$table_name_users = $wpdb->prefix.'users';

	$data = sanitize_text_field($_POST['data_raw']);
	$myrows = $wpdb->get_results("select email_value from `".$table_name."` where template_id = %s",$data[0]);

	$datas = unserialize($myrows[0]->email_value);
			//print_r($datas);
	$users_ids = array();

	if (is_array($datas)) {
		foreach ($datas as $value) {
			$myrows_users = $wpdb->get_results("select ID from `".$table_name_users."` where user_email =%s", $value);
			foreach ($myrows_users as $users) {
				array_push($users_ids, $users->ID);
			}
		}
	}else{
				//echo "else";
		$myrows_users = $wpdb->get_results("select ID from `".$table_name_users."` where user_email =%s", $datas);
		foreach ($myrows_users as $users) {
			array_push($users_ids, $users->ID);
		}
	}
	echo json_encode($users_ids);

	wp_die();

}

?>