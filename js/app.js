$(document).ready(function(){
  
 function ab() {
 var r = $("<tr><td><input type='checkbox' class='dynamic'></td><td>"+$('#name').val()+"</td><td>"+$('#email').val()+"</td><td>"+$('#phno').val()+"</td></tr>")
$(".tab").append(r);	
};	

  $(function() {
    $( "#accordion" ).accordion({

      collapsible: true,
	  	active:false,
	  speed:2500
    });
  });
 

 $(function() {
    $( "#dialog" ).dialog();
  });


 
  function fnOpenNormalDialog() {
    $("#dialog-confirm").html("Are you sure you want to submit the details?");

    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Confirmation",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                callback(true);
            },
                "No": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    });
}

$('#btn1').click(fnOpenNormalDialog)
function callback(value) {
    if (value) {
	ab();

 $(".hi").val("");
  
$(".main").click(function(){
	if($(".main").is(":checked"))
{
$(".dynamic").prop("checked",true);
}
   else
{
$(".dynamic").prop("checked",false);
}
});
        alert("Your Details  have been successfully submitted");
    } else {
        alert("OOPS: Action Cancelled");
    }
}




$(".deletedata").click(function()
{
	if($(".dynamic").is(":checked"))
{
$(".main").prop("checked",false);
var arr=[];
arr=$(".tab tr .dynamic:checked").parent().parent();
$(".table2").append(arr);
$(".tab tr .dynamic:checked").parent().parent().hide();
$(".table2 tr .dynamic:checked").parent().html('');
}
});
});


