$(document).ready(function(){
  $("#botao").click(function(){
    $("p").hide("slow", function(){
      alert("O parágrafo agora está oculto.");
    });
  });
});
