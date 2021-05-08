if (document.querySelector("#section-container")) {

    console.log("script running");

  document
    .querySelector("#section-container")
    .addEventListener("click", (e) => {

        console

      if (e.target.className.indexOf("update")) {

        console.log("*****",e.target);

        const id = e.target.getAttribute("data-id");
        document
          .querySelector("#update-form-route")
          .setAttribute("data-id", id);
      }
    });

  document
    .querySelector("#update-form-route")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("****************submit started");

      console.log(e.target);
      const formObj = {
        quantity: document.querySelector("#updateModalQty2").value,
        exp_date: document.querySelector("#addModalExp2").value,
      };

      const id = document
        .querySelector("#update-form-route")
        .getAttribute("data-id");

      console.log("*****id", id);

      // console.log(formObj);
      fetch(`/api/items/${id}`, {
        method: "PUT",
        body: JSON.stringify(formObj),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log("SUCCESS", res);
        } else {
          console.log("Error");
        }
        location.reload();
      });
    });
}
