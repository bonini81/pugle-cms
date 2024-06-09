import { useNavigate } from "react-router-dom";

import CRUDNav from "../../../components/CRUDNav";

const UserAddItem = () => {
  const navigate = useNavigate();
  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">User DELETE</h2>
      <p>Page to Add Users</p>
      <CRUDNav
        contextName="User"
        handleClickAddItem={() => navigate("/backoffice/user/add-user")}
        handleClickEditItem={() => navigate("/backoffice/user/edit-user")}
        handleClickDeleteItem={() => navigate("/backoffice/user/delete-user")}
      />
    </section>
  );
};
export default UserAddItem;
