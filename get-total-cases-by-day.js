const getTotalCasesByDay = function(date, array){
  for (arr of array){
    if(date === arr[3]){
      return arr[4]
    }
  }

}





if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
