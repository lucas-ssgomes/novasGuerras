// jQuery.ajax({
//     type: 'GET',
//     url: 'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true',
//     success: function (data) {

//         const result = JSON.parse(JSON.stringify(data));

//         jQuery("#qtd").text(result.infected);
//     }
// });

function submitDezenas() {
  const inputField = document.querySelector('#inputDezenas');
  const dezenas = inputField.value;
  const feedback = document.querySelector('#feedback');
  if (dezenas < 1 || dezenas > 20) {
    inputField.style.borderColor = "#e13c39";
    feedback.textContent = "O número de dezenas deve estar entre 1 e 20.";
    feedback.style.color = '#e13c39';
  } else {
    inputField.style.borderColor = "#cecece";
    inputField.value = '';
    jQuery.ajax({
      type: 'POST',
      url: 'https://corona-nsg-jumasbrasil.herokuapp.com/registrar',
      data: {quantidade: dezenas},
      success: function (data) {
        console.log(data);
      },
      error: function (data) {
        console.log(data['responseJSON']['error']);
      }
  });
    feedback.textContent = "Dezenas registradas com sucesso!";
    feedback.style.color = '#008000';
    console.log(dezenas);
  }
  
}