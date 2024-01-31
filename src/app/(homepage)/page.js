"use client";

import { useGetAllShowsQuery } from "@/redux/showsApi";
import createSlug from "@/utils/createSlug";
import Link from "next/link";
import { useSelector } from "react-redux";
import Card from "./_components/Card";

export default function Home() {
  const { error, isLoading } = useGetAllShowsQuery();
  const shows = useSelector((state) => state.shows.shows);


  return (
    <main className="mt-10">
      <div className="grid gap-9 ">
        
      {shows.map(({ show }) => {
        const slug = createSlug(show.name);
        return (
          <Link href={`/details/${slug}`} key={show.id}>
            <Card imgUrl={show.image?.medium} slug={slug} showName={show.name} genres={show.genres}/>
          </Link>
        );
      })}
      </div>
    </main>
  );
}
