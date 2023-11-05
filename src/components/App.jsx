import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
// import * as Yup from 'yup';

// const contactsSheme = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   number: Yup.string().required('Required'),
// });

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newConact => {
    const contact = { ...newConact, id: nanoid() };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  searchContact = newSearch => {
    this.setState(prevState => {
      return { filter: newSearch };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      const hasFilteredName = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());

      return hasFilteredName;
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          // validationSchema={contactsSheme}
          onSubmit={(values, actions) => {
            this.addContact(values);
            actions.resetForm();
          }}
        >
          <Form>
            <label>
              Name
              <Field name="name" />
            </label>
            <label>
              Number
              <Field name="number" />
            </label>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <div>
          <h2>Contacts</h2>
          <p>Find contact by name</p>
          <input
            type="text"
            name="search"
            placeholder="Type name"
            onChange={evt => this.searchContact(evt.target.value)}
          />
          {this.state.contacts.length > 0 && (
            <ul>
              {visibleContacts.map(contact => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
            </ul>
          )}
        </div>

        <GlobalStyle />
      </div>
    );
  }
}
