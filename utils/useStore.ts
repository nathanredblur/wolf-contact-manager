import { create } from "zustand";

export type Contact = {
  id: {
    name?: string;
    value?: string;
  };
  name: {
    title?: string;
    first: string;
    last: string;
  };
  email?: string;
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
        id: { value: "new" },
        name: { first: "", last: "" },
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
        (c) => c.id.value !== state.selectedContact?.id.value
      ),
      selectedContact: null,
    }));
  },

  saveContact: (contact) => {
    if (!contact) return;
    const { mode, ...simpleContact } = contact;

    // if the contact is new
    if (simpleContact.id.value === "new") {
      // create a new ID
      simpleContact.id.value = Math.random().toString(36).substr(2, 9);

      set((state) => ({
        contacts: [...state.contacts, simpleContact],
        selectedContact: simpleContact,
      }));
      return;
    }

    // update the contact
    set((state) => ({
      contacts: state.contacts.map((c) =>
        c.id.value === simpleContact.id.value ? simpleContact : c
      ),
      selectedContact: simpleContact,
    }));
  },
}));

export default useStore;
