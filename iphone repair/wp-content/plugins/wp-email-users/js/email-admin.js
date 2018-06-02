var weu = jQuery.noConflict();

weu(document).ready(function (){

 /*var table = weu('#example').DataTable({

   "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],

 }); // for default table*/

 /*var table = weu('#example').dataTable({
  "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],
  //'ajax': 'https://api.myjson.com/bins/1us28',  
  'columnDefs': [{
   'searchable':false,
   'orderable':false,
   'className': 'dt-body-center'
 }],
 'order': [1, 'asc']
});*/

 var dataTable = weu('#example').DataTable( {
        columnDefs: [ {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        } ],
        select: {
            style:    'multi',
            selector: 'td:first-child'
        },

        lengthMenu: [[10, 25, -1], [ 10, 25, "All"]],
        pageLength: 10
    } );



   // Handle click on "Select all" control
   weu('#example-select-all').on('click', function(){
      // Check/uncheck all checkboxes in the table
      var rows = table.rows({ 'search': 'applied' }).nodes();
      weu('input[type="checkbox"]', rows).prop('checked', this.checked);
    });

   // Handle click on checkbox to set state of "Select all" control
   weu('#example tbody').on('change', 'input[type="checkbox"]', function(){
      // If checkbox is not checked
      if(!this.checked){
       var el = weu('#example-select-all').get(0);
         // If "Select all" control is checked and has 'indeterminate' property
         if(el && el.checked && ('indeterminate' in el)){
            // Set visual state of "Select all" control 
            // as 'indeterminate'
            el.indeterminate = true;
          }
        }
      });

   /*weu('#weu_send').on('click', function(e){
    var validation_status = validation();
    if (validation_status == false) {
      return false;
    }else{
      var form = this;
      wau_to = [];

      // Iterate over all checkboxes in the table
      table.$('input[type="checkbox"]').each(function(){
         // If checkbox doesn't exist in DOM
         
         if(!weu.contains(document, this)){
            // If checkbox is checked
            if(this.checked){
               // Create a hidden element 
               var user = this.value;
               wau_to.push(user);               
             }
           }else{
            if(this.checked){
               // Create a hidden element 
               var user = this.value;
               user_there = 1;
               wau_to.push(user);
             }
           }
         });
      if (wau_to.length == 0) {
        swal("No Recipient", "Please choose atleast One User!", "error");
        return false;
      }
      var temp_id = weu('.criteria_rate').val();
      var security = weu( '#wp_email_users_nonce' ).val();
      var template_name = weu('#temp_name_req').val();
      var save_temp = weu('#save_temp').val();
      var wau_mailcontent = tinymce.activeEditor.getContent();
      var subject = weu('#sub_valid').val();
      var from_email = weu('#wau_from').val();
      var from_name = weu('#wau_from_name').val();
      var user_role = weu(".email_to_type:checked").val();
      var data = {
        'temp_id':temp_id,
        'wau_to':wau_to,
        'template_name': template_name,
        'nonce' : security,
        'save_temp' : save_temp,
        'wau_mailcontent' : wau_mailcontent,
        'subject' : subject,
        'from_email' : from_email,
        'from_name' : from_name,
        'user_role' : user_role,
        'action': 'weu_send_mail_selected_users',
      };
      weu.post(ajaxurl, data, function(response){
        if(response== 1){
          document.getElementById("myForm").reset(); 
          weu(".empty-msg").show();
          weu('html, body').animate({
            scrollTop: weu(".to_top").offset().top
          }, 1000);
           setTimeout(function(){// wait for 5 secs(2)
           location.reload(); // then reload the page.(3)
         }, 7000); 
         }else if (response == 2) {
          document.getElementById("myForm").reset();
          weu('.mail-success').show();
          weu('html, body').animate({
            scrollTop: weu(".to_top").offset().top
          }, 1000);
           setTimeout(function(){// wait for 5 secs(2)
           location.reload(); // then reload the page.(3)
         }, 7000); 
         }else{
          document.getElementById("myForm").reset();
          weu('.error-mail').show();
          weu('html, body').animate({
            scrollTop: weu(".to_top").offset().top
          }, 1000);
           setTimeout(function(){// wait for 5 secs(2)
           location.reload(); // then reload the page.(3)
         }, 7000); 
         }
       });
    }
  });*/

   var table1 = weu('#example1').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],

   }); // for table 1

   var table2 = weu('#example2').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],

   });

   var table123 = weu('#example_temp').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],

   });

   var table4 = weu('.data_list').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],
   });

   var table3 = weu('.data_expo').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],
     dom: 'Bfrtip',
     buttons: [

     {
      extend: 'copy',
      exportOptions: {
        columns: [ 1, 2 ]
      },
      text: 'Copy <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
    },

    {
      extend: 'csv',
      exportOptions: {
        columns: [ 1, 2 ]
      }
    },

    'excel', 

    {
      extend: 'print',
      exportOptions: {
        columns: [ 1, 2 ]
      }
    }
    ],

    }); // for table 3

   var table4 = weu('#example4').DataTable({

     "lengthMenu": [ 10, 25, 50, 75, 100, 500, 1000, 2000 ],

   }); // for table 4

   var table5 = weu('#example5').DataTable({

     "lengthMenu": [10, 25, 50, 75, 100, 500, 1000, 2000 ],
     "order": [[ 6, "desc" ]],

   }); // for table 5

   weu("#table-1").tableDnD();

   weu("#table-2 tr:even").addClass("alt");
  // Initialise the second table specifying a dragClass and an onDrop function that will display an alert
  weu("#table-2").tableDnD({
    onDragClass: "myDragClass",
    onDrop: function(table, row) {
      var rows = table.tBodies[0].rows;
      if(row.id == ""){

        swal({title: "Please enable SMTP you have chosen to set priority!", text: "", type: "error"},
         function(){ 
           location.reload();
         });
      }else{
        var debugStr = "Row dropped was "+row.id+". New order: ";

        for (var i=0; i<rows.length; i++) {
          debugStr += rows[i].id+" ";
        }

        weu("#debugArea").html(debugStr);
        var change_priority = weu.tableDnD.serialize();

        var data = {
         'data_raw': change_priority,
         'action': 'weu_smtp_priority_action_1',
       };
       weu.post(ajaxurl, data, function(response){

        swal({title: "Priority updated successfully!", text: "", type: "success"},
         function(){ 
           location.reload();
         });
      });
     }
   },
   onDragStart: function(table, row) {
    weu("#debugArea").html("Started dragging row "+row.id);
  }
});

  var table5 = weu('#table12').DataTable({

   "lengthMenu": [10, 25, 50, 75, 100, 500, 1000, 2000 ],

   }); //for table 12

  weu('#example1_wrapper').hide();

  weu("#example-select-all").change(function(){

    weu(".checkbox").prop('checked', weu(this).prop("checked"));

  });

  weu('.checkbox').change(function(){ 

    if(false == weu(this).prop("checked")){ 

      weu("#example-select-all").prop('checked', false); 
    }
    if (weu('.checkbox:checked').length == weu('.checkbox').length ){

      weu("#example-select-all").prop('checked', true);
    }
  });

  weu("#example-csv-select-all").change(function(){

    weu(".checkbox1").prop('checked', weu(this).prop("checked"));

  });

  weu('.checkbox1').change(function(){ 

    if(false == weu(this).prop("checked")){ 

      weu("#example-csv-select-all").prop('checked', false); 
    }
    if (weu('.checkbox1:checked').length == weu('.checkbox1').length ){

      weu("#example-csv-select-all").prop('checked', true);
    }
  });

    //csvlist

    weu('#example-select-all-import').on('click', function(){

      // Check/uncheck all checkboxes in the table

      var rows_csvlist = table2.rows({ 'search': 'applied' }).nodes();

      weu('input[type="checkbox"]', rows_csvlist).prop('checked', this.checked);

    });

    weu('#example-select-all-export').on('click', function(){

      var rows_csvlist = table3.rows({ 'search': 'applied' }).nodes();

      weu('input[type="checkbox"]', rows_csvlist).prop('checked', this.checked);
    });

    weu('#example-responder').on('click', function(){

      var rows_responder = table4.rows({ 'search': 'applied' }).nodes();

      weu('input[type="checkbox"]', rows_responder).prop('checked', this.checked);

    });

    // conformation prompt

    weu('.delete-email-indi').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "This will also delete subscribers associated with this list!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Deleted!',
            text: 'List has been successfully deleted!',
            type: 'success'
          }, function() {
            weu(target).unbind('click').click();

            var CurrList = weu(this).val();

            weu('#delete-email-indi').val(CurrList);

            weu(target).parent().submit();

            return true;
          });

        } else {
          swal("Cancelled", "Your List is safe!", "error");
        }
      });

    });

    weu('.delete-smtp-conf').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this SMTP again!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Deleted!',
            text: 'SMTP has been successfully deleted!',
            type: 'success'
          }, function() {
            weu(".delete-smtp-conf").unbind('click').click();

            weu(target).parent().submit();

            return true;
          });

        } else {
          swal("Cancelled", "Your SMTP configuration is safe!", "error");
        }
      });
    });

    weu('.delete-temp-conf').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this Template again!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Deleted!',
            text: 'Template has been successfully deleted!',
            type: 'success'
          }, function() {
            weu(".delete-temp-conf").unbind('click').click();

            weu(target).parent().submit();

            return true;
          });

        } else {
          swal("Cancelled", "Your Template is safe!", "error");
        }
      });
    });

    weu('.delete-sent-mail').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this mail!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Deleted!',
            text: 'Sent mail has been successfully deleted!',
            type: 'success'
          }, function() {
            weu(".delete-sent-mail").unbind('click').click();

            weu(target).parent().submit();

            return true;
          });

        } else {
          swal("Cancelled", "Your sent mail is safe!", "error");
        }
      });
    });

    weu('.edit-smtp-conf').on('click', function(e){

      var target = weu(this);
      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "Do you really want to edit this SMTP Configuration?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Edited for you!',
            text: 'SMTP has been successfully edited!',
            type: 'success'
          }, function() {
            weu(".edit-smtp-conf").unbind('click');
            weu(target).parent().submit();
            return true;
          });

        } else {
          swal("Cancelled", "Your SMTP configuration is safe!", "error");
        }
      });
    });

    weu('.edit-smtp-disable').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "Do you really want to disable SMTP?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Status changed!',
            text: 'SMTP has been successfully disabled!',
            type: 'success'
          }, function() {
            weu(".edit-smtp-disable").unbind('click').click();
            weu(target).parent().parent().submit();
            return true;
          });

        } else {
          swal("Cancelled", "Your SMTP status is safe!", "error");
        }
      });
    });

    weu('.edit-smtp-enable').on('click', function(e){

      var target = weu(this);

      e.preventDefault();

      swal({
        title: "Are you sure?",
        text: "Do you really want to enable SMTP?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, I am sure!',
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'Status changed!',
            text: 'SMTP has been successfully enabled!',
            type: 'success'
          }, function() {
            weu(".edit-smtp-enable").unbind('click').click();
            weu(target).parent().parent().submit();
            return true;
          });

        } else {
          swal("Cancelled", "Your SMTP status is safe!", "error");
        }
      });
    });

        // conformation prompt

        weu('.delete-member-indi').on('click', function(e){

          var target = weu(this);
          e.preventDefault();

          swal({
            title: "Are you sure?",
            text: "Do you really want to delete member?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
          },
          function(isConfirm) {
            if (isConfirm) {
              swal({
                title: 'Deleted!',
                text: 'Member has been successfully deleted!',
                type: 'success'
              }, function() {
                weu(target).unbind('click').click();
                weu(target).parent().submit();
                return true;
              });

            } else {
              swal("Cancelled", "Congrats! The member is safe in list", "error");
            }
          });

        });

        function isUrl(s) {

         var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

         return regexp.test(s);
       }

//for wp email user

weu('#wau_template').change(function(){
  var filename_id = weu('#wau_template').val();

  var TemplateName = weu(this).val();

  tinymce.init({selector:'textarea'});

  setTimeout(function(){
    jQuery(".mce-panel").trigger( "click" ); 
    tinymce.activeEditor.setContent(filename_id);
  },500);

});

// for template page

weu('#wau_template_single').change(function(){

  var filename_id = weu('#wau_template_single').val();

  var TemplateName = weu(this).val();

  tinymce.init({selector:'textarea'});

  setTimeout(function(){
    jQuery(".mce-panel").trigger( "click" ); 
    tinymce.activeEditor.setContent(filename_id);
  },500);
});

/*for Autoresponder Page Template Send Email for */
weu('.select-all').removeAttr('checked');
weu('#email_role').click(function(){

  var filename_id = weu('#email_role').val();
  
  if(filename_id=='5-User Role Changed' || filename_id=='4-Password Reset'){

    weu('#drop_hide').hide();

    weu('#example4_wrapper').hide();

    weu('#wau_user_responder').hide();

  }

  else{

    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data:{  'action': 'weu_autoresponder_selected_user',
        'filename_id' : filename_id
      },
      success:function(data){
        weu('#example4').html(data);
      },
      error:function(data){
        alert('error');
      },
    });
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data:{  'action': 'weu_autoresponder_selected_user_role',
        'filename_id' : filename_id
      },
      success:function(data){
        weu('#wau_role').html(data);
      },
      error:function(data){
        alert('error');
      },
    });

    weu('#drop_hide').show();

    weu('#example4_wrapper').show();

  }
});

//});

/*--End---*/

/*-- retreive already set users for autoresponder  --*/

weu('.mail_for').change(function () {

  weu('.alluser_datatable tbody tr input[type=checkbox]').each(function(){
    weu(this).prop('checked', false);
  });

  var template_id = this.value;

  var temp_id = template_id.split("-",1);

  var security = weu( '#bk-ajax-nonce' ).val();

  var data = {
   'data_raw': temp_id,
   'nonce' : security,
   'action': 'weu_selected_users_1',
 };

 weu.post(ajaxurl, data, function(response){
                  //console.log(response);
                  var users_new = JSON.parse(response);

                  weu('.alluser_datatable tbody tr input[type=checkbox]').each(function(){
                    var id = weu(this).val();
                    if(users_new.indexOf(id)!= -1){
                      weu(this).prop('checked', true);
                    };
                  });
                  
                });
});

// for template delete

weu('#weu_delete_template').click(function(){

  var filename_id = weu('#wau_template_single').val();

  var data = {

    'temp_key' : 'template',

    'action': 'weu_my_action',

    'temp_del_key': 'delete_temp',

    'filetitle': filename_id
  };

  weu.post(ajaxurl, data, function(response){

    tinyMCE.activeEditor.setContent(response);
  });

});

});

function check_sent_email1(){

  var group = document.form1.sent_mail_del;

  var $checkboxes = weu('#delete_mail tr input[type="checkbox"]');

  $checkboxes.change(function(){
    var countCheckedCheckboxes = $checkboxes.filter(':checked').length;

    if(countCheckedCheckboxes >=1){
      weu('#show-delete-button').show();
    }else{
      weu('#show-delete-button').hide();
    }

  });
}

function check_sent_email(){
  var group = document.form1.sent_mail_del;

  var $checkboxes = weu('#delete_mail td input[type="checkbox"]');

  $checkboxes.change(function(){
    var countCheckedCheckboxes = $checkboxes.filter(':checked').length;

    if(countCheckedCheckboxes >=1){
      weu('#show-delete-button').show();
    }else{
      weu('#show-delete-button').hide();
    }

  });
}

function checkmail(){
  var group = document.wau_smtp_form.weu_smtp_status;

  for (var i = 0; i < group.length; i++) {

    if (group[i].checked)

      break;
  }

  if (i == group.length)

    return swal("No radio button is checked");

  var radio_value = i + 1;

  if (radio_value == 1) {

    weu('#smtp_enable').show();
    weu('#smtp_enable1').show();
    weu('#smtp_enable2').show();
    weu('#smtp_enable3').show();
    weu('#smtp_enable4').show();
    weu('#smtp_enable5').show();
    weu('#smtp_enable6').show();
    weu('#smtp_enable7').show();
      //weu('#temp_name_req').prop('required', false);

      return false;

    }else{

      weu('#smtp_enable').hide();
      weu('#smtp_enable1').hide();
      weu('#smtp_enable2').hide();
      weu('#smtp_enable3').hide();
      weu('#smtp_enable4').hide();
      weu('#smtp_enable5').hide();
      weu('#smtp_enable6').hide();
      weu('#smtp_enable7').hide();
    }
  }

  function checkFunction(){
    var group = document.myform.toggler;

    for (var i = 0; i < group.length; i++) {

      if (group[i].checked)

        break;
    }

    if (i == group.length)

      return swal("No radio button is checked");

    var radio_value = i + 1;

    if (radio_value == 1) {

      weu('#blk-1').show();

      weu('#blk-2').hide();

      weu('#blk-3').hide();

      weu('#save_temp').val('1');

          //weu('#temp_name_req').prop('required', false);

          return false;
        }
        else if(radio_value == 2)
        {

          weu('#blk-1').hide();

          weu('#blk-2').show();

          weu('#blk-3').hide();

          weu('#save_temp').val('2');

          tinymce.init({selector:'textarea'});
          setTimeout(function(){tinymce.activeEditor.setContent('')},500);

          //weu('#temp_name_req').prop('required', true);

        }
        else
        {

          weu('#blk-1').hide();

          weu('#blk-2').hide();

          weu('#blk-3').show();

          //weu('#temp_name_req').prop('required', false);

          weu('#save_temp').val('3');

          weu('#sub_valid').val('');

          tinymce.init({selector:'textarea'});
          setTimeout(function(){tinymce.activeEditor.setContent('')},500);
        }
      }

      weu(document).ready(function(){
        weu('.dt-buttons').prepend("<span class='export-text'>Export To: </span>");
      });

      function weu_smtp_enable(){

       weu('form12').submit();
     }

     function radioFunction(){

      var group = document.myform.rbtn;

      for (var i = 0; i < group.length; i++) {

        if (group[i].checked)

          break;
      }

      if (i == group.length)

        return swal("No radio button is checked");

      var radio_value = i + 1;

      if (radio_value == 1) {

       weu('.wau_user_toggle').show();

       weu('#example_wrapper').show();

       weu('#example1_wrapper').hide();

       weu('#wau_user_role').hide();

       weu('#nickname').show();

       weu('#lname').show();

       weu('#dname').show();

       weu('#slink').show();

       return false;

     }else if(radio_value == 2) {

      weu('.wau_user_toggle').hide();

      weu('#wau_user_role').show();

      weu('#nickname').show();

      weu('#lname').show();

      weu('#dname').show();

      weu('#slink').show();
    }
    else /*if(radio_value == 3)*/{

     weu('#example_wrapper').hide();

     weu('#wau_user_role').hide();

     weu('.wau_user_toggle').show();

     weu('#example1_wrapper').show();

     weu('#nickname').hide();

     weu('#lname').hide();

     weu('#dname').hide();

     weu('#slink').hide();
   }

 }

 /*csv Page*/

 function radioFunction_csv(){

   weu('#wau_role_csv').hide();

   var group_csv = document.export_form.rbtn_csv;

   for (var i = 0; i < group_csv.length; i++) {

    if (group_csv[i].checked)

      break;

  }

  if (i == group_csv.length)

    return swal("No radio button is checked");

  var radio_value = i + 1;

  if (radio_value == 1) {

    weu('#example3_wrapper').show();

    return false;

  }else if(radio_value == 2) {

    weu('#example3_wrapper').hide();

    weu('#wau_role_csv').show();

  }

}

/*Autoresponder Email Page Radio Button function*/

function radioFunction_responder(){

 weu('#wau_user_responder').hide();

 var group_csv = document.autoresponder.rbtn_respond;

 for (var i = 0; i < group_csv.length; i++) {

  if (group_csv[i].checked)

    break;

}

if (i == group_csv.length)

  return swal("No radio button is checked");

var radio_value = i + 1;

if (radio_value == 1) {

 weu('.wau_user_toggle').show();

       // weu('#example4_wrapper').show();

       return false;

     }else if(radio_value == 2) {

      weu('.wau_user_toggle').hide();

      weu('#wau_user_responder').show();

    }

  }

  /*----------End-------------*/

  /* onsubmit validate function-main Page  */

  var testresults
  function checkemail(){
    var str=document.myform.wau_from_email.value
    var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(str)){
      document.getElementById('errfn').innerHTML="";

      testresults=true
    }
    else{

      swal("Wrong Email", "Please enter a valid email address!", "error");

      testresults=false
    }
    return (testresults)
  }

  weu('#sub_valid').on('input', function() {
    var input=weu(this);
    var is_subject=input.val();
    if(is_subject){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
  });

  function focus_function() {
    var wau_smtp_status1 = document.getElementById("wau_smtp_status12");
    if(wau_smtp_status1.value == "no"){
      weu('#wau_smtp_form input').attr('readonly', true);
      weu('#wau_smtp_form input[type=radio]').attr('disabled', true);
      swal("Wait", "Enable SMTP Settings From Setting Page To Use SMTP Configurations!", "error");
    }
  }

  function myFunction(){

    if (document.layers||document.getElementById||document.all)
      return checkemail()
    else
      document.getElementById('errfn').innerHTML="";
    return true
  }

  var testresults1
  function checkemail2(){
      var str=document.wau_smtp_form.weu_smtp_mail.value
      var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (filter.test(str)){
        document.getElementById('errfn').innerHTML="";

        testresults1=true
      }
      else{
        setTimeout(function(){
          swal("Wrong Email", "Please enter a valid email address!", "error");
        },2000);
        testresults1=false
      }
    // }
    return (testresults1)
  }

  

  function validation_smtp() {

    if (document.layers||document.getElementById||document.all)
      return checkemail2()
    else
      document.getElementById('errfn').innerHTML="";
    return true

    var wau_smtp_from_name = document.getElementById("weu_smtp_name");
    if (wau_smtp_from_name.value == "") {
      swal("From Name Missing.", "Please Enter Name!", "error");
      return false;
    }

    var wau_smtp_host = document.getElementById("weu_smtp_host");
    if (wau_smtp_host.value == "") {
      swal("Host Is Missing.", "Please Enter Host!", "error");
      return false;
    }

    var wau_port = document.getElementById("wau_port");
    if (wau_port.value == "") {
      swal("Port Is Missing.", "Please Enter Port!", "error");
      return false;
    }

    var wau_uname = document.getElementById("wau_uname");
    if (wau_uname.value == "") {
      swal("User Name Is Missing.", "Please Enter User Name!", "error");
      return false;
    }

    var wau_pass = document.getElementById("wau_pass");
    if (wau_pass.value == "") {
      swal("Password Is Missing.", "Please Enter Password!", "error");
      return false;
    }

    var wau_limit = document.getElementById("wau_limit");
    if (wau_limit.value == "") {
      swal("Daily Limit Is Missing.", "Please enter daily limit that you want to send through this configuration!", "error");
      return false;
    }

  }

  function validation_list(){
   if (document.list_form.new_list_name.value == "") {
     document.getElementById('errors').innerHTML="Please enter a list name!";
     return false;
   }
 }

 function validation_member(){

  var letters = /^[A-Za-z\s]+$/;

  if(member_name.value.match(letters))
  {
  }
  else
  {
    document.getElementById('errors').innerHTML="Please enter valid Member Name!";
    return false;
  }
  
  if (document.add_member_form.member_name.value == "") {
   document.getElementById('errors').innerHTML="Please enter valid Member Name!";
   return false;
 }else if (document.add_member_form.member_email.value == "") {
  document.getElementById('errors').innerHTML="Please enter a Member Email!";
  return false;
}else{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(document.add_member_form.member_email.value.match(mailformat)){
    return true;
  }else{
    document.getElementById('errors').innerHTML="Please enter a valid Member Email!";
    return false;
  }
}
}

weu(function() {
 weu("li").click(function() {
  weu("li").removeClass("active");
  weu(this).addClass("active");
});
});

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";  
 }
 document.getElementById(cityName).style.display = "block";
}

function validation() {

  if(weu('#r_role').prop("checked") == false){
    var flag_checkbox_checked = 0;
    weu("input[name='ea_user_name[]']").each(function()
    { 
      if (weu(this).prop('checked') == true){ 
        flag_checkbox_checked = 1;
      } 
    }); 
    weu("input[name='csv_file_name[]']").each(function()
    { 
      if (weu(this).prop('checked') == true){ 
        flag_checkbox_checked = 1;
      } 
    }); 
    if(flag_checkbox_checked != 1){
      swal("Please Choose 'Send Email To' Field!", "", "error");
      return false;
    }
  }else if(weu('#r_role').prop("checked") == true){
    weu("select[name='user_role[]'] option:selected").each(function(){
      if (weu(this).prop('disabled') == true){ 
        swal("Please Choose 'Send Email To' Field!", "", "error");
        return false;
      }
    });
  }

  var radio_val = weu('input[name=toggler]:checked', '#myForm').val(); 

  if(radio_val == 2){

    var wau_template = document.getElementById("wau_template");
    if (wau_template.value == "") {
      setTimeout(function(){
      swal("Email Template Missing.", "Please choose email template!", "error");
      },2000);
      return false; 
    }
  }else if(radio_val == 1){

    var temp_name_req = document.getElementById("temp_name_req");
    if (temp_name_req.value == "") {
      swal("Template Name Missing.", "Please enter template name!", "error");
      return false;
    }
  }

  /*-------------------User-------------------*/
 /* var user_val=weu('#user_role').prop( "checked" );

  var chk_val=weu('.chk_user:checked').index();

  if(user_there != 1){
    if(chk_val== -1 && user_val== true){
      swal("No Recipient", "Please choose atleast One User!", "error");
      user_there = 0;
      return false;
    }
  }*/

  

  /*-------------------End-------------------*/

  /*-------------------Role-------------------*/

  var role_val = weu('#r_role').prop( "checked" );

  var wau_role=weu('#wau_role option:selected').index();

  if(role_val== true && wau_role == 0){

    swal("No Role Chosen", "Please choose atleast oneUser role!", "error");
    return false;
  }

  /*-------------------End-------------------*/

  /*-------------------List-------------------*/

  var wau_list=weu('#check_list').prop("checked");

  var csv_val = weu('.chk_list:checked').index();

  if(csv_val== -1 && wau_list == true){

    swal("No List Chosen", "Please choose atleast one Subscribers list!", "error");

    return false;
  }

  /*-------------------End-------------------*/

  var x = document.forms["myform"]["wau_sub"].value;
  if (x == "") {
    swal("No Subject", "Please fill subject!", "error");
    return false;
  }
}

/* Autoresponder Email send Page */

function validation_responder() {

  var user_val=weu('#user_role_email').prop( "checked" );

  var chk_val=weu('.select-all:checked').index();

  if(chk_val== -1 && user_val== true){

  }

  var role_val = weu('#r_role_email').prop( "checked" );

  var wau_role=weu('#wau_role option:selected').index();

  if(role_val== true && wau_role == 0){

  }
}

function checktemplate(){
  var group = document.myform.template_radio;
  for (var i = 0; i < group.length; i++) {

    if (group[i].checked)

      break;
  }

  if (i == group.length)

    return swal("No radio button is checked");

  var radio_value = i + 1;

  if (radio_value == 1)
  {
    weu('#old_template').hide();
    weu('#save_as_new').hide();
    //var message = 'content';
    //tinymce.get(#msg).setContent(''); 
    tinymce.init({selector:'textarea'});
    setTimeout(function(){tinymce.activeEditor.setContent('')},500);
    weu('#temp_name_id').show();
    document.getElementById("weu_temp_name").disabled = false;
  }
  else if(radio_value == 2)
  {
    weu('#old_template').show();
    weu('#save_as_new').show();
  }
}

function check_new_template(){
  var group = document.myform.new_template;
  for (var i = 0; i < group.length; i++) {

    if (group[i].checked)

      break;
  }

  if (i == group.length)

    return swal("No radio button is checked");

  var radio_value = i + 1;


  if (radio_value == 1)
  {
    document.getElementById("weu_temp_name").disabled = false;
    weu('#temp_name_id').show();
  }
  else if(radio_value == 2)
  {
    document.getElementById("weu_temp_name").disabled = true;
    weu('#temp_name_id').hide();
    //swal("Existing template will be updated after save. Template name field disabled!");
  }
}

function validation_template_manager(){
  var x = document.forms["myform"]["template_radio"].value;
  if (x == "2") {
    var message = document.forms["myform"]["weu_show_area"].value;
    var message = tinyMCE.get('weu_show_area').getContent();
    var temp = document.forms["myform"]["template_id"].value;
    if(temp == ""){
      swal("No Template Selected","Please select template!","error");
      return false;
    }

    var new_template = document.forms["myform"]["new_template"].value;
    if (new_template == 1) {
      var temp_name = document.forms["myform"]["wau_temp"].value;
      if(temp_name ==""){
        swal("No Template Name","Please enter template name!","error");
        return false;
      }

      var message = tinyMCE.get('weu_show_area').getContent();
      if (message == "" ) {
        swal("No Content","Please enter content for template!","error");
        return false;
      }
    }else{

      var message = tinyMCE.get('weu_show_area').getContent();

      if (message == "" ) {
        swal("No Content","Please enter content for template!","error");
        return false;
      }
    }
  }else{
    var temp_name = document.forms["myform"]["wau_temp"].value;
    if(temp_name ==""){
      swal("No Template Name","Please enter template name!","error");
      return false;
    }

    var message = tinyMCE.get('weu_show_area').getContent();
    if (message == "" ) {
      swal("No Content","Please enter content for template!","error");
      return false;
    }
  }

}

function jsFunction(){
  weu("#wau_template_single").change(function () {
    var template_id =  weu(':selected',this).data('id');
    weu('.criteria_rate').val(template_id);
    var data ={
      'template_id' : template_id,
      'action': 'weu_send_mail_subject_temp_page',
    };
    weu.post(ajaxurl, data, function(response){
      weu('#weu_temp_sub').val(response);
    });
  });


}

weu(function() {
    //----- OPEN
    weu('[data-popup-open]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      weu('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      e.preventDefault();
    });

    //----- CLOSE
    weu('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      weu('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
    });

    weu('.popup').on('click', function(e)  {
     this.style.setProperty( 'display', 'none', 'important' );
     e.preventDefault();
   });

  });
  
  function popup_template(attr) {
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data:{  'action': 'tempFunction',  
        'newValue' : attr
      },
      success:function(data){
        weu('#template_value').html(data);
      },
      error:function(data){
        alert('error');
      },
    });
  }
  
function onchangeload(){
  weu("#wau_template").change(function () {
    var template_id =  weu(':selected',this).data('id');
    weu('.criteria_rate').val(template_id);
    var data ={
      'template_id' : template_id,
      'action': 'weu_send_mail_subject',
    };
    weu.post(ajaxurl, data, function(response){
      weu('#sub_valid').val(response);
    });
  });
}
/*end*/