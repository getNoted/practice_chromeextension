let changeColor=document.getElementById('changeColor');
changeColor.addEventListener('click',async ()=>{
    let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
    
    chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:setPageBackgroundColor,
    })
})

function setPageBackgroundColor(){
    chrome.storage.sync.get("color",({color})=>{
        document.body.style.backgroundColor=color;
        document.body.style.color='pink';
    });
}
chrome.storage.sync.get("color",({color})=>{
    changeColor.style.backgroundColor=color;
})