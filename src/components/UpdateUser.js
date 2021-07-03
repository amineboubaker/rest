import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateUser } from "../js/actions/Actions";
const UpdateUser = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(el.name);
  const [email, setEmail] = useState(el.email);
  const [password, setpassword] = useState(el.password);

  const dispatch = useDispatch();
  const updateNewUser = (e) => {
    e.preventDefault();
    dispatch(updateUser(el._id, { name, email, password }));
    console.log(el._id);
    handleClose();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{"Edit Contact"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="">name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateNewUser}>
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateUser;
