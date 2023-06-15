import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function HomePage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <Head title={props.title} />
            <div>
                <h1 className="font-bold text-6xl text-center text-gray-800 p-4 mt-4">{props.desc}</h1>
                {props.news ? (
                    props.news.map((data, i) => {
                        return (
                            <div key={i} className="p-4 m-2 bg-gray-200 text-black shadow-lg rounded-md my-6">
                                <p className="text-2xl">{data.title}</p>
                                <p>{data.desc}</p>
                                <p>{data.category}</p>
                                <p className="text-sm">{data.author}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Belum ada berita saat ini!</p>
                )}
            </div>
        </div>
    );
}
