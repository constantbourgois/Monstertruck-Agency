

$(document).ready(function () {
	
	


 var codeElements = document.getElementsByTagName("code");
	console.log(codeElements);
  var i = codeElements.length;
  var delimiter = "clicking on";
  var codeBlock;
  var codeBlockContent;

  while (i--) {
    var code = codeElements[i]
    var content = code.textContent.trim()
    if (content.lastIndexOf(delimiter, 0) === 0) {
      codeBlock = code;
      codeBlockContent = content;
      break;
    }
  }

  if (!codeBlock) return
  codeBlock.parentNode.removeChild(codeBlock)

  function InstructionParsing(instruction) {
    var separator = instruction.charAt(0)
    var instructionSplit = instruction.split(separator)

    this.clickSelector = instructionSplit[1]
    this.classBehavior = instructionSplit[2].trim().split(" ")[0]
    this.classValue = instructionSplit[3]
    this.targetSelector = instructionSplit[5]
  }

  function UIElement(clickSelector, classBehavior, classValue, targetSelector) {
    this.clickSelector = clickSelector
    this.classBehavior = classBehavior.charAt(classBehavior.length-1) == "s"
                       ? classBehavior.substring(0, classBehavior.length-1)
                       : classBehavior
    this.classValue = classValue.charAt(0) == "."
                    ? classValue.substring(1, classValue.length)
                    : classValue
    this.targetSelector = targetSelector
    this.createEventListener()
  }

  UIElement.prototype.createEventListener = function() {
    var self = this
    var clicked = document.querySelectorAll(self.clickSelector)
    var i = clicked.length

    if (i < 1) {
      throw new Error("There's no element matching your \"" + self.clickSelector + "\" CSS selector.")
    }

    while (i--) {
      clicked.item(i).addEventListener("click", clickCallback)
    }

    function updateClass(el) {
      el.classList[self.classBehavior](self.classValue)
    }

    function clickCallback(e) {
      switch (self.targetSelector) {
        case "target" :
        case "this"   :
        case "it"     :
        case "itself" :
        case undefined:
          updateClass(e.target)
          break;
        default:
          var target = document.querySelectorAll(self.targetSelector)
          var i = target.length
          while (i--) {
            updateClass(target.item(i))
          }
      }
      if (e.target.nodeName.toLowerCase() == "button") {
        e.preventDefault()
      }
    }
  }

  codeBlockContent.split(delimiter).forEach(function(data) {
    if (!data) return
    var params = new InstructionParsing(data.trim())
    new UIElement(
      params.clickSelector,
      params.classBehavior,
      params.classValue,
      params.targetSelector
    )
  })

  // article adaptation
  var adaptArticle = $('.adapt-article');

  adaptArticle.on('click', clicAdaptArticle);

  function clicAdaptArticle(e){
    /*var row = $(this).parent();
    row.toggleClass('row-infos-visible');*/

    $(this).toggleClass('adapt-article-infos-visible');

    var adaptInfos = $(this).find('.adapt-infos');
    adaptInfos.toggleClass('adapt-infos-visible');
  }

});


/*
// remove menu when  links  are clicked//

var links = $('#me a');

console.log(links);

$(links).click(function() {
    
    $('.menu b').removeClass('open');
    
    
});

// change color of button //
  //on click//
$('.menu b').click(function(){
  
  if( $('.menu b').hasClass('button open')){
    
      if ( $('.menu b .barra').offset().top > $('#design').offset().top && $('.menu b .barra').offset().top < $('.comming-soon').offset().top ){

          $('.menu b .barra').css('background','black');

      }

      else if ( $('.menu b .barra').offset().top > $('#photog').offset().top && $('.menu b .barra').offset().top < $('.photos').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else if ( $('.menu b .barra').offset().top > $('#art').offset().top && $('.menu b .barra').offset().top < $('.section2').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else if ( $('.menu b .barra').offset().top > $('#aboutcontact').offset().top && $('.menu b .barra').offset().top < $('.infos').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else (
        $('.menu b .barra').css('background','white')

      );
    
  
  
  }
  else{ $('.menu b .barra').css('background','white') }

});
/*
  // on scroll// 
$(window).scroll(function(){
  
  if( $('.menu b').hasClass('button open')){
    
    console.log("ho");
    $('.menu b .barra').css('background','white');
    
    
  }
     
     else {
     
      if ( $('.menu b .barra').offset().top > $('#design').offset().top && $('.menu b .barra').offset().top < $('.comming-soon').offset().top ){

        $('.menu b .barra').css('background','black');

      }

      else if ( $('.menu b .barra').offset().top > $('#photog').offset().top && $('.menu b .barra').offset().top < $('.photos').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else if ( $('.menu b .barra').offset().top > $('#art').offset().top && $('.menu b .barra').offset().top < $('.section2').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else if ( $('.menu b .barra').offset().top > $('#aboutcontact').offset().top && $('.menu b .barra').offset().top < $('.infos').offset().top ){

        $('.menu b .barra').css('background','black');

      }
      else (
        $('.menu b .barra').css('background','white')

      );
     }

})




/*jslint devel: true, sloppy: true*/
/*global $, jQuery, alert*/






