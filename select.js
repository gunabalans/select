const Nk = {

    selectboxid: "#nklist",
    selectListid: "#listid",
    placeholder: "Select ..",
    maxHeight: "150px",
    start: function (params) {
        if (params.selectboxid) {
            this.selectboxid = params.selectboxid;
        }
        if (params.selectListid) {
            this.selectListid = params.selectListid;
        }

        if (params.selectboxid) {
            this.selectboxid = params.selectboxid;
        }
        if (params.maxHeight) {
            this.maxHeight = params.maxHeight;
        }
        document.querySelector(this.selectboxid).setAttribute("placeholder", this.placeholder);

        //add onclick event to all ul > li
        let elets = document.querySelectorAll(this.selectListid + " ul li");
        for (const iterator of elets) {
            iterator.setAttribute("onclick", "Nk.s(this)");
            iterator.setAttribute("tabindex", 1);
        }
        elets = null;
    },

    show: function () {
        let el = document.querySelector(this.selectListid)
        el.style.maxHeight = this.maxHeight
    },
    hide: function () {
        let el = document.querySelector(this.selectListid)
        el.style.maxHeight = "0px"
    },
    s: function (t) {
        let sb = document.querySelector(this.selectboxid);
        let val = t.textContent || t.innerText;
        sb.value = val.trim();
        sb.setAttribute("data-val", t.getAttribute("value"));
        this.hide();
    },
    ft: function (t) {

        var filter = t.value.toUpperCase();
        //set starting point
        var lis = document.querySelectorAll(this.selectListid + " ul li");
        if (filter.length >= 1) {
            
            for (const li of lis) {
                var txtValue = li.textContent || li.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li.style.display = "";
                } else {
                    li.style.display = "none";
                }
                txtValue = null;
            }
        }else{
            for (const li of lis) {
                    li.style.display = "";
            }
        }
        lis = null;
        filter= null;
    },
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