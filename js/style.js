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

const sheets = SpreadsheetApp.openByUrl(
  'https://docs.google.com/spreadsheets/d/1_Kbk7n8J6VF4G5av7A8G2PfimfqBeOZdd-LN8X9SZT8/edit#gid=0'
)
const sheet = sheets.getSheetByName('Sheet1')

function doPost(e) {
  let data = e.parameter

  sheet.appendRow([
    data.Name,
    data.Email,
    data.Message,
  ])
  return ContentService.createTextOutput('Success!!!')
}

