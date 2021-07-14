@isTest

public class clientTestDataFactory {

    // Creates but does not insert a client config record
    public static Clienteling_Config__c createConfig() {
        Clienteling_Config__c config = new Clienteling_Config__c(
            Name = 'Test Config',
            Active__c = true
        );
        return config;

    }

    // Creates but does not insert a contact
    public static Contact createContact() {
        Contact con = new Contact(
            LastName = 'Bailey'
        );
        return con;

    }

    public static List < Task > createListTasks() {

        List < Task > testTASKS = new List < Task > ();

        // create list of tasks //
        for (Integer i = 0; i < 3; i++) {
            Task testTASK = new Task(
                Subject = 'Call' + i,
                Status = 'Completed',
                Priority = 'High'
            );
            testTASKS.add(testTASK);
        }
        insert testTASKS;
        return testTASKS;

    }

    public static List < Purchase_History__c > createPurchases(Id theCustomer) {

        List < Purchase_History__c > testPurchases = new List < Purchase_History__c > ();

        // create list of Purchase_History__c //
        for (Integer i = 0; i < 3; i++) {
            Purchase_History__c purch = new Purchase_History__c(
                Name = 'Test' + i,
                Customer__c = theCustomer
            );
            testPurchases.add(purch);
        }
        insert testPurchases;
        return testPurchases;

    }

    public static List < IDO_Wish_List__c > createWishlists(Id theCustomer) {

        List < IDO_Wish_List__c > testWishlists = new List < IDO_Wish_List__c > ();

        // create list of IDO_Wish_List__c //
        for (Integer i = 0; i < 3; i++) {
            IDO_Wish_List__c wish = new IDO_Wish_List__c(
                Name = 'Test' + i,
                Customer__c = theCustomer
            );
            testWishlists.add(wish);
        }
        insert testWishlists;
        return testWishlists;

    }

    public static List < IDO_upsell_product__c > createRecommended(Id theCustomer) {

        List < IDO_upsell_product__c > testRecos = new List < IDO_upsell_product__c > ();

        // create list of IDO_upsell_product__c //
        for (Integer i = 0; i < 3; i++) {
            IDO_upsell_product__c reco = new IDO_upsell_product__c(
                Name = 'Test' + i,
                Customer__c = theCustomer
            );
            testRecos.add(reco);
        }
        insert testRecos;
        return testRecos;

    }

}