import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, FormGroup, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPost } from "./Reducers/Post";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Title: "",
      Description: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(createPost(data));
    reset();
    handleClose();
  };
  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Create Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Controller
                name="Title"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              {errors.Title?.type === "required" && (
                <Alert severity="error">Title cannot be empty</Alert>
              )}
              <Controller
                name="Description"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    id="standard-basic"
                    label="Description"
                    variant="standard"
                    {...field}
                  />
                )}
              />

              <Button type="submit" variant="contained" sx={{ mt: "70px" }}>
                Add Post
              </Button>
            </FormGroup>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
