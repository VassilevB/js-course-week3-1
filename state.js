 // global constants

 const SystemObject = {
    gassCount :90,
    oxigenCount: 168,

    isAlive() {
        return SystemObject.gassCount > 0 &&
                SystemObject.oxigenCount > 0
    }
 }
