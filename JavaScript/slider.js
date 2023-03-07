window.onSliderControlClick = (el, isLeft = false) => {
    let idexToActivate = -1;
    const currentReview = el.parentElement.parentElement;
    const reviews = currentReview.parentElement.querySelectorAll(('.reviews__users'));
    reviews.forEach((review, index) => {
        if (review === currentReview) {
            idexToActivate = isLeft ? index - 1 : index + 1;
            if (idexToActivate > reviews.length - 1) {
                idexToActivate = 0;
            } else if (idexToActivate < 0) {
                idexToActivate = reviews.length - 1;
            }
        }
        review.classList.remove('reviews__users-active');
    });
    reviews[idexToActivate].classList.add('reviews__users-active');
};

window.onSliderDotClick = (el) => {
    const reviewIndex = el.getAttribute('data-reviewIndex');
    const dots = el.parentElement.querySelectorAll('.reviews__dots_button');
    const reviews = el.parentElement.parentElement.querySelectorAll(('.reviews__users'));

    dots.forEach(dot => dot.classList.remove('reviews__dots_button-active'));
    dots[reviewIndex].classList.add('reviews__dots_button-active');

    reviews.forEach(review => review.classList.remove('reviews__users-active'));
    reviews[reviewIndex].classList.add('reviews__users-active');
};