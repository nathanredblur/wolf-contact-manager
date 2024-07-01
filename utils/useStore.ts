import { create } from "zustand";

export type Contact = {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female" | "other";
  status: "inactive" | "active";
  phone?: string;
  cell?: string;
  picture?: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
};

export type SelectedContact =
  | (Contact & {
      mode?: "view" | "edit";
    })
  | null;

type Store = {
  contacts: Contact[];
  selectedContact: SelectedContact;
};

type Actions = {
  initContacts: (contacts: Contact[]) => void;
  selectContact: (contact: Contact) => void;

  newContact: () => void;
  editContact: () => void;
  deleteContact: () => void;
  saveContact: (contact: SelectedContact) => void;
};

const useStore = create<Store & Actions>((set) => ({
  contacts: [],
  selectedContact: null,
  initContacts: (contacts) => set({ contacts }),
  selectContact: (contact) => set((state) => ({ selectedContact: contact })),

  newContact: () =>
    set((state) => ({
      selectedContact: {
        id: Math.random(),
        name: "new",
        email: "",
        gender: "other",
        status: "inactive",
        mode: "edit",
      },
    })),

  editContact: () =>
    set((state) => {
      if (!state.selectedContact) return state;
      return {
        selectedContact: {
          ...state.selectedContact,
          mode: "edit",
        },
      };
    }),

  deleteContact: () => {
    set((state) => ({
      contacts: state.contacts.filter(
        (c) => c.id !== state.selectedContact?.id
      ),
      selectedContact: null,
    }));
  },

  saveContact: (contact) => {
    if (!contact) return;
    const { mode, ...simpleContact } = contact;

    // if the contact is new
    if (simpleContact.name === "new") {
      // create a new ID
      simpleContact.id = Math.random();

      set((state) => ({
        contacts: [...state.contacts, simpleContact],
        selectedContact: simpleContact,
      }));
      return;
    }

    // update the contact
    set((state) => ({
      contacts: state.contacts.map((c) =>
        c.id === simpleContact.id ? simpleContact : c
      ),
      selectedContact: simpleContact,
    }));
  },
}));

export default useStore;
