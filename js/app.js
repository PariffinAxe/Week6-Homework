const createNewAthlete = function(form) {
  const newAthlete = document.createElement('li');

  const name = document.createElement('p');
  name.textContent = form.name.value;
  newAthlete.appendChild(name);

  const age = document.createElement('p');
  age.textContent = form.age.value
  newAthlete.appendChild(age);

  const sport = document.createElement('p');
  sport.textContent = form.sport.value
  newAthlete.appendChild(sport);

  if (form.active.value === "yes") {
    newAthlete.classList.add('is-active');
  } else {
    newAthlete.classList.add('is-not-active');
  };

  return newAthlete;
}

const handleDeleteAllClick = function(){
  const athletes = document.querySelector('#athlete-list');
  athletes.innerHTML = '';
}




const handleNewAthleteFormSubmit = function (event) {
  event.preventDefault();  

  const newAthlete = createNewAthlete(event.target);
  const athletes = document.querySelector('#athlete-list');
  athletes.appendChild(newAthlete);  

  event.target.reset();
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded")
  const newAtheleteForm = document.querySelector('#new-athlete-form');
  newAtheleteForm.addEventListener('submit', handleNewAthleteFormSubmit);
  
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})