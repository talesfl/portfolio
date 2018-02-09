var center = new Point(view.size.width / 2, view.size.height / 2);
var children = project.activeLayer.children;

var data = {
	a : { 
			create: function() {
				var p = new Point(center.x * 0.2, center.y * 0.7);
				var	path = new Path.RegularPolygon(p, 6, 50);
				path.strokeColor = "green";
				path.strokeWidth = 10;
				path.strokeCap = "round";
				path.name = "a";
			},
			sound: new Howl({
				src: ['sounds/bubbles.mp3']
			}),
			animate: function() {
				if(children['a']) {
					if(children['a'].position.x < view.size.width * 0.3){
						children['a'].position.x += 20;				
						children['a'].rotate(3);
						children['a'].scale(1.1);
					} else {
						children['a'].remove();
					}
				}
			} 
		},

	b : {
			create: function() {
				var p = new Point(center.x * 1.6, center.y * 0.9);
				var	path = new Path.Circle(p, 200);
				path.strokeColor = 'yellow';
				path.strokeWidth = 10;
				path.name = "b";
			}, 
			sound: new Howl({
				src: ['sounds/clay.mp3']
			}),
			animate: function() {
				if(children['b']) {
					if(children['b'].position.x > view.size.width * 0.4) {
						children['b'].position.x -= 30;
						children['b'].scale(0.9);
					} else {
						children['b'].remove();
					}
				}
			}
		},

	c : {
			create: function() {
				var p = new Point(center.x * 0.75, center.y * 0.85);
				var path = new Path.RegularPolygon(p, 5, 50);
				path.strokeColor = "blue";
				path.strokeWidth = 10;
				path.name = "c";
			}, 
			sound: new Howl({
				src: ['sounds/corona.mp3']
			}),
			animate: function() {
				if(children['c']) {
					if(children['c'].area < view.size.width * view.size.height * 0.3) {
						children['c'].scale(1.15);
					} else {
						children['c'].remove();
					}
				}
			}
		},

	d : {
			create: function() {
				var p = new Point(center.x * 1.5, center.y * 1.5);
				var path = new Path.RegularPolygon(p, 3, 50);
				path.strokeColor = "white";
				path.strokeWidth = 10;
				path.name = "d";
			}, 
			sound: new Howl({
				src: ['sounds/moon.mp3']
			}),
			animate: function() {
				if(children['d']) {
					if(children['d'].area < view.size.width * view.size.height * 0.1) {
						children['d'].scale(1.15);
					} else {
						children['d'].remove();
					}
				}
			}
		},
};

function onKeyDown(event) {
	if(data[event.key]) {
		data[event.key].create();
		data[event.key].sound.play();

	}
}

function onFrame(event) {

	for( d in data) {
		if(data[d]){
			data[d].animate();
		}
	}
}
