import { Link } from "gatsby"
import React from "react"
import Image from "gatsby-image"

export const BlogPostPreview = ({ post }) => {
  const { description, title, path, author, date } = post.frontmatter
  const { timeToRead } = post
  const image = post.frontmatter.image.childCloudinaryAsset.fluid
  return (
    <Link to={path}>
      <div className="mt-4 flex flex-col rounded-lg hover:shadow-2xl shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <Image className="w-full h-auto" fluid={image} alt={title} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block">
              <h3 className="mt-2 text-xl h-14 truncate-2-lines leading-7  text-gray-900">
                {title}
              </h3>
              <p className="mt-3 truncate-3-lines mb-4 text-base leading-6 text-gray-500">
                {description}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <div>
                <Image
                  className="h-10 w-10 rounded-full"
                  fixed={author?.profile?.childCloudinaryAsset.fixed}
                  alt=""
                />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm leading-5 font-medium text-gray-900">
                {author?.name}
              </p>
              <div className="flex text-sm leading-5 text-gray-500">
                <time dateTime={date}>{date}</time>
                <span className="mx-1">&middot;</span>
                <span>Lettura in {timeToRead} min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
