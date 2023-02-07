class Levels {
	constructor() {
		this.levels = [ // x, y, length, horizontal?, is red block?
			[ // level 0
				{
					x: 0,
					y: 2,
					l: 2,
					h: true,
				},
				 {
				 	x: 0,
				 	y: 0,
				 	l: 3,
				 	h: true,
				 },
				 {
				 	x: 2,
				 	y: 1,
				 	l: 3,
				 	h: false,
				 },
				 {
				 	x: 5,
				 	y: 0,
				 	l: 3,
				 	h: false,
				 },
				 {
				 	x: 0,
				 	y: 3,
				 	l: 2,
				 	h: false,
				 },
				 {
				 	x: 0,
				 	y: 5,
				 	l: 3,
				 	h: true,
				 },
				 {
				 	x: 4,
				 	y: 3,
				 	l: 2,
				 	h: true,
				 },
				 {
				 	x: 4,
				 	y: 4,
				 	l: 2,
				 	h: false,
				 },
			],
			 [  // level 1
			 	{
			 		x: 0,
			 		y: 2,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 2,
			 		y: 1,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 3,
			 		y: 1,
			 		l: 3,
			 		h: false,
			 	},
			 	{
			 		x: 4,
			 		y: 1,
			 		l: 3,
			 		h: false,
			 	},
			 	{
			 		x: 0,
			 		y: 3,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 2,
			 		y: 3,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 1,
			 		y: 4,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 2,
			 		y: 5,
			 		l: 2,
			 		h: true,
			 	},
			 ],
			 [ //  level 2
			 	{
			 		x: 0,
			 		y: 2,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 1,
			 		y: 0,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 2,
			 		y: 0,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 4,
			 		y: 0,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 5,
			 		y: 0,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 2,
			 		y: 1,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 0,
			 		y: 3,
			 		l: 3,
			 		h: true,
			 	},
			 	{
			 		x: 0,
			 		y: 4,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 1,
			 		y: 5,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 3,
			 		y: 2,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 4,
			 		y: 2,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 5,
			 		y: 2,
			 		l: 3,
			 		h: false,
			 	},
			 	{
			 		x: 4,
			 		y: 5,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 3,
			 		y: 4,
			 		l: 2,
			 		h: true,
			 	},


			 ],
			 [   // level 3
			 	{
			 		x: 2,
			 		y: 2,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 2,
			 		y: 0,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 2,
			 		y: 1,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 0,
			 		y: 0,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 1,
			 		y: 0,
			 		l: 3,
			 		h: false,
			 	},
			 	{
			 		x: 0,
			 		y: 3,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 0,
			 		y: 5,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 2,
			 		y: 3,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 3,
			 		y: 4,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 4,
			 		y: 0,
			 		l: 2,
			 		h: true,
			 	},
			 	{
			 		x: 4,
			 		y: 1,
			 		l: 3,
			 		h: false,
			 	},
			 	{
			 		x: 5,
			 		y: 1,
			 		l: 2,
			 		h: false,
			 	},
			 	{
			 		x: 5,
			 		y: 3,
			 		l: 2,
			 		h: false,
			 	},



			 ],
			
			
			[
			]
			
			
		]
		
	}





	getLevel(levelNum) {
		if (levelNum === 5){
			document.querySelector(".texte").innerHTML = "Félicitation ! Le prochain code est maintenant accessible. <p id='lecode'> </p>";
			const element = document.querySelector("main");
			element.parentNode.removeChild(element);
		}
		console.log(this.levels[levelNum]);
		return this.levels[levelNum];
	}
}





