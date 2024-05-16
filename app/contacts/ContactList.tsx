import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import CardListElement from "./CardListElement";
import useStore from "@/utils/useStore";

export default function ContactList() {
  const contacts = useStore((state) => state.contacts);

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
      <CardFooter className="flex justify-between items-center">
        <small className="text-default-500">Play all</small>
        <small className="text-default-500">Shuffle</small>
      </CardFooter>
    </Card>
  );
}
