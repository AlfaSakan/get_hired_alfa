import React from "react";
import { MainLayout } from "../../components/layouts";
import { Button } from "../../components/atoms";
import EmptyIcon from "../../assets/svg/emptyIcon.svg";
import useHomeViewModel from "./Home.viewModel";
import Card from "../../components/molecules/Card/Card.molecule";
import { ModalDelete } from "../../components/molecules";

const HomeView = () => {
  const {
    activities,
    onAddActivityHandler,
    isLoading,
    onRemoveActivityHandler,
    onNavigateDetail,
    isModalDelete,
    closeModal,
    openModal,
  } = useHomeViewModel();

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-dark" data-cy="activity-title">
          Activity
        </h1>
        <Button
          text="Tambah"
          data-cy="activity-add-button"
          onClick={onAddActivityHandler}
          isLoading={isLoading}
        />
      </div>
      {activities.length === 0 ? (
        <div className="mt-[59px] flex justify-center">
          <img
            src={EmptyIcon}
            alt="empty logo"
            data-cy="activity-empty-state"
          />
        </div>
      ) : (
        <div className="mt-[59px] grid-cols-4 grid gap-[26px]">
          {activities.map((activity, index) => (
            <Card
              key={`card activity ${index}`}
              activity={activity}
              index={index}
              onRemove={openModal(activity.id)}
              onNavigateDetail={onNavigateDetail(activity.id)}
            />
          ))}
        </div>
      )}
      <ModalDelete
        isOpen={isModalDelete}
        closeModal={closeModal}
        item="Meeting dengan client"
        confirmDelete={onRemoveActivityHandler}
      />
    </MainLayout>
  );
};

export default HomeView;
