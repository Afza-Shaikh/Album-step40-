"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
//it does not include
function make_Album1(artistName, albumtitle) {
    return { artistName, albumtitle };
}
let album1 = make_Album1("Ali Zafar", "Psl song");
let album2 = make_Album1("Atif Aslam", "Ipl song");
let album3 = make_Album1("Asim Azhar", "Cpl song");
console.log(album1, album2, album3);
//its includes tracks number
function make_Album2(artistName, albumtitle, numberofTracks) {
    return { artistName, albumtitle, numberofTracks };
}
let album4 = make_Album2("Ali Zafar", "Psl song", 30);
let album5 = make_Album2("Atif Aslam", "Ipl song", 20);
let album6 = make_Album2("Asim Azhar", "Cpl song");
console.log(album4);
readline_1.clearScreenDown;
