const expectedID = pm.iterationData.get('FenXId');
const expectedCompanyType = pm.iterationData.get('companyType');
const expectedCDDStatus = pm.iterationData.get('CDDStatus');
const expectedroleType = pm.iterationData.get('roleType');
const expectedEntityStatus = pm.iterationData.get('entityStatus');
const expectedShelfCompany = pm.iterationData.get('shelfCompany');
const expectedFileHandler = pm.iterationData.get('fileHandler');
const expectedPrimaryBusinessUnit = pm.iterationData.get('primaryBusinessUnit');
const expectedMasterfileStatus = pm.iterationData.get('masterfileStatus');
const expectedLegalEntityName = pm.iterationData.get('legalEntityName');
const expectedRefID = pm.iterationData.get('refID');
const expectedRelationshipManager = pm.iterationData.get('relationshipManager');
const expectedSoWDetails = pm.iterationData.get('sourceOfWealthDetails');
const expectedBookingEntity = pm.iterationData.get('bookingEntity');
const expectedAlternateId = pm.iterationData.get('AlternateId');
const expectedCompanyNumber = pm.iterationData.get('companyNumber')
const expectedNextReviewDate = pm.iterationData.get('nextReviewDate')
const expectedPIJuris = pm.iterationData.get('PIJurisdictions')
const expectedRiskRating = pm.iterationData.get('riskRating')
const expectedDescSourceOfFunds = pm.iterationData.get('descriptionSourceOfFunds')
const expectedClientType = pm.iterationData.get('clientType')
const expectedSectorOfSalesOffice = pm.iterationData.get('sectorOfTheClientGroupSalesOffice')
const expectedLastApprovalDate = pm.iterationData.get('lastApprovalDate')
const expectedDateOfCreation = pm.iterationData.get('dateOfCreation')
const expectedFinalRiskRating = pm.iterationData.get('finalRiskRating')
const expectedServiceLevelStatus = pm.iterationData.get('serviceLevelStatus')
const expectedCountryOfIncop = pm.iterationData.get('countryOfIncorporation')
const expectedNatureOfBusinessOther = pm.iterationData.get('natureOfBusinessOther')
const expectedLegalEntityType = pm.iterationData.get('legalEntityType')
const expectedLegalEntityNameChinese = pm.iterationData.get('legalEntityNameChinese')



const response = pm.response.json();

pm.test("Validate ID", function(){
    try{
        pm.expect(response.data.id).to.eql(expectedID);
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("ID is not present "+error.message)
    }
    
})

pm.test("Validate CompanyType", function(){
    try{
        pm.expect(response.data.properties.companyType.value).to.eql(expectedCompanyType)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Company Type is not present "+error.message)
    }
    
})

pm.test("Validate CDD Status", function(){
    try{
        pm.expect(response.data.properties.CDDStatus.value).to.eql(expectedCDDStatus)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("CDD Status is not present " +error.message)

    }
        
})

pm.test("Validate roleType", function(){
    try{
        pm.expect(response.data.properties.roleType.value).to.eql(expectedroleType)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Role Type is not present " +error.message)

    }
    
})

pm.test("Validate entityStatus", function () {
    try{
        pm.expect(response.data.properties.entityStatus.value).to.eql(expectedEntityStatus)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Entity Status is not present " +error.message)
    }
    
})

pm.test("Validate Shelf Company Flag", function () {
    try{
        pm.expect(response.data.properties.shelfCompany.value).to.eql(expectedShelfCompany)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Shelf Company is not present " +error.message)
    }
    
})

pm.test("Validate file handler", function () {
    try{
        pm.expect(response.data.properties.fileHandler.value).to.eql(expectedFileHandler)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("File Handler is not present " +error.message)
    }
  
})



pm.test("Validate Primary Business Unit", function () {
    try{
        pm.expect(response.data.properties.primaryBusinessUnit.value).to.eql(expectedPrimaryBusinessUnit)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Primary Business Unit is not present " +error.message)
    }
    
})


pm.test("Validate Master File Status", function () {
    try{
        pm.expect(response.data.properties.masterfileStatus.value).to.eql(expectedMasterfileStatus)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Master File Status is not present " +error.message)
    }
    
})

pm.test("Validate Legal Entity Name", function () {
    try{
        pm.expect(response.data.properties.legalEntityName.value).to.eql(expectedLegalEntityName)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Legal Entity Name is not present " +error.message)
    }
    
})


pm.test("Validate refID", function () {
    try{
        pm.expect(Number(response.data.properties.refID.value)).to.eql(expectedRefID)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Ref ID is not present " +error.message)
    }
    
})


pm.test("Validate Relationship Manager", function () {
    try{
        pm.expect(response.data.properties.relationshipManager.value).to.eql(expectedRelationshipManager)    
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Relationship manager is not present " +error.message)
    }
    
})

pm.test('Validate Source Of Wealth Details', function () {
    try{
        pm.expect(response.data.properties.sourceOfWealthDetails.value).to.eql(expectedSoWDetails)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Source Of Wealth details is not present " +error.message)
    }
    
})

pm.test('Validate Booking Entity', function () {
    try{
        pm.expect(response.data.properties.bookingEntity.value).to.eql(expectedBookingEntity)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)
        }
        throw new Error("Booking entity is not present " +error.message)
    }
    
})

pm.test('Validate Next Review Date', function(){
    try{
        pm.expect(response.data.properties.nextReviewDate.value).to.eql(expectedNextReviewDate)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)    
        }
        throw new Error("Next Review Date is Not Present "+error.message )
    }

})

pm.test('Validate Company Number', function(){
    try{
        pm.expect(response.data.properties.companyNumber.value).to.eql(expectedCompanyNumber)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)    
        }
        throw new Error("Company Number is Not Present "+error.message )
    }

})


pm.test('Validate PIJurisdiction', function(){
    try{
        pm.expect(response.data.properties.PIJurisdictions.value).to.eql(expectedPIJuris)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)    
        }
        throw new Error("PIJurisdiction is Not Present "+error.message )
    }

})

pm.test('Validate Risk Rating', function(){
    try{
        pm.expect(response.data.properties.riskRating.value).to.eql(expectedRiskRating)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values Does not match " +error.message)    
        }
        throw new Error("Risk Rating field is Not Present "+error.message )
    }

})


pm.test('Validate Desciption of Source of Funds', function(){
    try{
        pm.expect(response.data.properties.descriptionSourceOfFunds.value).to.eql(expectedDescSourceOfFunds)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Desciption of Source of Funds is Not Present "+error.message )
    }

})


pm.test('Validate Client Type', function(){
    try{
        pm.expect(response.data.properties.clientType.value).to.eql(expectedClientType)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Client Type is Not Present "+error.message )
    }

})


pm.test('Validate Client Type', function(){
    try{
        pm.expect(response.data.properties.clientType.value).to.eql(expectedClientType)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Client Type is Not Present "+error.message )
    }

})

pm.test('Validate Sector of the client Group Sales Office', function(){
    try{
        pm.expect(response.data.properties.sectorOfTheClientGroupSalesOffice.value).to.eql(expectedSectorOfSalesOffice)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Sector of the client Group Sales Office is Not Present "+error.message )
    }

})

pm.test('Validate Last Approval Date', function(){
    try{
        pm.expect(response.data.properties.lastApprovalDate.value).to.eql(expectedLastApprovalDate)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Last Approval Date is Not Present "+error.message )
    }

})

pm.test('Validate Date of Creation', function(){
    try{
        pm.expect(response.data.properties.dateOfCreation.value).to.eql(expectedDateOfCreation)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Date of Creation is Not Present "+error.message )
    }

})

pm.test('Validate Final Risk Rating', function(){
    try{
        pm.expect(response.data.properties.finalRiskRating.value).to.eql(expectedFinalRiskRating)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Final Risk Rating is Not Present "+error.message )
    }

})

pm.test('Validate Service Level Status', function(){
    try{
        pm.expect(response.data.properties.serviceLevelStatus.value).to.eql(expectedServiceLevelStatus)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Service Level Status is Not Present "+error.message )
    }

})

pm.test('Validate Country of Incorporation', function(){
    try{
        pm.expect(response.data.properties.countryOfIncorporation.value).to.eql(expectCountryOfIncop)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Country of Incorporation is Not Present "+error.message )
    }

})

pm.test('Validate Nature Of Business', function(){
    try{
        pm.expect(response.data.properties.natureOfBusinessOther.value).to.eql(expectedNatureOfBusinessOther)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Nature Of Business is Not Present "+error.message )
    }

})

pm.test('Validate Legal Entity Type', function(){
    try{
        pm.expect(response.data.properties.legalEntityType.value).to.eql(expectedLegalEntityType)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Legal Entity Type is Not Present "+error.message )
    }

})


pm.test('Validate Legal Entity Name Chinese', function(){
    try{
        pm.expect(response.data.properties.legalEntityNameChinese.value).to.eql(expectedLegalEntityNameChinese)
    }catch(error){
        if(error.name == 'AssertionError'){
            throw new Error("The Values does not match " +error.message)    
        }
        throw new Error("Legal Entity Name Chinese is Not Present "+error.message )
    }

})