import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export default function Albums() {
  return (
    <Box sx={{ flexGrow: 1, alignItems: "end", justifyContent: "center" }}>
      <ImageList cols={4} variant="masonry">
        {imageData.map((img) => (
          <ImageListItem key={img}>
            <img
              src={img}
              alt={img}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const imageData = [
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/0025.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/077B7955-BA61-4629-A19B-E7C8F57E17E7.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/0EA03DFB-5D05-4798-A19D-3ABC6F06FB51.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/161E1785-0506-4307-AD35-C168A2FCFB09.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/4C445E1C-8236-4703-A2F7-886D27FB7B3C.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/6FB82EE7-D3CA-44BC-A5A3-90C131D17D75.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/925CACF4-2353-4263-81B7-4AB25F223045.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/96810009.JPEG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/96810011.JPEG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/Buettne_Buettne-R1-022-9A.JPEG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/CB123EFF-F8FD-4018-B95D-DE4FBC812DAB.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/F996B7BA-1777-418F-9859-3BED171D5DCA.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/FB0A0E42-F2C3-4591-A3BB-4E33BF82F553.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_1161.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_2811.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_2974.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3293.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3329.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3448.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3556.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3601.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3606.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3767.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3769.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_3904.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4082.PNG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4173.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4185.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4217.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4390.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4453.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4464.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4488.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4499.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4534.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4602.PNG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4689.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4769.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4771.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4816.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4821.PNG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4912.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4977.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_4978.PNG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5023.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5024.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5028.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5042.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5045.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5061.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5123.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5244.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5332.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5463.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5468.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5532.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5560.JPG'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_5632.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6461.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6608.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6731.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6751.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6926(1).jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6926.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6927(1).jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6927.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_6928.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_7509.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_8415.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/IMG_8764.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/Yoo2264_Yoo2264-R1-028-12A.jpg'),
  require('/Users/jdai/Documents/CS/PersonalProjects/daihouzi/src/resources/images/Yoo2264_Yoo2264-R1-034-15A.jpg'),
];
