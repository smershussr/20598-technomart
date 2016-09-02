var modalOverlay = document.querySelector(".modal-overlay");

/* Окно обратной связи */
var modalWriteUs = document.querySelector(".modal-write-us");

if (modalWriteUs) {

  var btnWriteUs = document.querySelector(".btn-write-us");
  var btnCloseWS = modalWriteUs.querySelector(".modal-close");
  var yourNameField = modalWriteUs.querySelector("#your-name-id");
  var emailField = modalWriteUs.querySelector("#email-id");
  var messageField = modalWriteUs.querySelector("#message-id");
  var formWriteUs = modalWriteUs.querySelector("form");
  var storageUsername = localStorage.getItem("username");
  var storageEmail = localStorage.getItem("email");

  btnWriteUs.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-show");
    modalWriteUs.classList.add("modal-show");

    if (storageUsername && storageEmail) {
      yourNameField.value = storageUsername;
      emailField.value = storageEmail;
      messageField.focus();
    } else if (storageUsername && !storageEmail) {
      yourNameField.value = storageUsername;
      emailField.focus();
    } else if (!storageUsername && storageEmail) {
      emailField.value = storageEmail;
      yourNameField.focus();
    } else {
      yourNameField.focus();
    }
  });

  btnCloseWS.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-show");
    modalWriteUs.classList.remove("modal-show");
    modalWriteUs.classList.remove("modal-error");
  });

  formWriteUs.addEventListener("submit", function(event) {
    if (!yourNameField || !emailField) {
      event.preventDefault();
      modalWriteUs.classList.remove("modal-error");
      modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
      modalWriteUs.classList.add("modal-error");
    } else {
      localStorage.setItem("username", yourNameField.value);
      localStorage.setItem("email", emailField.value);
    }
  });

}


/* Карта */
var modalMap = document.querySelector(".modal-map");

if (modalMap) {

  var imageMap = document.querySelector(".image-map");
  var btnCloseMap = modalMap.querySelector(".modal-close");
  imageMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.add("modal-show");
    modalMap.classList.add("modal-show");
  });

  btnCloseMap.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-show");
    modalMap.classList.remove("modal-show");
  });

}


/* Добавление товаро в корзину */
var modalAddCart = document.querySelector(".modal-add-cart");

if (modalAddCart) {

  var btnBuy = document.querySelectorAll(".actions .btn-buy");
  var btnCloseAC = modalAddCart.querySelector(".modal-close");
  var btnCancel = modalAddCart.querySelector(".btn-cancel");

  var ind;
  for (ind = 0; ind < btnBuy.length; ind++) {
    btnBuy[ind].addEventListener("click", function(event) {
      event.preventDefault();
      modalOverlay.classList.add("modal-show");
      modalAddCart.classList.add("modal-show");


    })
  };

  btnCloseAC.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-show");
    modalAddCart.classList.remove("modal-show");
  });

  btnCancel.addEventListener("click", function(event) {
    event.preventDefault();
    modalOverlay.classList.remove("modal-show");
    modalAddCart.classList.remove("modal-show");
  });

}


/* Нажатие клавиши Esc */
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {

    if (modalOverlay && modalOverlay.classList.contains("modal-show")) {
      modalOverlay.classList.remove("modal-show");
    }

    if (modalWriteUs && modalWriteUs.classList.contains("modal-show")) {
      modalWriteUs.classList.remove("modal-show");
      modalWriteUs.classList.remove("modal-error");
    }

    if (modalMap && modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }

    if (modalAddCart && modalAddCart.classList.contains("modal-show")) {
      modalAddCart.classList.remove("modal-show");
    }

  }
});
