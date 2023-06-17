import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/HomePage/NewsList";

export default function HomePage(props) {
    return (
        <div className="min-h-screen bg-slate-100">
            <Head title={props.title} />
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-6 p-4 lg:flex-row lg:flex-wrap lg:items-stretch">
                <NewsList news={props.news.data} />
            </div>
        </div>
    );
}
