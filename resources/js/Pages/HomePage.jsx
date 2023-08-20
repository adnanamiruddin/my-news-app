import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/HomePage/NewsList";
import Paginator from "@/Components/HomePage/Paginator";

export default function HomePage(props) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Head title={props.title} />
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-6 p-4 md:flex-row md:flex-wrap md:items-stretch">
                <NewsList news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}
