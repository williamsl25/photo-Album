
$(document).ready(function(){
// code inside is DOM ready

// *** all albums view ***
var albumTemplate = _.template($('#albumTmpl').html());
 console.log("albumTemplate: ", albumTemplate);
  var albumHTML = "";

  // we need to merge our data from albumData with actual markup so that we can add to our html document
  _.each(albumData, function (currVal, idx, arr) {
    albumHTML += albumTemplate(currVal);
  });
  console.log(albumHTML);
  $('.allAlbums').html(albumHTML);

  // button to return to default home page
  $('nav').on('click', '.home', function(event) {
      event.preventDefault();
      console.log(this);

    var albumTemplate = _.template($('#albumTmpl').html());
      var albumHTML = "";

      // we need to merge our data from albumData with actual markup so that we can add to our html document
      _.each(albumData, function (currVal, idx, arr) {
        albumHTML += albumTemplate(currVal);
      });
      $('.allAlbums').html(albumHTML);
      $('.allAlbums').addClass('active-section');
      $('.picture1').removeClass('active-section');
    });

// *** make it look like multiple pages ***
// when you click the button in the sidebar
$('nav').on('click', 'button', function(event) {
    event.preventDefault();
      console.log(clickedSection);
      var clickedSection = "." + $(this).find('a').attr('rel');
      var correctAlbum = albumData.filter(function(currItem){
        return currItem.name === clickedSection.split(".")[1];
      });
      var photoBy = correctAlbum[0].photo_by;
      // correctAlbum is already returned, so now to access a different attribute, you just need to put correctAlbum[0] which is the entire object and .photo_by

      console.log(correctAlbum[0]);
      var pictureTemplate = _.template($('#pictureTmpl').html());
      var pictureHTML = "";

      // we need to merge our data from pictureData with actual markup so that we can add to our html document
      pictureHTML += pictureTemplate(correctAlbum[0]);
      $('.picture1').html(pictureHTML);
      $('.picture1').addClass('active-section');
      $('.allAlbums').removeClass('active-section');
      // $('.allAlbums').toggle('active-section');
// can't figure out how to get clicked images to be hidden when I toggle - it shows all albums and the images inside the clicked button
// can't figure out how to go back to displaying all albums
      $('header').html(photoBy);

    });
// *** click on image of album ***
    $('.allAlbums').on('click', '.album', function(event) {
        event.preventDefault();
          var clickedSection= $(this).children('h1').text();
          var correctAlbum = albumData.filter(function(currItem){
            return currItem.name === clickedSection;
          });
          var pictureTemplate = _.template($('#pictureTmpl').html());
          var pictureHTML = "";

          _.each(correctAlbum, function (currItem) {
            pictureHTML += pictureTemplate(currItem);
          });

          $('.picture1').html(pictureHTML);
          $('.picture1').addClass('active-section');
          $('.allAlbums').removeClass('active-section');

        });

});
