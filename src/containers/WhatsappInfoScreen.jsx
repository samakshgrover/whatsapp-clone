import { Box, Container } from "@mui/material";
import emptyWhatsapp from "../assets/emptyWhatsapp.svg";

export function WhatsappInfoScreen() {
  return (
    <Container sx={{ height: "100vh", display:'flex', flexDirection:'column', background: "#e9edef", paddingBottom:'20px'}}>
      <Box
        sx={{
          flex:1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <img src={emptyWhatsapp} alt="empty whatsapp image" />
          <Box sx={{ textAlign: "center" }}>
            <h1>WhatsApp Web</h1>
            <div>
              Send and receive messages without keeping your phone online.
              <br />
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time.
            </div>
          </Box>
        </Box>
      </Box>
      <Box className="ubfBJ" sx={{textAlign:'center'}}>
          <span data-testid="lock-small" data-icon="lock-small" className="">
            <svg
              viewBox="0 0 10 12"
              height="12"
              width="10"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
            >
              <path
                d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>{" "}
          End-to-end encrypted
        </Box>
    </Container>
  );
}
