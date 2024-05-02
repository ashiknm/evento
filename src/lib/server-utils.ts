// force functions to use in server only
import "server-only"

import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

export const  getEvents = unstable_cache(async (city: string, page = 1) => {
    // const response = await fetch(
    //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    // );
  
    // const events: EventoEvent[] = await response.json();
    // return events;
  
    const events = await prisma.eventoEvent.findMany({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
      orderBy: {
        date: "desc",
      },
      take: 6,
      skip: (page - 1) * 6,
    });
    let totalCount = 0;
    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: {
          city: capitalize(city),
        },
      });
    }
    return { events, totalCount };
  });
  
  // cache the result first time - next time use cache
  export const getEvent = unstable_cache(async (slug: string) => {
    const event = await prisma.eventoEvent.findUnique({
      where: {
        slug: slug,
      },
    });
  
    if (!event) {
      return notFound();
    }
    return event;
  });

