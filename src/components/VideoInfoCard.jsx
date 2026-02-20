import Badge from "./ui/Badge";
import Card from "./ui/Card";

function VideoInfoCard({ title, thumbnail, extractor, duration, isPlaylist, playlistCount }) {
  return (
    <Card as="section" className="overflow-hidden p-3 min-h-[184px]">
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        {thumbnail ? (
          <div className="h-36 overflow-hidden rounded-2xl bg-app-panel md:h-40">
            <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="grid h-36 w-full place-items-center rounded-2xl border border-app-border bg-app-bg text-sm text-app-muted md:h-40">
            No Preview
          </div>
        )}

        <div className="flex min-w-0 flex-col justify-center">
          <h2 className="line-clamp-2 font-display text-lg font-semibold text-app-text" title={title}>
            {title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="info">Source: {extractor}</Badge>
            <Badge variant="info">Duration: {duration}</Badge>
            {isPlaylist && <Badge variant="info">Playlist items: {playlistCount}</Badge>}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default VideoInfoCard;
