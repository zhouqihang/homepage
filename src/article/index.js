import '../common/js/index';
import "./index.less";
import "github-markdown-css/github-markdown.css";
import axios from 'axios';

let star = document.querySelector('#star');
console.log(star);

let $star = $('#star');
let hasStard = false;
$star.on('click', function() {
    if (hasStard) {
        return;
    }
    axios.post('/star/281').then(res => {
        hasStard = true;
    }).catch(err => {
        // nothing...
    });
    if ($star.isStared) {
        $star.removeClass('stared star-end');
        $star.isStared = false;
    } else {
        $star.addClass('stared star-end');
        $star.isStared = true;
    }
})