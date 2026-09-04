
const form=document.getElementById("loginform");
if(form){
form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
   try{ const responce= await fetch("/login",{
     method: "POST",
    headers:{"content-Type":"application/json"},
    body:JSON.stringify({
        email,
        password
    })
    });
    const data= await responce.json();
    if(responce.ok){
        window.location.href="dashboard.html"
    }else{
        alert(data.message || "Invalid email or password");

    }
} catch(error){
    console.error(error);
    alert("invalid")
}

});
}

const form2=document.getElementById("signupForm");
if(form2){
 form2.addEventListener("submit",async(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value
    const confirm=document.getElementById("confirmPassword").value
    if (confirm!==password){
        alert("passwords do not match");
        return;
    }else{
        try{const responce2=await fetch("/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            name,
            email,
            password
          })    
        });
            const data2=await responce2.json();
            if(responce2.ok){
                window.location.href="login.html"
            }else{
                alert(data2.message||"somthing is wrong")
            }
        }catch(error){
            console.error(error);
            alert("where is the serever?");
        }
    }

 });
}