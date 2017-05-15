$(document).ready(function() {
    $('#media-overlay').hide();

    var displayFestivalList = new FestivalList();

    var imagesHTML = displayFestivalList.images();

    var videosHTML = displayFestivalList.videos();

    document.getElementById("festival-list").innerHTML = displayFestivalList.list();

    $(".img-btn").on('click', function() {
        $("#media-overlay").toggle(500);
        $("#main-content").toggle();
        $("#media-title").text("IMAGES|2016");
        document.getElementById("media-display").innerHTML = imagesHTML;
    });

    $(".vid-btn").on('click', function() {
        $("#media-overlay").toggle(500);
        $("#main-content").toggle();
        $("#media-title").text("VIDEOS|2016");
        document.getElementById("media-display").innerHTML = videosHTML;
    });

    $("#close").on('click', function() {
        $("#media-overlay").toggle(500);
        $("#main-content").toggle();
    });

});
