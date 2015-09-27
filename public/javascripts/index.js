
$(document).ready(function(){
  postLink();
  searchLink();
  function postLink() {
    $(".postLink").click(function() {
      $("#toPostPage").submit();
    });
  }
  function searchLink() {
    $(".searchLink").click(function() {
      $("#toSearchPage").submit();
    });
  }
});
