import { useNavigate } from "react-router-dom";

import "../../scss/UserBackOffice.scss";
import CRUDNav from "../../components/CRUDNav";

const User = () => {
  const navigate = useNavigate();

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">User CRUD Page</h2>
      <p>Page to Manage User Page</p>
      <CRUDNav
        contextName="User"
        handleClickAddItem={() => navigate("/backoffice/user/add-user")}
        handleClickEditItem={() => navigate("/backoffice/user/edit-user")}
        handleClickDeleteItem={() => navigate("/backoffice/user/delete-user")}
      />
      <p>
        <strong>Pick a CRUD option.</strong>
      </p>
    </section>
  );
};

export default User;
