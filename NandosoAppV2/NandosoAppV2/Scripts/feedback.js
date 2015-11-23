document.addEventListener("DOMContentLoaded", function () {
    loadFeedbacks();
});

function loadFeedbacks() {
    FeedbacksModule.getFeedbacks(getFeedbacksTable);
}

function getFeedbacksTable(feedbacksList) {
    var feedbacksTable = document.getElementById("feedbacksList");
    for (i = 0; i < feedbacksList.length; i++) {

            var row = document.createElement("tr"); //make a row

            var name = document.createElement("td"); //make a data entrie
            name.innerHTML = feedbacksList[i].customerName;   //set it to the name in the list of feedbacks
            row.appendChild(name);                   //put it into the row

            var comment = document.createElement("td");
            comment.innerHTML = feedbacksList[i].comment;
            row.appendChild(comment);

            feedbacksTable.appendChild(row);                  //put row into the table
    }
}