import CardBlogs from "@/components/CardBlogs";
import SwitchTheme from "@/components/SwitchTheme";
import { getBlogs } from "@/lib/blog";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className="h-screen">
      <div className="ml-[10rem] flex flex-col">
        <p>Change Theme</p>
        <SwitchTheme />
      </div>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {blogs.map((items: any) => {
          console.log(items.fields.author.fields.image.fields.file.url);

          return (
            <CardBlogs
              key={items.sys.id}
              title={items.fields?.title}
              img={items.fields.img.fields.file.url}
              img_profile={items.fields.author.fields.image.fields.file.url}
              author={items.fields.author.fields.name}
              email={items.fields.author.fields.email}
              detail={items.fields.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
