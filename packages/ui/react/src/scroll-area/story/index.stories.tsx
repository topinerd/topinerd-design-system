import { ScrollArea, ScrollBar } from "../scroll-area";
import {
  artist,
  caption,
  container,
  defaultVariant,
  horizontalScrollArea,
  img,
  imgWrapper,
  photo,
} from "./index.css";

export default { title: "Components/ScrollArea" };

export const Vertical = () => {
  return (
    <ScrollArea className={defaultVariant}>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop. Jokester began
      sneaking into the castle in the middle of the night and leaving jokes all
      over the place: under the king's pillow, in his soup, even in the royal
      toilet. The king was furious, but he couldn't seem to stop Jokester. And
      then, one day, the people of the kingdom discovered that the jokes left by
      Jokester were so funny that they couldn't help but laugh. And once they
      started laughing, they couldn't stop. Jokester began sneaking into the
      castle in the middle of the night and leaving jokes all over the place:
      under the king's pillow, in his soup, even in the royal toilet. The king
      was furious, but he couldn't seem to stop Jokester. And then, one day, the
      people of the kingdom discovered that the jokes left by Jokester were so
      funny that they couldn't help but laugh. And once they started laughing,
      they couldn't stop. Jokester began sneaking into the castle in the middle
      of the night and leaving jokes all over the place: under the king's
      pillow, in his soup, even in the royal toilet. The king was furious, but
      he couldn't seem to stop Jokester. And then, one day, the people of the
      kingdom discovered that the jokes left by Jokester were so funny that they
      couldn't help but laugh. And once they started laughing, they couldn't
      stop. Jokester began sneaking into the castle in the middle of the night
      and leaving jokes all over the place: under the king's pillow, in his
      soup, even in the royal toilet. The king was furious, but he couldn't seem
      to stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop.
    </ScrollArea>
  );
};

type Artwork = {
  artist: string;
  art: string;
};

const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];

export const Horizontal = () => {
  return (
    <ScrollArea className={horizontalScrollArea}>
      <div className={container}>
        {works.map(artwork => (
          <figure key={artwork.artist} className={photo}>
            <div className={imgWrapper}>
              <img
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className={img}
              />
            </div>
            <figcaption className={caption}>
              Photo by
              <span className={artist}>{artwork.artist}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
