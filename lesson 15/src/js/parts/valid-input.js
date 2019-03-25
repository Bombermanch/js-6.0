function valid(){
    let phone = document.getElementsByName('phone');
    for(let i = 0; i < phone.length; i++){
        phone[i].addEventListener('input', () =>{
            if(!validation(phone[i].value)){                
                phone[i].value = phone[i].value.slice(0,-1);                    
                
                }            
        });           
        
    }
    function validation (input)  {

        return /(^(8|\+7)\d{0,10}|^\+\d{0,11})$/.test(input);
    }
}

module.export = valid;