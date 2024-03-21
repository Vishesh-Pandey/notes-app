import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

interface PropType {
  notes: {
    title: string;
    description: string;
  };
}

export default function Note(props: PropType) {
  const note = props.notes;
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 400,
        maxWidth: "100%",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip size="sm" variant="soft">
          label1
        </Chip>
        <Chip size="sm" variant="soft">
          label2
        </Chip>
      </Box>
      <div>
        <Typography level="h2">{note.title}</Typography>
      </div>
      <CardContent>
        <Typography level="body-md">{note.description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="solid">Share</Button>
        <Button variant="solid">Copy</Button>
        <Button variant="solid">Delete</Button>
        <Button variant="solid">Edit</Button>
      </CardActions>
    </Card>
  );
}
