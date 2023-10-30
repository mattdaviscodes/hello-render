import Container from "@/components/Container";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

type Props = {
  slug: string;
};

const getPostContent = (slug: string) => {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const markdownFilePath = path.join(postsDirectory, `${slug}.md`);
  const content = fs.readFileSync(markdownFilePath, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const BlogPage: React.FC<{ params: Props }> = async ({ params }) => {
  const { slug } = params;
  console.log(`--> Blog page ${slug} rendered with params: ${{ params }}`);

  const post = getPostContent(slug);

  const processedContent = await remark().use(html).process(post.content);
  const htmlContent = processedContent.toString();

  return (
    <Container>
      <div className="flex justify-center">
        <article
          className="prose prose-xl prose-headings:text-amber-500 prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </Container>
  );
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const rawSlugs = fs.readdirSync(postsDirectory);

  return rawSlugs.map((rawSlug) => {
    return {
      slug: rawSlug.replace(/\.md$/, ""),
    };
  });
}

export default BlogPage;
