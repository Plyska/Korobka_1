function f1 (str) {
let flag = true;
  
    // if ((str[0][0] - str[2][0]) / (str[1][0] - str[2][0]) === (str[0][1] - str[2][1]) / (str[1][1] - str[2][1])) {
                
    //     return true;
    // }
    // else {
        
    //     return false;
    // }
    for (let i = 1; i < str.length; i++) {
        for (let j = 1; j < str[i].length; j++) {
            if ((str[0][j-1] - str[i][j-1]) / (str[i-1][j-1] - str[i][j-1]) !== (str[0][j] - str[i][j]) / (str[i-1][j] - str[i][j])) {
                flag = flag * false;
                
            } 
            else {
                flag = flag * true;
            }
            
            
            
            
        }
      
    }
    
    return flag; 

}


    


console.log(f1([[1, 1], [2, 2], [3, 3]]));
