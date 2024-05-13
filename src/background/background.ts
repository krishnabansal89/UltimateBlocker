
console.log("Bakcground Script Loaded!")
export var isAllowed = false; 
const privateAllowed = async ()=>{
    const data = await chrome.extension.isAllowedIncognitoAccess()
    console.log(data)
    chrome.storage.local.set({isAllowed: data}, ()=>{
        console.log("Data Saved")
    })
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