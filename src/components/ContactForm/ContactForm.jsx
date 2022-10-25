import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import schema from 'validation/validation';

const initialValues = {
  name: '',
  number: '',
};

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor={nameId}>
          Name <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor={numberId}>
          Number <Field type="tel" name="number" id={numberId} />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
