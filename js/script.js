
$(document).ready(function () {
    $(".after-login").on("click", function () {
        $(".share-box-login").toggle();
        $(".overlay1").toggle();
    });
    $(".visibility").on("click", function () {
        $(this).parent().find(".dropdown-radio").show();
        $(".overlay1").show();
    });

    $(".overlay1").on("click", function () {
        $(".share-box-login").hide();
        $(".dropdown-radio").hide();
        $(this).hide();
    });

    $(".overlay2").on("click", function () {
        $(".delete-popup").hide();
        $(this).hide();
    });
    $(".close").on("click", function () {
        $(".delete-popup").hide();
    });
    $(document).on("scroll", function () {
        $(".share-box-login").hide();
        $(".dropdown-radio").hide();
    });

    $(".delete").on("click", function () {
        $(".delete-popup").show();
        $(".overlay2").show();
    });
    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
            $("#noFile").text("No file chosen...");
        }
        else {
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });
    $('#chooseFile2').bind('change', function () {
        var filename = $("#chooseFile2").val();
        if (/^\s*$/.test(filename)) {
            $("#noFile2").text("No file chosen...");
        }
        else {
            $("#noFile2").text(filename.replace("C:\\fakepath\\", ""));
        }
    });
    $('#chooseFile3').bind('change', function () {
        var filename = $("#chooseFile3").val();
        if (/^\s*$/.test(filename)) {
            $("#noFile3").text("No file chosen...");
        }
        else {
            $("#noFile3").text(filename.replace("C:\\fakepath\\", ""));
        }
    });
    $('.switch input').on("click", function () {
        $(this).parent().toggleClass('active');
    });
    var path = window.location.href;
    // because the 'href' property of the DOM element is the absolute path
    $('.nav-main a').each(function () {
        if (this.href === path) {
            $(this).addClass('active-page');
        }
    });

    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    $('.click-dropdown2').on('click', function () {
        $(this).parent().find('.dropdown-menu').toggle();
        $('.click-div-only-for-filter').show();
    });
    // $(document).on('scroll', function () {
    //     $('.dropdown-menu').hide();
    //     $('.click-div-only-for-filter').hide();
    // });
    $('.click-div-only-for-filter').on('click', function () {
        $(this).hide();
        $('.dropdown-menu').hide();
    });

    $('.link-edit .edit').on('click' , function(e) {
        e.preventDefault();
        $(this).parent().find('input').removeAttr( 'disabled' )
    })
    

});
