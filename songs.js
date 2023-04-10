const songs = [
    {
        artist: "P-funk",
        song: "Give up the Funk",
        album:"Clones of Dr. Funkenstien",
        year: 1974
    },

    {
        artist: "James Brown",
        song: "Cold Sweat",
        album: "Pass the Peas",
        year: 1968
    },
    {
        artist: "Nas",
        song: "N.Y. State of Mind",
        album: "Illmatic",
        year: 1997
    },
    
]

function findArtist(arrayOfSongs, artist) {
    return arrayOfSongs.filter(song=>song.artist===artist);
}

//console.log(findArtist(songs,'Nas'));   

function deleteSong(arrayOfSongs,song) {
    const remove = arrayOfSongs.findIndex(songs =>songs.song === song);
    arrayOfSongs.splice(remove,1);
}

//deleteSong(songs, 'Cold Sweat');
//console.log(songs)

function addSong (arrayOfSongs,artist,song,album,year) {
    const newSong = {artist:artist, song:song, album:album, year:year}
    arrayOfSongs.push(newSong);
}
//addSong(songs, 'whoever', 'whatever', 'however', 1978);
//console.log(songs)


function editSong (arrayOfSongs,index, artist,song,album,year) {
    arrayOfSongs[index].artist=artist;
    arrayOfSongs[index].song=song;
    arrayOfSongs[index].album=album;
    arrayOfSongs[index].year=year;
}

//editSong(songs, 2, 'Rakim', 'Paid in Full', 'Paid in Full', 1986);
//console.log(songs)










