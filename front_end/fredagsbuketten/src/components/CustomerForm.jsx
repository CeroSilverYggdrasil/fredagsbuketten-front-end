import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CustomerForm() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState([]);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState([]);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState([]);

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState([]);

  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState([]);

  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState([]);

  function validateEmail() {
    let emailErrors = [];
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      emailErrors.push("It must be a correct email");
    }
    if (!email) {
      emailErrors.push("Email is required");
    }
    setEmailError(emailErrors);
  }

  function validateFirstName() {
    let errors = [];
    if (!firstName) {
      errors.push("First name is required");
    }
    setFirstNameError(errors);
  }

  function validateLastName() {
    let errors = [];
    if (!lastName) {
      errors.push("Last name is required");
    }
    setLastNameError(errors);
  }

  function validateAddress() {
    let errors = [];
    if (!address) {
      errors.push("Address is required");
    }
    setAddressError(errors);
  }

  function validateCity() {
    let errors = [];
    if (!city) {
      errors.push("City is required");
    }
    setCityError(errors);
  }

  function validateMobile() {
    let errors = [];
    if (!mobile) {
      errors.push("Mobile is required");
    }
    setMobileError(errors);
  }

  function validateZipCode() {
    let errors = [];
    if (!zipCode) {
      errors.push("ZipCode is required");
    }
    setZipCodeError(errors);
  }

  async function submitRegister(e) {
    e.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validateAddress();
    validateCity();
    validateMobile();
    validateZipCode();

    if (
      firstNameError.length === 0 &&
      lastNameError.length === 0 &&
      emailError.length === 0 &&
      addressError.length === 0 &&
      cityError.length === 0 &&
      mobileError.length === 0 &&
      zipCode.length === 0
    ) {
      try {
        const response = await fetch("http://localhost:8000/customer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            address,
            city,
            mobile,
            zipCode,
          }),
        });
        const data = await response.json();

        if (response.status === 201) {
          console.log("Success");
          navigate("/");
        } else {
          console.log("Something went wrong");
          //   Log the response json to the console
          console.log(data);
          throw new Error("Error from the server");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Error in form");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={submitRegister}>
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={validateFirstName}
                  />
                  {firstNameError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Efternamn
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onBlur={validateLastName}
                  />
                  {lastNameError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                  />
                  {emailError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    id="address"
                    name="address"
                    type="address"
                    autoComplete="address"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={validateAddress}
                  />
                  {addressError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Stad
                </label>
                <div className="mt-1">
                  <input
                    id="city"
                    name="city"
                    type="city"
                    autoComplete="city"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={validateCity}
                  />
                  {cityError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobil Nummer
                </label>
                <div className="mt-1">
                  <input
                    id="mobile"
                    name="mobile"
                    type="mobile"
                    autoComplete="mobile"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    onBlur={validateMobile}
                  />
                  {mobileError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postkod
                </label>
                <div className="mt-1">
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="zipCode"
                    autoComplete="zipCode"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    onBlur={validateZipCode}
                  />
                  {zipCodeError.map((error, index) => (
                    <p key={index} className="mt-2 text-sm text-red-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Skicka
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
