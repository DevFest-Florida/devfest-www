import React from "react";

const Schedule = () => (
  <div className="w-11/12 mx-auto my-5 p-5">
    <h1 className="text-center">
      DevFest {process.env.REACT_APP_CHAPTER_NAME} Sessions
    </h1>
    <iframe
      class="w-full aspect-auto min-h-fit"
      frameborder="0"
      width="100%"
      height="1280"
      src="https://sessionize.com/api/v2/d4zg4aeq/view/GridSmart"
      title="schedule"
    ></iframe>
  </div>
);

export default Schedule;
