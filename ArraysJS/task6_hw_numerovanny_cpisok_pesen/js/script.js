//Домашнее задание: Напишите функцию, которая выводит в HTML документ нумерованный список песен.

function showPlaylist(playList) {
    for (var i = 0; i < playList.length; i++) {
        document.write("<img src='img/guitar.png'/>" + "&nbsp" + "&nbsp" + "&nbsp" + "<b>" + playList[i].author + "</b>" + " -- " + playList[i].song + "<br />" + "<hr />");
    }
}

var playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
}, {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
}, {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
}, {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
}, {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
}, {
    author: "AC/DC",
    song: "BACK IN BLACK"
}, {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
}, {
    author: "METALLICA",
    song: "ENTER SANDMAN"
}];

showPlaylist(playList);
