let acc = document.getElementsByClassName("accordion__btn");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion__btn_active");
    let panel = this.nextElementSibling;
    if (panel.classList.contains('accordion__panel_active')) {
      panel.classList.remove('accordion__panel_active');
    } else {
      panel.classList.add('accordion__panel_active');
    }
  });
}