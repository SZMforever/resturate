import React from "react";

export default function Map() {
  return (
    <div className="mapouter w-100 h-100">
      <div className="gmap_canvas">
        <iframe
          title="google-maps"
          width={"100%"}
          height={"100%"}
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40486.26880598806!2d8.148417480654865!3d50.63841430234838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc3957d7ac735b%3A0x9732933e26bbdde9!2s35759%20Driedorf!5e0!3m2!1sen!2sde!4v1663384334033!5m2!1sen!2sde"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
}
