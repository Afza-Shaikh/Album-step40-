import { clearScreenDown } from "readline";

//it does not include
function make_Album1(artistName: string, albumtitle: string){
    return{artistName,albumtitle}
}
let album1 = make_Album1("Ali Zafar", "Psl song")
let album2 = make_Album1("Atif Aslam", "Ipl song")
let album3 = make_Album1("Asim Azhar", "Cpl song")

console.log(album1, album2,album3);
//its includes tracks number
function make_Album2(artistName: string, albumtitle: string, numberofTracks?: number){
    return{artistName,albumtitle,numberofTracks}
}
let album4 = make_Album2("Ali Zafar", "Psl song",30)
let album5 = make_Album2("Atif Aslam", "Ipl song",20)
let album6 = make_Album2("Asim Azhar", "Cpl song")

console.log(album4,);
clearScreenDown