var playlist = {breakeven:'the script'}

function updatePlaylist(playlist, song, artist){
  return Object.assign(playlist,song, artist)
}