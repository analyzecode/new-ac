
   const mlandingpage = document.querySelector(".mlandingpage"),
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
