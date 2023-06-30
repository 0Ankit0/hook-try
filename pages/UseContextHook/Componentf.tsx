import { useContext } from "react";
import { UserContext } from "./Componentd";

function Componentf() {
  const User = useContext(UserContext);
  return (
    <div className="text-center">
      We are passing the value from component d and using it in component f.
      <br></br>
      {User.admin.name}
      <br></br>
      {User.admin.email}
    </div>
  );
}

export default Componentf;
