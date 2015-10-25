
$(document).ready(function(){
// code inside is DOM ready

var albumTemplate = _.template($('#albumTmpl').html());
 console.log("albumTemplate: ", albumTemplate);
  var albumHTML = "";

  // we need to merge our data from albumData with actual markup so that we can add to our html document
  _.each(albumData, function (currVal, idx, arr) {
    albumHTML += albumTemplate(currVal);
  });
  console.log(albumHTML);
  $('.allAlbums').html(albumHTML);

// picture js


//
// // make it look like multiple pages
// $('homeNav').click(function(event){
//   event.preventDefault();
//   $('allAlbums').css('display', 'inline-block');
//   $('allAlbums').siblings('section').css('display', 'none');
// });
//   $('album1').click(function(event){
//     event.preventDefault();
//     $('album1').css('display', 'inline-block');
//     $('album1').siblings('section').css('display', 'none');
//   });
//   $('album2').click(function(event){
//     event.preventDefault();
//     $('album2').css('display', 'inline-block');
//     $('album2').siblings('section').css('display', 'none');
//   });
//   $('album3').click(function(event){
//     event.preventDefault();
//     $('album3').css('display', 'inline-block');
//     $('album3').siblings('section').css('display', 'none');
//   });
//
// $('nav button a').on('click', function(event) {
//     event.preventDefault();
//
//       var clickedSection = "." + $(this).attr('rel');
//       console.log(clickedSection);
//       $(clickedSection).addClass('active-section');
//       $(clickedSection).siblings('section').removeClass('active-section');
//     });



});
