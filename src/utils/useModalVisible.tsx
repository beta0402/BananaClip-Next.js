import { useState, useEffect } from "react";

export default function useModalVisible(initialIsVisible: boolean) {
  const [isModalVisible, setIsModalVisible] = useState(initialIsVisible);

  const handleClickOutside = (event: any) => {
    if (event.target?.getAttribute("data-action") === "close-modal") {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { isModalVisible, setIsModalVisible };
}

export interface modalVisibleType {
  isModalVisible: boolean;
  setIsModalVisible: any;
}
