//Erick


//Fernando


//Oswaldo


//Giovani
function moveToSelected(element) {
  const $items = $("#carousel div");
  const total = $items.length;

  let $selected;

  if (element === "next") {
    $selected = $(".selected").next();
    if (!$selected.length) {
      $selected = $items.first(); // loop al inicio
    }
  } else if (element === "prev") {
    $selected = $(".selected").prev();
    if (!$selected.length) {
      $selected = $items.last(); // loop al final
    }
  } else {
    $selected = element;
  }

  // Funciones auxiliares para circularidad
  const getNext = ($el) => $el.next().length ? $el.next() : $items.first();
  const getPrev = ($el) => $el.prev().length ? $el.prev() : $items.last();

  const $next = getNext($selected);
  const $prev = getPrev($selected);
  const $nextSecond = getNext($next);
  const $prevSecond = getPrev($prev);

  // Reset de clases
  $items.removeClass();

  // Asignación de estados
  $selected.addClass("selected");
  $prev.addClass("prev");
  $next.addClass("next");
  $prevSecond.addClass("prevLeftSecond");
  $nextSecond.addClass("nextRightSecond");

  // Ocultar el resto (lado derecho)
  let current = getNext($nextSecond);
  while (!current.is($selected)) {
    current.addClass("hideRight");
    current = getNext(current);
  }

  // Ocultar el resto (lado izquierdo)
  current = getPrev($prevSecond);
  while (!current.is($selected)) {
    current.addClass("hideLeft");
    current = getPrev(current);
  }
}

// Eventos teclado
$(document).on("keydown", function (e) {
  if (e.which === 37) moveToSelected("prev");
  if (e.which === 39) moveToSelected("next");
  e.preventDefault();
});

// Click en elementos
$("#carousel div").on("click", function () {
  moveToSelected($(this));
});

// Botones
$("#prev").on("click", function () {
  moveToSelected("prev");
});

$("#next").on("click", function () {
  moveToSelected("next");
});


//Alex


//Luis


//Jésus


//Leila - Maitte