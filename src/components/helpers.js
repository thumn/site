import "../stylesheets/page.css";
import "../stylesheets/text.css";

export const Tab = ({ albumName, onClick }) => {
  return (
    <div className="Page-tab body animatedButton" onClick={() => onClick()}>
      {albumName}
    </div>
  );
};
