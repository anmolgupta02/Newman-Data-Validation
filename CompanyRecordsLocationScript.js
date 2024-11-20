const responseRecordsObj = pm.response.json().data.properties.companyRecordsLocation.collections;

// Create the expected data object for the current iteration
let expectedData = {
    addressType: pm.iterationData.get('addressType'),
    companyRecordsLocation_city: pm.iterationData.get('companyRecordsLocation_city'),
    companyRecordsLocation_state: pm.iterationData.get('companyRecordsLocation_state'),
    companyRecordsLocation_country: pm.iterationData.get('companyRecordsLocation_country'),
    companyRecordsLocation_line1: pm.iterationData.get('companyRecordsLocation_line1'),
    companyRecordsLocation_line2: pm.iterationData.get('companyRecordsLocation_line2'),
    companyRecordsLocation_zipCodePostCode: pm.iterationData.get('companyRecordsLocation_zipCodePostCode')
};

// Filter out blank fields dynamically
expectedData = Object.fromEntries(
    Object.entries(expectedData).filter(([key, value]) => value && value.trim() !== '')
);

// Validate the response data for the current iteration
pm.test(`Checking and Validating the Company Record Location Object Data`, function () {
    const result = checkForCRL(expectedData, responseRecordsObj);
    pm.expect(result).to.be.true; // Expect result to be true for current iteration
});

function checkForCRL(expectedData, responseData) {

    if (!responseData) {
        console.error("responseData is null or undefined.");
        return false;
    }

    if (!Array.isArray(responseData)) {
        console.log("Converting responseData to array...");
        responseData = Object.values(responseData);
    }

    let matcher = false;

    responseData.forEach(currentRecord => {
        const checkingRecord = currentRecord.properties;

        // Check if all fields in expectedData match the response record
        const allFieldsMatch = Object.keys(expectedData).every(key => {
            // Get the expected and actual values
            const expectedValue = expectedData[key] && expectedData[key].trim();
            const actualValue = checkingRecord[key] && checkingRecord[key].trim();

            // Compare the trimmed values
            return expectedValue === actualValue;
        });

        if (allFieldsMatch) {
            matcher = true; // Match found for this record
            return; // Exit the loop early
        }
    });

    return matcher; // Return true if at least one record matches, otherwise false
}
