while(SystemObject.isAlive()) {

const command = prompt(`Въведи команда`);

if (command ==  'turnon') {
    turnonCommand();
}

else if (command == 'load') {

    // if(SystemObject.isTurnOn()) {

    // const robotNameArgument = prompt(`Въведи името на роботската ръка`);
    // loadCommand(robotNameArgument); }
    // else {
    //     alert(`Трябва да включите системата`);
    // }}

if (!SystemObject.isTurnOn()) {
    alert(`Трябва да включите системата`);
    continue; // това е команда за връщане в началото на цикъла, а не продължаване със следващата стъпка
}

const robotNameArgument = prompt(`Въведи името на роботската ръка`);
    loadCommand(robotNameArgument); }



else if (command == 'unload') {
    const robotNameArgument = prompt(`Въведи името на роботската ръка`);
    unloadCommand(robotNameArgument);
}

else if (command == 'moveX') {
    const directionArgument = prompt(`Въведи посока left / right`);
    const stepArgument = prompt(`Въведи стъпка `);
    moveCommand ('X', directionArgument, stepArgument);
}

else if (command == 'moveY') {
    const directionArgument = prompt(`Въведи посока up / down`);
    const stepArgument = prompt(`Въведи стъпка `);
    moveCommand ('Y', directionArgument, stepArgument);
}

else if (command == 'identify') {
    identifyCommand();
}

else if (command == 'cut') {
    const numberArgument = prompt(`Въведи число`);
    processCommand('cut', numberArgument);
}

else if (command == 'fill') {
    processCommand('fill', numberArgument);
}

else if (command == 'finish') {
    processCommand('finish');
}

else if (command == 'status') {
    statusCommand();
}

else {
    alert(`Командата е невалидна, моля, опитайте`);
}

}