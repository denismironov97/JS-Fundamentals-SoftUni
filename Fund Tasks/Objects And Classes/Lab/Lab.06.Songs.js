function songs(dataArray) {
    class Song {
        constructor(typeListArg, nameArg, durationOfSong){
            this.typeList = typeListArg;
            this.name = nameArg;
            this.time = durationOfSong;
        }
    }

    let numOfSongs = Number(dataArray.shift());
    let typeList = dataArray[dataArray.length - 1];
    let songsColl = [];

    for (let i = 0; i < numOfSongs; i++) {
        let songData = dataArray[i].split('_');
        
        [type, songName, duration] = [songData[0], songData[1], songData[2]];

        let song = new Song(type, songName, duration);

        songsColl.push(song);
    }

    if(typeList === 'all') {
        songsColl.forEach(obj => console.log(obj.name));
    }
    else {
        let desiredSongs = songsColl.filter(song => song.typeList == typeList);
        desiredSongs.forEach(obj => console.log(obj.name));
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);
