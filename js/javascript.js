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
    $("body").on("click", ".xtable-button", function () {
        const target = $(this).attr("data-target");
        $(this).toggleClass("xtable-button-closed");
        $("#"+target).toggleClass("d-none");
    });
    $("body").on("click", ".form-new-navigation-toggle", function () {
        $(".form-new-navigation-toggle").toggleClass("reverse");
        $(".form-new-navigation").toggleClass("d-block");
    });
    $("body").on("click", ".form-new-navigation-list a", function () {
        $(".form-new-navigation-toggle").toggleClass("reverse");
        $(".form-new-navigation").toggleClass("d-block");
    });
    $('.group-selector').on('change', function() {
        const group = this.value;
        $(this).closest(".form-section").children(".group-selector-input").addClass("d-none");
        $(this).closest(".form-section").children(".group-selector-input[data-group-"+group+"]").removeClass("d-none");
    });
    if ($(".pagination-pages .num").length > 0) {
        $(".pagination-pages .num").last().removeClass("num");
    };
    $(".total-table-row-toggler").click(function (e) { 
        e.preventDefault();
        const target = $(this).attr("data-target");
        $(this).toggleClass("active");
        $(`.total-table-row.subrow[data-id='${target}']`).toggleClass("d-none");
    });
    $(".total-sidebar button").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).closest(".total").toggleClass("hide-content");
    });
});