export function TIME_CONVERTER(minutes) {
    
    if(minutes<0) {
       
        let convertedToPositive = -minutes
        let hoursOutput = Math.floor(convertedToPositive/60)
        let minutesOutput = convertedToPositive%60
        
        //Handling minutes less than 10 without "0"
            if(minutesOutput<10){
                return `-${hoursOutput}:0${Math.trunc(minutesOutput)}`
            }else{
                return `-${hoursOutput}:${Math.trunc(minutesOutput)}`;
            }
          
    }else{
       
        let hoursOutput = Math.floor(minutes/60)
        let minutesOutput = Math.floor(minutes%60)
   
        //Handling minutes less than 10 without "0"
            if(minutesOutput<10) {
                minutesOutput = `0${minutesOutput}`
            }
    
        return `${hoursOutput}:${minutesOutput}`
    }
}