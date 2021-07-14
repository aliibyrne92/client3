import {
    LightningElement,
    wire
} from 'lwc';
import getConfig from '@salesforce/apex/clientelingGetConfig.getConfig';

export default class ClientHeader extends LightningElement {
    config;

    @wire(getConfig)
    wiredConfig({
        error,
        data
    }) {
        if (data) {
            this.config = data;
        } else if (error) {
            this.config = undefined;
            throw new Error('Failed to retrieve config');
        }

    }

    get logoStyle() {
       return "height:" + this.config.Logo_Height__c + "px; width:" + this.config.Logo_Width__c + "px; background-image: url('/resource/" + this.config.Logo__c;
    }
}