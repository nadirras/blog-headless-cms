const base_url = process.env.BASE_URL_CONTENTFUL;
const space_id = process.env.SPACE_ID_CONTENTFUL;
const token = process.env.TOKEN_CONTENTFUL;
import resolveResponse from "contentful-resolve-response";

export const getBlogs = async () => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.author.sys.id=2PZ4sesZCqhQN16mmiTXgx`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  const response = {
    items: data.items,
    includes: data.includes,
  };

  const items = resolveResponse(response);

  //   console.log(resolveResponse(data));
  return items;
};

export const getBlogSlug = async (slug: string) => {
  const res = await fetch(
    `${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.author.sys.id=2PZ4sesZCqhQN16mmiTXgx&fields.slug=${slug}`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  const response = {
    items: data.items,
    includes: data.includes,
  };

  const items = resolveResponse(response);

  return items[0];
};
