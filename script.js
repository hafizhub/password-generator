const chars =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]<>?"

const form = document.getElementById("form")
const output = document.getElementById("output")
const lengthInput = document.getElementById("length")
const copyBtn = document.getElementById("copy")
const regenBtn = document.getElementById("regen")

form.addEventListener("submit",e=>{
    e.preventDefault()
    generate()
})

regenBtn.addEventListener("click",generate)

copyBtn.addEventListener("click",()=>{
    if(output.textContent.includes("appear")) return
    navigator.clipboard.writeText(output.textContent)
    copyBtn.textContent="Copied ✓"
    setTimeout(()=>copyBtn.textContent="Copy",1200)
})

function generate(){
    const len = Number(lengthInput.value)
    if(!len) return
    let pass=""
    for(let i=0;i<len;i++){
        pass += chars[Math.floor(Math.random()*chars.length)]
    }
    output.textContent = pass
}
