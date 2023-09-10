import Form from "./Form";
import Heading from "./Heading";

export default function InfoForm({
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
}) {
  function sendEmail(email) {
    setEmail(email);
  }

  function sendName(name) {
    setName(name);
  }

  function sendNumber(number) {
    setNumber(number);
  }
  return (
    <div>
      <Heading
        first="Personal info"
        second="Please provide your name, email address, and phone number."
      />
      <form>
        <Form
          labelName="Name"
          inputType="text"
          inputPlaceholder="eg. Adepoju Adebobola"
          name={name}
          send={sendName}
        />

        <Form
          labelName="Email Address"
          inputType="email"
          inputPlaceholder="eg. adepojuadebobola6@gmail.com"
          name={email}
          send={sendEmail}
        />

        <Form
          labelName="Phone Number"
          inputType="number"
          inputPlaceholder="eg. +234 80 812 376 17"
          name={number}
          send={sendNumber}
        />
      </form>
    </div>
  );
}
