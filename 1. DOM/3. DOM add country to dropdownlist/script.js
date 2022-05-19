
function addCountry(){

    var newOption= document.createElement('option');          //craete <option> tag. Store it in the variable newOption.
    var countryName=document.getElementById('textbox').value; //target the <input> tag. Get the typed input by using '.value'. Store this '.value' in a variable countryName.
    newOption.text=countryName;                               //To link the new <option> tag created with the input typed, (option.text)=(.value),    i.e   newOption.text=countryName

    var dropdown= document.getElementById('list');                //Now to push this '<option>' tag into the '<select>' tag.. target the <select> tag. Store it in the variable 'dropdown'.
    dropdown.append(newOption);                                   //Now add or append this '<option>' to '<select>'. 
}