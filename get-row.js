const getRow = function(input){
  return input.split(',')
}





if (typeof getRow === 'undefined') {
  getRow = undefined;
}


module.exports = getRow;
