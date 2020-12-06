import React from "react";
import Image from "react-bootstrap/Image";
import Layout from "../components/Layout";
import "../stylesheets/pageLayout.css";
import "../stylesheets/text.css";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyqImwErlYOVbnFz" }).base(
  "app4Rk1m18hcBC6Ge"
);

const getPhotosInAlbum = async (albumName) => {
  return base("Photos")
    .select({
      view: "Grid view",
      filterByFormula: `{Album}='${albumName}'`,
    })
    .all()
    .then((records) => {
      if (!records || records.length < 1) {
        return [];
      }
      return records;
    })
    .catch((err) => {
      throw err;
    });
};

const getDescription = (record) => {
  return record.fields["Description"];
};

const getImage = (record) => {
  return record.fields["Attachments"][0].url;
};

const getKey = (record) => {
  return record.get("id");
};

const Photography = () => {
  const [album, setAlbum] = React.useState("SFAI");
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    const getRecords = async () => {
      let canceled = false;
      const records = await getPhotosInAlbum(album);
      console.log(records);
      if (!canceled) {
        setPhotos(records);
      }
      return () => {
        canceled = true;
      };
    };
    getRecords();
  }, [album]);

  return (
    <Layout>
      <div className="pageLayout-container">
        <div className="left">
          <p className="header">Photography</p>
          <p className="subtitle">
            Here are some photos from photoshoots I went on with friends around
            the Bay Area!
          </p>
          <div>
            <div onClick={() => setAlbum("SFAI")}>SFAI</div>
            <div onClick={() => setAlbum("Apartyment")}>Apartyment</div>
          </div>
        </div>
        <div className="right">
          {photos.map((photo) => {
            console.log(getDescription(photo));
            console.log(getImage(photo));
            return <Image className="img" src={getImage(photo)} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Photography;
