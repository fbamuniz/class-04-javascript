//Requisição externa a um determinado endereço, sem precisar usar o browser
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://viacep.com.br/ws/11900000/json/");
ajax.send();

//Carrega as informações enviadas na div-1
ajax.onload = function(){
    document.getElementById("div-1").innerHTML = this.responseText;
    //Converter pra objeto
    let obj = JSON.parse(this.responseText);
    document.write(obj.localidade);
}
