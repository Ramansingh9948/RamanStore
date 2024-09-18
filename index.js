let currentmode = "light";
function dark() { 
  let chng = document.querySelector("body");
  if(currentmode=== "light") {
      currentmode = "dark";
      chng.style.color="white";
      console.log(currentmode);
  chng.style.backgroundColor=" rgb(192, 193, 232)";
  }
  else {
      currentmode = "light";
      chng.style.color="black";
      console.log(currentmode);
  chng.style.background="white";
  }
}
