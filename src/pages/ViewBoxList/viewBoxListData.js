export const useViewBoxData = () => {
  const boxes = JSON.parse(localStorage.getItem("box-items")) || [];

  return { boxes };
};
