
//This function happens when there is any change in the checkbox. Here onchange means, when the checkbox is checked.
let showPassword = () => {
    let passwordbox=document.getElementById('passwordbox');    //target the <input> tag
    let type=passwordbox.getAttribute('type');                 //In the <input> tag, get the value of the 'type' attribute.
    if(type=='password'){                                      //If the value of type attribute is 'password'
        passwordbox.setAttribute('type','text');               //Set the type attribute value from 'password' to 'text'.
    }else{
        passwordbox.setAttribute('type','password');           //Else set the type attribute value as 'password' itself.
    }
}