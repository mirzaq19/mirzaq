interface ContainerProps {
  className?: string;
  isWide?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  isWide = false,
}) => {
  return (
    <div
      className={`container mx-auto px-6 ${className ?? ""} ${
        isWide ? "" : "py-28"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
