import { getEvent } from "@/lib/server-utils";
import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};



export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);
  return new ImageResponse(
    (
      <section>
        <h1>{event.name}</h1>
        <p>Evento - Browse events around you</p>
      </section>
    )
  );
}