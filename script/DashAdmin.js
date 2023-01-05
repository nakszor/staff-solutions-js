import { AdminDOM } from "../dahsboard admin/AdminDOM.js";
import { API } from "./Api.js";


const companies = await API.getPartners()

AdminDOM.ShowCompanies(companies)

const sectors = await API.ListSectors()

AdminDOM.ShowSectors(sectors)

const departments = await API.listDepartments()

AdminDOM.showDepartments(departments)

const users = await API.GetAllUsers()

AdminDOM.showUsers(users)

const openToWork = await API.GetUsersOpenToWork()


const selectCompanies = document.querySelectorAll('.comp')
const selectSectors = document.querySelectorAll('.sec')
const select1 = document.querySelector('.comp1')
const select2 = document.querySelector('.sec1')
const selectDep = document.querySelectorAll('.dep')



class list {
    static listNames(){
            companies.forEach( elem => {
                const name = document.createElement('option')
         
                name.innerHTML = elem.name
                name.value = elem.name
                
                select1.appendChild(name)
            })
        
    }
    static listNamesWithID(){
        selectCompanies.forEach(element => {
           
            companies.forEach( elem => {
                const name = document.createElement('option')
         
                name.innerHTML = elem.name
                name.value = elem.uuid
                
                element.appendChild(name)
            })
        })
    }
    static ListSectorsSelect(){
        selectSectors.forEach(element => {
           
            sectors.forEach( elem => {
                const name = document.createElement('option')
         
                name.innerHTML = elem.description
                name.value = elem.uuid
                
                element.appendChild(name)
            })
        })
    }
    static ListDepartmentsSelect(){
        selectDep.forEach(element => {               
                departments.forEach( elem => {
                    const data = document.createElement('option')
             
                    data.innerHTML = elem.name
                    data.value = elem.uuid
                    
                    element.appendChild(data)
            })
        })
    }
    
}
list.listNames()
list.listNamesWithID()
list.ListSectorsSelect()
list.ListDepartmentsSelect()




select1.addEventListener('change', async () =>{
    const value = select1.value 
    if(value === 'TodasEmpresas' || value === ""){
        AdminDOM.ShowCompanies(companies)
      }
    else{
    const comp = await companies.filter(elem => elem.name === value)
    AdminDOM.ShowCompanies(comp)
    }
})



select2.addEventListener('change', async () =>{
    const value = select2.value 
    if(value === 'TodosSetores' || value === ""){
        AdminDOM.ShowCompanies(companies)
      }
    else{
        const list = await API.getPartnersBySector(value)
        AdminDOM.ShowCompanies(list)
    }
  
})
const formCreate = document.getElementById('form-create')
const formCreateData = [...formCreate]

const sucess = document.getElementById('sucess-create')

formCreate.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = {
        "name": formCreateData[0].value,
        "opening_hours": formCreateData[1].value,
        "description": formCreateData[2].value,
        "sector_uuid": formCreateData[3].value
      }
   
    const res = await API.CreateCompany(data)
      if (res.uuid) {
        sucess.classList.remove('hidden')
      }
})
const selectcomp = document.getElementById('comp-dep')
const btnSelectComp = document.getElementById('btn-comp-dep')
const selectDepart = document.getElementById('dep-comp')
const btnSelectDep = document.getElementById('btn-dep-comp')
const deps2 = document.getElementById('deps2')

selectcomp.addEventListener('change', async ()=> {
    deps2.innerHTML=""
    const id = selectcomp.value

    const response = await API.listDepartmentsByCompany(id)

    function listNamesDeps(){
        response.forEach( elem => {
            const name = document.createElement('option')
     
            name.innerHTML = elem.name
            name.value = elem.uuid
           
            deps2.appendChild(name)
        })
    }
    listNamesDeps()
})

btnSelectComp.addEventListener('click', async (e) => {
    e.preventDefault()
    const id = deps2.value
    
    const filter = departments.filter(elem => elem.uuid === id)

    AdminDOM.showDepartments(filter)

})
btnSelectDep.addEventListener('click', async (e) => {
    e.preventDefault()
    const id = selectDepart.value

    const filter = departments.filter(elem => elem.uuid === id)

    AdminDOM.showDepartments(filter)
})

const createDepForm = document.getElementById('create-departments') 

const formData = [...createDepForm]
const sucss = document.getElementById('sucess-dep')
createDepForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = {
            name: formData[1].value,
            description: formData[2].value,
            company_uuid: formData[0].value,
        }
 const response =  await API.CreateDepartments(data)

 if (response.uuid) {
    sucss.classList.remove('hidden')
 }
 
})
const emp = document.getElementById('emp')
const dep2 = document.getElementById('dep2')

emp.addEventListener('change', async () =>{
    dep2.innerHTML=""
    const id = emp.value

    const response = await API.listDepartmentsByCompany(id)

    function listNamesDeps(){
        response.forEach( elem => {
            const name = document.createElement('option')
     
            name.innerHTML = elem.name
            name.value = elem.uuid
            
            dep2.appendChild(name)
        })
    }
    listNamesDeps()
})
const formEdit = document.getElementById('form-edit-dep')
const formEditData = [...formEdit]
const sucess2 = document.getElementById('sucess2')
const wrong = document.getElementById('wrong1')

formEdit.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const depId = formEditData[1].value

    const data = {
        description: formEditData[2].value
      }
    const response = await API.EditDepartments(depId,data)
    if (response.uuid) {
        sucess2.classList.remove('hidden')
    } else {
        wrong.classList.remove('hidden')
    }
})
const selectComp2 = document.getElementById('delete-dep')
const selectdep2  = document.getElementById('delete-dep1')

selectComp2.addEventListener('change',async () => {
    selectdep2.innerHTML=""
    const id = selectComp2.value

    const response = await API.listDepartmentsByCompany(id)

    function listNamesDeps(){
        response.forEach( elem => {
            const name = document.createElement('option')
     
            name.innerHTML = elem.name
            name.value = elem.uuid
           
            selectdep2.appendChild(name)
        })
    }
    listNamesDeps()
})
const formDelete = document.getElementById('form-delete-dep')
const sucess3 = document.getElementById('sucess3')
const wrong2 = document.getElementById('wrong2')
formDelete.addEventListener('submit', async (e) => {
    e.preventDefault()

    const id = selectdep2.value

    const response = await API.DeleteDepartments(id)

  if (response.status === 200) {
    sucess3.classList.remove('hidden')
  }else {
    wrong2.classList.remove('hidden')
  }
})
const selectUsers = document.getElementById('select-users')
const btnDep = document.getElementById('btn-dep-user')
const users1 = document.getElementById('user1')
const formusers = document.getElementById('users2')
const formEditUser = document.getElementById('form-edit-user')
const formEditUserData = [...formEditUser]
const btnEditUser = document.getElementById('btn-edit-user')
const btnDeleteUser = document.getElementById('btn-delete-user')
class select {
   static  selectUsersList2(){
        users.forEach( elem => {
            const name = document.createElement('option')
     
            name.innerHTML = elem.username
            name.value = elem.uuid
            
            users1.appendChild(name)
        })
    }
    static FilterUsers(){
        formusers.addEventListener('submit', async(e)=>{
            e.preventDefault()
            
            if (selectUsers.value === "todes") {
                AdminDOM.showUsers(users)
            } else if(selectUsers.value === 'todesSemprego'){
                AdminDOM.showUsers(openToWork)
            } 

        })
    }
    static EditUsers(){
      btnEditUser.addEventListener('click', async (e) => {
        e.preventDefault()
        
         const id = users1.value

        const data = {
            kind_of_work: formEditUserData[1].value,
            professional_level: formEditUserData[2].value
        }

        const edit = await API.EditUsers(data,id)
        const sucess4 = document.getElementById('sucess4')
        const wrong3 = document.getElementById('wrong3')

        if(edit.uuid){
            sucess4.classList.remove('hidden')
        } else {
            wrong3.classList.remove('hidden')
        }
    
      })  
    }
    static DeleteUsers (){
        btnDeleteUser.addEventListener('click',async (e)=> {
            e.preventDefault()
            const id = users1.value

            const delet = await API.DeleteUsers(id)
            const sucess5 = document.getElementById('sucess5')
            const wrong4 = document.getElementById('wrong4')

            if(delet.status == 204){
                sucess5.classList.remove('hidden')
            } else {
                wrong4.classList.remove('hidden')
            }
        })
    }
    
}
select.selectUsersList2()
select.FilterUsers()
select.EditUsers()
select.DeleteUsers()