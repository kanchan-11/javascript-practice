const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector("#results")

    let allfilled=true
    if(height==='' || height<0 || isNaN(height)){
        allfilled=false
        results.innerHTML = "Please give a valid height!"
    }
    if(weight==='' || weight<0 || isNaN(weight)){
        allfilled=false
        results.innerHTML = "Please give a valid weight!"
    }
    console.log(allfilled);
    if(allfilled){
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        
        let estimate="";
        switch(true){
            case (bmi<18.6):
                estimate="Under Weight"
                break;
            case (bmi>=18.6 && bmi<=24.9):
                estimate="Normal Range"
                break;
            case (bmi>24.9):
                estimate="Over Weight"
                break;
        }
        results.innerHTML = `<p>${bmi}</p><p>${estimate}</p>`
    }
})