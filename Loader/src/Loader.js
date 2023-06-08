export const Loader = ({ fullscreen }) => {
  return (
    <div className={fullscreen ? "fullscreen" : "loader-area"}>
      <div className="loader"></div>
    </div>
  );
};
