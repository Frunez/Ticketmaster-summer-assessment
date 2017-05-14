'use strict';

function FestivalList(){
  this.festivalJSON = festivals;
  this.festivalHTML = "";
  this.imagesJSON = images;
  this.imagesHTML = "";
}

FestivalList.prototype.list = function(){
  for (var i = 0; i < this.festivalJSON.length; i++) {
    this.festivalHTML +=
    "<a href=" + this.festivalJSON[i].url + ">" +
    "<li class='festival list-item' id='festival-" + i + "'>" +
    "<span class='festival-name'>" + this.festivalJSON[i].name + "</span>" +
    "<span class='festival-location'> &nbsp &nbsp" + this.festivalJSON[i].location + "</span>" +
    "<span class='festival-date'>" + this.festivalJSON[i].date + "</span>" +
    "</li></a>";
  };
  return this.festivalHTML;
};

FestivalList.prototype.images = function(){
  for (var i = 0; i < 3; i++) {
    this.imagesHTML +=
    "<div class='image-box col-md-2'>" +
    "<img class='image' id='image-" + i +
    "' src='" + this.imagesJSON[i].url + "'/>" +
    "<div class='image-name'>" + this.imagesJSON[i].name + "</div></div>"
  };
  return this.imagesHTML;
};
