export class API {
    static baseURL = "http://localhost:6278/"
    static token = localStorage.getItem('@kenzieempresas:token') || ""
    static userId = localStorage.getItem('@kenzieempresas:user_id')
    static headers = {
        Authorization: "Bearer null"
    }
    static headersAu = {
        "Content-Type" : "Application/json",
        Authorization: `Token ${this.token}`
    }

    static async getPartners() {
        const response = await fetch(`${this.baseURL}companies`)
        const data = response.json()

        return data
    }

    static async getPartnersBySector(sector){
        const response = await fetch(`${this.baseURL}companies/${sector}`)
        const data = response.json()

        
        return data
    }

    static async RegisterUser(data){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Authorization: 'Bearer undefined'},
            body: JSON.stringify(data),
          };
          
         const response = await fetch('http://localhost:6278/auth/register/user', options)
         
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))
        return response
    }

    static async LoginUser(data){
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', Authorization: 'Bearer undefined'},
            body: data
          };
          
       const result = await fetch('http://localhost:6278/auth/login', options)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('@kenzieempresas:token', response.token)
                localStorage.setItem('@kenzieempresas:user_id', response.uuid)
                return response
            })
            .then(response => response)
            .catch(err => console.error(err));
        return result
    }
    static async userProfileInfos (){
          const response = await fetch(`${this.baseURL}users/profile`,{
            method: 'GET',
            headers: {
              Authorization: `Bearer ${this.token}` 
            }
          })


            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));

            return response
        }
    static async ListSectors(){
      const response = await fetch(`${this.baseURL}sectors`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`
            }
           
          })
          
          
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));

        return response
    }   
    static async listDepartments(){
    const result = await fetch(`${this.baseURL}departments`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${this.token}`
            }
        })
          
          
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))

            return result
        }
    static async CreateCompany(data){
        const response = await fetch(`${this.baseURL}companies`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
          })
          
          
            .then(response => response.json())
            .then(response => response)
            .then(reponse => {
                if (response == []) {
                    window.alert('Esta empresa ainda não posui departamentos!')
                }
            })
            .catch(err => console.error(err));
          
            return response
        }
    static async listDepartmentsByCompany(id){
        const reponse = fetch(`${this.baseURL}departments/${id}`,  {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${this.token}`}
          })
          
          
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))
        return reponse 
    }
    static async CreateDepartments(data){
        const response = await fetch(`${this.baseURL}departments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(data)
          })
          
         
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))

        return response
    }
    static async EditDepartments(id,data){
        const response = await fetch(`${this.baseURL}departments/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`},
            body: JSON.stringify(data)
          })
          
          
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))
        return response
    }
    static async DeleteDepartments(id){
        const response = await fetch(`${this.baseURL}departments/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`},
              body: 'false'
            })
          
          
          
            .then(response => response)
            .catch(err => console.error(err))
        return response
    }
    static async GetAllUsers(){
        const response = await fetch(`${this.baseURL}users`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            body: 'false'
         }
    })
          
        
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))
        return response    
    }
    static async GetUsersOpenToWork(){
        const response =  await  fetch(`${this.baseURL}admin/out_of_work`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`
            },
            
          })
          
        
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err))
        return response
    }
    static async EditUsers(data,id){
        const response = await fetch(`${this.baseURL}admin/update_user/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`},
            body: JSON.stringify(data)
          })
          
        
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
        return response    
    }
    static async DeleteUsers(id){
        const response = fetch(`${this.baseURL}admin/delete_user/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`}
           
          })
          
           
            .then(response => response)
            .catch(err => console.error(err));
        return response
    }
        
}