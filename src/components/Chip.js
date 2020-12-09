import "../stylesheets/chip.css";

const ProjectTypes = {
  react: "#A2C7E5",
  reactnative: "#87B6A7",
  python: "#E3F09B",
  raspberrypi: "#F7D08A",
  rubyonrails: "#F79F79",
};

const Chip = ({ label }) => {
  return (
    <div
      className="Chip chipBody bold"
      style={{ backgroundColor: ProjectTypes[label] }}
    >
      {label}
    </div>
  );
};

export default Chip;
