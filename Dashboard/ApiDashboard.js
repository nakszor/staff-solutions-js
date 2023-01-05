export class UserDashboard{
    static userProfileInfos(){
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', Authorization: 'Bearer undefined'},
            body: 'false'
          };
          
          fetch('http://localhost:6278/users/profile', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}