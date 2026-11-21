
// Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);

        toast.style.cssText = `
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: #123c8c;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            font-size: 16px;
            z-index: 9999;
        `;
    }

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}

// Smooth Scrolling and Toast Notification
document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");
    const bookingForm = document.getElementById("booking-form");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {

            if (bookingForm) {
                event.preventDefault();

                bookingForm.scrollIntoView({
                    behavior: "smooth"
                });

                showToast("Welcome! You can book your IPL tickets now.");
            }
        });
    });

});

