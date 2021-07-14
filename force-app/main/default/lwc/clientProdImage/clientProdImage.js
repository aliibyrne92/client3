import {
    LightningElement,
    api
} from 'lwc';

export default class ClientProdImage extends LightningElement {
    @api pur;

    get productImage() {
        // return "background-image:url('" + this.pur.Product__r.purl__c + "');";
        

        return "background-image:url('" + this.pur.Product__r.Image_URL__c;
    }


}