import Grid from "@mui/material/Grid";

import "./ImageCollage.scss";

export interface ImageCollageProps {
  alt?: string;
  src?: string;

  srcSet?: string;
  width?: string | number;
  height?: string | number;
  itemData: ImagesStackCollage[];
}

export interface ImagesStackCollage {
  key: number;
  img: string;
  title: string;
}

const ImageCollage = ({
  alt,
  src,
  srcSet,
  width,
  height,
  itemData,
}: ImageCollageProps) => {
  return (
    <Grid
      className="grid-gallery-padding"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 3, md: 12 }}
    >
      {itemData.map((item) => (
        <Grid item xs={6} sm={6} md={2}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.title}
            loading="lazy"
            width={width}
            height={height}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageCollage;
