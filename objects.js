var playlist = {breakeven:'the script'}

function updatePlaylist(playlist, artist, song){
  return Object.assign({},playlist,{song:artist})
}