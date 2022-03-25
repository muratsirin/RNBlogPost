import React from "react";
import { Link } from "native-base";

export const FormLink = ({ text, alignSelf }) => {
  return (
    <Link
      _text={{
        color: "indigo.500",
        fontWeight: "medium",
        fontSize: "sm",
      }}
      href="#"
      alignSelf={alignSelf}
    >
      {text}
    </Link>
  );
};
