import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/layouts";

const DetailView = () => {
  const { idActivity } = useParams();

  return (
    <MainLayout>
      <div>
        <p>Hello World {idActivity}</p>
      </div>
    </MainLayout>
  );
};

export default DetailView;
