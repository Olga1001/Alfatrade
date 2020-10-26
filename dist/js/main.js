"use strict";

$(function () {
  // range
  $("#range").slider({
    range: "min",
    value: 4,
    step: 1,
    min: 1,
    max: 7
  });
  $("#range_v2").slider({
    range: "min",
    value: 4,
    step: 1,
    min: 1,
    max: 5
  }); // slider 

  $(".slider-product").slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    slidesToShow: 3,
    dots: true,
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        variableWidth: false
      }
    }]
  });
  $(".slider-review").slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
    focusOnSelect: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        variableWidth: false
      }
    }]
  });
  $(".partners-slider").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    dots: false,
    centerMode: true
  });
});