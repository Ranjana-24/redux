import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  updateUser,
  deleteUser,
} from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user);
  console.log("users:", users);
console.log("is array:", Array.isArray(users));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // create , update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      return;
    }

    // UPDATE
    if (editId !== null) {
      dispatch(
        updateUser({
          id: editId,
          name: name,
          email: email,
        })
      );

      setEditId(null);
    }

    // CREATE
    else {
      dispatch(
        addUser({
          name: name,
          email: email,
        })
      );
    }

    setName("");
    setEmail("");
  };

  // EDIT
  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  // DELETE
  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };

  return (

    <>
      <div>
        <h2>
          {editId == null ? "Add User" : "Update User"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            {editId !== null ? "Update User" : "Add User"}
          </button>
        </form>

        <hr />

        {/* READ USERS */}
        <h2>All Users</h2>

        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>

            <button onClick={() => handleEdit(user)}>
              Edit
            </button>

            <button onClick={() => handleDelete(user.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;