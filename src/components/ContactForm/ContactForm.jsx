import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import schema from 'validation/validation';

const initialValues = { name: '', number: '' };

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label>
          Name <Field type="text" name="name" required />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number <Field type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
