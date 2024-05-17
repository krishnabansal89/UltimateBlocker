
console.log("Bakcground Script Loaded!")

const privateAllowed = async ()=>{
    const data = await chrome.extension.isAllowedIncognitoAccess()
    console.log(data)
    chrome.storage.local.set({isAllowed: data}, ()=>{
        console.log("Data Saved")
    })
    if(data!==true)
        {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
                if(tabs.length>0){
                    const activeTab = tabs[0]
                    if(!activeTab.url?.includes("://extensions/")){
                    // chrome.tabs.sendMessage(activeTab.id,{data:"privateNotAllowed"},(response)=>{
                    //     console.log("Repsone from ContentScript")
                    // })
                    chrome.tabs.create({url:"chrome://extensions/"},(tab)=>{
                        console.log(tab)
                    })
                }}
        })}
}
setInterval(privateAllowed, 1000)
chrome.runtime.setUninstallURL( 
    "http://localhost:3000",
    async ()=> {
        console.log("Uninstall URL set");
        try{
            const data = await fetch ("http://localhost:3000?status=uninstalled")
            console.log(data.status , " status")
        }
        catch(err){
            console.log("Server is not running")
        }
    }
  )
export {}