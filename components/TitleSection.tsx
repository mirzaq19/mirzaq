interface TitleSectionProps {
  title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">{title}</h1>
      <hr className="w-5/12 sm:w-4/12 lg:w-2/12 my-3 border-t-3 border-peach" />
    </div>
  );
};

export default TitleSection;
