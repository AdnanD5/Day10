function myFunction(){
var myMusic = {
    001: {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: {
        1: "CD",
        2: "8T",
        3: "LP"
        },
        gold: true
    },

    002: {
        artist: "Phil Collins",
        title: "Face Value",
        release_year: 1981,
        formats: {
        1: "CD",
        2: "Kaseta",
        3: "MP3"
        },
        gold: false
    }
}; return myMusic
}
myFunction()[2];
module.exports = myFunction;