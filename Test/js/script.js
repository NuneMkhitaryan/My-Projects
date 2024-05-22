//  
const menu_logo = document.querySelector(".menu_logo")
const menu = document.querySelector(".menu")
const create_job = document.querySelector(".create_job")
const iframe = document.querySelector(".form_page")
const close_form = document.querySelector(".close_form")
const form = document.forms[0]
const submit = document.querySelector([type="submit"])
let end_create_job
//
let open_close
function open_menu(){
open_close = !open_close
 menu.style.display = open_close ? "none" : "block"
}

function open_iframe(){
    iframe.style.display = "grid"
    
}
// listeners
menu_logo.addEventListener("click", (e) => {
    if(e.target == e.currentTarget)return
    open_menu()
})


create_job.addEventListener("click", () => {
    open_iframe()
})

close_form.addEventListener("click",() => {
    iframe.style.display = "none"
    end_create_job.style.display = "none"
    form.style.display = "grid"
})

form.addEventListener("submit",(e) => {
    e.preventDefault()
    end_create_job = document.createElement("div")
    const text = document.createElement("h3")
    const view_workiz = document.createElement("a")
    text.textContent = "Job is created!Wiew Deal"
    view_workiz.textContent = "View in Workiz"
    view_workiz.href = "http://pipedrive.com/"
    view_workiz.target = "_blank"
    console.dir(view_workiz)
    end_create_job.append(text,view_workiz)
    end_create_job.classList.add("End_create")
    iframe.append(end_create_job) 
    form.style.display = "none"
})
