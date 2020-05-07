import { useFormik } from "formik";

const initialValues = {
  name: "",
  dob: "",
  profession: "",
  designation: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = "You name should not contains any number or special char";
  } else if (values.name.length >= 30) {
    errors.name = "You name should not be greater then 30 char";
  }

  if (!values.dob) {
    errors.dob = "Required";
  } else if (
    !/([12]\d{3}(\/)(0[1-9]|1[0-2])(\/)(0[1-9]|[12]\d|3[01]))/.test(values.dob)
  ) {
    errors.dob = "Please enter a valid dob";
  }

  if (!values.profession) {
    errors.profession = "Required";
  } else if (!/^[a-zA-Z]+$/.test(values.profession)) {
    errors.profession =
      "You profession should not contains any number or special char";
  } else if (values.profession.length >= 30) {
    errors.profession = "You profession should not be greater then 30 char";
  }

  if (!values.designation) {
    errors.designation = "Required";
  } else if (!/^[a-zA-Z]+$/.test(values.designation)) {
    errors.designation =
      "You designation should not contains any number or special char";
  } else if (values.designation.length >= 30) {
    errors.designation = "You designation should not be greater then 30 char";
  }

  return errors;
};

const Profile = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div class="flex flex-col items-center m-6">
      <h2 class=" inline-block text-2xl font-bold text-center text-gray-900 rounded-lg p-4">
        Profile Information
      </h2>
      <form
        class="grid grid-col gap-6 w-full max-w-lg my-4 border-2 border-gray-900 rounded-lg p-6"
        onSubmit={formik.handleSubmit}
      >
        <div class="grid">
          <label class="mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            class="border-2 border-gray-900 rounded-lg p-2 focus:outline-none  focus:shadow-outline-gray"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <span class=" text-sm text-red-600 mt-2">{formik.errors.name}</span>
          ) : (
            <span class=" text-sm text-gray-600 mt-2">
              Your name must contains only letter
            </span>
          )}
        </div>
        <div class="grid">
          <label class=" mb-2" htmlFor="dob">
            DOB
          </label>
          <input
            id="dob"
            class="border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <span class=" text-sm text-red-600 mt-2">{formik.errors.dob}</span>
          ) : (
            <span class=" text-sm text-gray-600 mt-2">
              Your dob must be in YYYY/MM/DD format
            </span>
          )}
        </div>
        <div class="grid">
          <label class=" mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            id="profession"
            class="border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profession}
          />
          {formik.touched.profession && formik.errors.profession ? (
            <span class=" text-sm text-red-600 mt-2">
              {formik.errors.profession}
            </span>
          ) : (
            <span class=" text-sm text-gray-600 mt-2">
              Your profession must contains only letter
            </span>
          )}
        </div>
        <div class="grid">
          <label class=" mb-2" htmlFor="designation">
            Designation
          </label>
          <input
            id="designation"
            class="border-2 border-gray-900 rounded-lg p-2  focus:outline-none  focus:shadow-outline-gray"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
          />
          {formik.touched.designation && formik.errors.designation ? (
            <span class=" text-sm text-red-600 mt-2">
              {formik.errors.designation}
            </span>
          ) : (
            <span class=" text-sm text-gray-600 mt-2">
              Your designation must contains only letter
            </span>
          )}
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button
            type="reset"
            class=" bg-red-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition duration-200 focus:bg-red-700 focus:outline-none focus:shadow-outline-red"
            onClick={formik.resetForm}
          >
            Cancel
          </button>
          <button
            type="submit"
            class=" bg-green-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-green-700 transition duration-200 focus:bg-green-700 focus:outline-none focus:shadow-outline-green"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
