import {
    LightningElement,
    wire,
    api
} from 'lwc';
import getRecommendations from '@salesforce/apex/clientellingDataCtrl.getRecommendations';

export default class ClientRecommendations extends LightningElement {
    @api recordid;

    @wire(getRecommendations, {
        customerid: '$recordid'
    })
    reco;

}