import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// to check if the component re-render on handling and submitting form.
let renderCount = 0;

function YoutubeForm() {
  // all react Hooks are functions and useForm is also a function, The useForm function return an object which we store in constant.
  // we can also directly destractured all the methods from (useForm).
  const form = useForm();
  // This (form) object will help us in, 1. managing/handling form data, 2. submitting form data, 3. Enforce validation and provide visual feedback.

  // +++++++++++++++++ 1. Manage/handle form state ++++++++++++++++++++++
  // To manage form state the hook provide a method (register) that can be access from (form) object. lets destracture it.
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // ++++++++++ 1.1.Register field ++++++++++++
  // One of the key concepts in React Hook Form is to register your component into the hook. This will make its value available for both the form validation and submission.
  // Note: Each field is required to have a (name) as a key for the registration process.

  // the register method has four methods that we need to hook into the form control, it is under the hood.
  // const {name, ref, onChange, onBlur} = register("username")

  // +++++++++++++++++++++ 2. form submission ++++++++++++++++++++++
  // Form submission is completed in three steps, 1. define function, 2. destractured handleSubmit function from (form) object, 3. listen to the form onSubmit event and assign (handleSubmit) as handler and pass (submitForm) as an argument.
  // By doing this the (submitForm) function automatically access to the form data which we manipulate with, but here we simply log it to the console.

  // this function will be called when the submit button is pressed.
  const submitForm = (data) => {
    console.log("Form Submitted!", data);
  };

  // +++++++++++++++++++++ 3. form Validation ++++++++++++++++++++++
  // react hook form support various HTML validation rules.
  // 1. required, 2. minLehgtha & maxLength, 3. min & max, 4. pattern and etc.
  // To display error message to the end user on the website, we can destructured an object (formState) from the object (form).
  // this (formState) has many information, but for now we will only destractured (error) object from (formState),  the error object contain the individual field error.
  // lets access the fiels errors and display them in the paragraph tag below the corresponding element.
  
  // To add a custom validation we add a key value pair to the option object passed in the register function, the key is going to be (validate) and it take a function as a value, And the function automaticall recieve the field value as an argument

  renderCount++;
  return (
    <div>
      <h1>YouTube Form: {renderCount / 2}</h1>

      {/* The (noValidate) will prevent browser validation and allow react hok form to handle validation. */}
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        {/* // To register the field with react hook form, and get all the methods of (register) method we spread the (register) method inside the input field. */}

        {/* by passing the (register) method to input fields the react Hook form took charge of our form state/data */}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                // To maintain consistency across the rule we use object for the required property
                value: true,
                message: "username is requierd",
              },
            })}
          />
          {/* username is the key that we have passed to register method */}
          <p className="error">{errors.username?.message}</p>
          {/* The error object contains error for every field that has field validation. and through which we can access the message property and display in UI. */}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9, !#$%&'**/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email formate",
              },
              // validate: (fieldValue)=>{
              //   return(
              //     fieldValue !== "admin@example.com" || "Enter a different email address"
              //   )
              //   // it mean that if input value is not "admin@example.com" the validation is satisfied, but if the field value is "admin@example.com" set the error message as "Enter a different email address".
              // }

              // validate can also be an object with multiples rules as key value pair, it is for multiple custome rules.
              validate: {
                notAdmin: (fieldValue) => {
                  return(
                    fieldValue !== "admin@example.com" || "Enter a different email address"
                  )
                },
                notBlackListed: (fieldValue)=>{
                  return(
                    !fieldValue.endsWith("baddomain.com") || "This domain is not supported"
                  )
                  // if field value is not end with this domain then validation is satified, if it end with this domain then show the error message
                }
                 
              }
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "channel is requierd"
              }
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;

// +++++++++++++++++++++++++++ Devtool steps +++++++++++++++++++++++++++++++
// Note. we need to install react hook form devTool, to track and visualize form state.
// to install the tool, run the command (npm i -D @hookform/devtools), and then we need to
// import {DevTool} from "@hookform/devtools".
// then envoke the component (DevTool) after the (form) closing tag.
// The useForm hook return (control) that we can destractured from (form) object, and pass it as props to (DevTool), and it will connect our form with the devtool.

// Note. These concepts are the basics of React Hook Form which the (Codeevolution) youtube channel discuss in first 10 videos of React Hook Form series, for further advance concepts about React Hook Form refere to that playlist which has about 31 videos.