function searchMixtapes() {
    // Declare variables
    var item = document.getElementById("cardDisplay");
    var input, filter, div, ul, tag, i, h2, p;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    div = document.getElementById("search_information");
    ul = div.getElementsByTagName('ul');
    console.log(ul.length);
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < ul.length; i++) {
        h2 = ul[i].getElementsByTagName("h2")[0];
        p = ul[i].getElementsByTagName("p")[0];
        if ((h2.innerHTML.toUpperCase().indexOf(filter) > -1) || (p.innerHTML.toUpperCase().indexOf(filter) > -1)) {
            // ul[i].style.display = "";
            $(ul[i]).closest("div#cardDisplay").css("display", "inline");

        } else {
          $(ul[i]).closest("div#cardDisplay").css("display", "none");
            // ul[i].style.display = "none";
        }
    }
}


function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
