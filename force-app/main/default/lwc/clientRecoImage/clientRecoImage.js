import { LightningElement, api } from 'lwc';

export default class ClientRecoImage extends LightningElement {
    @api pur;

    get productImage() {
        return "background-image:url('" + this.pur.Suggestion__r.Image_URL__c;
    }

}