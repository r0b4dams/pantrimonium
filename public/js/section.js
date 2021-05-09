console.log("section forms js linked");

const addItemBtn = document.querySelector('#add-item-button');       // modal form add button
const addItemForm = document.querySelector('#add-item-form');

const updateItemBtn = document.querySelector('#update-item-btn');    // modal form update button
const updateItemForm = document.querySelector('#update-item-form');

const rowUpdateBtns = document.querySelectorAll('.update-btn');      // all row item update buttons
const rowDeleteBtns = document.querySelectorAll(".delete-btn");      // all row item update buttons

// add event listeners to every row update & delete button rendered to page
// when button is clicked, id variable is updated to button's id
// global id variable is then injected into PUT/POST/DELETE url /api/items/:id
let id; 
rowUpdateBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        id = parseInt(e.target.getAttribute("data-id"));
    })
});

// DELETE
// completely removes an item from the db
rowDeleteBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        id = parseInt(e.target.getAttribute("data-id"));

        // send a delete request to /api/items/:id
        const deleteUrl = `/api/items/${id}`
        fetch(deleteUrl, {
            method:'DELETE',
        }).then(res=>{
            if(res.ok){
                console.log('SUCCESS');
                location.reload();
            } else {
                console.log('Error');
            }
        });
    })
});

// PUT
// update item data
updateItemBtn.addEventListener('click',  e=> {
    e.preventDefault();

    // collect input data from modal form
    const inputDesc = updateItemForm.querySelector('#update-modal-name').value.trim();
    const inputCat = updateItemForm.querySelector('#update-modal-cat').value.trim();
    const inputQty  = updateItemForm.querySelector('#update-modal-qty').value
    const inputPar = updateItemForm.querySelector('#update-modal-par').value
    const inputUOM = updateItemForm.querySelector('#update-modal-uom').value.trim();
    const inputExp = updateItemForm.querySelector('#update-modal-exp').value || null;      // null if no date selected
    const inputSection = updateItemForm.querySelector('#update-modal-section').value;

    // build object
    const updateFormObj = {
    name: inputDesc,
    type: inputCat,
    quantity: inputQty,
    unit_of_measurement: inputUOM,
    par_level: inputPar,
    exp_date: inputExp,
    section_id: inputSection
    }

    // id is set by click event attached to row update button   
    const putUrl = `/api/items/${id}`;

    fetch(putUrl, {
        method:'PUT',
        body:JSON.stringify(updateFormObj),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if(res.ok){
            console.log('SUCCESS');
            location.reload();
        } else {
            console.log('Error');
        }
    });
  });

// POST
// creates a new item in db with given data
addItemBtn.addEventListener('click',  e=> {
  e.preventDefault();

    // collect input data from modal form
    const inputDesc = addItemForm.querySelector('#add-modal-name').value.trim();
    const inputCat = addItemForm.querySelector('#add-modal-cat').value.trim() || null; 
    const inputQty  = addItemForm.querySelector('#add-modal-qty').value
    const inputPar = addItemForm.querySelector('#add-modal-par').value|| null; 
    const inputUOM = addItemForm.querySelector('#add-modal-uom').value.trim() || null;
    const inputExp = addItemForm.querySelector('#add-modal-exp').value || null;      // null if no date selected
    const sectionID = parseInt(document.querySelector('#section-head').getAttribute("data-id"));

    //build object
    const addFormObj = {
    name: inputDesc,
    type: inputCat,
    quantity: inputQty,
    unit_of_measurement: inputUOM,
    par_level: inputPar,
    exp_date: inputExp,
    section_id: sectionID
    }

    const postUrl = `/api/items/`;

    console.log(addFormObj);
    console.log(postUrl);

    // post request to server to update db
    fetch(postUrl, {
      method:'POST',
      body:JSON.stringify(addFormObj),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(res=>{
        if(res.ok){
            console.log('SUCCESS');
            location.reload();
        } else {
            console.log('Error');
        }
    });

});