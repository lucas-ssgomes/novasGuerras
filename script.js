var infecteds;

jQuery.ajax({
  type: 'GET',
  url: 'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
  success: function (data) {

    var result = JSON.parse(JSON.stringify(data));

    jQuery("#qtd-corona").text(result.infected);
  }
});

var dezenas;

jQuery.ajax({
  type: 'GET',
  url: 'https://corona-nsg-jumasbrasil.herokuapp.com/dezenas',
  success: function (data) {

    var result = JSON.parse(JSON.stringify(data));

    jQuery("#qtd-dezenas").text(result.quantidade);
  }
});
