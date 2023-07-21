import { useState } from "react";
import Form from "./Form";
import Heading from "./Heading";

export default function InfoForm() {
  const [name, setName] = useState("")
  function save(e) {
    e.preventDefault()
  }
  return (
    <div>
      <Heading
        first="Personal info"
        second="Please provide your name, email address, and phone number."
      />
      <form onSubmit={(e) => save(e)}>
        <Form
          labelName="Name"
          inputType="text"
          inputPlaceholder="eg. Adepoju Adebobola"
          value={name}
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
