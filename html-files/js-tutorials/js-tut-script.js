
   const landingpage = document.querySelector(".landingpage"),
   footer = document.querySelector(".footer"),
  //  sidebar = document.querySelector(".tut-content-sidebar"),
  //  sharePool = document.querySelector(".share-pool-block"),
   countbtn = document.querySelector(".countme");
let btncount = document.querySelector(".count");
let count = 0;
fetch('topaarea.html')
.then(component => component.text())
.then(data=>{
  landingpage.innerHTML =data
});
// fetch('sharePool.html')
// .then(component => component.text())
// .then(data=>{
//   sharePool.innerHTML = data
// });
fetch('footer.html')
.then(component => component.text())
.then(data=>{
  footer.innerHTML = data
});
// fetch('sidebar.html')
// .then(component => component.text())
// .then(data=>{
//   sidebar.innerHTML=data
// })
function unsuffPass(){
let password = document.validform.password.value; 
if(password.length<6){
  alert("Password must be at least 6 characters long.");  
}
}
countbtn.addEventListener("click", () =>{
      count++;
      btncount.innerHTML = count;
});
let emojiblock = document.querySelector(".emojiblock");
let emojiContent = ["&#128512;","&#128513;","&#128514;","&#128515;","&#128516;","&#128517;","&#128518;"]
let emojiCount= 0;
emojiblock.addEventListener("click", () => {
  emojiCount++;
  for(let i=0;i<emojiContent.length;i++){
      if(i == emojiCount){
          document.getElementById("emojichange").innerHTML = emojiContent[emojiCount];
      }
      if(emojiCount>emojiContent.length){
      emojiCount = -1;
  }
  }   
});
let colorChangeBtn = document.querySelector(".colorshangeblock");
let colorsList = ["#0556f3","#A555EC","#332FD0","#FF7000","#22A39F","#0014FF","#001253","#FF6464","#54B435"]
let colorCount = 0;
colorChangeBtn.addEventListener("click", () => {
colorCount++;
for(let i=0;i<colorsList.length;i++){
  if(i == colorCount){
      colorChangeBtn.style.backgroundColor = colorsList[i];
  }
  if(colorCount>colorsList.length){
      colorCount = -1;
  }
}
})
let detectos = document.querySelector("button.detectos");
detectos.addEventListener("click", () => {
  document.getElementById("userBrowseinfo").innerHTML = navigator.appVersion;
});

