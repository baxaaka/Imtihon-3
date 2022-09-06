
"use strict"






//-------------------------nav---------------------

  let select = document.querySelector('select'),
  noni = document.querySelector('.noni')
  select.addEventListener('change',() => {
    noni.innerHTML = ''
    let result = document.createElement('p')
    result.innerHTML = `Noni:${select.value}`
    noni.appendChild(result)

  })
 //--------------------size-----

  let label = document.querySelector('.in'),
  sizeResult = document.querySelector('.size-result');
 
  label.addEventListener('change',() => {
    sizeResult.innerHTML = ''
    let result2 = document.createElement('span')
    result2.innerHTML = `Kattaligi:25sm`
    sizeResult.appendChild(result2)

  })
 

  let label2 = document.querySelector('.in2'),
  size2Result = document.querySelector('.size-result');
 
  label2.addEventListener('change',() => {
    size2Result.innerHTML = ''
    let result3 = document.createElement('span')
    result3.innerHTML = `Kattaligi:30sm`
    size2Result.appendChild(result3)

  })
 
  let label3 = document.querySelector('.in3'),
  size3Result = document.querySelector('.size-result');
 
  label3.addEventListener('change',() => {
    size3Result.innerHTML = ''
    let result4 = document.createElement('span')
    result4.innerHTML = `Kattaligi:35sm`
    size3Result.appendChild(result4)

  })
 

//----pomidor--------

  let pomidor = document.querySelector('.pomidor'),
  pomResult = document.querySelector('.chek-box');
 
  pomidor.addEventListener('change',()=>{
    pomResult.innerHTML = ''
    let pomres= document.createElement('p')
    pomres.innerHTML = `Pomidor`
    pomResult.appendChild(pomres)

  })
 

//------pomidor end-----


//-----Kurka start------

let kurka = document.querySelector('.kurka'),
kurkaResult = document.querySelector('.chek-box2');

kurka.addEventListener('change',()=>{
  kurkaResult.innerHTML = ''
  let kurkares= document.createElement('p')
  kurkares.innerHTML = `Kurka Goshti`
  kurkaResult.appendChild(kurkares)

})


//------Zaytun start ---------

let zaytun = document.querySelector('.zaytun'),
zaytunResult = document.querySelector('.chek-box3');

zaytun.addEventListener('change',()=>{
  zaytunResult.innerHTML = ''
  let zayres= document.createElement('p')
  zayres.innerHTML = `Zaytun`
  zaytunResult.appendChild(zayres)

})


//-------------bodiring start-----------------



let bodiring = document.querySelector('.bodiring'),
bodiringResult = document.querySelector('.chek-box4');

bodiring.addEventListener('change',()=>{
  bodiringResult.innerHTML = ''
  let bores= document.createElement('p')
  bores.innerHTML = `Tuzlangan bodirng`
  bodiringResult.appendChild(bores)

})


//----------qoziqorin---------

let qoziqorin = document.querySelector('.qoziqorin'),
    qoziqorinResult = document.querySelector('.chek-box5');

qoziqorin.addEventListener('change',()=>{
  qoziqorinResult.innerHTML = ''
  let qozres= document.createElement('p')
  qozres.innerHTML = `Qoziqorin`
  qoziqorinResult.appendChild(qozres)

})




//------------qazi---------------

let qazi= document.querySelector('.qazi'),
qaziResult = document.querySelector('.chek-box6');

qazi.addEventListener('change',()=>{
  qaziResult.innerHTML = ''
  let qares= document.createElement('p')
  qares.innerHTML = `Qazi`
  qaziResult.appendChild(qares)

})



// ----qazi end-------

//---------------achchiq------------
let achchiq = document.querySelector('.achchiq'),
achResult = document.querySelector('.chek-box7');

achchiq.addEventListener('change',() => {
  achResult.innerHTML = ''
  let ach = document.createElement('span')
  ach.innerHTML = `Achchiq`
  achResult.appendChild(ach)

})


//------------sosiska----------

let sosiska = document.querySelector('.sosiska'),
sosResult = document.querySelector('.chek-box8');

sosiska.addEventListener('change',() => {
  sosResult.innerHTML = ''
  let sos = document.createElement('span')
  sos.innerHTML = `Sosiskali`
  sosResult.appendChild(sos)

})







// -------------modal----------


!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {


   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');



   modalButtons.forEach(function(item){

     
      item.addEventListener('click', function(e) {

        
         e.preventDefault();

      
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


       
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); 

   });


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




});










//-------------modal end------------


const btn = () =>{

  location.reload();
}