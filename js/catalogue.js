let items = document.querySelectorAll('.carousel-item')
 console.log(items)
items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

/* const select = document.querySelector('.select');
const card = document.querySelector('.card');
card.onmouseover = function () {mouseOver()};
card.onmouseout = function () {mouseOut()};

function mouseOver() {
    select.style.zIndex = 3;
}
function mouseOut() {
    select.style.zIndex = 0;
}
 */