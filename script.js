var list = [];


$(".slatt").click(function() {
  let songName = $(".name").val();
  let songArtist = $(".artist").val();
  let songImage = $(".image").val();
  let songLink = $(".link").val();
  let songDate = $(".date").val();

  let songArtists = songArtist.toString();
  let songNames = songName.toString();
  let songLinks = songLink.toString();
  let songDates = songDate.toString();

  list.push({
    name: songNames,
    artist: songArtists,
    image: songImage,
    link: songLinks,
    date: songDates
  });

 
  $(".list").empty();
  
  for (let index = 0; index < list.length; index++) {
    let name1 = list[index]["name"];
    let artist1 = list[index]["artist"];
    let image1 = list[index]["image"];
    let link1 = list[index]["link"];
    let date1 = list[index]["date"];

    $(".list").append(`
<div class='box'>
    <div class='song'>
      <div class='index'>${index + 1}</div>
 <div class='image2'><img src="${image1}"/></div>
      <div class='name2'>Name: ${name1}</div>
      <div class='artist2'>Artist: ${artist1}</div>
      <div class='link2'><a href="link1">${"Link"}</a></div>
      <div class='date2'>Release Date: ${date1}</div>
    </div>
</div>
  `);
  }
  

  reset();
  $("#score").text(list.length);
});

function reset() {
  $(".name").val("");
  $(".artist").val("");
  $(".image").val("");
  $(".link").val("");
  $(".date").val("");
}
