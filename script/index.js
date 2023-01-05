import { API } from "./Api.js";
import { DOM } from "./DOM.js";

const partners = await API.getPartners()
 
DOM.ShowPartners(partners)

const selectPartners = document.getElementById('select-partners')

class listPartnersName {
    static ShowName(arr){
        let options = []
        arr.forEach(element => {
            if (!options.includes(element.sectors.description)){
                options.push(element.sectors.description)
                const partner = document.createElement("option")
                partner.innerHTML = element.sectors.description
                partner.value = element.sectors.description
                selectPartners.appendChild(partner)
            }
        })
    }
}
listPartnersName.ShowName(partners)

selectPartners.addEventListener('change',async () => {
    const value = selectPartners.value 
    if(value === 'Todas'){
        DOM.ShowPartners(partners)
      }
    else{
        const list = await API.getPartnersBySector(value)
       DOM.ShowPartners(list)
    }
  
})
 
const registerForm = document.getElementById('register-form')

const registerData = [...registerForm]

const btnSucess = document.getElementById('btn-sucess')


registerForm.addEventListener('submit', async (e) =>{
     e.preventDefault()
    
     const data = {
    password: registerData[2].value,
    email: registerData[1].value,
    professional_level: registerData[3].value,
    username: registerData[0].value,
    }
    const registerNewUser = await API.RegisterUser(data)
   
    if (registerNewUser.uuid) {
       btnSucess.classList.remove('hidden')
       btnSucess.classList.add('show-flex')
    }
})

const formLogin = document.getElementById('form-login')
const form = [...formLogin] 
const errorLogin = document.getElementById('error-login')

formLogin.addEventListener('submit', async (e) => {
    e.preventDefault()
    const loginData = {
        email: form[0].value,
        password: form[1].value
    }
   const data = JSON.stringify(loginData)
    const response = await API.LoginUser(data)

    if(response.is_admin === false) {
        window.location.assign("/Dashboard/dashboard.html")
    } else if (response.is_admin === true) {
        window.location.assign("/dahsboard admin/Admin.html")
    } 
    else {
       errorLogin.classList.remove('hidden')
       errorLogin.classList.add('flex3')
    }
})

