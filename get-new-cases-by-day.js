const getNewCasesByDay = function(date, array){
  for (arr of array){
    if(date === arr[3]){
      return arr[5]
    }
  }

}


if (typeof getNewCasesByDay === 'undefined') {
  getNewCasesByDay = undefined;
}


module.exports = getNewCasesByDay;
