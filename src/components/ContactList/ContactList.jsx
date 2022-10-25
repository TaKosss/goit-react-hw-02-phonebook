import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <li>
      {contacts().map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </li>
  );
};

export default ContactList;
