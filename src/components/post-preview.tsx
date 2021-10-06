import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PostPreviewFragment } from "../graphqlTypes"

interface PostPreviewProps {
  post: PostPreviewFragment
}

export const BlogPostPreview = ({ post }: PostPreviewProps) => {
  const image = getImage(post.frontmatter.image as any)
  const authorImage =
    post.frontmatter.author && getImage(post.frontmatter.author?.profile as any)

  const { title, description, date, author, lang } = post.frontmatter
  const { path } = post.fields

  const flag = lang === "en" ? "🇬🇧" : "🇮🇹"
  const { timeToRead } = post

  return (
    <Link to={path} className="max-w-sm m-auto mt-12 hover:opacity-75">
      <div className="relative shadow">
        <GatsbyImage image={image} alt={title} className="rounded" />
      </div>
      <div className="relative py-4 px-6 w-11/12 m-auto -mt-10 bg-gray-100 rounded z-20 shadow-lg">
        <div className="flex items-center justify-start">
          <GatsbyImage
            className="w-12 h-12 rounded-full"
            image={authorImage}
            alt={author?.name}
          />
          <div className="ml-3 flex-1">
            <div className="flex items-start justify-between w-full">
              <div>
                <h4 className="text font-semibold text-green-700">
                  {author?.name}
                </h4>
                <p className="text-xs uppercase tracking-wide text-gray-700 ">
                  {date}
                </p>
                <p className="text-xs uppercase tracking-wide text-gray-700 ">
                  read in {timeToRead} min
                </p>
              </div>

              <p className="text-4xl">{flag}</p>
            </div>
          </div>
        </div>
        <h3 className="text-lg text-gray-800 mt-3 font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mt-2">{description}</p>

        <div className="px-4 py-2 rounded text-white inline-block mt-3 border-b-2 bg-green-600 hover:bg-green-700">
          Read more...
        </div>
      </div>
    </Link>
  )
}
