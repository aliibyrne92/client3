public with sharing class clientelingGetConfig {

    @AuraEnabled(cacheable = true)
    public static Clienteling_Config__c getConfig() {
        system.debug('getConfig running..');

        Clienteling_Config__c conf = [SELECT Active__c, Id, Logo_Height__c, Logo_Width__c, Logo__c, Name
            FROM Clienteling_Config__c WHERE Active__c = true ORDER BY LastModifiedDate LIMIT 1
        ];
        system.debug('the config details: ' + conf);
        return conf;
    }
}