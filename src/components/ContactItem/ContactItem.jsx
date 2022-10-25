const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ul>
      {name} : {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ul>
  );
};

export default ContactItem;
