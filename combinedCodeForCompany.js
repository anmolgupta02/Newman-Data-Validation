const paths = {
    FenXId: "data.id",
    companyType:"data.properties.companyType.value",
    alternateId:"data.alternateId",
    isClient: "data.properties.isClient.value",
    companyNumber: "data.properties.companyNumber.value",
    legalEntityName: "data.properties.legalEntityName.value",
    caymanExempt:"data.properties.caymanExempt.value",
    clientBookingEntity:"data.properties.clientBookingEntity.value",
    PIBVIComplianceApproval:"data.properties.PIBVIComplianceApproval.value",
    email: "data.properties.email.value",
    piNextTestDate: "data.properties.piNextTestDate.value",
    refID: "data.properties.refID.value",
    pep: "data.properties.pep.value",
    PISAMComplianceApproval : "data.properties.PISAMComplianceApproval.value",
    PISEYComplianceApproval: "data.properties.PISEYComplianceApproval.value",
    clientType:"data.properties.clientType.value",
    roleType:"data.properties.roleType.value",
    primaryBusinessUnit:"data.properties.primaryBusinessUnit.value",
    sanctions:"data.properties.sanctions.value",
    creditControlReminderEmail:"data.properties.creditControlReminderEmail.value",
    legalEntityNameChinese:"data.properties.legalEntityNameChinese.value",
    piRiskScore:"data.properties.piRiskScore.value",
    PIJurisdictions:"data.properties.PIJurisdictions.value",
    PIAssessmentComments:"data.properties.PIAssessmentComments.value",
    CDDStatus:"data.properties.CDDStatus.value",
    riskOfCorruption:"data.properties.riskOfCorruption.value",
    PIEntitiesCount: "data.properties.PIEntitiesCount.value",
    relationshipManager:"data.properties.relationshipManager.value",
    sectorOfTheClientGroupSalesOffice:"data.properties.sectorOfTheClientGroupSalesOffice.value",
    PIBVIComplianceApprovalDate:"data.properties.PIBVIComplianceApprovalDate.value",
    adverseMedia:"data.properties.adverseMedia.value",
    invoiceEmail:"data.properties.invoiceEmail.value",
    finalRiskRating:"data.properties.finalRiskRating.value",
    registryStatus : "data.properties.registryStatus.value",
    entityStatus:"data.properties.entityStatus.value",
    PISAMComplianceApprovalDate:"data.properties.PISAMComplianceApprovalDate.value",
    PISamplingCount:"data.properties.PISamplingCount.value",
    PISEYComplianceApprovalDate: "data.properties.PISEYComplianceApprovalDate.value",
    fileHandler:"data.properties.fileHandler.value",
    enforcement:"data.properties.enforcement.value",
    PISEYWrittenAssurance:"data.properties.PISEYWrittenAssurance.value",
    registrationBody:"data.properties.registrationBody.value",
    entitySubStatus:"data.properties.entitySubStatus.value",
    samplingPercentage:"data.properties.samplingPercentage.value",
    reasonForDecision: "data.properties.reasonForDecision.value",
    nextReviewDate:"data.properties.nextReviewDate.value",
    piFinalRiskRating: "data.properties.piFinalRiskRating.value",
    PIBVIWrittenAssurance: "data.properties.PIBVIWrittenAssurance.value",
    regulatoryStatus: "data.properties.regulatoryStatus.value",
    effectiveDate: "data.properties.effectiveDate.value",
    seniorRelationshipManager: "data.properties.seniorRelationshipManager.value",
    ClientCountryOfIncorporation: "data.properties.ClientCountryOfIncorporation.value",
    PIAssessmentFinalDecision: "data.properties.PIAssessmentFinalDecision.value",
    PISAMWrittenAssurance: "data.properties.PISAMWrittenAssurance.value",
    nameofRegulator: "data.properties.nameofRegulator.value",
    dateEntered: "data.properties.dateEntered.value",
    bookingEntity: "data.properties.bookingEntity.value",
    serviceLevelStatus: "data.properties.serviceLevelStatus.value",
    natureOfBusiness: "data.properties.natureOfBusiness.value",
    countryOfIncorporation: "data.properties.countryOfIncorporation.value",
    lastApprovalDate: "data.properties.lastApprovalDate.value",
    legalEntityType: "data.properties.legalEntityType.value",
    companyType: "data.properties.companyType.value",
    natureOfBusinessOther: "data.properties.natureOfBusinessOther.value",
    dateOfIncorporation: "data.properties.dateOfIncorporation.value",
    standardPaymentTerm: "data.properties.standardPaymentTerm.value",
    rateList: "data.properties.rateList.value",
    backgroundRationale: "data.properties.backgroundRationale.value",
    otherBusinessActivitiesDescription: "data.properties.otherBusinessActivitiesDescription.value",
    industryCode: "data.properties.industryCode.value",
    regulatorJurisdiction: "data.properties.regulatorJurisdiction.value",
    countryOfPepPosition: "data.properties.countryOfPepPosition.value",
    cddProfile: "data.properties.cddProfile.value"

}


function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}


Object.keys(paths).forEach(fields=>{
    let expectedValue = pm.iterationData.get(fields);
    let responsePath = paths[fields]
    
    if(expectedValue){
        pm.test(`Validation Test for ${fields} Field`, function(){

            try{

                let actualValue = getNestedValue(pm.response.json(), responsePath)
                
                if (!isNaN(expectedValue) && !isNaN(actualValue)) {
                    actualValue = Number(actualValue);
                }

                pm.expect(actualValue).to.eql(expectedValue)
    


            }catch(error){
                if(error=='AssertionError'){
                    throw new Error(`The Value Does Not match for ${fields}: ${error.message}`);
                }
                throw new Error(`The Object ${fields} is not present in response: ${error.message}`);
            }

        })
    }else{
        console.log(`Skipping the test for ${fields} as it may be either empty or null in the excel sheet`);
    }
    
})