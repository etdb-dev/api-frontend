let init = false;
let r = document.getElementById('card').children[0];

$("#search").focusin(
    function () {
        if (!init) {
            init = true;

            //NOTE: for dev purpose only
            c = ['test1', 'test2', 'test3'];

            // add labels
            addElement('p', ['col-sm-6 label-suggest'], 'Type to search', r);
            addElement('p', ['col-sm-6 label-suggest'], 'Recently viewed', r);

            for (var i=0; i < c.length; i++) {
                // add search buttons
                addElement('button', ['col-sm-6 btn-suggest disabled'], ' ', r);

                // add recent buttons
                addElement('button', ['col-sm-6 btn-suggest'], c[i], r);

            }
        }
        $("#card").show();
    }
);
$("#search").focusout(
    function () {
        $("#card").hide();
    }
);

$("#search").keyup(
    function(e){
        if (e.keyCode === 27) { //on escape key
            $("#card").hide();
            $("#search").blur();
        } else if (e.keyCode === 13) { //on return key
            //TODO: search and use the first entry
            $("#card").hide();
            $("#search").blur();

        }
    }
);

$('#search').on(
    'input',
    function (e) {
        q = document.getElementById('search').value;

        //NOTE: for dev purpose only
        s = [q];
        c = ['test1', 'test2', 'test3'];

        // remove childs
        while (r.firstChild) {
            r.removeChild(r.firstChild);
        }

        if (q.length >= 1) {
            // readd the labels
            addElement('p', ['col-sm-6 label-suggest'], 'Suggestions', r);
            addElement('p', ['col-sm-6 label-suggest'], 'Recently viewed', r);

            //NOTE: for dev purpose only
            for (var i=0; i < q.length; i++) {
                s.push('asd' + i);
            }

            // parse results
            if (s.length >= c.length) {
                for (var i=0; i < s.length; i++) {
                    // add search buttons
                    addElement('button', ['col-sm-6 btn-suggest'], s[i], r);

                    // add recent buttons
                    if (i < c.length) {
                        addElement('button', ['col-sm-6 btn-suggest'], c[i], r);
                    } else {
                        addElement('button', ['col-sm-6 btn-suggest disabled'], ' ', r);
                    }
                }
            } else {
                for (var i=0; i < c.length; i++) {
                    // add search buttons
                    if (i < s.length) {
                        addElement('button', ['col-sm-6 btn-suggest'], s[i], r);
                    } else {
                        addElement('button', ['col-sm-6 btn-suggest disabled'], ' ', r);
                    }

                    // add recent buttons
                    addElement('button', ['col-sm-6 btn-suggest'], c[i], r);
                }
            }
        } else {
            // add labels
            addElement('p', ['col-sm-6 label-suggest'], 'Type to search', r);
            addElement('p', ['col-sm-6 label-suggest'], 'Recently viewed', r);

            for (var i=0; i < c.length; i++) {
                // add search buttons
                addElement('button', ['col-sm-6 btn-suggest disabled'], ' ', r);

                // add recent buttons
                addElement('button', ['col-sm-6 btn-suggest'], c[i], r);

            }
        }
    }
);

var addElement = function(type, classList, text, p) {
    b = document.createElement(type);
    b.innerText = text;
    b.classList = classList;
    p.appendChild(b);
};
