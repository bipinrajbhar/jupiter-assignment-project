import { useState } from "preact/hooks";
import { useFormik } from "formik";

const Notification = () => {
  const formik = useFormik({
    initialValues: {
      alerts: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div class="flex flex-col items-center p-6">
      <h2 class=" inline-block text-2xl font-bold text-center text-gray-900 rounded-lg p-4">
        Notification
      </h2>
      <form
        class="grid grid-col gap-6 w-full max-w-lg my-4 border-2 border-gray-900 rounded-lg p-6"
        onSubmit={formik.handleSubmit}
      >
        <div class="flex justify-between">
          <label class=" self-center mr-4" htmlFor="allAlerts">
            Send All Alerts
          </label>
          <label class="flex py-1 w-24 border-2 border-gray-900 rounded-full">
            <input
              id="allAlerts"
              name="alerts"
              class="hidden"
              type="checkbox"
              value="allAlerts"
              onChange={formik.handleChange}
            />
            <span
              class={`   block p-1 rounded-full w-12 text-center  text-white bg-gray-900 text-xs font-bold cursor-pointer transform transition duration-200 translate-x-1 ${
                !formik.values.alerts.includes("allAlerts") && "translate-x-10"
              }`}
            >
              {formik.values.alerts.includes("allAlerts") ? "ON" : "OFF"}
            </span>
          </label>
        </div>
        <div class="flex justify-between">
          <label class=" self-center" htmlFor="alertsOnlyTaskSuccess">
            Alerts Only Task Success
          </label>
          <label class="flex py-1 w-24 border-2 border-gray-900 rounded-full">
            <input
              id="alertsOnlyTaskSuccess"
              name="alerts"
              class="hidden"
              type="checkbox"
              value="alertsOnlyTaskSuccess"
              onChange={formik.handleChange}
            />
            <span
              class={` block p-1 rounded-full w-12 text-center  text-white bg-gray-900 text-xs font-bold cursor-pointer transform transition duration-200 translate-x-1 ${
                !formik.values.alerts.includes("alertsOnlyTaskSuccess") &&
                "translate-x-10"
              }`}
            >
              {formik.values.alerts.includes("alertsOnlyTaskSuccess")
                ? "ON"
                : "OFF"}
            </span>
          </label>
        </div>
        <div class="flex justify-between">
          <label class=" self-center " htmlFor="alertsOnlyTaskFailed">
            Alerts Only For the Failed Task
          </label>
          <label class="flex py-1 w-24 border-2 border-gray-900 rounded-full">
            <input
              id="alertsOnlyTaskFailed"
              name="alerts"
              class="hidden"
              type="checkbox"
              value="alertsOnlyTaskFailed"
              onChange={formik.handleChange}
            />
            <span
              class={`  block p-1 rounded-full w-12 text-center  text-white bg-gray-900 text-xs font-bold cursor-pointer transform transition duration-200 translate-x-1 ${
                !formik.values.alerts.includes("alertsOnlyTaskFailed") &&
                "translate-x-10"
              }`}
            >
              {formik.values.alerts.includes("alertsOnlyTaskFailed")
                ? "ON"
                : "OFF"}
            </span>
          </label>
        </div>
        <div class="flex justify-between">
          <label class=" self-center " htmlFor="noAlerts">
            I Dont want any Alerts
          </label>
          <label class="flex py-1 w-24 border-2 border-gray-900 rounded-full">
            <input
              id="noAlerts"
              name="alerts"
              class="hidden"
              type="checkbox"
              value="noAlerts"
              onChange={formik.handleChange}
            />
            <span
              class={`   block p-1 rounded-full w-12 text-center  text-white bg-gray-900 text-xs font-bold cursor-pointer transform transition duration-200 translate-x-1 ${
                !formik.values.alerts.includes("noAlerts") && "translate-x-10"
              }`}
            >
              {formik.values.alerts.includes("noAlerts") ? "ON" : "OFF"}
            </span>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <button
            class="  bg-red-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-red-700 transition duration-200 focus:bg-red-700 focus:outline-none focus:shadow-outline-red"
            type="reset"
            onClick={formik.resetForm}
          >
            Cancel
          </button>
          <button
            class=" bg-green-600 px-4 py-2 rounded-lg text-white font-bold hover:bg-green-700 transition duration-200 focus:bg-green-700 focus:outline-none focus:shadow-outline-green"
            type="submit"
            onClick={formik.onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Notification;
