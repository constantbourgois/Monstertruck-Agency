
function firstLoad(path){
	
		
	var dispUrl =  displayUrl(path);
	
	history.pushState(dispUrl,null,dispUrl);
	
	loadHeader();
	if ( path == '/pages/home.html') { loadPage(path); loadHome();}
	else {
	loadPage(path); };
}

window.addEventListener('popstate', function (e) {
			console.log(e.state);
			if (e.state === null){ 
				history.go(-2);
			}
			else {
			var currentpage = displayPath(e.state);
			
			console.log(currentpage);
			loadPage(currentpage);
			}

		});


function displayUrl(path){
	switch (path){
			
		case "/pages/home.html":
			path = "/home";
			break;
			
		case "/pages/contact.html":
			path = "/contact";
			break;
		
		case "/pages/noussommes.html":
			path = "/nous";
			break;
			
		case "/pages/projets/duel.html":
			path = "/duel";
			break;
		
		case "/pages/projets/hibbbou.html":
			path = "/hibbbou";
			break;
		
		case "/pages/projets/accesculture.html":
			path = "/accesculture";
			break;
			
		case "/pages/projets/tapiela.html":
			path = "/tapiela";
			break;
	}
	return path;
}

function displayPath(ur){
	switch (ur){
			
		case "/home":
			ur = "/pages/home.html";
			break;
			
		case "/contact":
			ur = "/pages/contact.html";
			break;
		
		case "/nous":
			ur = "/pages/noussommes.html";
			break;
			
		case "/duel":
			ur = "/pages/projets/duel.html";
			break;
		
		case "/hibbbou":
			ur = "/pages/projets/hibbbou.html";
			break;
		
		case "/accesculture":
			ur = "/pages/projets/accesculture.html";
			break;
			
		case "/tapiela":
			ur = "/pages/projets/tapiela.html";
			break;
	}
	return ur;
}

function updateHistory(url){
	
	history.pushState(url,null,url);
	
}
function loadPage(file) { 
			
			$.ajax({
					url: file
					, cache: false
				})
				.done(function (html) {

					$("#main").html(html);
					$('footer').show();
					
					var currentHisto = history.state;
					console.log(currentHisto);
					
					var pageurl = displayUrl(file);
				
					if (currentHisto !== pageurl) {
						console.log("aha")
					history.pushState(pageurl, null, pageurl);
					
					console.log(history.state);
					};
				
					if (file == "/pages/home.html") {
					loadHome();
					}

				});
			

		};


function loadHeader(){
	$.ajax({
		url: "/../pages/header.html"
		, cache: false
	}).done(function (html) {
		$("#header").append(html);
		
		$.getScript("../../js/headerscript.js", function () {});
		$.getScript("../../js/mobile.js", function () {});

		var container = document.querySelector('.menu')
			, content = document.querySelector('.content');
		console.log(container);
		var containermob = document.querySelector('.nav');
		console.log(containermob);
		
		$(".minitruck img").click(function (event) {

			event.preventDefault();
		});

		container.addEventListener('click', function (e) {
			
			if (e.target != e.currentTarget) {
				e.preventDefault();
				console.log(e.target);
				var data = e.target.getAttribute('data-url')
					, url = data + ".html";
				/*addCurrentClass(data)*/
				;
				console.log(data);
				var dispUr = displayUrl(data);
				
				
				console.log(history.state);
				if (url == "/../pages/home.html") {
					console.log(url);
					loadHome();

				} else if (data !== null ){
					loadPage(url);
				}

			}
			e.stopPropagation();
		}, false);
		
		containermob.addEventListener('click', function (e) {
			
			if (e.target != e.currentTarget) {
				e.preventDefault();
				var data = e.target.getAttribute('data-url')
					, url = data + ".html";
				/*addCurrentClass(data)*/
				;
				
				var dispUr = displayUrl(data);
				
				console.log($('.button'));
				
				
				
				if (url == "/../pages/home.html") {
					console.log(url);
					loadHome();

				} else if (data !== null ){
					
					resetMobilemenu();
					
					
					loadPage(url);
				}

			}
			e.stopPropagation();
		}, false);

		
	
	});
};

function resetMobilemenu(){
	console.log("");
	$('.button').removeClass('open');
	$('.accordiontarget').removeClass('accordionopen');
	$('.accordionmove').removeClass('move');
	$('#main').removeClass('animatemain');	
	
}


function loadHome() {

	$('footer').hide();
	$.getScript("../js/backgroundslider.js", function () { /* for slider**/
		stopLoop();
		startLoop();
	});

	
}



function loadThankyou() {
	
	$("#contactform").on('submit', function (e) {

			e.preventDefault();

			$.ajax({
				type: "POST", 
				url: "../pages/thankyou.php", 
				data: $('#contactform').serialize(), 
				success: function (result) {

					$("#main").html(result);

				}
			})

		});

}




