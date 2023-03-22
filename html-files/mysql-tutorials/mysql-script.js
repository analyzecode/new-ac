
   const mlandingpage = document.querySelector(".mlandingpage"),
   sidebar = document.querySelector(".tut-content-sidebar"),
   footer = document.querySelector(".footer");
  
fetch('mtopaarea.html')
.then(component => component.text())
.then(data=>{
  mlandingpage.innerHTML =data
});
fetch('../footer.html')
.then(component => component.text())
.then(data=>{
  footer.innerHTML = data
});
// fetch('mys-sidebar.html')
// .then(component => component.text())
// .then(data=>{
//   sidebar.innerHTML = data
// });
const All_Details = document.querySelectorAll('details');

All_Details.forEach(deet=>{
  deet.addEventListener('toggle', toggleOpenOneOnly)
})

function toggleOpenOneOnly(e) {
  if (this.open) {
    All_Details.forEach(deet=>{
      if (deet!=this && deet.open) deet.open = false
    });
  }
}

