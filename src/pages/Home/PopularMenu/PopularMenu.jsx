import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 px-8">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className=" flex justify-center ">
        <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">
          View all menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
