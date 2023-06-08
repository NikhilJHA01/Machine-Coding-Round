import classes from "./Pagination.module.css";
const Pagination = ({
  current,
  totalItems,
  perPage,
  onChange,
  changePerPage
}) => {
  const getTotalPages = () => {
    return Math.ceil(totalItems / perPage);
  };

  const prev = () => {
    if (current > 1) {
      const start = (current - 2) * perPage;
      const end = (current - 1) * perPage;
      onChange({ start, end, current: current - 1 });
    }
  };

  const next = () => {
    if (current >= 1 && current < total) {
      const start = current * perPage;
      const end = (current + 1) * perPage;
      onChange({ start, end, current: current + 1 });
    }
  };

  const handlChangePerPage = (value) => {
    if (current * value < totalItems) {
      changePerPage(value);
    } else {
      changePerPage(value);
      onChange({ start: 0, end: value, current: 1 });
    }
  };

  const direct = (i) => {
    if (current !== i) {
      const start = (i - 1) * perPage;
      const end = i * perPage;
      onChange({ start, end, current: i });
    }
  };
  const links = [];
  const total = getTotalPages();
  for (let i = 1; i <= total; i++) {
    links.push(
      <button
        className={current === i ? `${classes.active}` : ""}
        onClick={() => direct(i)}
        key={i}
      >
        {i}
      </button>
    );
  }
  return (
    <div className={classes.pagination}>
      <select
        value={perPage}
        onChange={(e) => handlChangePerPage(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <div className={classes.wrapper}>
        <button onClick={prev}>&lt;</button>
        {links}
        <button onClick={next}>&gt;</button>
      </div>
    </div>
  );
};

export default Pagination;
