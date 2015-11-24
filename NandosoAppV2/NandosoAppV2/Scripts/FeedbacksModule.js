var FeedbacksModule = (function () {
    return {
        getFeedbacks: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://msanandosoapp.azurewebsites.net/api/Feedbacks",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());