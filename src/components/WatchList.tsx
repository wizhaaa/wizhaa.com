const WatchList = () => {
  return (
    <div className="animation">
      <div className="watch-list">
        <h3>top recent shows </h3>
        <div className="list-wrapper">
          <div className="show">
            <img
              src="https://i.mydramalist.com/X06Rd_4f.jpg"
              alt="alchemy of souls"
              className="show-img"
            />
            Alchemy of Souls
          </div>
          <div className="show">
            <img
              src="https://i.mydramalist.com/pq2lr_4f.jpg"
              alt="weak hero class 1"
              className="show-img"
            />
            Weak Hero Class 1
          </div>
          <div className="show">
            <img
              src="https://i.mydramalist.com/jdmAz_4f.jpg"
              alt="Who Rules The World"
              className="show-img"
            />
            Who Rules The World
          </div>
          <div className="show">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
              alt="The Succession"
              className="show-img"
            />
            The Succession
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
