// Function to send info  / session storage
welcomeBoxvali.addEventListener("submit", validation);
function validation(e) {
  e.preventDefault();
  let form = e.target;
  let inputA = form.children[1].value;
  let inputB = form.children[3].value;

  console.log(form.children[1].value);
  console.log(form.children[3].value);
}

// delete form once is completed
