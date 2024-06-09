import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status === true)
    return <AiFillHeart color="#ff6b81" size="3rem" onClick={toggle} />;
  return <AiOutlineHeart size="3rem" onClick={toggle} />;
};

export default Like;
