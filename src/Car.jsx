import carImg from "./car.png";

// BMW top-view photo (background removed, nose points right)
export default function Car({ className = "" }) {
  return <img src={carImg} alt="BMW car" className={className} draggable="false" />;
}
