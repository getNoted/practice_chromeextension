let changeColor=document.getElementById('changeColor');

const d=async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    
chrome.scripting.executeScript({
    target:{tabId:tab.id},
    
    function:setPageBackgroundColor,
});
}

d();



changeColor.addEventListener('click',async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        
        function:setPageBackgroundColor,
    })
})

function setPageBackgroundColor(){
    console.log("Here");
    chrome.storage.sync.get("color",({color})=>{
        document.body.style.backgroundColor=color;
        document.body.style.color='pink';
    });
    const bar=document.body.getElementsByClassName('ytp-progress-bar');
    console.log(bar[0]);
    const controls=document.body.getElementsByClassName('ytp-left-controls');
    const div=document.createElement('div');
    div.innerText="SastaNotion";
    
    controls[0].append(div);
    bar[0].addEventListener('mousemove',()=>{
        const div=document.createElement('div');
        // div.style.height='50px';
        // div.style.backgroundColor='red';
        bar[0].append(div);
        console.log("hovering");
    })

    bar[0].addEventListener('mouseout',()=>{
        
        console.log("hovering");
    })
    div.addEventListener('click',()=>{
        console.log("here2")
        console.log(bar[0]);
        const time=document.body.getElementsByClassName('ytp-time-current');
        console.log(time[0].innerText);
    });
}
chrome.storage.sync.get("color",({color})=>{
    changeColor.style.backgroundColor=color;
});
