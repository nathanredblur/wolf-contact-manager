import { EmailIcon, HeartFilledIcon, PhoneIcon } from "@/components/icons";
import useStore, { Contact } from "@/utils/useStore";
import { Avatar } from "@nextui-org/avatar";
import { Chip } from "@nextui-org/chip";
import clsx from "clsx";

type Props = {
  contactData: Contact;
};

export default function CardListElement({ contactData }: Props) {
  const selectContact = useStore((state) => state.selectContact);
  const selectedContact = useStore((state) => state.selectedContact);

  const onClick = () => selectContact(contactData);

  const fullName = contactData.name;
  const isActive = selectedContact?.id === contactData.id;

  return (
    <div
      className={clsx(
        "flex gap-2 p-2 rounded-full hover:bg-primary mouse-pointer transition-all cursor-pointer",
        isActive && "bg-primary"
      )}
      onClick={onClick}
    >
      <Avatar size="md" src={contactData.picture?.thumbnail} showFallback />
      <div className="flex-1">
        <h4 className="font-bold text-base">{fullName} </h4>
        <div className="flex gap-1">
          {contactData.phone && (
            <Chip
              startContent={<PhoneIcon size={18} />}
              variant="bordered"
              color="danger"
              size="sm"
            >
              Phone
            </Chip>
          )}
          {contactData.email && (
            <Chip
              startContent={<EmailIcon size={18} />}
              variant="bordered"
              color="warning"
              size="sm"
            >
              Email
            </Chip>
          )}

          <Chip
            // startContent={<EmailIcon size={18} />}
            variant="bordered"
            color="warning"
            size="sm"
          >
            {contactData.gender}
          </Chip>

          {contactData.status === "active" && (
            <Chip
              // startContent={<EmailIcon size={18} />}
              variant="bordered"
              color="success"
              size="sm"
            >
              {contactData.status}
            </Chip>
          )}
          {contactData.status === "inactive" && (
            <Chip
              // startContent={<EmailIcon size={18} />}
              variant="bordered"
              color="danger"
              size="sm"
            >
              {contactData.status}
            </Chip>
          )}
        </div>
      </div>
      {contactData.phone && contactData.email && (
        <div className="border-1 rounded-full size-10 flex items-center justify-center">
          <HeartFilledIcon className="text-white" />
        </div>
      )}
    </div>
  );
}
