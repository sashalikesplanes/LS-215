import { emailData } from "./email-data.mjs";

function mailCount(emailData) {
    const emails = emailData.split("##||##");
    const emailDates = emails.map((email) => getDate(email));

    const earliestDate = emailDates.reduce((currentEaliest, current) => {
        return current < currentEaliest ? current : currentEaliest;
    });

    const latestDate = emailDates.reduce((currentEaliest, current) => {
        return current > currentEaliest ? current : currentEaliest;
    });

    console.log(`Count of Email: ${emails.length}`);
    console.log(
        `Date Range: ${earliestDate.toDateString()} - ${latestDate.toDateString()}`
    );

    function getDate(email) {
        const dateLine = email.split("#/#")[2];
        const dateString = dateLine.match(/\d{2}-\d{2}-\d{4}/g)[0];
        return new Date(dateString);
    }
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
