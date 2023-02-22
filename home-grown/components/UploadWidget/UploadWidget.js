import styles from '../../styles/CreatePlotForm.module.css'
const CloudinaryUploadWidget = (props) => {
   

  return (
    <button
      onClick={
        props.onClick}
      id="upload_widget"
      className={styles["upload-button"]}
    >
      Upload File Here:<span>{" " + props.filename}</span>
    </button>
  );
};

export default CloudinaryUploadWidget;
