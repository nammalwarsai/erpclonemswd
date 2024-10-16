import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Modal,
  Box,
} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const tips = [
  {
    title: "Choose the Right Plants",
    description: "Choosing the right plants is essential for gardening success. Select varieties that are suitable for your climate and soil type, and ensure they are appropriate for the sunlight available in your garden. Consider planting drought-resistant plants if water is scarce in your area.",
    imageUrl: "https://imgs.search.brave.com/qqudbhoDOBduTuFZzbULW2M12Uae0fP71sBA6v6QRlo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/dWxpcC1maWVsZC1r/ZXVrZW5ob2YtZ2Fy/ZGVucy1saXNzZS1u/ZXRoZXJsYW5kc18x/NTUwMDMtMTA0NDAu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
  },
  {
    title: "Soil Preparation",
    description: "Improve soil quality by adding organic matter like compost to enhance nutrient content. This will help retain moisture, support root growth, and create a healthier environment for plants.",
    imageUrl: "https://imgs.search.brave.com/-hzJqrXClspOp9lszGlTvzJkyj_II-9tGIsEpljRjlA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mbG9y/aXNzYS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDQv/UmFpc2VkLWJlZC1T/b2lsLXBsYW50aW5n/LXRyb3dlbC1hbmF5/YS1rYXRsZWdvLWMy/M0x2MmZ6RXlvLXVu/c3BsYXNoLTgzOHgx/MDI0LmpwZw",
  },
  {
    title: "Water Wisely",
    description: "Water plants early in the morning or late in the afternoon to reduce evaporation and ensure that water reaches the roots where it's needed most.",
    imageUrl: "https://imgs.search.brave.com/zIHUuQyxDBTWbquBa_ck8MyLoNVTYEHFPif7AmU2XPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iL2gzTkw1/Y2MwbTk2a0I1VGx1/SnBGWWJYU21mUT0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTcw/NzQ0NTQyNy01MzA4/ZGUxZmY4ZWQ0NDE3/OWQyYTBjOGEzY2Rm/YTMxZS5qcGc",
  },
  {
    title: "Crop Rotation",
    description: "Practice crop rotation to prevent soil depletion and reduce pest buildup. This helps maintain soil fertility and reduces the chances of disease spreading.",
    imageUrl: "https://imgs.search.brave.com/HQ9O2k8Jh9XFazdIFGQMoPNPhtsRNUDXKoECCkpm2PU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcmln/aW5hbGhvbWVzdGVh/ZGluZy5jb20vd3At/Y29udGVudC91cGxv/YWRzL0Jlc3QtR2Fy/ZGVuLUxvY2F0aW9u/LTQuanBn",
  },
  {
    title: "Mulching",
    description: "Use mulch to retain soil moisture, suppress weeds, and improve soil structure. Organic mulch materials such as leaves, grass clippings, and straw work best.",
    imageUrl: "https://imgs.search.brave.com/El4puLEYwnrCBeBmsyqnAM1_2rP-6qu47wgdT9fQgoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0xv/Q3ZZd2hpVmtxZEcy/WlBCdGprNlYtMzIw/LTgwLmpwZw",
  },
  {
    title: "Use Companion Planting",
    description: "Pair plants that benefit each other to naturally deter pests and enhance growth. For example, plant marigolds alongside vegetables to repel insects.",
    imageUrl: "https://imgs.search.brave.com/p2YOK8IumDc681KaJoujSXkBGW0Tss83WQRm-YnobP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FyZGVuaWEubmV0/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA1L2NvbXBhbmlv/bi1wbGFudGluZy13/aXRoLWhlcmJzLTc4/MHg1MjAud2VicA",
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto',
};

const Attendance = () => {
  const [open, setOpen] = useState(false);
  const [selectedTip, setSelectedTip] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleOpen = (tip) => {
    setSelectedTip(tip);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: 'green', fontWeight: 'bold' }}>Gardening Tips for Successful Yield</h1>
      <Grid container spacing={1} justifyContent="center">
        {tips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="d-flex justify-content-center">
            <Card
              variant="outlined"
              style={{
                borderColor: '#5cd65c', 
                borderWidth: '3px',
                borderStyle: 'solid',
                width: '280px',
                height: '280px',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${tip.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: hoveredIndex === index ? 'none' : 'grayscale(70%)', 
                opacity: hoveredIndex === index ? 1 : 0.5, 
                cursor: 'pointer',
                boxShadow: hoveredIndex === index ? '0px 4px 20px rgba(0, 128, 0, 0.7)' : 'none',
                transition: 'filter 0.3s ease-in-out, opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: hoveredIndex === index ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.7)' }}>
                <Typography variant="h6" component="div" style={{ opacity: hoveredIndex === index ? 1 : 0.7 }}>
                  {tip.title}
                </Typography>
                <CardActions style={{ position: 'absolute', bottom: 10, left: 10 }}>
                  <Button
                    size="small"
                    onClick={() => handleOpen(tip)}
                    variant="contained"
                    style={{ backgroundColor: 'green', borderRadius: '20px', color: 'white' }}
                  >
                    Explore Tip
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h5" component="h2" style={{ color: 'green', fontWeight: 'bold' }}>
            {selectedTip.title}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedTip.description}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Attendance;