let body=document.body;
let toggle=0;
function showList(){
    let list=event.target.id;
    let ptag=document.querySelector(`#${list} p`);
    console.log(ptag);
    if(toggle==0){
    ptag.style.display="block";
    toggle=1;
    }
    else{
        ptag.style.display="none";
        toggle=0;
    }
}