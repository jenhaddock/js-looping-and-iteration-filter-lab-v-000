// Code your solution in this file
function findMatching(array, match){
  return array.filter(function(matchIt){
    return array.toLowerCase() === match.toLowerCase();
  })
}
