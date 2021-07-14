import { LightningElement } from 'lwc';
import HideLightningHeader from '@salesforce/resourceUrl/HideLightningHeader';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class ClientelingApp extends LightningElement {
    connectedCallback() {
        loadStyle(this, HideLightningHeader)
    }
}