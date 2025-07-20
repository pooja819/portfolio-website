//for typing effect

const typingLine = document.querySelector(".typing-line");
const lines = [
  "Hi, I'm ",
  "<span>Pooja</span><br>",
  "- a passionate web developer"
];
let index = 0;
let text = '';
let line = 0;
function typeLine() {
  if (line < lines.length) {
    if (index < lines[line].length) {
      text += lines[line][index++];
      typingLine.innerHTML = text;
      setTimeout(typeLine, 60);
    } else {
      line++;
      index = 0;
      setTimeout(typeLine, 300); // delay before next line
    }
  } else {
    typingLine.classList.add('no-cursor'); // Remove blinking cursor
  }
}
window.onload = typeLine;


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
function toggleSkill(el) {
    el.classList.toggle('active');
  }
//for contact section
  const elements = document.querySelectorAll('#contact .contact-left, #contact .contact-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

  //for responsiveness
  function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show');
      }
// // form connect 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzifySOGQ883oYJp13eOpqXJVRoThcWFHi_N8L5DB8bjkRNdJGZc3C8MU_SD5xDu17xXw/exec';
  const form = document.forms['submit-to-google-sheet'];
  const successMsg = document.getElementById("form-success-msg");

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        successMsg.style.display = "block";
        successMsg.innerText = "✅ Your message was sent successfully!";
        successMsg.style.color = "#00ff7f";
        form.reset();
        setTimeout(() => {
          successMsg.style.display = "none";
        }, 5000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        successMsg.style.display = "block";
        successMsg.innerText = "❌ Message failed to send. Try again.";
        successMsg.style.color = "#ff004f";
      });
  });