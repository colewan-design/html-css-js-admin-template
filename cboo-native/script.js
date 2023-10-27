document.addEventListener("DOMContentLoaded", function () {
    // Select the placeholder element
    const sidebarPlaceholder = document.getElementById("sidebar-placeholder");

    // Use fetch to load the sidebar content
    fetch("sidebar.html")
        .then((response) => response.text())
        .then((data) => {
            // Insert the sidebar content into the placeholder
            sidebarPlaceholder.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading sidebar: " + error);
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the placeholder element for the top navigation bar
    const topNavbarPlaceholder = document.getElementById("topnavbar-placeholder");

    // Use fetch to load the top navigation bar content from navbar.html
    fetch("navbar.html")
        .then((response) => response.text())
        .then((data) => {
            // Insert the top navigation bar content into the placeholder
            topNavbarPlaceholder.innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading top navigation bar: " + error);
        });
});

$(document).ready(function () {
    // When the dropdown button is clicked
    $(".dropdownbtn").on("click", function () {
        // Toggle the 'rotate' class on the icon to rotate it
        $(this).find("i").toggleClass("rotate");
    });
});



// INCLUDE JQUERY & JQUERY UI 1.12.1
$(function() {
    // Initialize datepickers
    $(".datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        duration: "fast"
    });

    // Set the date range on the end datepicker
    $("#start-date").datepicker("option", "onClose", function(selectedDate) {
        $("#end-date").datepicker("option", "minDate", selectedDate);
    });

    // Set the date range on the start datepicker
    $("#end-date").datepicker("option", "onClose", function(selectedDate) {
        $("#start-date").datepicker("option", "maxDate", selectedDate);
    });
});

// JavaScript to handle the dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    const actionButton = document.getElementById("action-btn");
    const actionMenu = document.getElementById("action-menu");

    actionButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the click event from reaching the document

        if (actionMenu.style.display === "block") {
            actionMenu.style.display = "none";
        } else {
            actionMenu.style.display = "block";
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!actionButton.contains(event.target) && !actionMenu.contains(event.target)) {
            actionMenu.style.display = "none";
        }
    });
});


// JavaScript to handle the dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    const tableActionButton = document.getElementById("table-action-btn");
    const tableActionMenu = document.getElementById("table-action-menu");

    tableActionButton.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the click event from reaching the document

        if (tableActionMenu.style.display === "block") {
            tableActionMenu.style.display = "none";
        } else {
            tableActionMenu.style.display = "block";
        }
    });

    // Close the dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!tableActionButton.contains(event.target) && !tableActionMenu.contains(event.target)) {
            tableActionMenu.style.display = "none";
        }
    });
});






