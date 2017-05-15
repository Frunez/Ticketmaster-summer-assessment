'use strict';

function FestivalList(){
  this.festivalJSON = festivals;
  this.festivalHTML = "";
  this.imagesJSON = images;
  this.imagesHTML = "";
  this.videosJSON = videos;
  this.videosHTML = "";
}

FestivalList.prototype.list = function(){
  for (var i = 0; i < this.festivalJSON.length; i++) {
    this.festivalHTML +=
    "<a href=" + this.festivalJSON[i].url + ">" +
    "<li class='festival list-item' id='festival-" + i + "'>" +
    "<div class='festival-name'>" + this.festivalJSON[i].name + "</div>" +
    "<div class='festival-location'> &nbsp &nbsp" + this.festivalJSON[i].location + "</div>" +
    "<div class='festival-date'>" + this.festivalJSON[i].date + "</div>" +
    "</li></a>";
  };
  return this.festivalHTML;
};

FestivalList.prototype.images = function(){
  var imageCount = this.imagesJSON.length
  for (var i = 0; i < imageCount; i++) {
    this.imagesHTML +=
    "<div class='col-md-4'>" +
      "<div class='thumbnail'>" +
        "<a href='" + this.imagesJSON[i].url + "'>" +
          "<img class='image-link' id='image-" + i + "' src='" + this.imagesJSON[i].url + "'/></a>" +
      "<div class='image-name'>" + this.imagesJSON[i].name + "</div></div></div>";
  };
  return this.imagesHTML;
};

FestivalList.prototype.videos = function(){
  var videoCount = this.videosJSON.length
  for (var i = 0; i < videoCount; i++) {
    this.videosHTML +=
    "<div class='col-md-6'>" +
    "<div class='video-name'>" + this.videosJSON[i].name + "</div>" +
    "<div class='embed-responsive embed-responsive-16by9'>" +
          "<iframe class='video' id='video-" + i + "' src='" + this.videosJSON[i].embed + "' frameborder='0' allowfullscreen></iframe></div></div>";
  };
  return this.videosHTML;
};
