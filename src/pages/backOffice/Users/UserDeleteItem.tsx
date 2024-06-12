import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Button from "../../../components/Boton";
import CRUDNav from "../../../components/CRUDNav";
import Modal from "../../../components/Modal";
import { UserDelete } from "../../../interfaces/backend/user";
import getUsersService from "../../../services/users.service";

const UserDeleteItem = () => {
  const [usersData, setUsersData] = useState<[UserDelete] | null>(null);

  useEffect(() => {
    getUserContentApi();
  }, []);

  const getUserContentApi = async () => {
    try {
      const response = await getUsersService.getUsersBackOffice();
      const getUserData = await response.data.users;
      setUsersData(getUserData);
    } catch (err: any) {
      setDescriptionModal("There was an error while fetching portfolio data");
      setShowModal(true);
    }
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [descriptionModal, setDescriptionModal] = useState<string>("");

  const handleDeleteUser = async (key: string) => {
    try {
      await getUsersService.deleteUserByKey(key);
      setDescriptionModal("User deleted successfully");
      setShowModal(true);
      const response = await getUsersService.getUsersBackOffice();
      const getUserData = await response.data.users;
      setUsersData(getUserData);
    } catch (err: any) {
      setDescriptionModal("There was an error while deleting user");
      setShowModal(true);
    }
  };

  const navigate = useNavigate();
  const modalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <section className="section-wrrapper-styles">
      <h2 className="titleh-h2-padding">User DELETE</h2>
      <p>Page to Delete Users</p>
      <CRUDNav
        contextName="User"
        handleClickAddItem={() => navigate("/backoffice/user/add-user")}
        handleClickEditItem={() => navigate("/backoffice/user/edit-user")}
        handleClickDeleteItem={() => navigate("/backoffice/user/delete-user")}
      />
      <article>
        <ol className="menu-ul-item-styles">
          {usersData &&
            usersData.map((item, index) => (
              <li key={index}>
                {item.name}
                <Button
                  variant="text"
                  data-testid="button-delete"
                  onClick={() => handleDeleteUser(String(item.name))}
                  className={{
                    root: "portfolio-delete-btn-styles",
                  }}
                >
                  <HighlightOffIcon className="mui-icons-align__portfolio" />
                </Button>
              </li>
            ))}
        </ol>
      </article>
      <Modal
        title="Portfolio Upload Status"
        description={descriptionModal}
        button="Close"
        show={showModal}
        handleClose={modalCloseHandler}
      />
    </section>
  );
};

export default UserDeleteItem;
