import { useState } from "react";
import galleryData from "./homeGalleryData";

function HomeGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <section className="main-gallery-section">
        <div className="container">
            <h2>{galleryData.hTxt}</h2>
            <p>{galleryData.para}</p>
            <div className="gallery-grid">
              {galleryData.content.map((item, index) => (
                <div className="gallery-grid-item" key={index}>
                  <figure>
                    <img
                      src={item.img}
                      alt={item.title}
                      onClick={() => setSelectedImage(item.img)}
                    />
                    <div className="imageOverlay">+</div>
                  </figure>

                  <h2>{item.title}</h2>
                  <small>{item.tag}</small>
                  <em>{item.description}</em>
                </div>
              ))}
            </div>

            {/* MODAL */}
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={selectedImage} alt="Preview" />
                  </div>
                </div>
              )}

        </div>
    </section>
    </>
  );
}

export default HomeGallery;