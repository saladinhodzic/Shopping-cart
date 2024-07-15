import "./Pagination.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination({ brojStranica, setPage, page }) {
  const niz = [];
  for (let i = 0; i <= brojStranica; i++) {
    niz.push(i);
  }

  return (
    <>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <MdKeyboardArrowLeft />
      </button>
      {niz.map((value, index) => {
        return <button onClick={() => setPage(value)}>{value}</button>;
      })}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === brojStranica}
      >
        <MdKeyboardArrowRight />
      </button>
    </>
  );
}
