

$('#stars').hide();
changeColor();
/*
function dragstart_handler(event) {
 console.log("hola");
 console.log(event.target);
 // Add the target element's id to the data transfer object
 
}




 var a = document.getElementById("star-svg");

        //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
        a.addEventListener("load",function(){
           
            var svgDoc = a.contentDocument;
            console.log(svgDoc);//get the inner DOM of alpha.svg
            var smallstar = svgDoc.getElementById("starpath"); 
            console.log(smallstar);//get the inner element by id
            /*smallstar.addEventListener("mousedown",function(){alert('hello world!')},false);
            $('#smallstar').draggable({});

            smallstar.style.fill="yellow";

                //add behaviour
        },false);

*/


 function changeColor(){
	var painting = document.getElementById("painting");
	var frame = document.getElementById("frame");
	var backwheel = document.getElementById("backwheel");
	var frontwheel=document.getElementById("frontwheel");
	var shadows=document.getElementById("shadows");
	var rims = document.getElementById("rims");
	var screws= document.getElementById("screws");
	var titlemonster= document.getElementById("titlemonster");
	var titletruck= document.getElementById("titletruck");
	var windows = document.getElementById("windows");
	

	var path =[frame,backwheel,frontwheel,shadows,rims,screws,titlemonster,titletruck,windows,painting];

	for (var i = 0; i < path.length; i++) {
		path[i].style.fill ='white';
	};

	var col;
	var source;


	var colorSetter = new colorSetter();

	function colorSetter(col){	
			this.col = col;
	};

	
	document.addEventListener("click",Program,false);

	function getColor(event){
		
		console.log(event.target);

		var co = getComputedStyle(event.target).getPropertyValue('background-color');

		console.log(co);

		return co;


	}

	function setColor(event){
		
		event.target.style.fill = colorSetter.col;
		
	}

	

	function Program(event){
		
		console.log(event.target.tagName);

		if (event.target.tagName === "DIV") {
		

			colorSetter.col = getColor(event);
			console.log(getColor());
			console.log(colorSetter);
			
		}
		else if(event.target.tagName === "path"){
			console.log("coco");

			setColor(event);
		}
		 
	}

}


dragElements();

function addElements(){
	


	$( "#starscontainer" ).append('<svg viewbox = "0 0 70 70" width="5%" id="smallstar" data-star="0" class="draggable-element"><g transform="translate(-179.6353,-217.54083)"> <path style="fill:white;stroke:#000000;stroke-opacity:1;display:inline" d="m 239.93729,229.24953 -9.8254,19.8309 10.7661,19.3364 -21.8966,-3.2164 -15.0631,16.2145 -3.70739,-21.8188 -20.0756,-9.3154 19.6053,-10.2683 2.6557,-21.9716 15.82409,15.4726 z" id="starpath" inkscape:connector-curvature="0" /> </g></svg>');

$( "#pulpocontainer" ).append('<svg class="draggable-element" id="pulpo" data-star"0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox = "0 0 350 350" width="5%" enable-background="new 0 0 287.4 281.1" xml:space="preserve"><g>< <path stroke="#000000" fill="white" id="pulp" stroke-miterlimit="10" d="M102.8,26.3c20.3-15.4,56.2-30.6,95.8,9.6 c4.9,4.9,8.6,10.8,11.2,17.2c5.6,14,11.7,39.6-4.2,63.1c0,0-4.9,7.7-15.4,14.8c0,0-18.1,12.2-19.7,17.5c0,0,8.6,14.3,19.4,13.6 c0,0,7.7,2.8,29.9-9.9s52-12.4,57.6,4.2c0,0,5.7,11.6-5.4,16.5c0,0-5.9,3.4-12-6.3c-2.2-3.5-6-5.5-10.1-5.5 c-6.4,0.1-17,2.2-32.2,11.1c0,0-26.2,12-38.3,3.7c0,0,11.1,14.8,47.2,8.3s44.5,18.8,44.5,18.8s15.2,33.4-23,47.4 c0,0-7.7,1.7-10.3-5.7c-2.6-7.4,5.7-10.3,5.7-10.3s12.4-2.4,14.3-16.3c1.9-13.9-13.1-17.6-13.1-17.6s-11.3-2.1-27.7,1.9 s-45.3-3.3-60.3-29.3c0,0-1.6,30.7,22.2,34.3s49.8,7.6,46.4,37c-2.8,23.9-25.5,25.9-33.7,25.8c-2,0-4-0.4-5.9-1.2 c-6.4-2.6-20.9-10.2-18-25.6c0.6-3.3,2.7-6.4,5.8-7.8c2.3-1.1,5.2-1.4,8,1.2c2.1,2,3.1,4.9,2.9,7.9c-0.3,3.3,0.9,8.5,10.5,9.3 c14.2,1.2,17.9-14.8,11.1-22.2c0,0-3.1-4.3-24.4-6.8s-29.9-11.7-36.7-26.6c0,0-9.5,18.3-28.3,22.3s-15.9,3.3-26.4,5.8 c-5.6,1.3-8.3,6-9.3,10.5c-1.3,5.6,0.4,11.5,4.8,15.2c1.5,1.2,3.2,2.1,4.9,2c0,0,13,2.1,12.5-8.1c0,0-2.1-11.3,10-12.3 c12-0.9,6.3,20.1,6.3,20.1s-5.9,16-22.6,16.6s-24.4-7.4-31.5-18.5c-7.1-11.1-3.4-34.2,16.4-39.8c15.1-4.3,25.7-5.3,28.6-6.2 c4.3-1.2,9.4-2.8,10.5-3.4c7.7-4.3,11.7-3.5,11.9-29.6c0,0-17,24.6-30.5,26.4c-0.7,0.1,2.4-0.6-1.9,0.4c-3.6,0.9-17.2,5.4-37.1,0.9 c-23.2-5.2-30.9,6.9-31.2,15c-0.2,6.8,4.2,12.4,5.7,14.1c0.3,0.3,0.6,0.6,1,0.9c1,0.7,3.4,2.2,5.2,3c2.5,1.1,4.8,2.9,6,5.4 c1.4,2.9,1.7,6.8-3.1,10.7c-9.6,7.7-27.5-15.1-27.5-15.1s-13.9-19.1,3.7-42c0,0,7.6-14.2,44.4-8.2s43.6-9.9,43.6-9.9 s-9.3,9.4-31.2,1.1s-45.1-21.9-50.6-10.5c-5.6,11.4-12.1,8.3-12.1,8.3s-7.4-1.7-4.9-11.5s12.4-15.7,12.4-15.7s11.1-8,29.9,0 c18.8,8,25.6,10.2,29,11.7s22.3,8.3,35.9-10.3c0,0-13.7-15.1-22.5-22c-7.6-6-23.7-22.7-22-49.5C76.1,56.7,86.8,38.5,102.8,26.3z"/><g> <circle cx="130" cy="132.6" r="6.5"/> <circle cx="147.3" cy="132.6" r="6.5"/></g></svg>');


	/*$( "#starscontainer" ).append("<img class='draggable-element' data-star='0' src='stars.svg' alt='stars'>");*/

	dragElements();			
	

		
	

}

function dragElements(){


$(".draggable-element").draggable({
	
			start: function(event)
			{ var i = 1;


				var dataStar = event.target.getAttribute('data-star');

				if (dataStar == 0){
					
					event.target.setAttribute('data-star', i);
					
					addElements();

				}
				else {
					
				}
	
	        
	    	}

  		});
}












