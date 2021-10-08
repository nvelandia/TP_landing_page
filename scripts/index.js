const upTheTop = () => window.scrollTo(0, 0);

function contact(datos) {
    event.preventDefault();

    let form = {
        fullname: datos.fullname.value,
        Email: datos.Email.value,
        Subject: datos.Subject.value,
        Message: datos.Message.value,
    };

    const isEmpty = Object.values(form).some((x) => x === "");
    if (isEmpty) {
        return alert("Please, all fields must be completed.");
    }
    if (!/\S+@\S+\.\S+/.test(form.Email)) {
        return alert("The email address is wrong.");
    }
    alert("Thank you for your message. We will contact you soon.");
    console.log("form:", form);
}

const menu = () => {
    let menu_mobile = document.getElementById("menu_mobile");

    if (menu_mobile.style.display) {
        menu_mobile.style.display = "";
    } else {
        menu_mobile.style.display = "initial";
    }
};
