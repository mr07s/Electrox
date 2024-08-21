import { RotatingLines } from "react-loader-spinner";

export function Loader() {
  return (
    <RotatingLines
      strokeColor="black"
      strokeWidth="5"
      animationDuration="0.75"
      width="80"
      visible={true}
    />
  );
}
