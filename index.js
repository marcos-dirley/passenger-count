function increment() {
    let passengerCount = document.getElementById("count").innerText
    passengerCount = parseInt(passengerCount)
    document.getElementById("count").innerText = passengerCount + 1  

    let saveElement = document.getElementById("previousPassengerCounts")
    let saves = saveElement.innerText
    let lastCount = getLastCount(saves)
    let lastCountLength = lastCount.length
    lastCount = parseInt(lastCount) + 1
    saveElement.innerText = saves.slice(0, -(lastCountLength)) + lastCount
}

function save() {
    document.getElementById("count").innerText = 0
    document.getElementById("previousPassengerCounts").innerText += " - 0"
}

function getLastCount(counts) {
    let lastDigitIndex = counts.length - 1
    let lastCount = ""

    while (lastDigitIndex >= 0 && isCharNumber(counts[lastDigitIndex])) {
        lastCount = counts[lastDigitIndex] + lastCount
        lastDigitIndex--
    }

    return lastCount
}

function isCharNumber(char) {
    return char >= '0' && char <= '9'
}
