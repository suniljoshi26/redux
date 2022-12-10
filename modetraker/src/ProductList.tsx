import { FC, memo } from "react";

type productProps = {
  thumbnail: string;
  category: string;
  title: string;
  price: number;
  id: number;
};

const ProductList: FC<productProps> = ({
  thumbnail,
  category,
  title,
  id,
  price,
}) => {
  console.log("price", price, title);
  return (
    <>
      <div className=" border  p-2 shadow-lg">
        <div className=" w-full aspect-square">
          <img className=" w-full h-full object-cover" src={thumbnail} />
        </div>
        <h3 className="text-gray-500 text-2xl  mt-4">{category}</h3>
        <h3 className="text-bold text-xl mt-2">{title}</h3>
        <div className="flex">
          <img
            className="w-7 h-7 mt-2"
            src="https://img.icons8.com/color/48/000000/star--v1.png"
          />
          <img
            className="w-7 h-7 mt-2"
            src="https://img.icons8.com/color/48/000000/star--v1.png"
          />
          <img
            className="w-7 h-7 mt-2"
            src="https://img.icons8.com/color/48/000000/star--v1.png"
          />
          <img
            className="w-7 h-7 mt-2"
            src="https://img.icons8.com/color/48/000000/star--v1.png"
          />
        </div>

        <div className="sm:flex justify-between sm:mt-4 mx-2  ">
          <div>
            <h3 className="text-2xl ">$: {price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

ProductList.defaultProps = {};

export default memo(ProductList);
