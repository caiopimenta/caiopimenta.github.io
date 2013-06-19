//Select color based on current time
//the color is select by the seconds and the darkness by the daylight
var selectColor = function() {
	var date = new Date();
	var item = date.getSeconds() % 7;
	var dark = (date.getHours() > 17) || (date.getHours() < 7); 

	setColor(item, dark);
}

//Set Font and Background color
//dark defines which will be darker, if true background it is
var setColor = function(item, dark) {
	if(dark == true) {
		$("body").css("color", "#eceae0");
		switch(item) {
			case 0:
				$("body").css("background-color", "#4eb1ba");
			break;
			case 1:
				$("body").css("background-color", "#e3ae57");
			break;
			case 2:
				$("body").css("background-color", "#50d07d");
			break;
			case 3:
				$("body").css("background-color", "#e9633b");
			break;
			case 4:
				$("body").css("background-color", "#00ace9");
			break;
			case 5:
				$("body").css("background-color", "#d43f3f");
			break;
			case 6:
				$("body").css("background-color", "#6a9a1f");
			break;
		}
	} else {
		$("body").css("background-color", "#eceae0");
		switch(item) {
			case 0:
				$("body").css("color", "#4eb1ba");
			break;
			case 1:
				$("body").css("color", "#e3ae57");
			break;
			case 2:
				$("body").css("color", "#50d07d");
			break;
			case 3:
				$("body").css("color", "#e9633b");
			break;
			case 4:
				$("body").css("color", "#00ace9");
			break;
			case 5:
				$("body").css("color", "#d43f3f");
			break;
			case 6:
				$("body").css("color", "#6a9a1f");
			break;
		}
	}
}