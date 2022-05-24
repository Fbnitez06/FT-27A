'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arrStr = [...num]
  var arrNum = arrStr.map(function(e){
    return parseInt(e)
  })
  arrNum.reverse()
  var endArr =[]
  for (let i = 0; i < arrNum.length; i++){
    if(arrNum[i] == 1){
      endArr.push(Math.pow(2, i))
    }
  }
  var sumado = endArr.reduce((curr, value)=> curr + value, 0)
  return sumado
}

function DecimalABinario(num) {
  // tu codigo aca
  var val = num
  var arr = []
  while(val > 1){
    arr.push(val % 2)
    val = val / 2 
    if (val == 1)
    arr.push(1)
  }
  var num = arr.map(e => Math.floor(e))
  num.reverse()
    return num.join("")
  

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}