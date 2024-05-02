import EventsList from "@/components/eventsList";
import H1 from "@/components/h1";
import {capitalize, sleep } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageParams = Props & {
  searchParams : {[key:string] : string | string[] | undefined}
}

export function generateMetadata({params} : Props): Metadata{
  const city = params.city;

  return {
    title : city==='all' ? 'All Events' : `Events in ${capitalize(city)}`
  }
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

async function EventsPage({ params , searchParams}: EventsPageParams) {
  const city = params.city;
  // it will preserve zero, 1 for null or undefined
  // const page  = searchParams.page ?? 1;


  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if(!parsedPage.success){
    throw new Error("Invalid Page Number");
  }
 

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
