
$(document).ready(function(){
// code inside is DOM ready

// --------------all albums view---------------------------------
var albumTemplate = _.template($('#albumTmpl').html());
 console.log("albumTemplate: ", albumTemplate);
  var albumHTML = "";

  // we need to merge our data from albumData with actual markup so that we can add to our html document
  _.each(albumData, function (currVal, idx, arr) {
    albumHTML += albumTemplate(currVal);
  });
  console.log(albumHTML);
  $('.allAlbums').html(albumHTML);

// --------------make it look like multiple pages-----------------
// when you click the button in the sidebar
$('nav button').on('click', function(event) {
    event.preventDefault();

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
      $(clickedSection).addClass('active-section');
      $('.allAlbums').removeClass('active-section');
      // $('nav').addClass('hidden');
      $('header').html(photoBy);

    });


});
