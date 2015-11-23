var SpecialsModule = (function () {
    return {
        getSpecials: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://msanandosoapp.azurewebsites.net",
                success: function (data) {
                    callback(data);
                }
            });
        }
    }
}());