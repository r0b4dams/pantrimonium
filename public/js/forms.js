const shoppingAddModal = document.querySelector('#newShoppingItemForm');
const addBtn = document.querySelector('#addbtn');
const shoppingUpdateModal = document.querySelector('#updateShoppingItemForm');
const updateBtn = document.querySelector('#updatebtn');
const updateBtns = document.querySelectorAll('.updateBtn')
let id;

console.log(updateBtns);

updateBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    id = btn.id
    console.log(id);
  })
})

addBtn.addEventListener('click',  e=> {
  e.preventDefault();
  console.log('btn clicked');
  const formObj = {
    name: shoppingAddModal.querySelector('#addModalName').value,
    // quantity: shoppingAddModal.querySelector('#addModalQty').value,
    type: shoppingAddModal.querySelector('#addModalCat').value,
    unit_of_measurement: shoppingAddModal.querySelector('#addModalUOM').value,
    par_level: shoppingAddModal.querySelector('#addModalPar').value,
    exp_date: shoppingAddModal.querySelector('#addModalExp').value || "2021-05-07",
    section_id: shoppingAddModal.querySelector('#addModalSec').value,
  }
  // console.log(formObj);
  fetch('/api/items', {
    method:'POST',
    body:JSON.stringify(formObj),
    headers: {
      'Content-Type':'application/json'
    }
  }).then(res=>{
    if(res.ok){
      location.replace('/shopping');
      console.log('SUCCESS');
    } else {
      console.log('Error');
      location.reload();
    }
  })
});

updateBtn.addEventListener('click',  e=> {
  e.preventDefault();
  console.log(e.target);
  const formObj = {
    quantity: shoppingUpdateModal.querySelector('#updateModalQty').value,
  }
  // console.log(formObj);
  fetch(`/api/items/${id}`, {
    method:'PUT',
    body:JSON.stringify(formObj),
    headers: {
      'Content-Type':'application/json'
    }
  }).then(res=>{
    if(res.ok){
      console.log('SUCCESS');
    } else {
      console.log('Error');
    }
    location.reload();
  })
});






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

  delete portion
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


// const updateFormHandler = async (event) => {
//   event.preventDefault();
//   const name = document.querySelector('#updateModalTitle').value.trim();
//   const description = document.querySelector('#updateModalText').value.trim();
//   const id = document.querySelector('#updateID').value.trim();

//   if (name && description) {
//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ name, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to update blog');
//     }
//   }
// };


document
  .querySelector('.item-list')
  .addEventListener('click', ButtonHandler);

// document
//   .querySelector('.update-form')
//   .addEventListener('click', updateFormHandler);
