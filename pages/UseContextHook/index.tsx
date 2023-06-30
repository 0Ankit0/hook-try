import UserContextProvider from "./componentd";
import Componentf from "./Componente";

function index() {
  return (
    <div>
      <UserContextProvider>
        <Componentf></Componentf>
      </UserContextProvider>
    </div>
  );
}

export default index;
