/*$(document).ajaxStart(function(){
  $("#user-image").attr("src","progress.gif");
  }).ajaxStop(function(){
    console.log("Ajax Stopped.");
  }).ajaxSuccess(function(){
    console.log("Ajax Success");
  }).ajaxComplete(function(){
    console.log("Ajax Completed");
  });
  */

  $("#get-data").on("click",function(){
    var username = $("#username").val();
    //console.log(username);                  //for debug only
    $.ajax({
      url:"https://api.github.com/users/"+username,
      success: function(data){
        //console.log(data);             //for debug only
        $("#user-image").attr("src",data.avatar_url);
        $("#user-name").text("User's id is : "+data.id);
        if(data.company != null)
          $("#user-company").text("User's Company is : "+data.company);
        else
          $("#user-company").text("Working Company None");
        if(data.email != null)
          $("#user-email").text("User's Email id is : "+data.email);
        else
          $("#user-email").text("Email Not Updated");
        $("#user-created-at").text("User's Account created at : "+data.created_at);
        if(data.location!=null)
          $("#user-location").text("User's Location is : "+data.location);
        else
          $("#user-location").text("Location not updated");
        $("#user-url").text("User's url is : "+data.url);

        $('#user-name').addClass("user-name-responsive");
        $('#user-company').addClass("user-company-responsive");
        $('#user-email').addClass("user-email-responsive");
        $('#user-created-at').addClass("user-name-responsive");
        $('#user-location').addClass("user-company-responsive");
        $('#user-url').addClass("user-email-responsive");
      },
      error: function(){
        $("#user-image").attr("src","no-user.png");
        $("#user-name").text("User not found");
        $("#user-name").addClass("user-name-responsive");
      }
    });
  });