console.log('script linked');
const addSectionItemForm = document.querySelector('#new-section-item-form');
const addItemBtn = document.querySelector('#add-btn');
const sectionUpdateModal = document.querySelector('#update-item-form');
const sectionUpdateBtn = document.querySelector('#update-btn');
const sectionUpdateBtns = document.querySelectorAll('.update-btn');
let id;


addItemBtn.addEventListener('click',  e=> {
    e.preventDefault();
    console.log('btn clicked');
    const formObj = {
      name: addSectionItemForm.querySelector('#addModalName3').value,
      type: addSectionItemForm.querySelector('#addModalCat3').value,
      quantity: addSectionItemForm.querySelector('#addModalQty3').value,
      unit_of_measurement: addSectionItemForm.querySelector('#addModalUOM3').value,
      par_level: addSectionItemForm.querySelector('#addModalPar3').value,
      exp_date: addSectionItemForm.querySelector('#addModalExp3').value || null,
      section_id: addSectionItemForm.querySelector('#addModalSec3').value,
    }
    console.log(formObj);
    fetch('/api/items', {
      method:'POST',
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
    })
  });

// console.log(sectionUpdateBtns);

sectionUpdateBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    id = btn.id
    console.log(id);
  })
})

sectionUpdateBtn.addEventListener('click',  e=> {
  e.preventDefault();
  console.log(e.target);
  const formObj = {
    quantity: sectionUpdateModal.querySelector('#updateModalQty2').value,
    exp_date: sectionUpdateModal.querySelector('#addModalExp2').value,
  }
  console.log(formObj);
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
    // location.reload();
  })
});