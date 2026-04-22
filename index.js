    const images = [
      'image1.jpeg','image2.jpeg','image3.jpeg','image4.jpeg','image5.jpeg',
      'image6.jpeg','image7.jpeg','image8.jpeg','image9.jpeg'
    ];
    let count = 0,
    image_holder = document.getElementById("image-holder");
    image_holder.src = images[count];
    let total_images = images.length;

    setInterval(()=>{
      image_holder.src = images[count];
      count++;
      if(count >= total_images){
        count = 0;
      }
    },4000);

    // Initialize EmailJS
    (function(){
      emailjs.init({
        publicKey: "w4b8SBE-WPxbvodiw",
      });
    })();

    document.addEventListener("DOMContentLoaded", function () {
      emailjs.init("w4b8SBE-WPxbvodiw");
      const button = document.querySelector(".submit-button");

      button.addEventListener("click", function() {
        button.textContent = sending.....;
        const fullName = document.getElementById("fullName").value;
        const phone = document.getElementById("phone").value;
        const guest1 = document.getElementById("guest1").value;
        const guest2 = document.getElementById("guest2").value;

        var templateParams = {
          full_name: fullName,
          phone_number: phone,
          guest_one: guest1,
          guest_two: guest2
        };

        emailjs.send("service_0w19jzw", "template_gjbst9q", templateParams)
          .then(() => {
            alert("Your Invitation form has been sent");
            button.textContent = "Submit";
            document.getElementById("fullName").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("guest1").value = "";
            document.getElementById("guest2").value = "";
          })
          .catch(() => {
            console.log("Check your network!");
          });
      });
    });
