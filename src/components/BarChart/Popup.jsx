import React from "react";
import { Modal, Box } from "@mui/material";
import "./BarChart.scss";
import { Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  minHeight: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const Popup = (props) => {
  const { open, setOpen } = props;

  const handlePopup = () => {
    setOpen(!open);
  };

  return (
    <div className="popup-container">
      <Modal
        open={open}
        onClose={handlePopup}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <Box sx={style}>
          <div className="popup-header">Upload invoice</div>
          <div className="popup-body">
            <div>
              <input
                className="modalInput"
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                onChange={() => {}}
              />
              <div style={{ marginTop: "2rem" }}>or</div>
            </div>

            <div className="drag-n-drop">
              Drag and drop files here
              <div>
                <UploadFile
                  fontSize="large"
                  style={{ color: "#a9a9a9", margin: "1rem" }}
                />
              </div>
            </div>
          </div>
          <div className="popup-footer">
            <Button
              variant="outlined"
              style={{
                textTransform: "capitalize",
                color: "#47b747",
                border: "1px solid #47b747",
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#47b747",
                textTransform: "capitalize",
              }}
              onClick={() => setOpen(false)}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;
