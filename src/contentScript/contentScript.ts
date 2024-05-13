export {}
console.log("Content Script Loaded!")

const redirect = ()=>{
    const data = document.body.innerHTML
    
  if (checker(data)) {
    console.log("Don't Let your Mind control You BUD!")
    const currenthref = window.location.href
    if (currenthref !== "https://www.reddit.com/r/NoFap/?rdt=34309") window.location.href = "https://www.reddit.com/r/NoFap/?rdt=34309"
  } else {
    console.log("You are killing it!!!")
}
}
const checker = (data:string):boolean=>{
  const wordList = ["porn" , "sex" , "18+" , "adult" , "nude" , "naked" , "xxx" ]
  if(data){
    for(const word of wordList){
      if(data.includes(word)){
        return true
      }
    }
  }
return false
}
const observer = new MutationObserver(redirect)
observer.observe(document.body, {childList: true, subtree: true})