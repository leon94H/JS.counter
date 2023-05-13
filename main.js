const counter = document.querySelector('.counter');
const button = document.querySelectorAll('.btn');



let count = 0;


button.forEach((button)=>{

button.addEventListener('click', (e)=>{

    const styles = e.currentTarget.classList

    if (styles.contains('increase')){
        count ++
    }else if(styles.contains('decrease')){
        count--
    } else{
        count = 0

    }



    if(count>0){
        counter.style.color= 'green'
    }else if (count<0){
        counter.style.color= 'red'
    }else{

        counter.style.color= 'black'
    }

    counter.textContent = count;

    
})})