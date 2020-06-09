const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function() {
  if(checkbox.checked) {
    document.body.classList.add("dark-mode-body");
    var card = document.querySelectorAll(".light-mode-card");
    for(var i = 0; i < card.length ; i++) {
      card[i].classList.remove("light-mode-card");
      card[i].classList.add("dark-mode-card");
    }
    var text = document.querySelectorAll(".text-light");
    for(var j = 0; j < text.length ; j++) {
      text[j].classList.remove("text-light");
      text[j].classList.add("text-dark");
    }
  } else {
    document.body.classList.remove("dark-mode-body");
    var card = document.querySelectorAll(".dark-mode-card");
    for(var i = 0; i < card.length ; i++) {
      card[i].classList.remove("dark-mode-card");
      card[i].classList.add("light-mode-card");
    }
    var text = document.querySelectorAll(".text-dark");
    for(var j = 0; j < text.length ; j++) {
      text[j].classList.remove("text-dark");
      text[j].classList.add("text-light");
    }
  }

});
