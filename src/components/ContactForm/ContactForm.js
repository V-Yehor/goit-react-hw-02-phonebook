import { Formik } from 'formik';
import {
  FormWrapper,
  FormField,
  FormLabel,
  FormBtn,
} from './ContactForm.styled';

import * as Yup from 'yup';

const contactsSheme = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = ({ OnSubmitForm }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsSheme}
      onSubmit={(values, actions) => {
        OnSubmitForm(values);
        actions.resetForm();
      }}
    >
      <FormWrapper>
        <FormLabel>
          Name
          <FormField name="name" />
        </FormLabel>
        <FormLabel>
          Number
          <FormField name="number" />
        </FormLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrapper>
    </Formik>
  );
};
