import Form from "./Form";
import Heading from "./Heading";

export default function InfoForm() {
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
        />

        <Form
          labelName="Email Address"
          inputType="email"
          inputPlaceholder="eg. adepojuadebobola6@gmail.com"
        />

        <Form
          labelName="Phone Number"
          inputType="number"
          inputPlaceholder="eg. +234 80 812 376 17"
        />
      </form>
    </div>
  );
}
