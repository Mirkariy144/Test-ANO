import { Box, Button, Card, CardActionArea } from "@mui/material";

export function NavBar() {
  return (
    <Box
      sx={{
        position: "realative",
        left: 0,
        top: 0,
        minHeight: "100vh",
        width: "15vw",
      }}
    >
      <Card sx={{ height: "100%", width: "100%" }}>
        <CardActionArea>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Профиль
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Статус
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Транзакции
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Сообщения
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Мемы
          </Button>
          <Button variant="outlined" sx={{ width: "100%" }}>
            Рик и Морти
          </Button>
        </CardActionArea>
      </Card>
    </Box>
  );
}
