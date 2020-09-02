// Action creator
export const selectSong = (song) => {
    // Return an action - plain JS object
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}