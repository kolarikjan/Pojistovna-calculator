$(document).ready(function () {
    $("body").on("click", ".form-section-hidden-toggler", function () {
        if ($(this).is(":checked")) {
            $(this).closest(".form-section-hidden").addClass("active");
        } else {
            $(this).closest(".form-section-hidden").removeClass("active");
        }
    });
    $("body").on("click", ".radio-toggle", function () {
        const target = $(this).attr("data-target");
        const radio = $(this).attr("data-radio");
        const inputVal = $("input[name='"+radio+"']:checked").val();
        if (inputVal && ( inputVal == 1 || inputVal == "A" )) {
            $(target).removeClass("d-none");
        } else {
            $(target).addClass("d-none");
        }
    });
});