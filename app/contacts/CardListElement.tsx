import { HeartFilledIcon } from "@/components/icons";
import useStore, { Contact } from "@/utils/useStore";
import { Image } from "@nextui-org/image";
import clsx from "clsx";
import NextImage from "next/image";

type Props = {
  contactData: Contact;
};

export default function CardListElement({ contactData }: Props) {
  const selectContact = useStore((state) => state.selectContact);
  const selectedContact = useStore((state) => state.selectedContact);

  const onClick = () => selectContact(contactData);

  const fullName = `${contactData.name.first} ${contactData.name.last}`;
  const isActive = selectedContact?.id.value === contactData.id.value;

  return (
    <div
      className={clsx(
        "flex gap-2 p-2 rounded-full hover:bg-primary mouse-pointer transition-all cursor-pointer",
        isActive && "bg-primary"
      )}
      onClick={onClick}
    >
      <Image
        as={NextImage}
        isZoomed={isActive}
        width={48}
        height={48}
        radius="full"
        src={contactData.picture?.thumbnail} // Add conditional check for undefined
        alt="user"
      />
      <div className="flex-1">
        <h4 className="font-bold text-large">{fullName} </h4>
        <p className="text-default-500">
          <small>
            <span className="text-default-500">+234 123 456 789</span>
          </small>
        </p>
      </div>
      <div className="border-1 rounded-full size-12 flex items-center justify-center">
        <HeartFilledIcon className="text-white" />
      </div>
    </div>
  );
}
