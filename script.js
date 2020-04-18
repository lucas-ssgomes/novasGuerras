Number.prototype.format = function () {
  return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

function submitDezenas() {
  const dezenas = jQuery('#inputDezenas').val();
  if (dezenas < 1 || dezenas > 20) {
    jQuery('#inputDezenas').css("border-color", "#e13c39");
    jQuery('#feedback').text("O número de dezenas deve estar entre 1 e 20. Se você rezou mais do que isso, insira separadamente os números!");
    jQuery('#feedback').css("color", "#e13c39");
    jQuery('#feedback').delay(8000).fadeOut("normal", function () {
      jQuery(this).text("");
      jQuery('#inputDezenas').css("border-color", "#cecece");
    });
  } else {
    jQuery('#inputDezenas').css("border-color", "#cecece");
    jQuery('#inputDezenas').val("");

    jQuery.ajax({
      type: 'POST',
      url: 'https://corona-nsg-jumasbrasil.herokuapp.com/registrar',
      data: { quantidade: dezenas },
      success: function (data) {
        var result = JSON.parse(JSON.stringify(data));
        var num = result.quantidade;
        num = num.format();

        jQuery("#qtd-dezenas").text(num);

        jQuery('#feedback').text("Dezenas registradas com sucesso!");
        jQuery('#feedback').css("color", "#4fc2a5");

        jQuery('#feedback').delay(8000).fadeOut("normal", function () {
          jQuery(this).text("");
        });
      },
      error: function (data) {
        console.log(data['responseJSON']['error']);

        jQuery('#feedback').text("Desculpe, aconteceu um erro inesperado, tente novamente.");
        jQuery('#feedback').css("color", "#e13c39");
      }
    });
  }

}

jQuery.ajax({
  type: 'GET',
  url: 'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
  success: function (data) {

    var result = JSON.parse(JSON.stringify(data));
    var num = result.infected;
    num = num.format();
    jQuery("#qtd-corona").text(num);
  }
});

jQuery.ajax({
  type: 'GET',
  url: 'https://corona-nsg-jumasbrasil.herokuapp.com/dezenas',
  success: function (data) {

    var result = JSON.parse(JSON.stringify(data));
    var num = result.quantidade;
    num = num.format();
    jQuery("#qtd-dezenas").text(num);
  }
});
