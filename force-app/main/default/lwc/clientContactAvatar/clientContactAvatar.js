import {
    LightningElement,
    api,
    wire
} from 'lwc';
import {
    getRecord,
    getFieldValue
} from 'lightning/uiRecordApi';
import {
    CurrentPageReference,
    NavigationMixin
} from 'lightning/navigation';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import IMAGE_FIELD from '@salesforce/schema/Contact.Cust360_Contact_Picture_URL__c';
import DEFAULT_IMAGE from '@salesforce/resourceUrl/defaultImg';

export default class ClientContactAvatar extends NavigationMixin(LightningElement) {
    @api whoid;
    contact;
    defaultimage = DEFAULT_IMAGE;
   // tabName = 'Clienteling_Customer_Profile';

    @wire(getRecord, {
        recordId: '$whoid',
        fields: [NAME_FIELD, IMAGE_FIELD]
    })
    contact;

    get imagestyle() {
        if (getFieldValue(this.contact.data, IMAGE_FIELD) != null) {
            return "background-image: url( " + getFieldValue(this.contact.data, IMAGE_FIELD);
        }
        /* if no contact image then show default avatar*/
        return "background-image: url( " + this.defaultimage;
    }

    goToProfile() {
        console.log('clicked go to profile');
        /*
                this[NavigationMixin.Navigate]({
                    type: 'standard__navItemPage',
                    attributes: {
                        apiName: this.tabName,
                    },
                    state: {
                        'whoId': this.testAli
                    }
                });*/

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.whoid,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });


    }

}