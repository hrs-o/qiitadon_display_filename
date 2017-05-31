const INTERVAL_SEC = 1000;

var display_file_name_func = function () {
    var code_tags = document.getElementsByTagName("code");
    var max_count = code_tags.length;
    for (var idx = 0; idx < max_count; idx++) {
        var code_tag = code_tags[idx];

        if (code_tag.firstChild.className == "qdf-display-filename") {
            continue;
        }

        var filename = code_tag.getAttribute("data-filename");
        if (!filename) {
            continue;
        }

        var div = document.createElement('div');
        div.textContent = filename;
        div.classList.add('qdf-display-filename');

        code_tag.appendChild(div);
        code_tag.insertBefore(div, code_tag.firstChild);
    }
};


display_file_name_func();
setInterval(display_file_name_func, INTERVAL_SEC);