import type { CSSProperties } from "react";
import { PuffLoader } from "react-spinners";

const override: CSSProperties = {
  borderColor: "orange",
};

export default function Spinner() {
  return <PuffLoader cssOverride={override} />;
}
