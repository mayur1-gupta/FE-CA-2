const yourname = document.getElementById('yourname')
yourname.onchange = () =>{
    localStorage.setItem('name', yourname.value);
}
