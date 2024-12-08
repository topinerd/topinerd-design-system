import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/button";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full justify-between gap-2 px-3 py-2">
      <div>
        <p className="text-xs">
          Choose an option below to extract design tokens or icons from your
          project.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Button onClick={() => navigate("extract/token")}>Extract Token</Button>
        <Button onClick={() => navigate("extract/icon")}>Extract Icon</Button>
      </div>
    </div>
  );
};

export default Home;
