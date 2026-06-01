const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-300 mx-auto px-4 md:px-6 xl:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;