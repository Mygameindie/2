// Function to start the game by hiding the main menu and showing the game container
function enterGame() {
    const mainMenu = document.querySelector('.main-menu');
    const gameContainer = document.querySelector('.game-container');
    if (mainMenu && gameContainer) {
        mainMenu.style.display = 'none';
        gameContainer.style.display = 'flex';
    } else {
        console.error("Main menu or game container not found");
    }
}

// Function to toggle visibility of items within a category
function toggleVisibility(category) {
    const elements = document.querySelectorAll(`.${category}`);
    elements.forEach((element) => {
        element.style.visibility = element.style.visibility === 'visible' ? 'hidden' : 'visible';
    });
}

// Initial setup to ensure specific items are visible
document.addEventListener("DOMContentLoaded", function () {
    const initialItems = document.querySelectorAll(".boyboxers, .girlbra, .panties");
    initialItems.forEach((element) => {
        element.style.visibility = "visible";
        element.addEventListener("click", function () {
            toggleVisibility(element.classList[1]);
        });
    });
});

// Function to cycle through items in categories like eyes or mouth
function cycleItems(category) {
    const items = document.querySelectorAll(`.${category}`);
    if (items.length === 0) return;

    let currentIndex = -1;

    // Hide the currently visible item and find its index
    items.forEach((item, index) => {
        if (item.style.visibility === 'visible') {
            item.style.visibility = 'hidden';
            currentIndex = index;
        }
    });

    // Show the next item, looping back to the first if at the end
    const nextIndex = (currentIndex + 1) % items.length;
    items[nextIndex].style.visibility = 'visible';
}

// Add click events to cycle through specific categories
document.addEventListener("DOMContentLoaded", function () {
    const eyeCategories = ["left-eye", "right-eye"];
    const mouthCategories = ["mouth"];

    eyeCategories.forEach((category) => {
        document.querySelectorAll(`.${category}`).forEach((element) => {
            element.addEventListener("click", function () {
                cycleItems(category);
            });
        });
    });

    mouthCategories.forEach((category) => {
        document.querySelectorAll(`.${category}`).forEach((element) => {
            element.addEventListener("click", function () {
                cycleItems(category);
            });
        });
    });
});

// Function to show a specific item in a category
function showItem(category, index) {
    const items = document.querySelectorAll(`.${category}`);
    
    // Hide all items in the category
    items.forEach((item) => {
        item.style.visibility = 'hidden';
    });

    // Show the selected item
    const selectedItem = document.getElementById(`${category}-item${index}`);
    if (selectedItem) {
        selectedItem.style.visibility = 'visible';
    } else {
        console.error(`Item with id ${category}-item${index} not found`);
    }
}