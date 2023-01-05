export class DomDashboard{
    static UserProfile(obj){
        const dashUser = document.getElementById('dash-user')
        
            const title = document.createElement('h3')
            const img = document.createElement('img')
            const content = document.createElement('div')

            const level = document.createElement('p')
            const work = document.createElement('p')
            const data = document.createElement('div')

            const card = document.createElement('div')

            title.innerText = `Seja Bem Vindo ${obj.username}!!`
            img.src = '/assets/iconazul.png'
            img.alt = 'icone pagina de perfil do usuario'
            level.innerText = obj.professional_level
            work.innerText = obj.kind_of_work

            content.classList.add('div-img-user')
            data.classList.add('data-user')
            card.classList.add('card-user')
            img.classList.add('icon-user')

            content.append(title, img)
            data.append(level,work)
            card.append(content,data)
            dashUser.appendChild(card)
        
        return dashUser
    } 
}
