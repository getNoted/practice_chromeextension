let page=document.getElementById('buttonDiv');
let selectedClassName='current';
const presetButtonColors=['red','pink','blue'];

const handleButtonClick=(event)=>{
    let current=event.target.parentElement.querySelector(`.${selectedClassName}`);
    if(current && current!==event.target){
        current.classList.remove(selectedClassName);
    }

    let color=event.target.dataset.color;
    event.target.classList.add('current');
    chrome.storage.sync.set({color});

}

const displayColors=(buttonColors)=>{
    chrome.storage.sync.get('color',(data)=>{
        let currentColor=data.color;

        buttonColors.forEach(buttonColor=>{
            let button=document.createElement("button");
            button.dataset.color=buttonColor;
            button.style.backgroundColor=buttonColor;
            if(buttonColor==currentColor){
                button.classList.add(selectedClassName);
            }
            button.addEventListener('click',handleButtonClick);
            page.appendChild(button);
        })

    })
}
displayColors(presetButtonColors);