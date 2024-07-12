$(document).ready(function () {
  // Student will be the selected default
  $("#adminMessage").hide();
  $("#professorMessage").hide();

  $("#professorTokenField").hide();
  $("#adminTokenField").hide();

  $("#roleSelect").click(function () {
    const roleValue = $("#roleSelect").val();
    if (roleValue == "student") {
      // Show and hide sign up message depending on role
      $("#studentMessage").show();

      $("#adminMessage").hide();
      $("#professorMessage").hide();

      // Show and hide fields depending on role
      $("#studentIdField").show();
      $("#programField").show();

      $("#professorTokenField").hide();
      $("#adminTokenField").hide();
    } else if (roleValue == "professor") {
      $("#professorMessage").show();

      $("#studentMessage").hide();
      $("#adminMessage").hide();

      $("#professorTokenField").show();

      $("#studentIdField").hide();
      $("#programField").hide();
      $("#adminTokenField").hide();
    } else if (roleValue == "admin") {
      $("#adminMessage").show();

      $("#studentMessage").hide();
      $("#professorMessage").hide();

      $("#adminTokenField").show();

      $("#studentIdField").hide();
      $("#programField").hide();
      $("#professorTokenField").hide();
    }
  });
});
