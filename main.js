setInterval(() => {
    // creating time object
    const setTime = new Date();

    // minute hand setup
    const minTime = setTime.getMinutes();
    const minDeg = (minTime / 60 * 360)+90;
    document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`

    // hours hand set up
    const hourTime = setTime.getHours();
    console.log(hourTime);
    const hourDeg = (hourTime/24)*360-90;
    document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`

    // second hand setup
    const secTime = setTime.getSeconds();
    const secDeg = (secTime/60)*360+90;
    document.querySelector(".sec-hand").style.transform = `rotate(${secDeg}deg)`
}, 1000);