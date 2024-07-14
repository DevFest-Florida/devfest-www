export class OrganizationInfo
{
    name: string = "";
    conferenceEmail: string = "";
    codeOfConductReportFormLink: string = "";
}

export class OrganizationServices
{
    getOrganizationInfo() : OrganizationInfo{
        let record = new OrganizationInfo();
        record.name = "Google Developer Group of Central Florida";
        record.conferenceEmail = "organizers@devfestflorida.org";
        record.codeOfConductReportFormLink = "https://fixme.com";
        record.eventName = "DevFest Central Florida";
        return record;
    }
}