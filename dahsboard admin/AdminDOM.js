export class AdminDOM{
    static ShowCompanies(array){
        const ul = document.getElementById("ul-companies")
        ul.innerHTML= ""
        
        array.forEach(partner => {
            const opening               = document.createElement("p")
            const description           = document.createElement("p")
            const sector                = document.createElement("p")
            const div                   = document.createElement("div")
            const name                  = document.createElement("h2")
            const li                    = document.createElement("li")

            name.innerText = partner.name
            opening.innerText = `Horário de abertura: ${partner.opening_hours}`
            description.innerText = `O que fazemos: ${partner.description}`
            sector.innerText = `Setor: ${partner.sectors.description}`

            name.classList.add('title-li')
            div.classList.add('div-partners')
            opening.classList.add('margin1')
            description.classList.add('margin1')
            sector.classList.add('margin1')
            li.classList.add('li-companies')

            div.append(opening, description, sector)
            li.append(name, div)
            ul.appendChild(li)
        })
        return ul
    } 
    static ShowSectors(array){
        const ul = document.getElementById('ul-sectors')
        ul.innerHTML = ""
        array.forEach(element => {
            const button = document.createElement('button')
            const li = document.createElement('li')

            button.innerText = element.description
            
            button.classList.add('button-default', 'btn-sector')

            li.appendChild(button)
            ul.appendChild(li)
        })
        return ul
    }
    static showDepartments(array){
        const ul = document.getElementById("ul-departments")
        ul.innerHTML= ""
        array.forEach(elem => {
            const opening               = document.createElement("p")
            const description           = document.createElement("p")
            const descriptionDepartment = document.createElement('p')
            const sector                = document.createElement("p")
            const div                   = document.createElement("div")
            const name                  = document.createElement("h2")
            const li                    = document.createElement("li")

            name.innerText = elem.name
            descriptionDepartment.innerHTML = `Funções: ${elem.description}`
            opening.innerText = `Horário de abertura: ${elem.companies.opening_hours}`
            sector.innerText = `Empresa: ${elem.companies.name}`
            description.innerText = `O que fazemos: ${elem.companies.description}`

            name.classList.add('title-li')
            div.classList.add('div-elems')
            opening.classList.add('margin1')
            description.classList.add('margin1')
            sector.classList.add('margin1')
            li.classList.add('li-companies')

            div.append(opening, description, sector)
            li.append(name, div)
            ul.appendChild(li)
        })
    
         return ul
    }static showUsers(array){
        const ul = document.getElementById("ul-users")
        ul.innerHTML= ""
        array.forEach(elem => {
            const email                 = document.createElement("p")
            const nivel                 = document.createElement("p")
            const modalidade            = document.createElement('p')
            const div                   = document.createElement("div")
            const name                  = document.createElement("h2")
            const li                    = document.createElement("li")

            email.innerText = `Email: ${elem.email}`
            nivel.innerText = `Nível profissional: ${elem.professional_level}`
            modalidade.innerText = `Modalidade de trabalho: ${elem.kind_of_work}`
            name.innerText = elem.username

            name.classList.add('title-li')
            div.classList.add('div-elems')
            email.classList.add('margin1')
            nivel.classList.add('margin1')
            modalidade.classList.add('margin1')
            li.classList.add('li-companies')

            div.append(email, nivel, modalidade)
            li.append(name, div)
            ul.appendChild(li)
        })
    
         return ul
    }
}
