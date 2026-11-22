
// Toast Notification Function
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

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll(".book-btn");
    const bookingForm = document.getElementById("booking-form");

    bookButtons.forEach(button => {
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

    // Activity 7: Booking Summary Live Update
    const matchSelect = document.getElementById("match");
    const standSelect = document.getElementById("stand");
    const quantityInput = document.getElementById("tickets");

    const summaryMatch = document.getElementById("summary-match");
    const summaryStand = document.getElementById("summary-stand");
    const ticketPrice = document.getElementById("ticket-price");
    const summaryQuantity = document.getElementById("summary-quantity");
    const totalAmount = document.getElementById("total-amount");

    const prices = {
        "General Stand": 800,
        "Premium Stand": 1500,
        "VIP Stand": 2500
    };

    function updateSummary(showMessage = true) {

        const match = matchSelect.value || "Not selected";
        const stand = standSelect.value || "Not selected";
        const quantity = Math.max(1, Number(quantityInput.value) || 1);

        const price = prices[stand] || 0;
        const total = price * quantity;

        summaryMatch.textContent = match;
        summaryStand.textContent = stand;
        ticketPrice.textContent = price;
        summaryQuantity.textContent = quantity;
        totalAmount.textContent = total;

        if (showMessage) {
            showToast("Booking Summary Updated!");
        }
    }

    matchSelect.addEventListener("change", () => updateSummary());
    standSelect.addEventListener("change", () => updateSummary());
    quantityInput.addEventListener("change", () => updateSummary());

    updateSummary(false);
});
// Activity 8: Team Filter and Grid/List View

document.addEventListener("DOMContentLoaded", function () {

    const filter = document.getElementById("team-filter");
    const matches = document.querySelectorAll("#matches .match");
    const matchSection = document.getElementById("matches");

    // Filter matches by team
    filter.addEventListener("change", function () {
        const selectedTeam = filter.value;

        matches.forEach(function (match) {
            if (
                selectedTeam === "all" ||
                match.textContent.toUpperCase().includes(selectedTeam)
            ) {
                match.style.display = "block";
            } else {
                match.style.display = "none";
            }
        });
    });

    // Grid View
    document.getElementById("grid-view").addEventListener("click", function () {
        matchSection.style.gridTemplateColumns = "repeat(2, 1fr)";
    });

    // List View
    document.getElementById("list-view").addEventListener("click", function () {
        matchSection.style.gridTemplateColumns = "1fr";
    });

});
// Activity 8: Mobile Hamburger Menu

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.querySelector("nav");

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("menu-open");
    });

});