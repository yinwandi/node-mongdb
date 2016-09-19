// $(".insertdata").click(function(){
//     $("#myModal").modal();
//     $(".myform").attr("action","/table");
//
// })
//
















$(".insertdata").click(function () {
    $("#myModal").modal();
    $(".myform").attr("action","/insertdata");
    $(".name").removeAttr("readonly");
})

$(".updatedata").click(function () {
    $("#myModal").modal();
    $(".myform").attr("action","/updatedata");
    var number = $(this).attr("data_num");
    $(".name").val(number).attr("readonly","readonly");
})

$(".removedata").click(function(){
    var name = $(this).attr("data_num");
    var $form = $("<form>");
    var $input = $("<input>");
    $form.attr("action","/removedata");
    $form.attr("method","post");
    $input.val(name);
    $input.attr("name","name");
    $form.append($input);
    $form.submit();
})
