import { useEffect } from "react";

interface Props {
  onClick: () => void;
  navOpen?: boolean;
  cartOpen?: boolean;
}

export function useOverlay({ onClick, navOpen = false, cartOpen = false }: Props) {
  useEffect(() => {
    const eventListener = () => {
      onClick();
    };

    document.addEventListener("click", eventListener);

    return () => {
      document.removeEventListener("click", eventListener);
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [navOpen]);

  useEffect(() => {
    if (cartOpen && window.innerWidth < 1024) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [cartOpen]);
}
