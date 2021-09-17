export function TIME_CONVERTER(minutes) {
    let hoursOutput = Math.floor(minutes/60)
    let minutesOutput = Math.floor(minutes%60)

        if(minutesOutput<10) {
        minutesOutput = `0${minutesOutput}`
        }

    return `${hoursOutput}:${minutesOutput}`
}

export function NEGATIVE_TIME_HANDLER(minutes) {
    if(minutes<0) {
        let hoursFinal = Math.floor(-minutes/60)
        let minutesFinal = -minutes%60
        return `-${hoursFinal}:${minutesFinal}`;
    }else{
        let hoursOutput = Math.floor(minutes/60)
        let minutesOutput = Math.floor(minutes%60)
        if(minutesOutput<10) {
            minutesOutput = `0${minutesOutput}`
            }
    
        return `${hoursOutput}:${minutesOutput}`
    }
}