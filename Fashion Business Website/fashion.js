document.addEventListener('DOMContentLoaded', function () {
    const ride = document.querySelector(".ride");
    const arrowBtn = document.querySelectorAll("#partners .wrapper h1");
    const firstCard = ride.querySelector(".card").offsetWidth;
    const rightButton = document.querySelector('#right');
    const leftButton = document.querySelector('#left');
    let isDrag = false, startX, startScroll;

    rightButton.addEventListener('click', () => {
        ride.classList.add('scroll');
    });

    leftButton.addEventListener('click', () => {
        ride.classList.remove('scroll');
    });

    arrowBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            ride.scrollLeft = btn.id === "left" ? -firstCard : firstCard;
        })
    });
    const dragStart = (e) => {
        isDrag = true;
        ride.classList.add("drag");
        startX = e.pageX;
        startScroll = ride.scrollLeft;
    }
    const drag = (e) => {
        if (!isDrag) return;
        ride.scrollLeft = startScroll - (e.pageX - startX);
    }
    const dragStop = () => {
        isDrag = false;
        ride.classList.remove("drag")
    }
    ride.addEventListener("mousedown", dragStart);
    ride.addEventListener("mousemove", drag);
    ride.addEventListener("mouseup", dragStop);
})