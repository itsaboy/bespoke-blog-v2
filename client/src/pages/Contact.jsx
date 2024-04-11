import { useEffect, useState, useContext } from "react";
import Input from "../components/Input";
import BodyInput from "../components/BodyInput";
import SubmitButton from "../components/SubmitButton";
import { AppContext } from "../context/AppContext";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");
  const { currentPage, setCurrentPage } = useContext(AppContext);

  useEffect(() => {
    setCurrentPage("Contact");
  }, [currentPage]);

  return (
    <div className="relative bg-transparent">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-sky-500 py-4">
              Let's work together
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <Input
                  htmlFor={"first-name"}
                  label={"First name"}
                  id={"first-name"}
                  name={"first-name"}
                  type={"text"}
                  required={true}
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
                <Input
                  htmlFor={"last-name"}
                  label={"Last name"}
                  id={"last-name"}
                  name={"first-name"}
                  type={"text"}
                  required={true}
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <Input
                  htmlFor={"email"}
                  label={"Email"}
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Input
                  htmlFor={"phone"}
                  label={"Phone"}
                  id={"phone"}
                  name={"phone"}
                  type={"tel"}
                  required={true}
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <BodyInput body={body} setBody={setBody} toolTip={"Max 500 characters"} />
              </div>
              <div className="mt-4 flex justify-end border-t border-gray-900/10 pt-8">
                <SubmitButton text={"Send message"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
