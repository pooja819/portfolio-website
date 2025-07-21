// Typing effect
document.addEventListener("DOMContentLoaded", () => {
  const typingLine = document.querySelector(".typing-line");
  const textBefore = "Hi I'm ";
  const highlighted = "<span>Pooja</span><br>";
  const textAfter = "- a passionate web developer";
  const fullText = textBefore + highlighted + textAfter;
  let index = 0;

  function typeHTML() {
    if (index <= fullText.length) {
      typingLine.innerHTML = fullText.slice(0, index);
      index++;
      setTimeout(typeHTML, 60);
    } else {
      typingLine.innerHTML = fullText;
      typingLine.classList.remove("typing-line"); // remove class to stop blinking
    }
  }

  typeHTML();
});


// Tab switching (About/Skills/etc.)
function opentab(evt, tabname) {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
    tabcontents[i].classList.remove("active-tab");
  }

  evt.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const menuIcon = document.getElementById('menu-icon').querySelector('i');

  navLinks.classList.toggle('show');

  // Change icon between bars and close
  if (navLinks.classList.contains('show')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
}

// Auto-close nav when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('show');

    // Reset icon to hamburger
    const menuIcon = document.getElementById('menu-icon').querySelector('i');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  });
});


// Form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYOeTBMUTIhRCyZ6acR0w6mSkU4fB3wvUvjoYPGorU5SQGvkxFI2sF55p7syYYwcSJ4w/exec';
const form = document.forms['submit-to-google-sheet'];
const successMsg = document.getElementById("form-success-msg");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener('submit', e => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      successMsg.style.display = "block";
      successMsg.innerText = "✅ Your message was sent successfully!";
      successMsg.style.color = "#00ff7f";
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = "Send";

      setTimeout(() => {
        successMsg.style.display = "none";
      }, 1000);
    })
    .catch(error => {
      console.error('Error!', error.message);
      successMsg.style.display = "block";
      successMsg.innerText = "❌ Message failed to send. Try again.";
      successMsg.style.color = "#ff004f";
      submitBtn.disabled = false;
      submitBtn.innerText = "Send";
    });
});
