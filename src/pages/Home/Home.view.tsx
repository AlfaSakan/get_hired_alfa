import React from "react";
import { MainLayout } from "../../components/layouts";
import { Button } from "../../components/atoms";
import EmptyIcon from "../../assets/svg/emptyIcon.svg";
import useHomeViewModel from "./Home.viewModel";
import Card from "../../components/molecules/Card/Card.molecule";
import { ModalDelete } from "../../components/molecules";
import ModalSuccess from "../../components/molecules/ModalSuccess/ModalSuccess.molecule";

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
    closeSuccessModal,
    isSuccessModal,
  } = useHomeViewModel();

  return (
    <MainLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-dark" data-cy="activity-title">
          Activity
        </h1>
        <Button
          text="Tambah"
          dataCy="activity-add-button"
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
        // <div className="mt-[59px] lg:grid-cols-4 grid gap-[26px] md:grid-cols-2 sm:grid-cols-1">
        <div className="mt-[59px] flex flex-wrap">
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
        dataCyDelete="activity-item-delete-button"
        dataCyModal="modal-delete-cancel-button"
        dataCyCancel="activity-item-cancel-button"
      />
      <ModalSuccess isOpen={isSuccessModal} closeModal={closeSuccessModal} />
    </MainLayout>
  );
};

export default HomeView;
