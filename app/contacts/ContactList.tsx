import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import CardListElement from "./CardListElement";
import useStore, { Contact } from "@/utils/useStore";
import { EmailIcon, PhoneIcon } from "@/components/icons";

export default function ContactList() {
  const contacts = useStore((state) => state.contacts);
  const countEmails = (contacts: Contact[]) =>
    contacts.filter((contact) => contact.email).length;
  const countPhones = (contacts: Contact[]) =>
    contacts.filter((contact) => contact.phone).length;

  return (
    <Card className="h-full py-3 flex-1">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        Contacts
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col gap-1">
        {contacts.map((contact) => (
          <CardListElement contactData={contact} key={contact.id.value} />
        ))}
      </CardBody>
      <CardFooter className="flex gap-4">
        <div className="text-default-500 flex gap-2 items-center">
          <EmailIcon size={18} />
          {countEmails(contacts)} Emails
        </div>
        <div className="text-default-500 flex gap-2 items-center">
          <PhoneIcon size={18} />
          {countPhones(contacts)} Phones
        </div>
      </CardFooter>
    </Card>
  );
}
