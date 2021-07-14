public inherited sharing class clientellingDataCtrl {
    /* get list of tasks for logged in user */
    @AuraEnabled(cacheable = true)
    public static List < Task > getMyTasks() {

        List < Task > mytasks = [SELECT Id, Who.Id, Who.Type, Who.Name, ActivityDate, Description, OwnerId, Status, Subject FROM Task
            WHERE Who.Type = 'Contact'
            AND OwnerId =: UserInfo.getUserId() AND Status != 'Completed'
            ORDER BY ActivityDate
            DESC NULLS FIRST LIMIT 17
        ];

        System.debug('the tasks are' + mytasks);

        return mytasks;
    }

    /* get previous purchases */
    @AuraEnabled(cacheable = true)
    public static List < Purchase_History__c > getPurchases(Id customerid) {
        System.debug('the customerid is here' + customerid);

        List < Purchase_History__c > purchases = [SELECT Customer__c, Id, Name, Product__c, Product__r.Name, Product__r.Product_Image__c, Product__r.purl__c, Product__r.Image_URL__c, Product__r.Image__c 
        FROM Purchase_History__c WHERE Customer__c =:customerid LIMIT 10];

        System.debug('the purchases are' + purchases);

        return purchases;
    }

    /* get wishlist items */
    @AuraEnabled(cacheable = true)
    public static List < IDO_Wish_List__c > getWishList(Id customerid) {

        List < IDO_Wish_List__c > wish = [SELECT Customer__c, Id, Name, Product__c, Product__r.Name, Product__r.purl__c, Product__r.Image_URL__c 
        FROM IDO_Wish_List__c WHERE Customer__c=:customerid];

        System.debug('the wishlists are' + wish);

        return wish;
    }

    /* get recommended items */
    @AuraEnabled(cacheable = true)
    public static List < IDO_upsell_product__c > getRecommendations(Id customerid) {

        List < IDO_upsell_product__c > reco = [SELECT Customer__c, Id, Name, Suggestion__c, Suggestion__r.Name, Suggestion__r.purl__c, Suggestion__r.Image_URL__c 
        FROM IDO_upsell_product__c WHERE Customer__c =:customerid];

        System.debug('the wishlists are' + reco);

        return reco;
    }


}