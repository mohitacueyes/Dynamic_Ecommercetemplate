import React from "react";

const AdvertiseBanner = () => {
  return (
    <>
         <section className="py-4 pe-3 ps-3 ">
        <div className="add-banner">
          <div>
            <img
              src="assets/images/promo/ad-1.jpg"
              className="img-fluid"
              alt="Banner"
              style={{ width: "100%" }}
            />
          </div>
        </div>
          <div >
            <video
              controls
              src="https://cdn.shopify.com/videos/c/o/v/1b69248fa9454df0b17ccc09475fa199.mp4"
              type="video/mp4"
              className="pt-3 videosm"
              alt="Video"
            ></video>
          </div>
      </section>
        </>
  );
};

export default AdvertiseBanner;
