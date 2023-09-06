function n1(){
    let n=document.getElementById("id1").value;
    if(!(/^[A-Z]{1}[A-Za-z]{1,34}$/).test(n)){
        document.getElementById("p0").innerHTML="Please enter a valid first name.";
        document.getElementById("id1").style.borderColor="Red";
        return false;
    }
    else{
        document.getElementById("p0").innerHTML="";
        document.getElementById("id1").style.borderColor="Black";
        return true;
    }
}


function ln(){
    let n=document.getElementById("id2").value;
    if(!(/^[A-Z]{1}[A-Za-z]{1,34}$/).test(n)){
        document.getElementById("p1").innerHTML="Please enter a valid surname.";
        document.getElementById("id2").style.borderColor="Red";
        return false;
    }
    else{
        document.getElementById("p1").innerHTML="";
        document.getElementById("id2").style.borderColor="Black";
        return true;
    }
}

function em(){
    let a=document.getElementById("id3").value;
    if(!(/^[A-Za-z0-9\-_.]{1,64}@[A-Za-z0-9][A-Za-z0-9\-_]{0,183}[A-Za-z0-9]\.[A-Za-z]{2,3}$/).test(a)){
        
        document.getElementById("p2").innerHTML="Please enter a valid email id.";
        document.getElementById("id3").style.borderColor="Red";
        return false; 
    }
    else{
        document.getElementById("p2").innerHTML="";
        document.getElementById("id3").style.borderColor="Black";
        return true;
    }
}

function un(){
    let a=document.getElementById("id4").value;
    if(!(/^[A-Za-z0-9-_)@]{5,30}$/).test(a)){
        document.getElementById("p3").innerHTML="Please enter a valid username.";
        document.getElementById("id4").style.borderColor="Red";
        return false;
    }
    else{
        document.getElementById("p3").innerHTML="";
        document.getElementById("id4").style.borderColor="Black";
        return true;
    }
}

function ps(){
    let a=document.getElementById("id5").value;
    if(!(/^[\w+\W+]{6,16}$/).test(a)){
        document.getElementById("p4").innerHTML="Please enter a valid password.";
        document.getElementById("id5").style.borderColor="Red";
        return false;
    }
    else{
        document.getElementById("p4").innerHTML="";
        document.getElementById("id5").style.borderColor="Black";
        return true;
    }
}

function cps(){
    let a=document.getElementById("id6").value;
    let b=document.getElementById("id5").value;
    if(a!=b){
        document.getElementById("p5").innerHTML="Confirm password does not match your password.";
        document.getElementById("id6").style.borderColor="Red";
        return false; 
    }
    else{
        document.getElementById("p5").innerHTML="";
        document.getElementById("id6").style.borderColor="Black";
        return true;
    }
}

function ph(){
    let b=document.getElementById("id7").value;
    if(!(/^[0-9]{10,11}$/).test(b)){
        document.getElementById("p6").innerHTML="Please enter a valid phone number.";
        document.getElementById("id7").style.borderColor="Red";
        return false;
    }
    else{
        document.getElementById("p6").innerHTML="";
        document.getElementById("id7").style.borderColor="Black";
        return true;
    }
}

function ad(){
    let n=document.getElementById("id8").value;
    if(!(/^[A-Za-z]{1}[A-Za-z\s]{2,}$/).test(n)){
        document.getElementById("p7").innerHTML="Please enter a valid address.";
        document.getElementById("id8").style.borderColor="Red";
        return false; 
    }
    else{
        document.getElementById("p7").innerHTML="";
        document.getElementById("id8").style.borderColor="Black";
        return true; 
    }
}

function sub(){
      
       if(n1()&&ln()&&em()&&un()&&ps()&&ph()&&ad()&&cps()){
        alert("Your form has been successfully submitted!!!");
        return true;
        // alert("Success!!");
       }
       else{
        n1();
        ln();
        em();
        un();
        ps();
        ph();
        ad();
        cps();
        return false;
       }
}
