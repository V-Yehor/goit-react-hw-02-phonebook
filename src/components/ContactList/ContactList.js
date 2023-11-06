import { List, ListItem, ListItemBtn } from './ContactList.styled';

export const ContactList = ({
  OnDelete,
  ContactInfo: { contacts, filter },
}) => {
  const visibleContacts = contacts.filter(contact => {
    const hasFilteredName = contact.name
      .toLowerCase()
      .includes(filter.toLowerCase());

    return hasFilteredName;
  });

  return (
    <>
      {contacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => OnDelete(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
