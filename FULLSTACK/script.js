document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // You can add your form submission logic here, like sending an email or storing data
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert("Thank you for your message!");
});
