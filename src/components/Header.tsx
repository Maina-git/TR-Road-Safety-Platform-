
interface Props {
  title: string;
  center?: boolean;
}

const Header = ({ title, center = false }: Props) => {
  return (
    <div className={`mb-6 ${center ? "text-center" : "text-left"}`}>
      <span className="text-sm uppercase tracking-widest text-blue-200 font-semibold">
        RoadSafety Authority
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mt-2">
        {title}
      </h1>
      <div
        className={`mt-3 h-1 w-16 bg-blue-700 rounded ${
          center ? "mx-auto" : ""
        }`}></div>
    </div>
  );
};

export default Header;
