function getNewsletter() {
    let userEmail = document.getElementById("email").value;
    let send;
    if (userEmail !== undefined && userEmail !== null) send = "Subscipci\xf3n realizada";
    else send = "Email no apto";
    document.getElementById("newsletter").innerHTML = send;
}

//# sourceMappingURL=presentation.de158e3a.js.map
