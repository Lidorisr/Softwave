import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ movie }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box container>
      <Button
        variant="contained"
        sx={{
          boxShadow: "1px",
        }}
        onClick={handleOpen}
      >
        More Info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card>
            <CardMedia
              component="img"
              alt={movie.title}
              height="300"
              image={movie.image}
            />
          </Card>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {movie.title} {movie.year}
          </Typography>

          {movie.crew ? (
            <>
              <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                {movie.crew}
              </Typography>
            </>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {movie.description}
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
