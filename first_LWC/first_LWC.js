import { LightningElement, api, track } from 'lwc';

export default class First_LWC extends LightningElement 
{
    /* Data Binding */

    fullname = 'Narasimha'
    title = 'Aura'
    changeHandler(event){
        this.title = event.target.value
    }
    /* @track Properties*/

    @track
    address = {
        city : 'Melbourne',
        posstalcode : 5678,
        country : 'Australia'
    }
    trackHandler(event){
        this.address.city = event.target.value
    }

    /* Getter example */

    userList = ['Jhon','Adi','Swarna']
    n1 = 10
    n2 = 20
    get firstuser()
    {
        return this.userList[0]
    }
    get multiply()
    {
        return this.n1*this.n2
    }
}