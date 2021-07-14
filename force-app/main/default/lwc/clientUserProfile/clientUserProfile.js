import {
    LightningElement,
    track,
    wire
} from 'lwc';
import userId from '@salesforce/user/Id';
import name from '@salesforce/schema/User.Name';
import fname from '@salesforce/schema/User.FirstName';
import photo from '@salesforce/schema/User.FullPhotoUrl';
import {
    getRecord
} from 'lightning/uiRecordApi';

export default class ClientUserProfile extends LightningElement {
    @track name;
    @track fname;
    @track error;

    @wire(getRecord, {
        recordId: userId,
        fields: [name, photo, fname]

    }) wireuser({
        error,
        data
    }) {
        if (error) {
            this.error = error;
        } else if (data) {
            this.name = data.fields.Name.value;
            this.fname = data.fields.FirstName.value;
            this.photo = 'background-image: url(' + data.fields.FullPhotoUrl.value;
        }
    }

    get today() {
        var newDate = new Date();
        this.dateValue = newDate.toISOString()
        return this.dateValue;
    }


}