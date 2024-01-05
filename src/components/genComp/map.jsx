import React from 'react';

const Map = () => {
  const mapWidth = window.innerWidth < 800 ? window.innerWidth - 100 : 550;

  return (
    <>
        <div className='w-fit'> 
            <iframe
            title="Google Map"
            width= {mapWidth}
            height= {mapWidth}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=31%20Duke%20St,%20Montreal,%20Quebec%20H3C%202L8+(Les%20Grillades%20Du%20C%C3%A8dre)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">Population Estimator map</a>
            </iframe>
        </div>
    </>
  );
};

export default Map;