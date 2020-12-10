import "../stylesheets/chip.css";

export const ProjectTypes = {
  react: "#A2C7E5",
  reactnative: "#87B6A7",
  python: "#E3F09B",
  raspberrypi: "#F7D08A",
  rubyonrails: "#F79F79",
};

const Chip = ({ label, color, onClick }) => {
  const chipColor = color || ProjectTypes[label];
  const chipStyle = { backgroundColor: chipColor };

  if (onClick) {
    chipStyle["cursor"] = "pointer";
  }

  return (
    <div
      className="Chip chipBody bold"
      style={chipStyle}
      onClick={() => onClick()}
    >
      {label}
    </div>
  );
};

export default Chip;
