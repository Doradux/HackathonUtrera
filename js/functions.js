document.getElementById("inf1").addEventListener("mouseenter", function () {
  rescatarInformacion(1);
});

document.getElementById("inf2").addEventListener("mouseenter", function () {
  rescatarInformacion(2);
});

document.getElementById("inf3").addEventListener("mouseenter", function () {
  rescatarInformacion(3);
});

document.getElementById("inf4").addEventListener("mouseenter", function () {
  rescatarInformacion(4);
});

// document.getElementById("inf1").addEventListener("mouseleave", borrarDetalles);
// document.getElementById("inf2").addEventListener("mouseleave", borrarDetalles);
// document.getElementById("inf3").addEventListener("mouseleave", borrarDetalles);
// document.getElementById("inf4").addEventListener("mouseleave", borrarDetalles);

let resultado = document.getElementById("resultado");
let img = document.getElementById("resultado_img");

function rescatarInformacion(n) {
  switch (n) {
    case 1:
      // console.log(img.children[0].src);
      img.children[0].src =
        "./resources/img/animations/undraw_sharing_knowledge_03vp.svg";
      break;

    case 2:
      img.children[0].src =
        "./resources/img/animations/undraw_co_workers_re_1i6i.svg";
      break;

    case 3:
      img.children[0].src =
        "./resources/img/animations/undraw_completed_tasks_vs6q.svg";
      break;

    case 4:
      img.children[0].src =
        "./resources/img/animations/undraw_well_done_re_3hpo.svg";
      break;
  }

  resultado.style.display = "block";
  resultado.innerText = event.target.children[0].children[1].innerText;
  if (window.innerWidth >= 770) {
    console.log(window.innerWidth);
    event.target.style.transition = "transform 0.5s ease";
    event.target.style.transform = "translateX(100px)";
  } else if(window.innerWidth < 576) {
  } else {
    console.log(window.innerWidth);
    event.target.style.transition = "transform 0.5s ease";
    event.target.style.transform = "translateX(45px)";
  }

  //   hermano1
  try {
    event.target.nextElementSibling.style.transition = "transform 0.5s ease";
    event.target.nextElementSibling.style.transform = "translateX(0px)";
  } catch {}

  //   hermano2
  try {
    event.target.nextElementSibling.nextElementSibling.style.transition =
      "transform 0.5s ease";
    event.target.nextElementSibling.nextElementSibling.style.transform =
      "translateX(0px)";
  } catch {}

  //   hermano3
  try {
    event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.transition =
      "transform 0.5s ease";
    event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.transform =
      "translateX(0px)";
  } catch {}

  //   hermano-1
  try {
    event.target.previousElementSibling.style.transition =
      "transform 0.5s ease";
    event.target.previousElementSibling.style.transform = "translateX(0px)";
  } catch {}

  //   hermano-2
  try {
    event.target.previousElementSibling.previousElementSibling.style.transition =
      "transform 0.5s ease";
    event.target.previousElementSibling.previousElementSibling.style.transform =
      "translateX(0px)";
  } catch {}

  //   hermano-3
  try {
    event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.transition =
      "transform 0.5s ease";
    event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.transform =
      "translateX(0px)";
  } catch {}
}

function borrarDetalles() {
  img.children[0].src =
    "./resources/img/animations/undraw_co-working_re_w93t.svg";
  resultado.innerText = "";
  event.target.style.transition = "transform 0.5s ease";
  event.target.style.transform = "translateX(0px)";
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    let src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    let myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
    myModal.show();
  }
});
