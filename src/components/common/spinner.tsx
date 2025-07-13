import type { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  borderColor: "orange",
};

export default function Spinner() {
  return <ClipLoader cssOverride={override} />;
}
