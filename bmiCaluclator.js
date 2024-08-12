import { LightningElement } from 'lwc';

export default class BmiCaluclator extends LightningElement {
    height=''
    weight=''
    bmiValue = ''
    result = ''

    inputhandler(event){
        const {name, value} = event.target
        if(name === "height")
        {
            this.height = value
        }
        else if(name === "weight")
        {
            this.weight = value
        }
        //this[name] = value
    }
    submithandler(event){
        event.preventDefault()
        console.log("Height", this.height)
        console.log("Weight", this.weight)
        this.caluclate();
    }
    caluclate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height);
        this.bmiValue = Number(bmi.toFixed(2))
        console.log("BMI", this.bmiValue)
        if(this.bmiValue < 18.5)
        {
            this.result = "Under Weight"
        }else if(this.bmiValue >= 18.5 && this.bmiValue < 25)
        {
            this.result = "Healthy weight"
        }else if(this.bmiValue >= 25.0 && this.bmiValue < 30)
        {
            this.result = "Over Weight"
        }else {
            this.result = "Obese"
        }
        console.log("You are : ",this.result)
    }
    recaluclate(){
        this.height=''
        this.weight=''
        this.bmiValue = ''
        this.result = ''
    }
}