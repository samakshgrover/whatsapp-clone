import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const MessageMe = styled('div')(() => ({
  margin: '20px',
  width: "60%",
  backgroundColor: "#d9fdd3",
  borderRadius: "8px 0px 8px 8px",
  padding: "8px",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    width:0,
    height:0,
    top:0,
    right:'-10px',
    borderLeft: '20px solid #d9fdd3',
    borderBottom: '20px solid transparent'
  },
}));

const LeftAlign = styled('div')(()=>({
  display:'flex',
  justifyContent:'left'
}))


const RightAlign = styled('div')(()=>({
  display:'flex',
  justifyContent:'right'
}))

const MessageOther = styled(Paper)(() => ({
  margin: '20px',
  width: "60%",
  backgroundColor: "#fff",
  borderRadius: "0px 8px 8px 8px",
  padding: "8px",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    width:0,
    height:0,
    top:0,
    left:'-10px',
    borderTop: '20px solid #fff',
    borderLeft: '20px solid transparent',
  },
}));

const MessageText = styled("p")(() => ({}));

export function ChatBody() {
  return (
    <Box sx={{ flex:1, backgroundImage:'url("/bg.jpg")', overflowY: 'auto' }}>
      <RightAlign>

      <MessageMe>
        <MessageText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut.
        </MessageText>
      </MessageMe>
      </RightAlign>

      <LeftAlign>
      <MessageOther>
        <MessageText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut.
        </MessageText>
      </MessageOther>
      </LeftAlign>

      <RightAlign>
      <MessageMe>
        <MessageText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut.
        </MessageText>
      </MessageMe>
      </RightAlign>
      <LeftAlign>
      <MessageOther>
        <MessageText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut.
        </MessageText>
      </MessageOther>
      </LeftAlign>
    </Box>
  );
}

