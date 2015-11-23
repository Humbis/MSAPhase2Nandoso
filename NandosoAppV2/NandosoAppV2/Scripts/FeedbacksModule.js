var FeedbacksModule = (function () {
    return {
        getFeedbacks: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://msanandosoapp.azurewebsites.net/api/Feedbacks",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());