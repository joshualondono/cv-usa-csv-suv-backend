const getRows = function(input){

  input = input.split(',')

  for (inp of input){
    input.push(inp)
  }

  return input
}




if (typeof getRows === 'undefined') {
  getRows = undefined;
}


module.exports = getRows;
