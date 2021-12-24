interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;
