import { create } from 'zustand'

export type Contact = {
  id: {
    name?: string
    value?: string
  }
  name: {
    title?: string
    first: string
    last: string
  }
  email?: string
  phone?: string
  cell?: string
  picture?: {
    large?: string
    medium?: string
    thumbnail?: string
  }
}

type Store = {
  contacts: Contact[]
  selectedContact: Contact | null
  initContacts: (contacts: Contact[]) => void
  addContact: (contact: Contact) => void
  editContact: (contact: Contact) => void
  deleteContact: (contact: Contact) => void
  selectContact: (contact: Contact) => void
}

const useStore = create<Store>((set) => ({
  contacts: [],
  selectedContact: null,
  initContacts: (contacts) => set({ contacts }),
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
  editContact: (contact) => set((state) => ({ contacts: state.contacts.map((c) => (c.id.value === contact.id.value ? contact : c)) })),
  deleteContact: (contact) => set((state) => ({ contacts: state.contacts.filter((c) => c.id.value !== contact.id.value) })),
  selectContact: (contact) => set((state) => ({ selectedContact: contact })),
}))

export default useStore