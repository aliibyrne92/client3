import {
    LightningElement,
    wire,
    api
} from 'lwc';
import getWishList from '@salesforce/apex/clientellingDataCtrl.getWishList';

export default class ClientWishlist extends LightningElement {
    @api recordid;

    @wire(getWishList, {
        customerid: '$recordid'
    })
    wish;
}