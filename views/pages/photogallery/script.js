$( document ).ready(function() {
  $( "#SearchSubmit" ).click(function() {
    var topic = $("#SearchInput").val(); console.log("You type: " + topic);
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $( ".createdPic" ).remove();
    $.getJSON( flickerAPI, {
      tags: topic,
      tagmode: "any",
      format: "json"
    })
      .done(function( data ) {
        $.each( data.items, function( i, item ) {
          var a = '<div class="createdPic"><img src="'+ item.media.m +'"></div>'
          $("#images").append(a);
          if ( i === 11 ) {
            return false;
          }
        });
      });
  });
});
