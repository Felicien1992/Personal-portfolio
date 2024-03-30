var tablinks = document.getElementsByClassName('tab-link')
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove('active-link')
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tabname).classList.add('active-tab')
}

// ==============sidemenu of mediaquery=====================

var sidemeu = document.getElementById('sidemenu')

function openmenu() {
  sidemeu.style.right = '0'
}
function closemenu() {
  sidemeu.style.right = '-200px'
}

//******************************************************* */
// Send the form to GOOGLE SCRIPT to be foreded to GOOGLE SHEET

let form = document.querySelector('#survey-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  document.querySelector('#submit').value = 'Submiting...'
  let data = new FormData(form)

  fetch(
    'https://script.google.com/macros/s/AKfycbwvXRpIKoR3PSsrFecOLUt165qzqX2UAnGbwGv0CzYG_PefRaywXCpUCqd-GmGda-pz/exec',
    {
      method: 'POST',
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      document.querySelector('#msg').innerHTML = data
      document.querySelector('#submit').value = 'Submit'
      window.open('index.html', '_blank')
    })
})
