
const emailBtn = document.querySelector('#emailBtn');

// request server to send shopping list to user via email
emailBtn.addEventListener('click', async function() {
    console.log("button clicked");
    const response = await fetch('/auth/email', {
        method: 'POST',
      });
      
      console.log(response);
      if (response.ok) {
        alert("E-mail sent!");
      } else {
        alert(response.statusText);
      }
});