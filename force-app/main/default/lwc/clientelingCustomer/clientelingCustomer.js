import {
    LightningElement,
    api,
    wire
} from 'lwc';
import {
    getRecord
} from 'lightning/uiRecordApi';
import DEFAULT_IMAGE from '@salesforce/resourceUrl/defaultImg';
import {
    NavigationMixin
} from 'lightning/navigation';
//import fixTabWidth from '@salesforce/resourceUrl/fixTabWidth'
//import { loadStyle } from 'lightning/platformResourceLoader';
import IMAGE_ONE from '@salesforce/resourceUrl/img1';
import ACTION_ONE from '@salesforce/resourceUrl/action1';
import ACTION_TWO from '@salesforce/resourceUrl/action2';
import ACTION_THREE from '@salesforce/resourceUrl/action3';
import ACTION_FOUR from '@salesforce/resourceUrl/action4';

const FIELDS = [
    'Contact.Name',
    'Contact.Cust360_Contact_Picture_URL__c',
    'Contact.MailingStreet',
    'Contact.MailingCity',
    'Contact.MailingState',
    'Contact.MobilePhone'
];


export default class ClientelingCustomer extends NavigationMixin(LightningElement) {
    @api recordId;
    defaultimage = DEFAULT_IMAGE;
    clientPage = 'Clienteling_Ali';
    backgroundImg = IMAGE_ONE;
    actionone = ACTION_ONE;
    actiontwo = ACTION_TWO;
    actionthree = ACTION_THREE;
    actionfour = ACTION_FOUR;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: FIELDS
    })
    contact;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    get mobile() {
        return this.contact.data.fields.MobilePhone.value;
    }

    get address() {
        return this.contact.data.fields.MailingStreet.value + ", " +
            this.contact.data.fields.MailingCity.value + ", " + this.contact.data.fields.MailingState.value;
    }

    get backgroundStyle() {
        return "background-image:url('" + this.backgroundImg;
    }

    get profileImage() {
        if (this.contact.data.fields.Cust360_Contact_Picture_URL__c.value != null) {
            return "background-image:url('" + this.contact.data.fields.Cust360_Contact_Picture_URL__c.value;
        }

        return "background-image: url( " + this.defaultimage;
    }



}