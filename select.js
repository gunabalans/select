const Nk = {

    selectboxid: "#nklist",
    placeholder: "Select ..",
    maxHeight: "150px",
    start: function (params) {
        if (params.selectboxid) {
            this.selectboxid = params.selectboxid;
        }

        if (params.placeholder) {
            this.placeholder = params.placeholder;
        }
        document.querySelector(this.selectboxid).setAttribute("placeholder", this.placeholder);
    },

    show: function () {
        let el = document.querySelector("#selectedList")
        el.style.maxHeight = this.maxHeight
    },
    hide: function () {
        let el = document.querySelector("#selectedList")
        el.style.maxHeight = "0px"
    },
    s: function (t) {
        let sb = document.querySelector(this.selectboxid);
        sb.value = t.textContent || t.innerText;
        sb.setAttribute("data-val", t.getAttribute("value"));
        this.hide();
    }
};

// $(document).ready(function () {
//     $("#to-user").keyup(function () {
//         $.post("index.php", {
//             // "search": $(this).val()

//         }).done(function (data) {
//             $("#sb").show();
//             var ul = '<ul class="list-group">';
//             for (const row in data.data) {
//                 ul += '<li class="list-group-item" onclick="s(' + data.data[row].id + ',\'' + data.data[row].name + '\')">' + data.data[row].name + "</li>";
//             }
//             ul += "</ul>";

//             $("#sb").html(ul);

//         }).fail(function (data) {
//         });

//     });

// });