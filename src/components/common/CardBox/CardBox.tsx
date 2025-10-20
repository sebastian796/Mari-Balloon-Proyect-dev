import * as React from "react";

interface ICardBoxProps {
  obj:{titulo:string, descripcion:string, img:string};
}

const CardBox: React.FunctionComponent<ICardBoxProps> = ({
  obj,
}) => {
  return (
    <div className="w-full h-[20rem] text-start flex flex-col items-center gap-y-[1rem] bg-amber-200 p-[10%] border-[1px] border-black border-solid">
      <h2 className="w-full" style={{fontFamily:'serif',fontSize:'2rem',lineHeight:'30px'}}>{obj.titulo}</h2>
      <p className="w-full" style={{fontFamily:'arial',fontSize:'0.8rem'}}>{obj.descripcion}</p>
      {obj.img && <img src={obj.img} alt={''} width={'100%'} height={'0'}/>}
    </div>
  );
};

export default CardBox;
