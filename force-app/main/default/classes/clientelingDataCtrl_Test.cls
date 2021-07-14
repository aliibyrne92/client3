@isTest

public with sharing class clientelingDataCtrl_Test {


    static testMethod void testgetConfig() {

        //Get the config
        Clienteling_Config__c testConf = clientTestDataFactory.createConfig();
        insert testConf;

        //Call method
        Clienteling_Config__c testResults = clientelingGetConfig.getConfig();

        System.assertEquals(true, testResults.Active__c);

    }

    static testMethod void testgetMyTasks() {

        //Get list of tasks
        List < Task > testTASKS = clientTestDataFactory.createListTasks();

        //Call method
        List < Task > theList = clientellingDataCtrl.getMyTasks();

        system.assertEquals(0, theList.size());

    }

    static testMethod void testgetPurchases() {

        //Get contact
        Contact testContact = clientTestDataFactory.createContact();
        insert testContact;

        //Get list of purchases from test factory
        List < Purchase_History__c > testPurchs = clientTestDataFactory.createPurchases(testContact.Id);

        //Call method
        List < Purchase_History__c > purchaseResult = clientellingDataCtrl.getPurchases(testContact.Id);

        system.assertEquals(3, purchaseResult.size());

    }

    static testMethod void testgetWishList() {

        //Get contact
        Contact testContact = clientTestDataFactory.createContact();
        insert testContact;

        //Get list of wishes from test factory
        List < IDO_Wish_List__c > testWishes = clientTestDataFactory.createWishlists(testContact.Id);

        //Call method
        List < IDO_Wish_List__c > wishResult = clientellingDataCtrl.getWishList(testContact.Id);

        system.assertEquals(3, wishResult.size());

    }

    static testMethod void testgetRecommendations() {

        //Get contact
        Contact testContact = clientTestDataFactory.createContact();
        insert testContact;

        //Get list of wishes from test factory
        List < IDO_upsell_product__c > testRecos = clientTestDataFactory.createRecommended(testContact.Id);

        //Call method
        List < IDO_upsell_product__c > recoResult = clientellingDataCtrl.getRecommendations(testContact.Id);

        system.assertEquals(3, recoResult.size());

    }

}