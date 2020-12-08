import React from "react";
import ReactLoading from "react-loading";
import { Tab } from "../components/helpers";
import Layout from "../components/Layout";
import "../stylesheets/page.css";
import "../stylesheets/photography.css";
import "../stylesheets/text.css";

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_KEY = process.env.REACT_APP_AIRTABLE_BASE_KEY;

var Airtable = require("airtable");
var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_KEY);

const defaultAlbum = "SFAI";

const getAlbums = async () => {
  return base("Albums")
    .select({
      view: "Grid view",
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

const Photography = () => {
  const [album, setAlbum] = React.useState(defaultAlbum);
  const [allAlbums, setAllAlbums] = React.useState({});
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAlbums = async () => {
      let canceled = false;
      const albums = await getAlbums();
      if (!canceled) {
        const albumNames = {};
        albums.forEach((album) => {
          albumNames[album.fields["Name"]] = album.fields["Description"];
        });
        setAllAlbums(albumNames);
      }
      return () => {
        canceled = true;
      };
    };
    fetchAlbums();
  }, []);

  React.useEffect(() => {
    const fetchRecords = async () => {
      let canceled = false;
      setLoading(true);
      const records = await getPhotosInAlbum(album);
      if (!canceled) {
        setPhotos(records);
        setLoading(false);
      }
      return () => {
        canceled = true;
      };
    };
    fetchRecords();
  }, [album]);

  React.useEffect(() => {
    document.body.className = "Page-body";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <Layout>
      <div className="Page-container">
        <div className="Page-left">
          <p className="header">Photography</p>
          <div className="Page-descriptionContainer">
            <p className="caption">{allAlbums[album]}</p>
          </div>
          <div className="Page-tabContainer">
            {Object.keys(allAlbums).map((album) => {
              return <Tab albumName={album} onClick={() => setAlbum(album)} />;
            })}
          </div>
        </div>
        {loading ? (
          <div className="Page-loaderContainer">
            <div className="Page-loader">
              <ReactLoading type={"spin"} height={"20%"} color={"#ff5757"} />
            </div>
          </div>
        ) : (
          <div className="Page-right">
            <div className="Page-rightContent">
              {photos.map((photo) => {
                const imgUrl = getImage(photo);
                const desc = getDescription(photo);
                return (
                  <div className="Photo-images">
                    <a href={imgUrl} target="_blank" rel="noreferrer">
                      <img className="Photo-image" src={imgUrl} alt={desc} />
                    </a>
                    <p className="caption">{getDescription(photo)}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ height: 250 }}></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Photography;
