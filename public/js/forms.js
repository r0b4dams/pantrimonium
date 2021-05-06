const ButtonHandler = async (event) => {
  let action = "";
  if (event.target.hasAttribute('id')) {
    action = event.target.getAttribute('id');
  }
  if (action =="hide") {
    var x = document.getElementById(event.target.getAttribute('data-id'));
    x.style.display = "none";
  }
  if (event.target.hasAttribute('data-name') && action=="update") {
    console.log("updating");
    document.getElementById("updateModalName").defaultValue = event.target.getAttribute('data-name');
    document.getElementById("updateModalQty").defaultValue = event.target.getAttribute('data-qty');
    document.getElementById("updateModalCat").defaultValue = event.target.getAttribute('data-cat');
    document.getElementById("updateID").defaultValue = event.target.getAttribute('data-id');
  }

  //delete portion
  if (event.target.hasAttribute('data-id') && action=="delete") {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete');
    }
  }

};

const updateFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#updateModalTitle').value.trim();
  const description = document.querySelector('#updateModalText').value.trim();
  const id = document.querySelector('#updateID').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to update blog');
    }
  }
};


document
  .querySelector('.item-list')
  .addEventListener('click', ButtonHandler);

document
  .querySelector('.update-form')
  .addEventListener('click', updateFormHandler);
