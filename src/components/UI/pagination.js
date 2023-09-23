const Pagination = ({ page, onChangePage }) => {
  return (
    <div className="w-full flex justify-center items-center bg-primary text-xl border-t">
      <button
        className={`py-4 w-full border-r ${
          page === 0 && "bg-gray-200 opacity-25"
        }`}
        onClick={() => onChangePage(-1)}
        disabled={page === 0}
      >
        Anterior
      </button>
      <button className="py-4 w-full" onClick={() => onChangePage(1)}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
