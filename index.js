function getFirstSelector(selector){
  //return first element that matches selector
  var match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const rankLis = document.getElementsByClassName('ranked-list');
  for(var x=0; x<rankLis.length; x++){
    rankLis[x].innerHTML = parseInt(rankLis[x].innerHTML)+n;
  }

}

function deepestChild(){
   var list = document.getElementById('grand-node');
    var nextItem = list.children[0]
    while (nextItem){
      list = nextItem
      nextItem = list.children[0]
      }
      return list
   
     
   
}