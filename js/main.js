const iconEl=document.getElementById('icon')
const quoteEl=document.getElementById('quote')
const adviceIdEl=document.getElementById('adviceId')

const url="https://api.adviceslip.com/advice"

async function getSlipe(url){
    try {
        let res=await fetch(url)
        let data=await res.json()
       return data
    } catch (error) {
        console.log(error.message);
    }
}

async function displayContent(){
    let {slip}=await getSlipe(url)
    console.log(slip);
    let {id,advice}=slip
    adviceIdEl.textContent=`#${id}`
    quoteEl.textContent=advice

}

// getSlipe(url)

window.addEventListener( 'DOMContentLoaded',displayContent)

iconEl.addEventListener('click', displayContent);