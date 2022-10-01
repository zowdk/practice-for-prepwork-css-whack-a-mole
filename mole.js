let score = 0;
let molesLeft = 30;
let popupLength = 2500;
let hideTimeout;
let clickable = false;

function popUpRandomMole() {
  if (molesLeft <= 0) {
    document
      .querySelector(".sb__game-over")
      .classList.remove("sb__game-over--hidden");
    return;
  }

  const moleHeads = document.querySelectorAll(
    ".wgs__mole-head:not(.wgs__mole-head--whacked)"
  );
  if (moleHeads.length === 0) {
    return;
  }
  const moleIndex = Math.floor(Math.random() * moleHeads.length);
  const moleHead = moleHeads[moleIndex];

  clickable = true;
  moleHead.classList.remove("wgs__mole-head--hidden");

  molesLeft -= 1;
  document.querySelector(".sb__moles").innerHTML = molesLeft;

  hideTimeout = setTimeout(() => hideMole(moleHead), popupLength);
}

function hideMole(mole) {
  clickable = false;
  mole.classList.add("wgs__mole-head--hidden");

  setTimeout(popUpRandomMole, 500);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(popUpRandomMole, 0);

  const moleHeads = document.querySelectorAll(".wgs__mole-head");
  for (let moleHead of moleHeads) {
    moleHead.addEventListener("click", (event) => {
      if (!clickable) return;

      score += 1;
      document.querySelector(".sb__score").innerHTML = score;
      popupLength -= popupLength / 10;

      clearTimeout(hideTimeout);
      hideMole(event.target);

      // Hide mole when when clicked or if too slow
      event.target.classList.add("wgs__mole-head--hidden");
    });
  }
});

// animated whacked mole particles

$.fn.boom = function (e) {
  let colors = [
    "#ffb3f6",
    "#7aa0ff",
    "#333",
    // '#FFD100',
    // '#FF9300',
    // '#FF7FA4'
  ];
  var shapes = [
    '<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>',
    // '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
    '<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
    '<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>',
  ];

  let btn = $(this);
  let group = [];
  let num = Math.floor(Math.random() * 50) + 30;

  for (i = 0; i < num; i++) {
    let randBG = Math.floor(Math.random() * colors.length);
    let getShape = Math.floor(Math.random() * shapes.length);
    let c = Math.floor(Math.random() * 10) + 5;
    let scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    let x = Math.floor(Math.random() * (150 + 100)) - 100;
    let y = Math.floor(Math.random() * (150 + 100)) - 100;
    let sec = Math.floor(Math.random() * 1700) + 1000;
    let cir = $('<div class="cir"></div>');
    let shape = $('<svg class="shape">' + shapes[getShape] + "</svg>");

    shape.css({
      top: e.pageY - btn.offset().top + 100,
      left: e.pageX - btn.offset().left + 20,
      transform: "scale(0." + scale + ")",
      transition: sec + "ms",
      fill: colors[randBG],
    });

    btn.siblings(".btn-particles").append(shape);

    group.push({ shape: shape, x: x, y: y });
  }

  for (let a = 0; a < group.length; a++) {
    let shape = group[a].shape;
    let x = group[a].x,
      y = group[a].y;
    shape.css({
      left: x + 50,
      top: y + 15,
      transform: "scale(0)",
    });
  }

  setTimeout(function () {
    for (let b = 0; b < group.length; b++) {
      let shape = group[b].shape;
      shape.remove();
    }
    group = [];
  }, 2000);
};

$(function () {
  $(document).on("click", ".btn", function (e) {
    $(this).boom(e);
  });
});
