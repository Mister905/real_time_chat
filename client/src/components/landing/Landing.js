import React, { useEffect } from "react";
import { useFormik } from "formik";
import M from "materialize-css";

function Landing() {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, null);
  }, []);

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      username: "",
      channel_select: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col m12 center-align">
          <h1>Chat</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mt-50">
          <div className="input-field col m4 offset-m4">
            <label htmlFor="username" className="active custom-label">
              Name
            </label>
            <input
              id="username"
              type="text"
              name="username"
              {...getFieldProps("username")}
            />
          </div>
        </div>

        <div className="row mt-50">
          <div className="input-field col m4 offset-m4">
            <select
              name="channel_select"
              id="channel_select"
              {...getFieldProps("channel_select")}
            >
              <option value="" disabled selected>
                Choose your option
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Channel</label>
          </div>
        </div>

        <div className="row">
          <div className="col m4 offset-m4">
            <button type="submit" className="btn right">
              Enter Chat
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Landing;
