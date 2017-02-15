$(document).ready(function(){
  $("#formOne").sumbmit(function(event){
    $(".person1").text(person1Input);
    $("person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    (#"story").show();
    event.preventDefault();

    });
});
