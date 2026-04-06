    /* Oswaldo */


    /* Luis */
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

        const divs = form.getElementsByClassName("form-element");

            Array.from(divs).forEach(div => {
                let message = "";
                const divInput = div.getElementsByTagName("input").item(0);

                    console.log(divInput)
                    const inputType = divInput.getAttribute("valtype");


               if(inputType !== null){
                    switch(inputType){
                        case "email":
                            message = "te falto un @";
                            break;
                        default:
                            console.log(divInput.getAttribute("valtype"))
                            message = "";
                    }

                    if (message !== null && message.length !== 0) {
                        div.getElementsByClassName("invalid-feedback").item(0).innerHTML = message;
                        console.log(message.length)
                        divInput.setCustomValidity(message);
                    }
                }
                
                
            });

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
        form.classList.add('was-validated')
           

    }, false)
  })
})()


    /* Gio  */


    /* Erick */


    /* Mai */


    /* Alex */


    