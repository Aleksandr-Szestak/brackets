module.exports = function check(str, bracketsConfig) {
  let i, symb, tSymb;
  let arrPureStr=[], sumo=0;

  for(i=0;i<str.length;i++){
      
      symb  = str[i];
      tSymb = testSymb(symb,bracketsConfig);
      
      if (tSymb >= 1000){
          if (arrPureStr[0] === tSymb){
              arrPureStr.shift();
              sumo -= tSymb;
          }
          else{
              arrPureStr.unshift(tSymb)
              sumo += tSymb;
          }
      }
      else if (tSymb > 0){
          arrPureStr.unshift(tSymb)
          sumo += tSymb;
      }
      else if (tSymb <0 && arrPureStr[0] === Math.abs(tSymb)){
          arrPureStr.shift();
          sumo += tSymb;
      }
      else if (tSymb <0 && arrPureStr[0] !== Math.abs(tSymb)){
          return false;
      }

  }
      
  if (arrPureStr.length % 2 !==0 || sumo !== 0){
      return false;
  }

  return true;
}


// ------------------------------------------------------
function testSymb(symb, bracketsConfig){
  let i, rez=0;
  
  for (i=0;i<bracketsConfig.length;i++){
      
      if (symb === bracketsConfig[i][0] && symb === bracketsConfig[i][1]){
          rez=(i+1)*1000;
          break;
      }
      else if (symb === bracketsConfig[i][0]){
          rez=i+1;
          break;
      }
      else if(symb === bracketsConfig[i][1]){
          rez=-(i+1);
          break;
      }
      
  }
  
  return rez;
}
