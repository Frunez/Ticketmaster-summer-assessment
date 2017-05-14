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
  var imageLimit
  if(this.imagesJSON.length >= 9){
    imageLimit = 9;
  } else {
    imageLimit = this.imagesJSON.length
  }
  for (var i = 0; i < imageLimit; i++) {
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
  var videoLimit
  if(this.videosJSON.length >= 12){
    videoLimit = 6;
  } else {
    videoLimit = this.videosJSON.length
  }
  for (var i = 0; i < videoLimit; i++) {
    this.videosHTML +=
    "<div class='col-md-6'>" +
          "<iframe width='540' height='310' class='video' id='video-" + i + "' src='" + this.videosJSON[i].embed + "' frameborder='0' allowfullscreen></iframe>" +
      "<div class='video-name'>" + this.videosJSON[i].name + "</div></div>";
  };
  return this.videosHTML;
};
