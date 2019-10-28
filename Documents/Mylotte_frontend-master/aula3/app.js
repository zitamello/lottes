const apiKey = "JZyUh3qNmvqGtXSg4bN0AeDNY6Q9iC07"
const limit = 40

function getTop() {
  let items = []

  let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&rating=G`
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      let items = JSON.parse(xhr.responseText);
      updateGrid(items.data)
    }
    else {
      alert('Erro ao buscar GIFs' + xhr.status);
    }
  };

  xhr.send();
}

function updateGrid(items) {
  let $container = $("#grid");
  let listIndex = 0;

  console.log(items)
  items.forEach(function(i) {
    $('<div />', {
      class: "gif",
      append: $('<img />',{
        src: i.images.fixed_width.url
      }),
      appendTo: $container
    });
  });

  $(".ui.container").html()
}

$( document ).ready(function() {
  getTop()
});
