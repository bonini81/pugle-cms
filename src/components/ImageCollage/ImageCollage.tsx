import Grid from "@mui/material/Grid";

import "./ImageCollage.scss";

export interface ImageCollageProps {
  src?: string;
  "data-testid": string;
  srcSet?: string;
  width?: string | number;
  height?: string | number;
  itemData: ImagesStackCollage[];
}

export interface ImagesStackCollage {
  key: number;
  img: string;
  alt: string;
}

/**
 * Render the title component.
 * @param {ImageCollageProps} props - The main Props for the Image Gallery.
 * @param {ImagesStackCollage} props - The props for each individual image.
 * @returns {JSX.Element} - The rendered Image Gallery Component.
 */

const ImageCollage = ({
  src,
  srcSet,
  width,
  height,
  itemData,
  ...props
}: ImageCollageProps) => {
  return (
    <Grid
      className="grid-gallery-padding"
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 3, md: 12 }}
    >
      {itemData.map((item) => (
        <Grid item xs={6} sm={6} md={2} data-testid={props["data-testid"]}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.alt}
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
