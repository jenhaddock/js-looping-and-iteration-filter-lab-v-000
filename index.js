// Code your solution in this file
function findMatching(array, match){
  return array.filter(function(matchIt){
    return matchIt.toLowerCase() === match.toLowerCase();
  })
}

function fuzzyMatch(array, match){
  return array.filter(function(matchIt){
    return matchIt[0] === match[0];
  })
}
