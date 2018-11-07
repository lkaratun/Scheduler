import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Event = ({ data }) => {
  return (
    <div>
      <p>
        <Link to={`/event/${data.id}`}> {data.title} </Link>
      </p>
      <p>
        Start time: {moment(data.startTime).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Event;
