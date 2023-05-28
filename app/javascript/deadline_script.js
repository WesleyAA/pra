let deadline;
document.addEventListener('DOMContentLoaded', function() {
  deadline = moment();
});

const obj = {
  initial_date: '', 
  deadline_type: '',
  
  get initial_date() {
    return moment(document.getElementById('initial_date').value).format("DD/MM/YYYY");
  },

  get deadline_type() {
    if (document.getElementsByName('deadline_type')[0].checked) {
      return 'calendar';
    } else {
      return 'working';
    }
  },

  get briefcase_number() {
    return document.getElementById('briefcase_number').value;
  },

  get description() {
    return document.getElementById('description').value;
  }

};

function calculateDeadline(publicationDate, maxDays, countMethod) {
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

function saveDeadline() {
  const url = '/deadlines';
  const data = {
    final_date: deadline.format("DD/MM/YYYY"),
    initial_date: obj.initial_date,
    deadline_type: obj.deadline_type,
    briefcase_number: obj.briefcase_number,
    description: obj.description
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: ' + response.errors);
      }
      return response.json();
    })
    .then(result => {
      alert(result.status);
    })
    .catch(error => {
      alert(error)
    });
}