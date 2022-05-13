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

        var sb = document.querySelector(this.selectboxid);
        sb.setAttribute("placeholder", this.placeholder);
        sb.setAttribute("onkeyup", "Nk.ft(this);Nk.toList(event)");
        sb.setAttribute("onfocus", "Nk.show()");
        sb = null;

        //add onclick event to all ul > li
        this.addeventToList();
    },

    addeventToList: function () {
        let elets = document.querySelectorAll(this.selectListid + " ul li");
        for (const iterator of elets) {
            iterator.setAttribute("onclick", "Nk.s(this);Nk.hide()");
            iterator.setAttribute("onkeyup", "Nk.s2(event)");
            iterator.setAttribute("tabindex", 1);
            iterator.setAttribute("class", "b");
        }
        elets = null;
    },

    show: function () {
        let el = document.querySelector(this.selectListid)
        el.style.maxHeight = this.maxHeight
        el = null;
    },
    hide: function () {
        let el = document.querySelector(this.selectListid)
        el.style.maxHeight = "0px";
        el = null;
    },
    toList: function (event) {
        event.preventDefault();
        if (event.key == 'ArrowDown') {
            let el = document.querySelector(this.selectListid + " ul li.b");
            el.focus();
            el = null;
        }
        event = null;
    },

    sUp: function (ele) {
        var pre = ele.previousElementSibling;
        while (pre) {
            if (pre.className == 'b') {
                pre.focus();
                pre = false;
            } else {
                pre = pre.previousElementSibling;
            }
        }
    },
    sDown: function (ele) {
        var next = ele.nextElementSibling;
        while (next) {
            if (next.className == 'b') {
                next.focus();
                next = false;
            } else {
                next = next.nextElementSibling;
            }
        }
    },
    s2: function (e) {
        e.preventDefault();

        if (e.key === 'Enter') {
            this.s(e.target);
            this.hide();
        } else if (e.key == 'ArrowUp') {
            var focused = document.querySelector(this.selectListid + " ul li:focus");
            if (focused != null) {
                this.sUp(focused);
            }
            focused = null;
        } else if (e.key == 'ArrowDown') {
            var focused = document.querySelector(this.selectListid + " ul li:focus");
            if (focused != null) {
                this.sDown(focused);
            }
            focused = null;
        }
        e = null;
    },

    s: function (t) {
        let sb = document.querySelector(this.selectboxid);
        let val = t.textContent || t.innerText;
        sb.value = val.trim();
        sb.setAttribute("data-val", t.getAttribute("value"));
        sb = null;
        val = null;
    },
    ft: function (t) {
        var filter = t.value.toUpperCase();
        t = null;
        //set starting point
        var lis = document.querySelectorAll(this.selectListid + " ul li");
        if (filter.length >= 1) {

            for (const li of lis) {
                var txtValue = li.textContent || li.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li.setAttribute("class", "b");
                } else {
                    li.setAttribute("class", "n");
                }
                txtValue = null;
            }
        } else {
            for (const li of lis) {
                li.setAttribute("class", "b");
            }
        }
        lis = null;
        li = null;
        filter = null;
    },

    async fetchData(url, data, method = 'POST', json = true) {

        try {
            if (json) {
                const content = {
                    method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                }
            } else {
                //like query string examle: body: 'name=gbs&city=karaikal',
                const content = {
                    method: method,
                    body: data,
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                }
            }

            var response = await fetch(url, content);

            if (response.status == 200) {
                if (json) {
                    let data = await response.json();
                } else {
                    let data = await response.text();
                }
                return data;
            } else {
                console.log(response.status)
            }
        } catch (error) {
            console.log(error)
        }
    },
    async makeRequest(url, data, method = 'POST', json = true) {
        setTimeout(function (url) {
            let val = document.getElementById(selectboxid).value;
            
            let queryString = 'q=' + encodeURI(val);
            this.fetchData(url, queryString, method, false)
        }, 300);;//delay request by 500 milli second 
    }

};