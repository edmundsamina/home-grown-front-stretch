import React, { useState, useRef } from "react";
import styles from "../../../styles/CreatePlotForm.module.css";
import CloudinaryUploadWidget from "../../UploadWidget/UploadWidget";

export default function CreatePlotForm({ setShow, createPlot }) {
  const [plotSize, setPlotSize] = useState(null);
  const [plotPostcode, setPlotPostcode] = useState(null);
  const [plotImageUrl, setPlotImageUrl] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    createPlot(plotSize, plotPostcode, plotImageUrl);
  }

  const [filename, setFilename]= useState("")
  const cloudinaryRef = useRef();

  async function openWidget(e) {
    e.preventDefault();
    cloudinaryRef.current = window.cloudinary;
    const widget = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
        uploadPreset:process.env.NEXT_PUBLIC_CLOUDINARY_UPLOADPRESET,
        multiple: false,
        sources: ["local", "url"],
        clientAllowedFormats: ["png", "jpeg", "pdf", "gif", "jpg"],      
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
            setFilename(result.info.original_filename + "✅")
            setPlotImageUrl(result.info.url);
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    widget.open();
  }

  return (
    <div className={styles["form-container"]}>
      <div className={styles["header-container"]}>
        <div></div> <h2 className={styles.heading}>Contact Form</h2>{" "}
        <img
          onClick={() => {
            setShow();
          }}
          className={styles["close-icon"]}
          src="/illustrations/close-icon.png"
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Plot Size:</label>
        <input
        className={styles.input}
          type="number"
          placeholder="Enter the size of your plot in m2"
          onChange={(e) => {
            setPlotSize(e.target.value);
          }}
        />
        <label>Add the postcode of your plot:</label>
        <input
        className={styles.input}
          placeholder="Enter your postcode"
          onChange={(e) => {
            setPlotPostcode(e.target.value);
          }}
        />
        <label>Add a photo of your plot</label>
        {/* <input
        className={styles.input}
          placeholder="Enter your image URL"
          onChange={(e) => {
           
          }}
        /> */}
        <CloudinaryUploadWidget onClick={openWidget} filename={filename}/>
        <button className={styles["create-plot-button"]}type="submit">Add plot!</button>
      </form>
    </div>
  );
}
