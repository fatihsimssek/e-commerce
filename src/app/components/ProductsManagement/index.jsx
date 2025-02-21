"use client";
import { useState } from "react";
import PlusButton from "../../../../public/icons/settings/Button.svg";
import EditIcon from "../../../../public/icons/settings/Edit.svg";
import FilterIcon from "../../../../public/icons/Filter.svg";
import Noodle from "../../../../public/dishes/noodle.png";
import Pasta from "../../../../public/dishes/spicy-pasta.png";
import Omlette from "../../../../public/dishes/ommlette.png";
import styles from "./ProductsManagement.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [activeContent, setActiveContent] = useState("hot");
  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  const dishes = [
    {
      image: Noodle,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
    },
    {
      image: Pasta,
      name: "Salted Pasta with mushroom sauce",
      price: "2.69",
    },
    {
      image: Omlette,
      name: "Spicy instant noodle with special omelette",
      price: "2.29",
    },
  ];

  const handleEdit = (dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setSelectedDish(null);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    console.log("Changes saved!");
    setIsModalOpen(false);
  };

  const handleDiscard = () => {
    console.log("Changes discarded!");
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Products Management</h1>
        <button>
          <FilterIcon width="20" height="20" /> Manage Categories
        </button>
      </div>

      {/* Navigation */}
      <div className={styles.nav}>
        <Link
          onClick={() => handleContentChange("hot")}
          className={activeContent === "hot" ? styles.active : ""}
          href="#"
        >
          Hot Dishes
        </Link>
        <Link
          onClick={() => handleContentChange("cold")}
          className={activeContent === "cold" ? styles.active : ""}
          href="#"
        >
          Cold Dishes
        </Link>
        <Link
          onClick={() => handleContentChange("soup")}
          className={activeContent === "soup" ? styles.active : ""}
          href="#"
        >
          Soup
        </Link>
        <Link
          onClick={() => handleContentChange("grill")}
          className={activeContent === "grill" ? styles.active : ""}
          href="#"
        >
          Grill
        </Link>
        <Link
          onClick={() => handleContentChange("appetizer")}
          className={activeContent === "appetizer" ? styles.active : ""}
          href="#"
        >
          Appetizer
        </Link>
        <Link
          onClick={() => handleContentChange("dessert")}
          className={activeContent === "dessert" ? styles.active : ""}
          href="#"
        >
          Dessert
        </Link>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Add New Card */}
        <div
          className={`${styles.card} ${styles.addNew}`}
          onClick={handleAddNew}
        >
          <PlusButton width="50" height="50" />
          <p>Add new dish</p>
        </div>

        {/* Dish Cards */}
        {activeContent === "hot" &&
          dishes.map((dish, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={dish.image}
                alt={dish.name}
                width="128"
                height="128"
              />
              <h3>{dish.name}</h3>
              <p>${dish.price}</p>
              <button onClick={() => handleEdit(dish)}>
                <EditIcon width="20" height="20" /> Edit dish
              </button>
            </div>
          ))}
        {activeContent === "cold" && <p>Displaying Cold Dishes...</p>}
        {activeContent === "soup" && <p>Displaying Soup...</p>}
        {activeContent === "grill" && <p>Displaying Grill...</p>}
        {activeContent === "appetizer" && <p>Displaying Appetizer...</p>}
        {activeContent === "dessert" && <p>Displaying Dessert...</p>}
      </div>
      <div className={styles.saveChanges}>
        <button onClick={handleDiscard}>Discard Changes</button>
        <button className={styles.save} onClick={handleSave}>
          Save Changes
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>{selectedDish ? "Edit Dish" : "Add New Dish"}</h2>
            <form>
              <div className={styles.content}>
                <label htmlFor="dish-image">Dish Image:</label>
                <input id="dish-image" type="file" />
              </div>
              <div className={styles.content}>
                <label htmlFor="dish-name">Dish Name:</label>
                <input
                  id="dish-name"
                  type="text"
                  defaultValue={selectedDish?.name || ""}
                />
              </div>
              <div className={styles.content}>
                <label htmlFor="dish-price">Dish Price:</label>
                <input
                  id="dish-price"
                  type="text"
                  defaultValue={selectedDish?.price || ""}
                />
              </div>
              <div className={styles.flex}>
                <button
                  className={styles.cancel}
                  type="button"
                  onClick={handleDiscard}
                >
                  Cancel
                </button>
                <button
                  className={styles.add}
                  type="button"
                  onClick={handleSave}
                >
                  {selectedDish ? "Save Changes" : "Add Dish"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
