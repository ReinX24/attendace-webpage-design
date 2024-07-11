$(document).ready(function () {
    $("#tokenField").hide();
    $("#professorAdminMessage").hide();

  $("#roleSelect").click(function () {
    const roleValue = $("#roleSelect").val();
    if (roleValue == "student") {
      $("#studentMessage").show();
      $("#idField").show();

      $("#tokenField").hide();
      $("#professorAdminMessage").hide();
    } else if (roleValue == "professor" || roleValue == "admin") {
      $("#tokenField").show();
      $("#professorAdminMessage").show();

      $("#idField").hide();
      $("#studentMessage").hide();
    }
  });
});
