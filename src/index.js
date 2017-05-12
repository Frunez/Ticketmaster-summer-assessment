'use strict';

function FestivalList(){
  this.festivalJSON = festivals;
  this.festivalHTML = ""
}

FestivalList.prototype.list = function(){
  for (var i = 0; i < this.festivalJSON.length; i++) {
    this.festivalHTML +=
    "<li class='festival list-group-item col-md-8' id='festival-" + i + "'>" + "<a href=" + this.festivalJSON[i].url + ">" +
    "<span class='festival-name'>" + this.festivalJSON[i].name + "</span>" +
    "<span class='festival-location'>" + this.festivalJSON[i].location + "</span>" +
    "<span class='festival-date'>" + this.festivalJSON[i].date + "</span>" +
    "</a></li>";
  };
  return this.festivalHTML
};
