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
function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "louise@gmail.com" && password == "helloworld"){
        window.location.assign("userProfile.html");
        alert("Login Successfully");
    }else{
        alert("Invalid Information");
    }
    return;
}
document.addEventListener('DOMContentLoaded', function () {
    // Sample cart
    let cart = [];
    let totalCost = 0;

    // Function to add product to the cart
    function addToCart(product) {
        cart.push(product);
        totalCost += product.price;
        updateCart();
    }

    // Function to update the cart display
    function updateCart() {
        // Assuming you have an element with id "cart" to display the cart
        const cartElement = document.getElementById('cartTab');
        cartElement.innerHTML = '<h3>Shopping Cart</h3>';

        // Display each product in the cart
        cart.forEach(product => {
            cartElement.innerHTML += `<p> &nbsp&nbsp ${product.name} &nbsp&nbsp&nbsp&nbsp ₱${product.price}</p>`;
        });

        cartElement.innerHTML += `<span>&nbsp&nbsp&nbspTotal: ₱${totalCost}</span>`;
    }

    document.querySelectorAll('.addToCartBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            const product = {
                name: this.dataset.name,
                price: parseFloat(this.dataset.price)
            };
            addToCart(product);
        });
    });

    document.getElementById('checkoutBtn').addEventListener('click', function () {
        const paymentMode = document.getElementById('paymentMode').value;
        if (paymentMode) {
            alert(`Thank you for your purchase! Total amount: ₱${totalCost}. Payment mode: ${paymentMode}`);

            cart = [];
            totalCost = 0;
            updateCart();
        } else {
            alert('Please select a payment mode.');
        }
    });
});