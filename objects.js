const playlist = {breakeven:'the script'}

function updatePlaylist(playlist, song, artist){
  return Object.assign({song: artist}, playlist)
}