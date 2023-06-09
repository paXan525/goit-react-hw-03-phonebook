import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm';
import ContactList from './contactList';
import Filter from './filter';
import { Container, Title, SubTitle, Notification } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = values => {
    const { contacts } = this.state;

    const uniqueName = contacts.find(
      element => element.name.toLowerCase() === values.name.toLowerCase()
    );

    if (uniqueName) return alert(uniqueName.name + ' is already in contacts.');

    const contact = {
      id: nanoid(),
      ...values,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { length } = this.state.contacts;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        {length !== 0 ? (
          <div>
            <Filter
              value={filter}
              onChange={this.changeFilter}
              name={this.state.contacts.name}
            />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        ) : (
          <Notification>The contact list is empty!</Notification>
        )}
      </Container>
    );
  }
}

export default App;
