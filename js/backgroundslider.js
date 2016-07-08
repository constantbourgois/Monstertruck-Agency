
var interval; 
var t = 1000; /****SHIFTING TIME******/
var exittime = 500; /**** SLIDING TIME (hiding)*****/
var entrancetime = 500; /**** SLIDING TIME (showing)****/


var slides = $("#fond img");


var loopPictures;

var i;

var j;

function stopLoop(){
   clearInterval(loopPictures);
   $(slides).hide();
  
   $(slides[0]).show();
  
}


function startLoop(){
	
    i = 0;
	j=0;
    loopPictures = setInterval(loop,t);

}

function loop(){
j++;
	
    if (i < slides.length -1){
      
        $(slides[i]).fadeOut(exittime,function(){});
		
		i++;
				  
		
		$(slides[i]).fadeIn(entrancetime,function(){});
	
	
		
	  /*
		
		$(slides[i]).effect('slide', { direction: 'right', mode: 'hide' }, 1000);
		
	 i++;

	  $(slides[i]).effect('slide', { direction: 'right', mode: 'show' }, 1000);*/
		
              
  }
  else{
	
	 $(slides[i]).fadeOut(exittime,function(){});
				

		i=0;
	
		$(slides[i]).fadeIn(entrancetime,function(){});

    }
}

	