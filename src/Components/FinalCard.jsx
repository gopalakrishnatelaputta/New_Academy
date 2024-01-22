import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SearchComponent from './SearchComponent';
import TableComponent from './TableComponent'
import CourseNameComponent from './TableComponents/CourseNameComponent'

const FinalCard = () => {
  const handleSearch = (query) => {
    // Implement your search logic here using the query
    console.log('Search query:', query);
  };

  return (
    <Card elevation={2} sx={{ml:'10px', mt: '15px', mr: '15px', height: '500px', borderRadius: '5px', overflow: 'auto',width:'100%'}}>
      <Box sx={{ p: 2,display:'flex',justifyContent:'space-between',mt:'20px' }}>
        <Typography variant='h5' mb={2}>
          Course you are taking
        </Typography>
        <SearchComponent onSearch={handleSearch} />
      </Box>
      <Box ml={'20px'}>
          {/* <CheckBoxComponent ></CheckBoxComponent> */}
          <TableComponent ></TableComponent>
      </Box>
      <CourseNameComponent></CourseNameComponent>
    </Card>
  );
}

export default FinalCard;
