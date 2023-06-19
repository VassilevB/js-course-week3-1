 // global constants

 const SystemObject = {
    gassCount :90,
    oxigenCount: 168,

    turnO() {
        SystemObject.isSystemTurnOn = true;
    },

    turnOff() {
        SystemObject.isSystemTurnOn = false;
    },

    isAlive() {
        return SystemObject.gassCount > 0 &&
                SystemObject.oxigenCount > 0
    }
 }
