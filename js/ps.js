function printName()  {
    const name = document.getElementById('name').value;
    if(name==='063318'){
        location.href = '/main.html';
    }else{
        alert('Password is wrong...');
    }
    document.getElementById("result").innerText = name;
}

function hclick() {
    location.href = '/index.html';
}

function delet(){
    location.href = '/index.html'
}