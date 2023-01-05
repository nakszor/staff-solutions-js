export class DOM{
    static ShowPartners(array){
        const ul = document.getElementById("ul-partners")
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

            div.append(opening, description, sector)
            li.append(name, div)
            ul.appendChild(li)
        })
        return ul
    } 
}