import Info from "../types/Info";
import Count from "../types/Count";

interface Video {
  id: number;
  source: number;
  poster: number;
  info: Info;
  count: Count;
}

export default Video;
