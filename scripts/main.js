let elBtr = document.querySelector('.battery')
let elBtnOn = document.querySelector('.btn-on')
let elBtnOff = document.querySelector('.btn-off')

let totalClick = 0;

let chngClr = (el) =>{
    
    if(el === 0){
        elBtnOff.addEventListener('click',(check)=>{
            if(totalClick === 0){
                console.log('btnOFF',totalClick)
                elBtr.classList.remove('btr-on-1step')
                return
            }
            // totalClick = 0;
             if(totalClick === 1){
                totalClick--;
                elBtr.classList.remove('btr-on-1step')
            }
             if(totalClick === 2){
                totalClick--;
                elBtr.classList.remove('btr-on-2step')
            }
            if(totalClick === 3){
                totalClick--;
                elBtr.classList.remove('btr-on-3step')
            }
            else{
                totalClick--;
            }
            // elBtr.classList.remove('btr-on-1step','btr-on-2step','btr-on-3step')
            
        })
    }
    return 
}



elBtnOn.addEventListener('click',(ev) =>{
  
    stopEl = totalClick++;
    let resColor = chngClr(stopEl)
    
    

    if(stopEl === 1 && !resColor ){
          if(!elBtr.classList.contains('btr-on-1step on')){
        elBtr.classList.add('btr-on-1step')
        }  
}
     if(stopEl === 2 && !resColor){
          if(!elBtr.classList.contains('btr-on-2step')){
        elBtr.classList.add('btr-on-2step')
        }   
}
     if(stopEl === 3  && !resColor){
          if(!elBtr.classList.contains('btr-on-3step')){
        elBtr.classList.add('btr-on-3step')
        }  
}
    if(totalClick >= 4){
        totalClick--;
        console.log('totalCLICK CLICK 3',totalClick)
        return 
    }
    
    
    console.log('STOPEL',stopEl)
    
    console.log('click',totalClick)
    // let resClr = chngClr(ev)
    // console.log(resClr)
})

