import React from "react";
import PropTypes from 'prop-types';
import {RequestStatus} from "../../js/enums";
import {ErrorDescription} from "./styles";

const Error = ({requestData}) => {
  let status = null;
  let message = null;

  for (let i = 0; i < requestData.length; i++) {
    status = requestData[i].status;
    message = requestData[i].message;

    if (status === RequestStatus.ERROR) {
      break;
    }
  }

  return (
    <React.Fragment>
      { status === RequestStatus.ERROR &&
        <ErrorDescription>{message}</ErrorDescription>
      }
    </React.Fragment>
  );
};

Error.propTypes = {
  requestData: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOfType([
        PropTypes.number,
        null,
      ]),
      message: PropTypes.string,
    })
  )
};

export default Error

