import { DomDashboard } from "./DomDashboard.js";
import { API } from "../script/Api.js";

 

 class dashboard{
    static async userInfos(){
        const profile = await API.userProfileInfos()
        const person = DomDashboard.UserProfile(profile)

        return person
    }   
 }
 dashboard.userInfos()