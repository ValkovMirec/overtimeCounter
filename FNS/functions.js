export function TIME_CONVERTER(minutes) {
    let hoursOutput = Math.floor(minutes/60)
    let minutesOutput = Math.floor(minutes%60)

        if(minutesOutput<10) {
        minutesOutput = `0${minutesOutput}`
        }

    return `${hoursOutput}:${minutesOutput}`
}



