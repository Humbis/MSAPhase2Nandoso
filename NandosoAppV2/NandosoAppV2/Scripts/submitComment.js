console.log("this is running");
function submitFeedback() {
    console.log("Checkerino");
    var name = document.getElementById("customerName");
    var comment = document.getElementById("comment");
    var feedback = '"customerName"' + ':' + '"' + name.value + '"'
        + ',' + '"comment"' + ':' + '"' + comment.value + '"';
    console.log(feedback);
    $.ajax({
        type: "POST",
        data: "{" + feedback + "}" ,
        url: "https://msanandosoapp.azurewebsites.net/api/Feedbacks",
        contentType: "application/json",
        success: function(){
            location.reload();
        }
    });
}


