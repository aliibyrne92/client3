import {
    LightningElement, api, wire
} from 'lwc';
import getPurchases from '@salesforce/apex/clientellingDataCtrl.getPurchases';

const FIELDS = [
    'Contact.Name'
];

export default class ClientPurchases extends LightningElement {
    @api recordid;

    @wire(getPurchases, {
        customerid: '$recordid'
    })
    purch;

}