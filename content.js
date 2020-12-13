window.addEventListener("load",function(){
  if(document.getElementById("Template1_MenuList1_TextBoxUsername")){
    fetch("chrome-extension://lpanaopjjmjkogpgmhpejpekdnbcdgbh/env.json").then(res=>res.json()).then(json=>{
      document.getElementById("Template1_MenuList1_TextBoxUsername").value = "dunfeyj";
      document.getElementById("Template1_MenuList1_TextBoxPassword").value = "Xkcd125!";
      document.getElementById("Template1_MenuList1_ButtonLogin").click();
    }).catch(err=>{
      document.body.innerHTML = `<p>${err}</p>`;
    })
  } else if (document.getElementById("Template1_Control0_ButtonContinue")) {
    document.getElementById("Template1_Control0_ButtonContinue").click();
    console.log("Done");
  }
});
