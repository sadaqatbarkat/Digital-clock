









function digitalClock() {
	var date = new Date()
	var hour = date.getHours()
	var minut = date.getMinutes()
	var second = date.getSeconds()
	document.getElementById("hours").innerHTML = hour
	document.getElementById("minutes").innerHTML = minut
	document.getElementById("second").innerHTML = second

}



setInterval(digitalClock, 1000)

