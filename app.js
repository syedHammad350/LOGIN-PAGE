function login(){
    // console.log("click")
    var email=(document.getElementById('email')).value
    var pass=(document.getElementById('pass')).value
    // console.log(email,pass)

    if(!email||!pass){
        alert("plz enter a email and password")
    }
    var symbol=email.indexOf('@gmail.com')
    // console.log(symbol)

    if(symbol== -1){
        alert('plz enter a correct email')

    }
    if(pass.length<8){
        alert('plz enter a 8 character password')

    }
    
    if(email==="syedhammad345@gmail.com"&& pass==="Hammad1234"){
        // alert('login successfully')
        window .location.href='home%20page/index.html'

    }else{
        alert('plz enter a correct email and password')
    }

}
