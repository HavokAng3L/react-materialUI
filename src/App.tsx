import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ backgroundColor: "primary.main" }}>
        <Typography variant="h1" color="textPrimary">
          Hello World
        </Typography>
      </Container>
    </>
  );
}
