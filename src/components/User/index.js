import React from "react";
import "./styles.css";
import { useStore } from "../../utilities/hooks/use-store";

export const User = () => {
  const { user } = useStore();

  return (
    <p className="user-label">
      <strong>Bienvenido</strong> {user.display_name}
    </p>
  );
};

export default User;
