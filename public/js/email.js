const emailBtn = document.querySelector('#emailBtn');

// request server to send shopping list to user via email
emailBtn.addEventListener('click', async function() {
    let textList = [];
    const itemsList = document.querySelectorAll(".item-name");       // returns array
    itemsList.forEach(function(item) {
      if (!item.parentNode.style.display) {
        textList.push(item.textContent);
      }
    });
    console.log(JSON.stringify());

    const response = await fetch('/auth/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(textList) // body data type must match "Content-Type" header
      });
      
      console.log(response);
      if (response.ok) {
        alert("E-mail sent!");
      } else {
        alert(response.statusText);
      }
});