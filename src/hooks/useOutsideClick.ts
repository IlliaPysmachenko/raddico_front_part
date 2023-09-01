'use client';

import { useEffect, useRef, useState } from 'react';

const useOutsideClick = (initialState:boolean, buttonId?: string, clickHandle?: (toggleShow: boolean) => void) => {
  const [isShow, setIsShow] = useState(initialState);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event:any) => {
    const target = event.target as Node;
    const menuBtn = document.getElementById(`${buttonId}`);
    if (ref.current && !ref.current.contains(target)) {
      setIsShow(false);
    }
    if (buttonId && target.isEqualNode(menuBtn)) {
      setIsShow(!isShow);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return { ref, isShow, setIsShow };
};

export default useOutsideClick;
