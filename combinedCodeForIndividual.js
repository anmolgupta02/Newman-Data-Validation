// // Define your fields to validate
// const fieldsToValidate = ['entityStatus', 'firstName']; // Add more fields here as needed

// // Iterate over each field and dynamically generate the test
// fieldsToValidate.forEach(field => {
//     const expectedValue = pm.iterationData.get(field); // Get expected value from CSV for each field
//     const props = pm.response.json().data.properties;
//     if (expectedValue) {
//         pm.test(`validate ${field}`, function() {
//             try {
//                 pm.expect(props[field].value).to.eql(expectedValue);
//             } catch (error) {
//                 if (error.name === 'AssertionError') {
//                     throw new Error(`The Value Does Not match for ${field}: ${error.message}`);
//                 }
//                 throw new Error(`The Object ${field} is not present in response: ${error.message}`);
//             }
//         });
//     } else {
//         console.log(`Skipping ${field} test as the value is empty or null in the CSV file`);
//     }
// });







// // Define the fields to validate along with their paths in the response
// const fieldsToValidateWithPath = {
//     entityStatus: 'data.properties.entityStatus.value',  // Path for entityStatus
//     FenXId:'data.id' // Path for firstName
//     // Add more fields with custom paths, e.g., lastName: 'props.personalInfo.lastName', etc.
// };

// // Iterate over each field and dynamically generate the test
// Object.keys(fieldsToValidateWithPath).forEach(field => {
//     const expectedValue = pm.iterationData.get(field); // Get expected value from CSV for each field
//     const responsePath = fieldsToValidateWithPath[field]; // Get the custom response path
    
//     if (expectedValue) {
//         pm.test(`validate ${field}`, function() {
//             try {
//                 // Use Lodash's get function to retrieve the value at the custom path
//                 const actualValue = _.get(pm.response.json(), responsePath); 
//                 pm.expect(actualValue).to.eql(expectedValue);
//             } catch (error) {
//                 if (error.name === 'AssertionError') {
//                     throw new Error(`The Value Does Not match for ${field}: ${error.message}`);
//                 }
//                 throw new Error(`The Object ${field} is not present in response: ${error.message}`);
//             }
//         });
//     } else {
//         console.log(`Skipping ${field} test as the value is empty or null in the CSV file`);
//     }
// });



const fieldsToValidateWithPaths2 = {
        
    FenXId:'data.id',  
    alternateId: "data.alternateId",
    isClient: "data.properties.isClient.value",
    addressValidationType: "data.properties.addressValidationType.value",
    clientBookingEntity: "data.properties.clientBookingEntity.value",
    sourceOfWealthUBO: "data.properties.sourceOfWealthUBO.value",
    pep: "data.properties.pep.value",
    email: "data.properties.email.value",
    passport: "data.properties.passport.value",
    occupation: "data.properties.occupation.value",
    refID: "data.properties.refID.value",
    clientType: "data.properties.clientType.value",
    addressValidationIssuePlace: "data.properties.addressValidationIssuePlace.value",
    individualTitle: "data.properties.individualTitle.value",
    primaryBusinessUnit: "data.properties.primaryBusinessUnit.value",
    creditControlReminderEmail: "data.properties.creditControlReminderEmail.value",
    passportPlaceOfIssue: "data.properties.passportPlaceOfIssue.value",
    dateOfBirth: "data.properties.dateOfBirth.value",
    CDDStatus: "data.properties.CDDStatus.value",
    relationshipManager: "data.properties.relationshipManager.value",
    addressValidationNote: "data.properties.addressValidationNote.value",
    lastName: "data.properties.lastName.value",
    sectorOfTheClientGroupSalesOffice: "data.properties.sectorOfTheClientGroupSalesOffice.value",
    sanctions: "data.properties.sanctions.value",
    invoiceEmail: "data.properties.invoiceEmail.value",
    passportNumber: "data.properties.passportNumber.value",
    placeOfBirth: "data.properties.placeOfBirth.value",
    entityStatus: "data.properties.entityStatus.value",
    addressValidationCertification: "data.properties.addressValidationCertification.value",
    firstName: "data.properties.firstName.value",
    fileHandler: "data.properties.fileHandler.value",
    passportIssueDate: "data.properties.passportIssueDate.value",
    gender: "data.properties.gender.value",
    entitySubStatus: "data.properties.entitySubStatus.value",
    roleType: "data.properties.roleType.value",
    enforcement: "data.properties.enforcement.value",
    passportExpiryDate: "data.properties.passportExpiryDate.value",
    nextReviewDate: "data.properties.nextReviewDate.value",
    nationality: "data.properties.nationality.value",
    effectiveDate: "data.properties.effectiveDate.value",
    finalRiskRating: "data.properties.finalRiskRating.value",
    serviceLevelStatus: "data.properties.serviceLevelStatus.value",
    seniorRelationshipManager: "data.properties.seniorRelationshipManager.value",
    lastNameChinese: "data.properties.lastNameChinese.value",
    otherNationality: "data.properties.otherNationality.value",
    dateEntered: "data.properties.dateEntered.value",
    adverseMedia: "data.properties.adverseMedia.value",
    firstNameCHinese: "data.properties.firstNameCHinese.value",
    alias: "data.properties.alias.value",
    passportSecond: "data.properties.passportSecond.value",
    lastApprovalDate: "data.properties.lastApprovalDate.value",
    pepDateOfApproval: "data.properties.pepDateOfApproval.value",
    passportSecondPlaceOfIssue: "data.properties.passportSecondPlaceOfIssue.value",
    natureOfBusiness: "data.properties.natureOfBusiness.value",
    passportSecondNumber: "data.properties.passportSecondNumber.value",
    pepNotes: "data.properties.pepNotes.value",
    natureOfBusinessOther: "data.properties.natureOfBusinessOther.value",
    passportSecondIssueDate: "data.properties.passportSecondIssueDate.value",
    standardPaymentTerm: "data.properties.standardPaymentTerm.value",
    passportSecondExpiryDate: "data.properties.passportSecondExpiryDate.value",
    rateList: "data.properties.rateList.value",
    backgroundRationale: "data.properties.backgroundRationale.value",
    passportThird: "data.properties.passportThird.value",
    passportThirdPlaceOfIssue: "data.properties.passportThirdPlaceOfIssue.value",
    passportThirdNumber: "data.properties.passportThirdNumber.value",
    passportThirdIssueDate: "data.properties.passportThirdIssueDate.value",
    passportThirdExpiryDate: "data.properties.passportThirdExpiryDate.value",
    nationalId: "data.properties.nationalId.value",
    nationalIdPlaceOfIssue: "data.properties.nationalIdPlaceOfIssue.value",
    nationalIdStateOfIssue: "data.properties.nationalIdStateOfIssue.value",
    nationalIdNumber: "data.properties.nationalIdNumber.value",
    nationalIdIssueDate: "data.properties.nationalIdIssueDate.value",
    nationalIdExpiryDate: "data.properties.nationalIdExpiryDate.value",
    nationalIdNotes: "data.properties.nationalIdNotes.value",
    otherIdType: "data.properties.otherIdType.value",
    otherIdPlaceOfIssue: "data.properties.otherIdPlaceOfIssue.value",
    otherIdStateOfIssue: "data.properties.otherIdStateOfIssue.value",
    otherIdNumber: "data.properties.otherIdNumber.value",
    otherIdIssueDate: "data.properties.otherIdIssueDate.value",
    otherIdExpiryDate: "data.properties.otherIdExpiryDate.value",
    otherIdNotes: "data.properties.otherIdNotes.value",
    otherSecondIdType: "data.properties.otherSecondIdType.value",
    otherSecondIdPlaceOfIssue: "data.properties.otherSecondIdPlaceOfIssue.value",
    otherSecondIdStateOfIssue: "data.properties.otherSecondIdStateOfIssue.value",
    otherSecondIdNumber: "data.properties.otherSecondIdNumber.value",
    otherSecondIdIssueDate: "data.properties.otherSecondIdIssueDate.value",
    otherSecondIdExpiryDate: "data.properties.otherSecondIdExpiryDate.value",
    otherSecondIdNotes: "data.properties.otherSecondIdNotes.value",
    sourceOfWealthUBOOther: "data.properties.sourceOfWealthUBOOther.value",
    cddProfile: "data.properties.cddProfile.value"
    

};

// Helper function to get nested values using a path string
function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Iterate over each field and dynamically generate the test
Object.keys(fieldsToValidateWithPaths2).forEach(field => {
    let expectedValue = pm.iterationData.get(field); // Get expected value from CSV for each field
    const responsePath = fieldsToValidateWithPaths2[field]; // Get the full response path
    
    if (expectedValue) {
        pm.test(`validate ${field}`, function() {
            try {
                // Retrieve the value at the custom path using the helper function
                let actualValue = getNestedValue(pm.response.json(), responsePath);

                if (!isNaN(expectedValue) && !isNaN(actualValue)) {
                    actualValue = Number(actualValue);
                }

                pm.expect(actualValue).to.eql(expectedValue);
            } catch (error) {
                if (error.name === 'AssertionError') {
                    throw new Error(`The Value Does Not match for ${field}: ${error.message}`);
                }
                throw new Error(`The Object ${field} is not present in response: ${error.message}`);
            }
        });
    } else {
        console.log(`Skipping ${field} test as the value is empty or null in the CSV file`);
    }
});
