import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardSkillProps {
  title: string;
  icon: IconProp;
}

const CardSkill: React.FC<CardSkillProps> = ({ children, title, icon }) => {
  return (
    <div className="cardskill text-center bg-dark3 p-8 rounded-xl relative">
      <div className="layer-wrapper rounded-xl top-0 left-0 w-full h-full absolute overflow-hidden z-[1]">
        <div className="layer bg-grape w-full h-full absolute left-0 transition-all ease-in-out duration-300"></div>
      </div>
      <div
        className="
      text-3xl 
      sm:text-5xl 
      p-9 
      sm:p-14
      absolute 
      -translate-x-1/2 
      -translate-y-16 
      sm:-translate-y-24
      transfor 
      inline-block 
      rounded-full 
      bg-gradient-to-br 
      from-peach 
      to-violet-900
      z-[2]"
      >
        <FontAwesomeIcon
          className="absolute -translate-x-1/2 -translate-y-1/2"
          icon={icon}
        />
      </div>
      <h1 className="relative text-base sm:text-2xl lg:text-3xl font-bold mt-5 sm:mt-9 mb-3 z-[3]">
        {title}
      </h1>
      <p className="relative text-xs sm:text-base md:text-lg z-[3]">
        {children}
      </p>
    </div>
  );
};

export default CardSkill;
