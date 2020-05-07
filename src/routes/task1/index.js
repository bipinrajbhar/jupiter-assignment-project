import { useFormik } from "formik";

const Task1 = () => {
  const formik = useFormik({
    initialValues: {
      sourceName: "source1",
      enableLogging: false,
      sqlQuery: "",
      targetResult: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <div class="flex flex-col items-center p-6">
      <h2 class="inline-block text-2xl font-bold text-center text-gray-900 rounded-lg p-4">
        Task 1
      </h2>
      <form
        class="grid grid-col gap-6 w-full max-w-lg my-4 border-2 border-gray-900 rounded-lg p-6"
        onSubmit={formik.handleSubmit}
      >
        <div class="flex justify-between">
          <label class=" self-center mr-4" htmlFor="sourceName">
            Source Name
          </label>
          <select
            id="sourceName"
            class=" border-2 border-gray-900 rounded-lg p-2 text-gray-900 bg-white cursor-pointer focus:outline-none focus:shadow-outline-gray "
            onChange={formik.handleChange}
          >
            <option value="source1">Source 1</option>
            <option value="source2">Source 2</option>
            <option value="source3">Source 3</option>
            <option value="source4">Source 4</option>
          </select>
        </div>
        <div class="flex justify-between">
          <label class=" self-center" htmlFor="enableLogging">
            Enable Logging
          </label>
          <div>
            <input
              id="enableLogging"
              name="enableLogging"
              class="form-checkbox border-2 border-gray-900 focus:border-gray-900 focus:shadow-outline-gray text-gray-900 cursor-pointer h-6 w-6"
              type="checkbox"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div class="flex justify-between">
          <label class=" self-center" htmlFor="sqlQuery">
            Provide SQL
          </label>
          <textarea
            id="sqlQuery"
            name="sqlQuery"
            class="border-2 border-gray-900 rounded-lg h-24 focus:outline-none focus:shadow-outline-gray  p-2"
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div class="flex justify-between">
          <label class=" self-center " htmlFor="targetResult">
            Target Result
          </label>
          <select
            id="targetResult"
            class=" border-2 border-gray-900 rounded-lg p-2 text-gray-900 bg-white cursor-pointer focus:outline-none focus:shadow-outline-gray "
            onChange={formik.handleChange}
          >
            <option value="" defaultChecked>
              No Result
            </option>
            <option value="targetResult1">Target Result 1</option>
            <option value="targetResult2">Target Result 2</option>
            <option value="targetResult3">Target Result 3</option>
            <option value="targetResult4">Target Result 4</option>
          </select>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <button
            type="reset"
            class=" bg-red-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition duration-200 focus:outline-none focus:shadow-outline-red"
            onReset={formik.handleReset}
          >
            Cancel
          </button>
          <button
            type="submit"
            class=" bg-green-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-green-700 transition duration-200 focus:outline-none focus:shadow-outline-green"
          >
            Submit
          </button>
          <button
            type="button"
            class=" bg-blue-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-blue-700 transition duration-200 focus:outline-none focus:shadow-outline-blue"
            onSubmit={formik.handleSubmit}
          >
            Validate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Task1;
