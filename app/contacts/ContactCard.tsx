import useStore from "@/utils/useStore";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";

export default function ContactCard() {
  const selectedContact = useStore((state) => state.selectedContact);

  if (!selectedContact) return null;

  const fullName = `${selectedContact.name.first} ${selectedContact.name.last}`;

  return (
    <Card className="h-full py-3 flex-1">
      <CardBody className="overflow-visible py-2">
        <div className="flex items-center gap-2">
          <Image
            as={NextImage}
            isBlurred
            width={75}
            height={75}
            radius="full"
            src={selectedContact.picture?.large}
            alt="user"
          />
          <div>
            <h4 className="font-bold text-large">{fullName}</h4>
            <p className="text-default-500">
              <small>
                <span className="text-default-500">+234 123 456 789</span>
              </small>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
