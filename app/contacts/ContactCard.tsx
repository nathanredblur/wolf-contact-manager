import useStore, { Contact, SelectedContact } from "@/utils/useStore";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";

export default function ContactCard() {
  const selectedContact = useStore((state) => state.selectedContact);
  const deleteContact = useStore((state) => state.deleteContact);
  const saveContact = useStore((state) => state.saveContact);
  const edithContact = useStore((state) => state.editContact);

  const [contact, setContact] = useState<SelectedContact>();
  const isEditing = selectedContact?.mode === "edit";

  useEffect(() => {
    if (isEditing) {
      setContact(selectedContact);
    }
  }, [isEditing, selectedContact]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;

    setContact((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const onSave = () => {
    if (!contact) return;
    // Validate that first and last name are not empty
    if (!contact.name) {
      alert("Name is required");
      return;
    }

    // validate that email or phone are not empty
    if (!contact.email && !contact.phone) {
      alert("Email or Phone are required");
      return;
    }

    saveContact(contact);
  };

  const onCancel = () => {
    // if canceling a new contact, delete it
    if (contact?.name === "new") {
      deleteContact();
      setContact(null);
    } else {
      // restore the original contact
      if (selectedContact) {
        saveContact({
          ...selectedContact,
          mode: "view",
        });
      }
    }
  };

  if (!selectedContact) return null;

  const fullName = selectedContact.name;

  return (
    <Card className="h-full py-3 flex-1">
      <CardBody className="overflow-visible py-2 flex flex-col gap-3">
        <div className="flex items-center gap-2 bg-gray-600 rounded-3xl p-3">
          <Avatar size="lg" src={selectedContact.picture?.large} showFallback />
          <div>
            {isEditing && (
              <Input
                type="text"
                name="name"
                label="Name"
                onChange={onChange}
                value={contact?.name || ""}
              />
            )}
            {!isEditing && <h4 className="font-bold text-large">{fullName}</h4>}
          </div>
        </div>
        {isEditing && (
          <div className="bg-gray-600 rounded-3xl p-3">
            <Input
              type="email"
              name="email"
              label="Email"
              onChange={onChange}
              value={contact?.email || ""}
            />
          </div>
        )}

        {!isEditing && selectedContact.email && (
          <div className="bg-gray-600 rounded-3xl p-3">
            <h4 className="font-bold text-large">Email</h4>
            <p>{selectedContact.email}</p>
          </div>
        )}

        {isEditing && (
          <div className="bg-gray-600 rounded-3xl p-3">
            <Input
              type="tel"
              name="phone"
              label="Phone"
              onChange={onChange}
              value={contact?.phone || ""}
            />
          </div>
        )}

        {!isEditing && selectedContact.phone && (
          <div className="bg-gray-600 rounded-3xl p-3">
            <h4 className="font-bold text-large">Phone</h4>
            <p>{selectedContact.phone}</p>
          </div>
        )}
      </CardBody>
      <CardFooter className="flex justify-between">
        {isEditing && (
          <>
            <Button color="success" radius="full" onClick={onSave}>
              Save
            </Button>
            <Button color="danger" radius="full" onClick={onCancel}>
              Cancel
            </Button>
          </>
        )}

        {!isEditing && (
          <>
            <Button color="success" radius="full" onClick={edithContact}>
              Edit Contact
            </Button>
            <Button color="danger" radius="full" onClick={deleteContact}>
              Delete Contact
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
