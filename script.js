var infecteds;

jQuery.ajax({
    type: 'GET',
    url: 'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
    success: function (data) {

        var result = JSON.parse(JSON.stringify(data));

        jQuery("#qtd").text(result.infected);
        console.log(infecteds);
    }
});