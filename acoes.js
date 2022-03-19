var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validadata(){
    var data = document.getElementById("nascimento").value; // pega o valor do input
    data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
    var data_array = data.split("-"); // quebra a data em array
    
    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
       data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remonto a data no formato yyyy/MM/dd
    }
    
    // comparo as datas e calculo a idade
    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    
    if(idade < 18){
       alert("Pessoas menores de 18 não podem se cadastrar.");
       return false;
    }
 
    if(idade >= 18){
       return true;
    }
}

const CPF = document.getElementById('CPF') // seletor do campo de CPF

CPF.addEventListener('keypress', (e) => mascaraCPF(e.target.value)) // Dispara quando digitado o campo
CPF.addEventListener('change', (e) => mascaraCPF(e.target.value))  // Dispara quando autocompletado o campo

const mascaraCPF = (valor) => {
    valor = valor.replace(/\D/g,"")
    valor = valor.replace(/(\d{3})(\d)/,"$1.$2")
    valor = valor.replace(/(\d{3})(\d)/,"$1.$2")
    valor = valor.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    CPF.value = valor // insere os valores no campo
}

function mascara(t, mask){
  var i = t.value.length;
  var saida = mask.substring(1,0);
  var texto = mask.substring(i)
  if (texto.substring(0,1) != saida){
  t.value += texto.substring(0,1);
  }
}