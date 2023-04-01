radio.onReceivedNumber(function (receivedNumber) {
    vitesse = Math.map(receivedNumber, 1, 1020, -100, 100)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, vitesse)
})
radio.onReceivedValue(function (name, value) {
    direction = Math.map(value, 1, 1020, 0, 130)
    if (direction == 0) {
    	
    } else {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, direction)
    }
})
let direction = 0
let vitesse = 0
radio.setGroup(255)
wuKong.mecanumWheel(
wuKong.ServoList.S0,
wuKong.ServoList.S0,
wuKong.ServoList.S0,
wuKong.ServoList.S0
)
basic.forever(function () {
	
})
