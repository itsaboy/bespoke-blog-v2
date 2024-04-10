import { Fragment } from "react";

export const renderPostBody = (body) => {
  return body.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4 text-pink-200">
      {paragraph.split("\n").map((line, lineIndex) => (
        <Fragment key={lineIndex}>
          {line}
          {lineIndex < paragraph.split("\n").length - 1 && <br />}
        </Fragment>
      ))}
    </p>
  ));
};
