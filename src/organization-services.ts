export class OrganizationInfo
{
    name: string = "";
    conferenceEmail: string = "";
    codeOfConductReportFormLink: string = "";
    eventName: string;
    homePageUrl: string;
    linkedIn: string;
    twitter: string;
    facebook: string;
    instagram: string;
}

export class OrganizationServices
{
    getOrganizationInfo() : OrganizationInfo{
        let record = new OrganizationInfo();
        record.name = "Google Developer Group of Central Florida";
        record.conferenceEmail = "organizers@devfestflorida.org";
        record.codeOfConductReportFormLink = "https://fixme.com";
        record.eventName = "DevFest Central Florida";
        record.homePageUrl = "googledevscentralflorida.com";
        record.linkedIn = "www.linkedin.com/company/33453230";
        record.twitter = "twitter.com/devfestfl";
        record.facebook= "";
        record.instagram = "";
        return record;
    }
}