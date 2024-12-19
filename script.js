$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = $(this).serialize(); // Serialize form data
        $.ajax({
            url: "process.php",
            type: "POST",
            data: formData,
            success: function (response) {
                showPopup("Registration Completed Successfully!", "success");
            },
            error: function () {
                showPopup("Registration Failed. Please Try Again.", "error");
            }
        });
    });

    // Function to show the pop-up
    function showPopup(message, type) {
        const popup = $("#popup");
        const popupMessage = $("#popupMessage");
        const icon = $(".icon");

        popupMessage.text(message);
        if (type === "success") {
            icon.removeClass("error").addClass("success").text("✔️");
        } else {
            icon.removeClass("success").addClass("error").text("❌");
        }

        popup.fadeIn();

        // Close the modal on button click
        $("#closePopup").on("click", function () {
            popup.fadeOut();
        });
    }
});
