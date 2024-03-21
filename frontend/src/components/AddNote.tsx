import { Card, Input } from "@mui/joy";
import Box from "@mui/joy/Box";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import { Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import axios from "axios";

function AddNote() {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  async function handleAddNote() {
    setUploading(true);
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/api/v1/note/add",
      data: {
        title,
        description,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      setOpen(false);
    } else {
      alert("something went wrong");
    }
    setUploading(false);
  }

  return (
    <Box component="section">
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Create Note
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(red , blue)",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add Note
          </Typography>

          <Card variant="solid" color="primary" invertedColors>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Enter Title"
              sx={{ my: 2, p: 2 }}
            />
            <FormControl>
              <Textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                placeholder="Write your note"
                minRows={3}
                endDecorator={
                  <Box
                    sx={{
                      display: "flex",
                      gap: "var(--Textarea-paddingBlock)",
                      pt: "var(--Textarea-paddingBlock)",
                      borderTop: "1px solid",
                      borderColor: "divider",
                      flex: "auto",
                      p: 2,
                    }}
                  >
                    <Button
                      onClick={handleAddNote}
                      sx={{ ml: "auto" }}
                      disabled={title === "" || description === ""}
                    >
                      {uploading ? "Saving" : "Save"}
                    </Button>
                  </Box>
                }
                sx={{
                  minWidth: 300,
                  fontStyle: "initial",
                }}
              />
            </FormControl>
          </Card>
        </Sheet>
      </Modal>
    </Box>
  );
}

export default AddNote;
