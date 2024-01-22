export const StyleForScrollBar ={
    FirstCardStyle:{
        borderRadius:"0px",
        height:"auto",
        overflow:"auto",
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '0.4em',
          borderRadius:"5px"
        },
        '&::-webkit-scrollbar-track': {
          background: "#808080",
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#808080',
        },
        '&::-webkit-scrollbar-thumb:hover': 
        {
          background: '#c1c1c1'
        }
    },
}