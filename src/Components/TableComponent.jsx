import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import VideocamIcon from '@mui/icons-material/Videocam';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MicIcon from '@mui/icons-material/Mic';
import { Box, Typography, LinearProgress } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

const CourseNameComponent = ({ icon, expert, designation }) => (
  <Box sx={{ display: 'flex', alignItems: 'start', mt: 2, justifyContent: 'space-between' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box>{icon}</Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: '20px' }}>
        <Typography fontSize={13} sx={{ fontStyle: '' }}>
          {expert}
        </Typography>
        <Typography variant="caption">{designation}</Typography>
        <br />
      </Box>
    </Box>
  </Box>
);

const TableComponent = () => {
  const arr4 = [
    { icon: <VideocamIcon sx={{ color: '#696cff !important', bgcolor: '#e7e7ff !important', width: '35px', height: '35px' }} />, expert: 'Videography Basic', designation: 'Design Course' },
    { icon: <CodeIcon sx={{ color: '#03c3ec !important', bgcolor: '#d7f5fc !important', width: '35px', height: '35px' }} />, expert: 'Basic Front-end', designation: 'Development Course' },
    { icon: <CameraAltIcon sx={{ color: '#71dd37 !important', bgcolor: '#e8fadf !important', width: '35px', height: '35px' }} />, expert: 'Basic Fundamentals ', designation: 'Photography' },
    { icon: <MicIcon sx={{ color: '#ff3e1d !important', bgcolor: '#ffe0db !important', width: '35px', height: '35px' }} />, expert: 'Your First Singing', designation: 'Lesson' },
  ];

  const [data, setData] = useState([
    { id: 1, time: '19h 23m', progress: 50, status: '87 In Progress', deskTop: '89', video: '62', isChecked: false },
    { id: 2, time: '56h 14m', progress: 75, status: '52 Completed', deskTop: '47', video: '96', isChecked: false },
    { id: 3, time: '89h 47m', progress: 25, status: '63 In Progress', deskTop: '25', video: '47', isChecked: false },
    { id: 4, time: '12h 52m', progress: 100, status: '65 Completed', deskTop: '69', video: '52', isChecked: false },
  ].map((item, index) => ({ ...item, courseName: <CourseNameComponent key={index} {...arr4[index % arr4.length]} /> })));

  const handleCheckboxChange = (id) => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, isChecked: !row.isChecked } : row
      )
    );
  };

  const handleHeaderCheckboxChange = () => {
    setData((prevData) =>
      prevData.map((row) => ({ ...row, isChecked: !data.every((row) => row.isChecked) }))
    );
  };

  // const DesktopIcon = <ComputerIcon sx={{ color: '#ffffff', width: '25px', height: '25px' }} />; // You can customize this icon
  const VideoIcon = <VideocamIcon sx={{ color: 'red', width: '25px', height: '25px',  bgcolor: '#ffe0db !important' }} />; // Customize the video icon style

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 80,
    },
    {
      field: 'courseName',
      headerName: 'Course Name',
      width: 200,
      renderCell: (params) => params.row.courseName,
      headerClassName: 'custom-header',
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 120,
      headerClassName: 'custom-header',
    },
    {
      field: 'progress',
      headerName: 'Progress',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <LinearProgress
            variant="buffer"
            value={params.row.progress}
            sx={{ width: '100%', borderRadius: '10px', height: '10px' }}
          />
          <Typography sx={{ fontSize: '15px', ml: '5px', mb: '-5px', width: '20%' }}>{params.row.progress}%</Typography>
        </Box>
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Typography sx={{ fontSize: '15px', ml: '5px', mb: '-5px', width: '50%' }}>{params.row.status}</Typography>
        </Box>
      ),
    },
    {
      field: 'deskTop',
      headerName: 'Desktop',
      width: 150,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {<ComputerIcon sx={{ color: 'darkblue', width: '25px', height: '25px', bgcolor: '#e7e7ff !important'}}/>}
          <Typography sx={{ fontSize: '15px', ml: '5px', mb: '-5px', paddingLeft: '10px' }}>{params.row.deskTop}</Typography>
        </Box>
      ),
    },
    {
      field: 'video',
      headerName: 'Online Classes',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {VideoIcon}
          <Typography sx={{ fontSize: '15px', ml: '5px', mb: '-5px', paddingLeft: '10px' }}>{params.row.video}</Typography>
        </Box>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionModelChange={(selection) => handleCheckboxChange(selection.selectionModel[0])}
      />
    </div>
  );
};

export default TableComponent;
