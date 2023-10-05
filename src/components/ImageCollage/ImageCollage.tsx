import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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
    <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={150}>
      {itemData.map((item) => (
        <ImageListItem key={item.key}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.title}
            loading="lazy"
            width="150px"
            height="150px"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageCollage;
