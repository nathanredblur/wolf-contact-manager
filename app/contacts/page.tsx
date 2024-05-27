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
        "https://randomuser.me/api/?results=5&seed=wolf&exc=gender,location,login,registered,dob,nat",
        {
          cache: "force-cache",
        }
      )
        .then((res) => res.json())
        .then((data) => data.results);
      initContacts(staticData);
    };
    fetchSeedData();
  }, [initContacts]);

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
