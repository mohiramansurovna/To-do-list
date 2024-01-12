let input=document.getElementById("newtask");
let parentElement=document.getElementById('ulyea');
let alert=document.getElementById('alert');
let alertButton=document.getElementById('alertButton');
let fordesk=document.getElementById('fordesk');
let formobile=document.getElementById('formobile');
let mediaQuery=window.matchMedia('(min-width:992px');
let editFontIcon=document.getElementById('editFontIcon');
let body=document.getElementById('body');
function openClose(){
    if (mediaQuery.matches==false){
        if(formobile.style.display=='grid'){
            formobile.style.display='none';
            fordesk.style.display='none';
            editFontIcon.classList.remove('fa-solid', 'fa-xmark');
            editFontIcon.classList.add('fa-solid', 'fa-pen-to-square');
        }else{
            formobile.style.display='grid';
            editFontIcon.classList.remove('fa-solid', 'fa-pen-to-square');
            editFontIcon.classList.add('fa-solid', 'fa-xmark');
        }
    }else{
        if(fordesk.style.display=='grid'){
            fordesk.style.display='none';
            formobile.style.display='none';
            editFontIcon.classList.remove('fa-solid', 'fa-xmark');
            editFontIcon.classList.add('fa-solid', 'fa-pen-to-square');
        }else{
            fordesk.style.display='grid';
            editFontIcon.classList.remove('fa-solid', 'fa-pen-to-square');
            editFontIcon.classList.add('fa-solid', 'fa-xmark');
        }
    }
}
alertButton.addEventListener('click', function(){
    alert.style.display='none'
});

function deleteitem(LiElement){
    parentElement.removeChild(LiElement);
}
function addNew(){
    let newLiElement=document.createElement('li');
    let newPElement=document.createElement('p');
    let newButtonElement=document.createElement('button');
    let newIElement=document.createElement('i');

    if (input.value!==''){
        newPElement.textContent=input.value;
        newIElement.classList.add('fa-solid','fa-trash');
        newButtonElement.addEventListener('click', function (){
            deleteitem(newLiElement);});
        newButtonElement.appendChild(newIElement);
        newLiElement.appendChild(newPElement);
        newLiElement.appendChild(newButtonElement);

        parentElement.appendChild(newLiElement);
        
    }else{
        
        alert.style.display='flex';
        
    }
    input.value='';    
}
input.addEventListener('keypress' , function (event){
    if (event.key=="Enter"){
        addNew();
    }
});
function changeImage(imageSRC){
    body.style.backgroundImage='url('+imageSRC+')'
}