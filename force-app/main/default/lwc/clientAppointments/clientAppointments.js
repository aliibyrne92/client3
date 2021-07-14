import {
    LightningElement,
    wire
} from 'lwc';
import getMyTasks from "@salesforce/apex/clientellingDataCtrl.getMyTasks";

export default class ClientAppointments extends LightningElement {

    @wire(getMyTasks) 
    tasks;

    
}