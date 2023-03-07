const accordions = document.querySelectorAll('.accordion');

window.onAccordionBtnClick = (el) => {
    const currentAccordion = el.parentElement.parentElement;
    accordions.forEach(accordion => {
        if (accordion !== currentAccordion) {
            accordion.classList.remove("accordion-open");
        }
    });
    currentAccordion.classList.toggle("accordion-open");
};