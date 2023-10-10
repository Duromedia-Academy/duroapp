
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",

  description: "Creating useful Content ",

  alternates: {
    canonical: "/about",
    languages: {
      "en-CA": `en-CA`,
    },
  },
};

export default async function AboutPage() {
  

  return (
    <>
      <div className="text-2xl font-bold text-center ">
        <h2>Welcome to my Blog page</h2>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque cupiditate totam provident tempora iure, ad, expedita labore, quos fuga animi eveniet porro hic. Ratione voluptates eaque sapiente! Esse quam, quidem reprehenderit, magni fuga rerum ducimus quod excepturi dignissimos, pariatur sequi dicta? Cumque, eum! Odio hic voluptate rerum nulla itaque? Doloribus!</p>
      </div>
    </>
  );
}