// Armazenar informações de prazo máximo e data de publicação

// Função para calcular o prazo
function calculateDeadline(publicationDate, maxDays, countMethod) {
    let deadline;
    publicationDate = moment(publicationDate);
    maxDays = parseInt(maxDays);
    if (countMethod[0].checked) {
      deadline = moment(publicationDate).add(maxDays, "days");
    } else {
      // Criar um loop para adicionar somente dias úteis
      let daysAdded = 0;
      while (daysAdded < maxDays) {
        publicationDate = moment(publicationDate).add(1, "days");
        if (publicationDate.day() !== 0 && publicationDate.day() !== 6) {
          daysAdded++;
        }
      }
      deadline = publicationDate;
    }
  
    document.getElementById('res').innerHTML = `O Prazo Fatal é de ${deadline.format("DD/MM/YYYY")}!`;
}

