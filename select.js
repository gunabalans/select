const NetkathirSelect = {
    s: function (id, name) {
        $("#from-user-id").val(id);
        $("#from-user").val(name);
        $("#fromsb").hide();
    }


}

$(document).ready(function () {
    $("#to-user").keyup(function () {
        $.post("{{url('/api/v2/user/list')}}", {
            "_token": "{{csrf_token()}}",
            "search": $(this).val()

        }).done(function (data) {
            $("#sb").show();
            var ul = '<ul class="list-group">';
            for (const row in data.data) {
                ul += '<li class="list-group-item" onclick="s(' + data.data[row].id + ',\'' + data.data[row].name + '\')">' + data.data[row].name + "</li>";
            }
            ul += "</ul>";

            $("#sb").html(ul);

        }).fail(function (data) {
        });

    });

});