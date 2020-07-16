const getDate = function(input){
  return input[3]
}


if (typeof getDate === 'undefined') {
  getDate = undefined;
}


module.exports = getDate;
