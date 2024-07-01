"use client";
import ContactList from "./ContactList";
import ContactSideBar from "./ContactSideBar";
import ContactCard from "./ContactCard";
import useStore from "@/utils/useStore";
import { useEffect } from "react";

export default function ContactsPage() {
  const initContacts = useStore((state) => state.initContacts);

  // seed data
  useEffect(() => {
    const fetchSeedData = async () => {
      const staticData = await fetch(
        "https://gorest.co.in/public/v2/users",
        {}
      ).then((res) => res.json());
      initContacts(staticData);
    };
    fetchSeedData();
  }, []);

  return (
    <div className="flex gap-3 h-full">
      <div className="w-1/5 h-full">
        <ContactSideBar />
      </div>
      <ContactList />
      <ContactCard />
    </div>
  );
}
