import "../../scss/UserBackOffice.scss";
import CRUDNav from "../../components/CRUDNav";

const User = () => {
  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">User CRUD Page</h2>
      <p>Page to Manage User Page</p>
      <CRUDNav
        contextName="User"
        handleClickAddItem={() => {}}
        handleClickEditItem={() => {}}
        handleClickDeleteItem={() => {}}
      />
    </section>
  );
};

export default User;
