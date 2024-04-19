// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "./view.css";

// components
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function FiveView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Create a new Blog</Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 600,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >

        <form className='form' action="post">
          <label htmlFor='name'>
            Title:
            <br />
            <input type="text" name="name" />
          </label>
          <br />
          <label htmlFor='descp'>
            Description:
            <br />
            <textarea className='descp' name="descp" />
          </label>
          <br />
          <label htmlFor='body'>
            Body:
            <br />
            <textarea className='body' name="body" />
          </label>

          <br />
          <label htmlFor="imageUpload">Upload Image:
            <input type="file" name="imageUpload" accept="image/*" />
          </label>


        </form>



      </Box>

      <h1>h</h1>
    </Container>
  );
}
