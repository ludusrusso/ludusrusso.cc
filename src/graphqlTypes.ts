export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type AuthorYaml = Node & {
  __typename?: 'AuthorYaml';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  profile?: Maybe<File>;
};

export type AuthorYamlConnection = {
  __typename?: 'AuthorYamlConnection';
  totalCount: Scalars['Int'];
  edges: Array<AuthorYamlEdge>;
  nodes: Array<AuthorYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<AuthorYamlGroupConnection>;
};


export type AuthorYamlConnectionDistinctArgs = {
  field: AuthorYamlFieldsEnum;
};


export type AuthorYamlConnectionMaxArgs = {
  field: AuthorYamlFieldsEnum;
};


export type AuthorYamlConnectionMinArgs = {
  field: AuthorYamlFieldsEnum;
};


export type AuthorYamlConnectionSumArgs = {
  field: AuthorYamlFieldsEnum;
};


export type AuthorYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AuthorYamlFieldsEnum;
};

export type AuthorYamlEdge = {
  __typename?: 'AuthorYamlEdge';
  next?: Maybe<AuthorYaml>;
  node: AuthorYaml;
  previous?: Maybe<AuthorYaml>;
};

export enum AuthorYamlFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Bio = 'bio',
  ProfileSourceInstanceName = 'profile___sourceInstanceName',
  ProfileAbsolutePath = 'profile___absolutePath',
  ProfileRelativePath = 'profile___relativePath',
  ProfileExtension = 'profile___extension',
  ProfileSize = 'profile___size',
  ProfilePrettySize = 'profile___prettySize',
  ProfileModifiedTime = 'profile___modifiedTime',
  ProfileAccessTime = 'profile___accessTime',
  ProfileChangeTime = 'profile___changeTime',
  ProfileBirthTime = 'profile___birthTime',
  ProfileRoot = 'profile___root',
  ProfileDir = 'profile___dir',
  ProfileBase = 'profile___base',
  ProfileExt = 'profile___ext',
  ProfileName = 'profile___name',
  ProfileRelativeDirectory = 'profile___relativeDirectory',
  ProfileDev = 'profile___dev',
  ProfileMode = 'profile___mode',
  ProfileNlink = 'profile___nlink',
  ProfileUid = 'profile___uid',
  ProfileGid = 'profile___gid',
  ProfileRdev = 'profile___rdev',
  ProfileIno = 'profile___ino',
  ProfileAtimeMs = 'profile___atimeMs',
  ProfileMtimeMs = 'profile___mtimeMs',
  ProfileCtimeMs = 'profile___ctimeMs',
  ProfileAtime = 'profile___atime',
  ProfileMtime = 'profile___mtime',
  ProfileCtime = 'profile___ctime',
  ProfileBirthtime = 'profile___birthtime',
  ProfileBirthtimeMs = 'profile___birthtimeMs',
  ProfileBlksize = 'profile___blksize',
  ProfileBlocks = 'profile___blocks',
  ProfilePublicUrl = 'profile___publicURL',
  ProfileChildrenImageSharp = 'profile___childrenImageSharp',
  ProfileChildrenImageSharpFixedBase64 = 'profile___childrenImageSharp___fixed___base64',
  ProfileChildrenImageSharpFixedTracedSvg = 'profile___childrenImageSharp___fixed___tracedSVG',
  ProfileChildrenImageSharpFixedAspectRatio = 'profile___childrenImageSharp___fixed___aspectRatio',
  ProfileChildrenImageSharpFixedWidth = 'profile___childrenImageSharp___fixed___width',
  ProfileChildrenImageSharpFixedHeight = 'profile___childrenImageSharp___fixed___height',
  ProfileChildrenImageSharpFixedSrc = 'profile___childrenImageSharp___fixed___src',
  ProfileChildrenImageSharpFixedSrcSet = 'profile___childrenImageSharp___fixed___srcSet',
  ProfileChildrenImageSharpFixedSrcWebp = 'profile___childrenImageSharp___fixed___srcWebp',
  ProfileChildrenImageSharpFixedSrcSetWebp = 'profile___childrenImageSharp___fixed___srcSetWebp',
  ProfileChildrenImageSharpFixedOriginalName = 'profile___childrenImageSharp___fixed___originalName',
  ProfileChildrenImageSharpFluidBase64 = 'profile___childrenImageSharp___fluid___base64',
  ProfileChildrenImageSharpFluidTracedSvg = 'profile___childrenImageSharp___fluid___tracedSVG',
  ProfileChildrenImageSharpFluidAspectRatio = 'profile___childrenImageSharp___fluid___aspectRatio',
  ProfileChildrenImageSharpFluidSrc = 'profile___childrenImageSharp___fluid___src',
  ProfileChildrenImageSharpFluidSrcSet = 'profile___childrenImageSharp___fluid___srcSet',
  ProfileChildrenImageSharpFluidSrcWebp = 'profile___childrenImageSharp___fluid___srcWebp',
  ProfileChildrenImageSharpFluidSrcSetWebp = 'profile___childrenImageSharp___fluid___srcSetWebp',
  ProfileChildrenImageSharpFluidSizes = 'profile___childrenImageSharp___fluid___sizes',
  ProfileChildrenImageSharpFluidOriginalImg = 'profile___childrenImageSharp___fluid___originalImg',
  ProfileChildrenImageSharpFluidOriginalName = 'profile___childrenImageSharp___fluid___originalName',
  ProfileChildrenImageSharpFluidPresentationWidth = 'profile___childrenImageSharp___fluid___presentationWidth',
  ProfileChildrenImageSharpFluidPresentationHeight = 'profile___childrenImageSharp___fluid___presentationHeight',
  ProfileChildrenImageSharpGatsbyImageData = 'profile___childrenImageSharp___gatsbyImageData',
  ProfileChildrenImageSharpOriginalWidth = 'profile___childrenImageSharp___original___width',
  ProfileChildrenImageSharpOriginalHeight = 'profile___childrenImageSharp___original___height',
  ProfileChildrenImageSharpOriginalSrc = 'profile___childrenImageSharp___original___src',
  ProfileChildrenImageSharpResizeSrc = 'profile___childrenImageSharp___resize___src',
  ProfileChildrenImageSharpResizeTracedSvg = 'profile___childrenImageSharp___resize___tracedSVG',
  ProfileChildrenImageSharpResizeWidth = 'profile___childrenImageSharp___resize___width',
  ProfileChildrenImageSharpResizeHeight = 'profile___childrenImageSharp___resize___height',
  ProfileChildrenImageSharpResizeAspectRatio = 'profile___childrenImageSharp___resize___aspectRatio',
  ProfileChildrenImageSharpResizeOriginalName = 'profile___childrenImageSharp___resize___originalName',
  ProfileChildrenImageSharpId = 'profile___childrenImageSharp___id',
  ProfileChildrenImageSharpParentId = 'profile___childrenImageSharp___parent___id',
  ProfileChildrenImageSharpParentChildren = 'profile___childrenImageSharp___parent___children',
  ProfileChildrenImageSharpChildren = 'profile___childrenImageSharp___children',
  ProfileChildrenImageSharpChildrenId = 'profile___childrenImageSharp___children___id',
  ProfileChildrenImageSharpChildrenChildren = 'profile___childrenImageSharp___children___children',
  ProfileChildrenImageSharpInternalContent = 'profile___childrenImageSharp___internal___content',
  ProfileChildrenImageSharpInternalContentDigest = 'profile___childrenImageSharp___internal___contentDigest',
  ProfileChildrenImageSharpInternalDescription = 'profile___childrenImageSharp___internal___description',
  ProfileChildrenImageSharpInternalFieldOwners = 'profile___childrenImageSharp___internal___fieldOwners',
  ProfileChildrenImageSharpInternalIgnoreType = 'profile___childrenImageSharp___internal___ignoreType',
  ProfileChildrenImageSharpInternalMediaType = 'profile___childrenImageSharp___internal___mediaType',
  ProfileChildrenImageSharpInternalOwner = 'profile___childrenImageSharp___internal___owner',
  ProfileChildrenImageSharpInternalType = 'profile___childrenImageSharp___internal___type',
  ProfileChildImageSharpFixedBase64 = 'profile___childImageSharp___fixed___base64',
  ProfileChildImageSharpFixedTracedSvg = 'profile___childImageSharp___fixed___tracedSVG',
  ProfileChildImageSharpFixedAspectRatio = 'profile___childImageSharp___fixed___aspectRatio',
  ProfileChildImageSharpFixedWidth = 'profile___childImageSharp___fixed___width',
  ProfileChildImageSharpFixedHeight = 'profile___childImageSharp___fixed___height',
  ProfileChildImageSharpFixedSrc = 'profile___childImageSharp___fixed___src',
  ProfileChildImageSharpFixedSrcSet = 'profile___childImageSharp___fixed___srcSet',
  ProfileChildImageSharpFixedSrcWebp = 'profile___childImageSharp___fixed___srcWebp',
  ProfileChildImageSharpFixedSrcSetWebp = 'profile___childImageSharp___fixed___srcSetWebp',
  ProfileChildImageSharpFixedOriginalName = 'profile___childImageSharp___fixed___originalName',
  ProfileChildImageSharpFluidBase64 = 'profile___childImageSharp___fluid___base64',
  ProfileChildImageSharpFluidTracedSvg = 'profile___childImageSharp___fluid___tracedSVG',
  ProfileChildImageSharpFluidAspectRatio = 'profile___childImageSharp___fluid___aspectRatio',
  ProfileChildImageSharpFluidSrc = 'profile___childImageSharp___fluid___src',
  ProfileChildImageSharpFluidSrcSet = 'profile___childImageSharp___fluid___srcSet',
  ProfileChildImageSharpFluidSrcWebp = 'profile___childImageSharp___fluid___srcWebp',
  ProfileChildImageSharpFluidSrcSetWebp = 'profile___childImageSharp___fluid___srcSetWebp',
  ProfileChildImageSharpFluidSizes = 'profile___childImageSharp___fluid___sizes',
  ProfileChildImageSharpFluidOriginalImg = 'profile___childImageSharp___fluid___originalImg',
  ProfileChildImageSharpFluidOriginalName = 'profile___childImageSharp___fluid___originalName',
  ProfileChildImageSharpFluidPresentationWidth = 'profile___childImageSharp___fluid___presentationWidth',
  ProfileChildImageSharpFluidPresentationHeight = 'profile___childImageSharp___fluid___presentationHeight',
  ProfileChildImageSharpGatsbyImageData = 'profile___childImageSharp___gatsbyImageData',
  ProfileChildImageSharpOriginalWidth = 'profile___childImageSharp___original___width',
  ProfileChildImageSharpOriginalHeight = 'profile___childImageSharp___original___height',
  ProfileChildImageSharpOriginalSrc = 'profile___childImageSharp___original___src',
  ProfileChildImageSharpResizeSrc = 'profile___childImageSharp___resize___src',
  ProfileChildImageSharpResizeTracedSvg = 'profile___childImageSharp___resize___tracedSVG',
  ProfileChildImageSharpResizeWidth = 'profile___childImageSharp___resize___width',
  ProfileChildImageSharpResizeHeight = 'profile___childImageSharp___resize___height',
  ProfileChildImageSharpResizeAspectRatio = 'profile___childImageSharp___resize___aspectRatio',
  ProfileChildImageSharpResizeOriginalName = 'profile___childImageSharp___resize___originalName',
  ProfileChildImageSharpId = 'profile___childImageSharp___id',
  ProfileChildImageSharpParentId = 'profile___childImageSharp___parent___id',
  ProfileChildImageSharpParentChildren = 'profile___childImageSharp___parent___children',
  ProfileChildImageSharpChildren = 'profile___childImageSharp___children',
  ProfileChildImageSharpChildrenId = 'profile___childImageSharp___children___id',
  ProfileChildImageSharpChildrenChildren = 'profile___childImageSharp___children___children',
  ProfileChildImageSharpInternalContent = 'profile___childImageSharp___internal___content',
  ProfileChildImageSharpInternalContentDigest = 'profile___childImageSharp___internal___contentDigest',
  ProfileChildImageSharpInternalDescription = 'profile___childImageSharp___internal___description',
  ProfileChildImageSharpInternalFieldOwners = 'profile___childImageSharp___internal___fieldOwners',
  ProfileChildImageSharpInternalIgnoreType = 'profile___childImageSharp___internal___ignoreType',
  ProfileChildImageSharpInternalMediaType = 'profile___childImageSharp___internal___mediaType',
  ProfileChildImageSharpInternalOwner = 'profile___childImageSharp___internal___owner',
  ProfileChildImageSharpInternalType = 'profile___childImageSharp___internal___type',
  ProfileChildrenMdx = 'profile___childrenMdx',
  ProfileChildrenMdxRawBody = 'profile___childrenMdx___rawBody',
  ProfileChildrenMdxFileAbsolutePath = 'profile___childrenMdx___fileAbsolutePath',
  ProfileChildrenMdxFrontmatterTitle = 'profile___childrenMdx___frontmatter___title',
  ProfileChildrenMdxFrontmatterLayout = 'profile___childrenMdx___frontmatter___layout',
  ProfileChildrenMdxFrontmatterDescription = 'profile___childrenMdx___frontmatter___description',
  ProfileChildrenMdxFrontmatterDate = 'profile___childrenMdx___frontmatter___date',
  ProfileChildrenMdxFrontmatterPath = 'profile___childrenMdx___frontmatter___path',
  ProfileChildrenMdxFrontmatterTags = 'profile___childrenMdx___frontmatter___tags',
  ProfileChildrenMdxFrontmatterHeaderImage = 'profile___childrenMdx___frontmatter___headerImage',
  ProfileChildrenMdxFrontmatterReadTime = 'profile___childrenMdx___frontmatter___read_time',
  ProfileChildrenMdxFrontmatterCategory = 'profile___childrenMdx___frontmatter___category',
  ProfileChildrenMdxFrontmatterRedirectFrom = 'profile___childrenMdx___frontmatter___redirect_from',
  ProfileChildrenMdxFrontmatterMultiple = 'profile___childrenMdx___frontmatter___multiple',
  ProfileChildrenMdxFrontmatterProjects = 'profile___childrenMdx___frontmatter___projects',
  ProfileChildrenMdxFrontmatterStar = 'profile___childrenMdx___frontmatter___star',
  ProfileChildrenMdxFrontmatterHidden = 'profile___childrenMdx___frontmatter___hidden',
  ProfileChildrenMdxFrontmatterPermalink = 'profile___childrenMdx___frontmatter___permalink',
  ProfileChildrenMdxFrontmatterTag = 'profile___childrenMdx___frontmatter___tag',
  ProfileChildrenMdxFrontmatterLang = 'profile___childrenMdx___frontmatter___lang',
  ProfileChildrenMdxFrontmatterStarred = 'profile___childrenMdx___frontmatter___starred',
  ProfileChildrenMdxSlug = 'profile___childrenMdx___slug',
  ProfileChildrenMdxBody = 'profile___childrenMdx___body',
  ProfileChildrenMdxExcerpt = 'profile___childrenMdx___excerpt',
  ProfileChildrenMdxHeadings = 'profile___childrenMdx___headings',
  ProfileChildrenMdxHeadingsValue = 'profile___childrenMdx___headings___value',
  ProfileChildrenMdxHeadingsDepth = 'profile___childrenMdx___headings___depth',
  ProfileChildrenMdxHtml = 'profile___childrenMdx___html',
  ProfileChildrenMdxMdxAst = 'profile___childrenMdx___mdxAST',
  ProfileChildrenMdxTableOfContents = 'profile___childrenMdx___tableOfContents',
  ProfileChildrenMdxTimeToRead = 'profile___childrenMdx___timeToRead',
  ProfileChildrenMdxWordCountParagraphs = 'profile___childrenMdx___wordCount___paragraphs',
  ProfileChildrenMdxWordCountSentences = 'profile___childrenMdx___wordCount___sentences',
  ProfileChildrenMdxWordCountWords = 'profile___childrenMdx___wordCount___words',
  ProfileChildrenMdxGatsbyPath = 'profile___childrenMdx___gatsbyPath',
  ProfileChildrenMdxId = 'profile___childrenMdx___id',
  ProfileChildrenMdxParentId = 'profile___childrenMdx___parent___id',
  ProfileChildrenMdxParentChildren = 'profile___childrenMdx___parent___children',
  ProfileChildrenMdxChildren = 'profile___childrenMdx___children',
  ProfileChildrenMdxChildrenId = 'profile___childrenMdx___children___id',
  ProfileChildrenMdxChildrenChildren = 'profile___childrenMdx___children___children',
  ProfileChildrenMdxInternalContent = 'profile___childrenMdx___internal___content',
  ProfileChildrenMdxInternalContentDigest = 'profile___childrenMdx___internal___contentDigest',
  ProfileChildrenMdxInternalDescription = 'profile___childrenMdx___internal___description',
  ProfileChildrenMdxInternalFieldOwners = 'profile___childrenMdx___internal___fieldOwners',
  ProfileChildrenMdxInternalIgnoreType = 'profile___childrenMdx___internal___ignoreType',
  ProfileChildrenMdxInternalMediaType = 'profile___childrenMdx___internal___mediaType',
  ProfileChildrenMdxInternalOwner = 'profile___childrenMdx___internal___owner',
  ProfileChildrenMdxInternalType = 'profile___childrenMdx___internal___type',
  ProfileChildMdxRawBody = 'profile___childMdx___rawBody',
  ProfileChildMdxFileAbsolutePath = 'profile___childMdx___fileAbsolutePath',
  ProfileChildMdxFrontmatterTitle = 'profile___childMdx___frontmatter___title',
  ProfileChildMdxFrontmatterLayout = 'profile___childMdx___frontmatter___layout',
  ProfileChildMdxFrontmatterDescription = 'profile___childMdx___frontmatter___description',
  ProfileChildMdxFrontmatterDate = 'profile___childMdx___frontmatter___date',
  ProfileChildMdxFrontmatterPath = 'profile___childMdx___frontmatter___path',
  ProfileChildMdxFrontmatterTags = 'profile___childMdx___frontmatter___tags',
  ProfileChildMdxFrontmatterHeaderImage = 'profile___childMdx___frontmatter___headerImage',
  ProfileChildMdxFrontmatterReadTime = 'profile___childMdx___frontmatter___read_time',
  ProfileChildMdxFrontmatterCategory = 'profile___childMdx___frontmatter___category',
  ProfileChildMdxFrontmatterRedirectFrom = 'profile___childMdx___frontmatter___redirect_from',
  ProfileChildMdxFrontmatterMultiple = 'profile___childMdx___frontmatter___multiple',
  ProfileChildMdxFrontmatterProjects = 'profile___childMdx___frontmatter___projects',
  ProfileChildMdxFrontmatterStar = 'profile___childMdx___frontmatter___star',
  ProfileChildMdxFrontmatterHidden = 'profile___childMdx___frontmatter___hidden',
  ProfileChildMdxFrontmatterPermalink = 'profile___childMdx___frontmatter___permalink',
  ProfileChildMdxFrontmatterTag = 'profile___childMdx___frontmatter___tag',
  ProfileChildMdxFrontmatterLang = 'profile___childMdx___frontmatter___lang',
  ProfileChildMdxFrontmatterStarred = 'profile___childMdx___frontmatter___starred',
  ProfileChildMdxSlug = 'profile___childMdx___slug',
  ProfileChildMdxBody = 'profile___childMdx___body',
  ProfileChildMdxExcerpt = 'profile___childMdx___excerpt',
  ProfileChildMdxHeadings = 'profile___childMdx___headings',
  ProfileChildMdxHeadingsValue = 'profile___childMdx___headings___value',
  ProfileChildMdxHeadingsDepth = 'profile___childMdx___headings___depth',
  ProfileChildMdxHtml = 'profile___childMdx___html',
  ProfileChildMdxMdxAst = 'profile___childMdx___mdxAST',
  ProfileChildMdxTableOfContents = 'profile___childMdx___tableOfContents',
  ProfileChildMdxTimeToRead = 'profile___childMdx___timeToRead',
  ProfileChildMdxWordCountParagraphs = 'profile___childMdx___wordCount___paragraphs',
  ProfileChildMdxWordCountSentences = 'profile___childMdx___wordCount___sentences',
  ProfileChildMdxWordCountWords = 'profile___childMdx___wordCount___words',
  ProfileChildMdxGatsbyPath = 'profile___childMdx___gatsbyPath',
  ProfileChildMdxId = 'profile___childMdx___id',
  ProfileChildMdxParentId = 'profile___childMdx___parent___id',
  ProfileChildMdxParentChildren = 'profile___childMdx___parent___children',
  ProfileChildMdxChildren = 'profile___childMdx___children',
  ProfileChildMdxChildrenId = 'profile___childMdx___children___id',
  ProfileChildMdxChildrenChildren = 'profile___childMdx___children___children',
  ProfileChildMdxInternalContent = 'profile___childMdx___internal___content',
  ProfileChildMdxInternalContentDigest = 'profile___childMdx___internal___contentDigest',
  ProfileChildMdxInternalDescription = 'profile___childMdx___internal___description',
  ProfileChildMdxInternalFieldOwners = 'profile___childMdx___internal___fieldOwners',
  ProfileChildMdxInternalIgnoreType = 'profile___childMdx___internal___ignoreType',
  ProfileChildMdxInternalMediaType = 'profile___childMdx___internal___mediaType',
  ProfileChildMdxInternalOwner = 'profile___childMdx___internal___owner',
  ProfileChildMdxInternalType = 'profile___childMdx___internal___type',
  ProfileChildrenAuthorYaml = 'profile___childrenAuthorYaml',
  ProfileChildrenAuthorYamlId = 'profile___childrenAuthorYaml___id',
  ProfileChildrenAuthorYamlParentId = 'profile___childrenAuthorYaml___parent___id',
  ProfileChildrenAuthorYamlParentChildren = 'profile___childrenAuthorYaml___parent___children',
  ProfileChildrenAuthorYamlChildren = 'profile___childrenAuthorYaml___children',
  ProfileChildrenAuthorYamlChildrenId = 'profile___childrenAuthorYaml___children___id',
  ProfileChildrenAuthorYamlChildrenChildren = 'profile___childrenAuthorYaml___children___children',
  ProfileChildrenAuthorYamlInternalContent = 'profile___childrenAuthorYaml___internal___content',
  ProfileChildrenAuthorYamlInternalContentDigest = 'profile___childrenAuthorYaml___internal___contentDigest',
  ProfileChildrenAuthorYamlInternalDescription = 'profile___childrenAuthorYaml___internal___description',
  ProfileChildrenAuthorYamlInternalFieldOwners = 'profile___childrenAuthorYaml___internal___fieldOwners',
  ProfileChildrenAuthorYamlInternalIgnoreType = 'profile___childrenAuthorYaml___internal___ignoreType',
  ProfileChildrenAuthorYamlInternalMediaType = 'profile___childrenAuthorYaml___internal___mediaType',
  ProfileChildrenAuthorYamlInternalOwner = 'profile___childrenAuthorYaml___internal___owner',
  ProfileChildrenAuthorYamlInternalType = 'profile___childrenAuthorYaml___internal___type',
  ProfileChildrenAuthorYamlName = 'profile___childrenAuthorYaml___name',
  ProfileChildrenAuthorYamlBio = 'profile___childrenAuthorYaml___bio',
  ProfileChildrenAuthorYamlProfileSourceInstanceName = 'profile___childrenAuthorYaml___profile___sourceInstanceName',
  ProfileChildrenAuthorYamlProfileAbsolutePath = 'profile___childrenAuthorYaml___profile___absolutePath',
  ProfileChildrenAuthorYamlProfileRelativePath = 'profile___childrenAuthorYaml___profile___relativePath',
  ProfileChildrenAuthorYamlProfileExtension = 'profile___childrenAuthorYaml___profile___extension',
  ProfileChildrenAuthorYamlProfileSize = 'profile___childrenAuthorYaml___profile___size',
  ProfileChildrenAuthorYamlProfilePrettySize = 'profile___childrenAuthorYaml___profile___prettySize',
  ProfileChildrenAuthorYamlProfileModifiedTime = 'profile___childrenAuthorYaml___profile___modifiedTime',
  ProfileChildrenAuthorYamlProfileAccessTime = 'profile___childrenAuthorYaml___profile___accessTime',
  ProfileChildrenAuthorYamlProfileChangeTime = 'profile___childrenAuthorYaml___profile___changeTime',
  ProfileChildrenAuthorYamlProfileBirthTime = 'profile___childrenAuthorYaml___profile___birthTime',
  ProfileChildrenAuthorYamlProfileRoot = 'profile___childrenAuthorYaml___profile___root',
  ProfileChildrenAuthorYamlProfileDir = 'profile___childrenAuthorYaml___profile___dir',
  ProfileChildrenAuthorYamlProfileBase = 'profile___childrenAuthorYaml___profile___base',
  ProfileChildrenAuthorYamlProfileExt = 'profile___childrenAuthorYaml___profile___ext',
  ProfileChildrenAuthorYamlProfileName = 'profile___childrenAuthorYaml___profile___name',
  ProfileChildrenAuthorYamlProfileRelativeDirectory = 'profile___childrenAuthorYaml___profile___relativeDirectory',
  ProfileChildrenAuthorYamlProfileDev = 'profile___childrenAuthorYaml___profile___dev',
  ProfileChildrenAuthorYamlProfileMode = 'profile___childrenAuthorYaml___profile___mode',
  ProfileChildrenAuthorYamlProfileNlink = 'profile___childrenAuthorYaml___profile___nlink',
  ProfileChildrenAuthorYamlProfileUid = 'profile___childrenAuthorYaml___profile___uid',
  ProfileChildrenAuthorYamlProfileGid = 'profile___childrenAuthorYaml___profile___gid',
  ProfileChildrenAuthorYamlProfileRdev = 'profile___childrenAuthorYaml___profile___rdev',
  ProfileChildrenAuthorYamlProfileIno = 'profile___childrenAuthorYaml___profile___ino',
  ProfileChildrenAuthorYamlProfileAtimeMs = 'profile___childrenAuthorYaml___profile___atimeMs',
  ProfileChildrenAuthorYamlProfileMtimeMs = 'profile___childrenAuthorYaml___profile___mtimeMs',
  ProfileChildrenAuthorYamlProfileCtimeMs = 'profile___childrenAuthorYaml___profile___ctimeMs',
  ProfileChildrenAuthorYamlProfileAtime = 'profile___childrenAuthorYaml___profile___atime',
  ProfileChildrenAuthorYamlProfileMtime = 'profile___childrenAuthorYaml___profile___mtime',
  ProfileChildrenAuthorYamlProfileCtime = 'profile___childrenAuthorYaml___profile___ctime',
  ProfileChildrenAuthorYamlProfileBirthtime = 'profile___childrenAuthorYaml___profile___birthtime',
  ProfileChildrenAuthorYamlProfileBirthtimeMs = 'profile___childrenAuthorYaml___profile___birthtimeMs',
  ProfileChildrenAuthorYamlProfileBlksize = 'profile___childrenAuthorYaml___profile___blksize',
  ProfileChildrenAuthorYamlProfileBlocks = 'profile___childrenAuthorYaml___profile___blocks',
  ProfileChildrenAuthorYamlProfilePublicUrl = 'profile___childrenAuthorYaml___profile___publicURL',
  ProfileChildrenAuthorYamlProfileChildrenImageSharp = 'profile___childrenAuthorYaml___profile___childrenImageSharp',
  ProfileChildrenAuthorYamlProfileChildrenMdx = 'profile___childrenAuthorYaml___profile___childrenMdx',
  ProfileChildrenAuthorYamlProfileChildrenAuthorYaml = 'profile___childrenAuthorYaml___profile___childrenAuthorYaml',
  ProfileChildrenAuthorYamlProfileId = 'profile___childrenAuthorYaml___profile___id',
  ProfileChildrenAuthorYamlProfileChildren = 'profile___childrenAuthorYaml___profile___children',
  ProfileChildAuthorYamlId = 'profile___childAuthorYaml___id',
  ProfileChildAuthorYamlParentId = 'profile___childAuthorYaml___parent___id',
  ProfileChildAuthorYamlParentChildren = 'profile___childAuthorYaml___parent___children',
  ProfileChildAuthorYamlChildren = 'profile___childAuthorYaml___children',
  ProfileChildAuthorYamlChildrenId = 'profile___childAuthorYaml___children___id',
  ProfileChildAuthorYamlChildrenChildren = 'profile___childAuthorYaml___children___children',
  ProfileChildAuthorYamlInternalContent = 'profile___childAuthorYaml___internal___content',
  ProfileChildAuthorYamlInternalContentDigest = 'profile___childAuthorYaml___internal___contentDigest',
  ProfileChildAuthorYamlInternalDescription = 'profile___childAuthorYaml___internal___description',
  ProfileChildAuthorYamlInternalFieldOwners = 'profile___childAuthorYaml___internal___fieldOwners',
  ProfileChildAuthorYamlInternalIgnoreType = 'profile___childAuthorYaml___internal___ignoreType',
  ProfileChildAuthorYamlInternalMediaType = 'profile___childAuthorYaml___internal___mediaType',
  ProfileChildAuthorYamlInternalOwner = 'profile___childAuthorYaml___internal___owner',
  ProfileChildAuthorYamlInternalType = 'profile___childAuthorYaml___internal___type',
  ProfileChildAuthorYamlName = 'profile___childAuthorYaml___name',
  ProfileChildAuthorYamlBio = 'profile___childAuthorYaml___bio',
  ProfileChildAuthorYamlProfileSourceInstanceName = 'profile___childAuthorYaml___profile___sourceInstanceName',
  ProfileChildAuthorYamlProfileAbsolutePath = 'profile___childAuthorYaml___profile___absolutePath',
  ProfileChildAuthorYamlProfileRelativePath = 'profile___childAuthorYaml___profile___relativePath',
  ProfileChildAuthorYamlProfileExtension = 'profile___childAuthorYaml___profile___extension',
  ProfileChildAuthorYamlProfileSize = 'profile___childAuthorYaml___profile___size',
  ProfileChildAuthorYamlProfilePrettySize = 'profile___childAuthorYaml___profile___prettySize',
  ProfileChildAuthorYamlProfileModifiedTime = 'profile___childAuthorYaml___profile___modifiedTime',
  ProfileChildAuthorYamlProfileAccessTime = 'profile___childAuthorYaml___profile___accessTime',
  ProfileChildAuthorYamlProfileChangeTime = 'profile___childAuthorYaml___profile___changeTime',
  ProfileChildAuthorYamlProfileBirthTime = 'profile___childAuthorYaml___profile___birthTime',
  ProfileChildAuthorYamlProfileRoot = 'profile___childAuthorYaml___profile___root',
  ProfileChildAuthorYamlProfileDir = 'profile___childAuthorYaml___profile___dir',
  ProfileChildAuthorYamlProfileBase = 'profile___childAuthorYaml___profile___base',
  ProfileChildAuthorYamlProfileExt = 'profile___childAuthorYaml___profile___ext',
  ProfileChildAuthorYamlProfileName = 'profile___childAuthorYaml___profile___name',
  ProfileChildAuthorYamlProfileRelativeDirectory = 'profile___childAuthorYaml___profile___relativeDirectory',
  ProfileChildAuthorYamlProfileDev = 'profile___childAuthorYaml___profile___dev',
  ProfileChildAuthorYamlProfileMode = 'profile___childAuthorYaml___profile___mode',
  ProfileChildAuthorYamlProfileNlink = 'profile___childAuthorYaml___profile___nlink',
  ProfileChildAuthorYamlProfileUid = 'profile___childAuthorYaml___profile___uid',
  ProfileChildAuthorYamlProfileGid = 'profile___childAuthorYaml___profile___gid',
  ProfileChildAuthorYamlProfileRdev = 'profile___childAuthorYaml___profile___rdev',
  ProfileChildAuthorYamlProfileIno = 'profile___childAuthorYaml___profile___ino',
  ProfileChildAuthorYamlProfileAtimeMs = 'profile___childAuthorYaml___profile___atimeMs',
  ProfileChildAuthorYamlProfileMtimeMs = 'profile___childAuthorYaml___profile___mtimeMs',
  ProfileChildAuthorYamlProfileCtimeMs = 'profile___childAuthorYaml___profile___ctimeMs',
  ProfileChildAuthorYamlProfileAtime = 'profile___childAuthorYaml___profile___atime',
  ProfileChildAuthorYamlProfileMtime = 'profile___childAuthorYaml___profile___mtime',
  ProfileChildAuthorYamlProfileCtime = 'profile___childAuthorYaml___profile___ctime',
  ProfileChildAuthorYamlProfileBirthtime = 'profile___childAuthorYaml___profile___birthtime',
  ProfileChildAuthorYamlProfileBirthtimeMs = 'profile___childAuthorYaml___profile___birthtimeMs',
  ProfileChildAuthorYamlProfileBlksize = 'profile___childAuthorYaml___profile___blksize',
  ProfileChildAuthorYamlProfileBlocks = 'profile___childAuthorYaml___profile___blocks',
  ProfileChildAuthorYamlProfilePublicUrl = 'profile___childAuthorYaml___profile___publicURL',
  ProfileChildAuthorYamlProfileChildrenImageSharp = 'profile___childAuthorYaml___profile___childrenImageSharp',
  ProfileChildAuthorYamlProfileChildrenMdx = 'profile___childAuthorYaml___profile___childrenMdx',
  ProfileChildAuthorYamlProfileChildrenAuthorYaml = 'profile___childAuthorYaml___profile___childrenAuthorYaml',
  ProfileChildAuthorYamlProfileId = 'profile___childAuthorYaml___profile___id',
  ProfileChildAuthorYamlProfileChildren = 'profile___childAuthorYaml___profile___children',
  ProfileId = 'profile___id',
  ProfileParentId = 'profile___parent___id',
  ProfileParentParentId = 'profile___parent___parent___id',
  ProfileParentParentChildren = 'profile___parent___parent___children',
  ProfileParentChildren = 'profile___parent___children',
  ProfileParentChildrenId = 'profile___parent___children___id',
  ProfileParentChildrenChildren = 'profile___parent___children___children',
  ProfileParentInternalContent = 'profile___parent___internal___content',
  ProfileParentInternalContentDigest = 'profile___parent___internal___contentDigest',
  ProfileParentInternalDescription = 'profile___parent___internal___description',
  ProfileParentInternalFieldOwners = 'profile___parent___internal___fieldOwners',
  ProfileParentInternalIgnoreType = 'profile___parent___internal___ignoreType',
  ProfileParentInternalMediaType = 'profile___parent___internal___mediaType',
  ProfileParentInternalOwner = 'profile___parent___internal___owner',
  ProfileParentInternalType = 'profile___parent___internal___type',
  ProfileChildren = 'profile___children',
  ProfileChildrenId = 'profile___children___id',
  ProfileChildrenParentId = 'profile___children___parent___id',
  ProfileChildrenParentChildren = 'profile___children___parent___children',
  ProfileChildrenChildren = 'profile___children___children',
  ProfileChildrenChildrenId = 'profile___children___children___id',
  ProfileChildrenChildrenChildren = 'profile___children___children___children',
  ProfileChildrenInternalContent = 'profile___children___internal___content',
  ProfileChildrenInternalContentDigest = 'profile___children___internal___contentDigest',
  ProfileChildrenInternalDescription = 'profile___children___internal___description',
  ProfileChildrenInternalFieldOwners = 'profile___children___internal___fieldOwners',
  ProfileChildrenInternalIgnoreType = 'profile___children___internal___ignoreType',
  ProfileChildrenInternalMediaType = 'profile___children___internal___mediaType',
  ProfileChildrenInternalOwner = 'profile___children___internal___owner',
  ProfileChildrenInternalType = 'profile___children___internal___type',
  ProfileInternalContent = 'profile___internal___content',
  ProfileInternalContentDigest = 'profile___internal___contentDigest',
  ProfileInternalDescription = 'profile___internal___description',
  ProfileInternalFieldOwners = 'profile___internal___fieldOwners',
  ProfileInternalIgnoreType = 'profile___internal___ignoreType',
  ProfileInternalMediaType = 'profile___internal___mediaType',
  ProfileInternalOwner = 'profile___internal___owner',
  ProfileInternalType = 'profile___internal___type'
}

export type AuthorYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  profile?: Maybe<FileFilterInput>;
};

export type AuthorYamlFilterListInput = {
  elemMatch?: Maybe<AuthorYamlFilterInput>;
};

export type AuthorYamlGroupConnection = {
  __typename?: 'AuthorYamlGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<AuthorYamlEdge>;
  nodes: Array<AuthorYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AuthorYamlSortInput = {
  fields?: Maybe<Array<Maybe<AuthorYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns all children nodes filtered by type AuthorYaml */
  childrenAuthorYaml?: Maybe<Array<Maybe<AuthorYaml>>>;
  /** Returns the first child node of type AuthorYaml or null if there are no children of given type on this node */
  childAuthorYaml?: Maybe<AuthorYaml>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxFrontmatterLayout = 'childrenMdx___frontmatter___layout',
  ChildrenMdxFrontmatterAuthorId = 'childrenMdx___frontmatter___author___id',
  ChildrenMdxFrontmatterAuthorChildren = 'childrenMdx___frontmatter___author___children',
  ChildrenMdxFrontmatterAuthorName = 'childrenMdx___frontmatter___author___name',
  ChildrenMdxFrontmatterAuthorBio = 'childrenMdx___frontmatter___author___bio',
  ChildrenMdxFrontmatterDescription = 'childrenMdx___frontmatter___description',
  ChildrenMdxFrontmatterDate = 'childrenMdx___frontmatter___date',
  ChildrenMdxFrontmatterPath = 'childrenMdx___frontmatter___path',
  ChildrenMdxFrontmatterImageSourceInstanceName = 'childrenMdx___frontmatter___image___sourceInstanceName',
  ChildrenMdxFrontmatterImageAbsolutePath = 'childrenMdx___frontmatter___image___absolutePath',
  ChildrenMdxFrontmatterImageRelativePath = 'childrenMdx___frontmatter___image___relativePath',
  ChildrenMdxFrontmatterImageExtension = 'childrenMdx___frontmatter___image___extension',
  ChildrenMdxFrontmatterImageSize = 'childrenMdx___frontmatter___image___size',
  ChildrenMdxFrontmatterImagePrettySize = 'childrenMdx___frontmatter___image___prettySize',
  ChildrenMdxFrontmatterImageModifiedTime = 'childrenMdx___frontmatter___image___modifiedTime',
  ChildrenMdxFrontmatterImageAccessTime = 'childrenMdx___frontmatter___image___accessTime',
  ChildrenMdxFrontmatterImageChangeTime = 'childrenMdx___frontmatter___image___changeTime',
  ChildrenMdxFrontmatterImageBirthTime = 'childrenMdx___frontmatter___image___birthTime',
  ChildrenMdxFrontmatterImageRoot = 'childrenMdx___frontmatter___image___root',
  ChildrenMdxFrontmatterImageDir = 'childrenMdx___frontmatter___image___dir',
  ChildrenMdxFrontmatterImageBase = 'childrenMdx___frontmatter___image___base',
  ChildrenMdxFrontmatterImageExt = 'childrenMdx___frontmatter___image___ext',
  ChildrenMdxFrontmatterImageName = 'childrenMdx___frontmatter___image___name',
  ChildrenMdxFrontmatterImageRelativeDirectory = 'childrenMdx___frontmatter___image___relativeDirectory',
  ChildrenMdxFrontmatterImageDev = 'childrenMdx___frontmatter___image___dev',
  ChildrenMdxFrontmatterImageMode = 'childrenMdx___frontmatter___image___mode',
  ChildrenMdxFrontmatterImageNlink = 'childrenMdx___frontmatter___image___nlink',
  ChildrenMdxFrontmatterImageUid = 'childrenMdx___frontmatter___image___uid',
  ChildrenMdxFrontmatterImageGid = 'childrenMdx___frontmatter___image___gid',
  ChildrenMdxFrontmatterImageRdev = 'childrenMdx___frontmatter___image___rdev',
  ChildrenMdxFrontmatterImageIno = 'childrenMdx___frontmatter___image___ino',
  ChildrenMdxFrontmatterImageAtimeMs = 'childrenMdx___frontmatter___image___atimeMs',
  ChildrenMdxFrontmatterImageMtimeMs = 'childrenMdx___frontmatter___image___mtimeMs',
  ChildrenMdxFrontmatterImageCtimeMs = 'childrenMdx___frontmatter___image___ctimeMs',
  ChildrenMdxFrontmatterImageAtime = 'childrenMdx___frontmatter___image___atime',
  ChildrenMdxFrontmatterImageMtime = 'childrenMdx___frontmatter___image___mtime',
  ChildrenMdxFrontmatterImageCtime = 'childrenMdx___frontmatter___image___ctime',
  ChildrenMdxFrontmatterImageBirthtime = 'childrenMdx___frontmatter___image___birthtime',
  ChildrenMdxFrontmatterImageBirthtimeMs = 'childrenMdx___frontmatter___image___birthtimeMs',
  ChildrenMdxFrontmatterImageBlksize = 'childrenMdx___frontmatter___image___blksize',
  ChildrenMdxFrontmatterImageBlocks = 'childrenMdx___frontmatter___image___blocks',
  ChildrenMdxFrontmatterImagePublicUrl = 'childrenMdx___frontmatter___image___publicURL',
  ChildrenMdxFrontmatterImageChildrenImageSharp = 'childrenMdx___frontmatter___image___childrenImageSharp',
  ChildrenMdxFrontmatterImageChildrenMdx = 'childrenMdx___frontmatter___image___childrenMdx',
  ChildrenMdxFrontmatterImageChildrenAuthorYaml = 'childrenMdx___frontmatter___image___childrenAuthorYaml',
  ChildrenMdxFrontmatterImageId = 'childrenMdx___frontmatter___image___id',
  ChildrenMdxFrontmatterImageChildren = 'childrenMdx___frontmatter___image___children',
  ChildrenMdxFrontmatterTags = 'childrenMdx___frontmatter___tags',
  ChildrenMdxFrontmatterHeaderImage = 'childrenMdx___frontmatter___headerImage',
  ChildrenMdxFrontmatterReadTime = 'childrenMdx___frontmatter___read_time',
  ChildrenMdxFrontmatterCategory = 'childrenMdx___frontmatter___category',
  ChildrenMdxFrontmatterRedirectFrom = 'childrenMdx___frontmatter___redirect_from',
  ChildrenMdxFrontmatterMultiple = 'childrenMdx___frontmatter___multiple',
  ChildrenMdxFrontmatterProjects = 'childrenMdx___frontmatter___projects',
  ChildrenMdxFrontmatterStar = 'childrenMdx___frontmatter___star',
  ChildrenMdxFrontmatterHidden = 'childrenMdx___frontmatter___hidden',
  ChildrenMdxFrontmatterPermalink = 'childrenMdx___frontmatter___permalink',
  ChildrenMdxFrontmatterTag = 'childrenMdx___frontmatter___tag',
  ChildrenMdxFrontmatterLang = 'childrenMdx___frontmatter___lang',
  ChildrenMdxFrontmatterStarred = 'childrenMdx___frontmatter___starred',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxGatsbyPath = 'childrenMdx___gatsbyPath',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxFrontmatterLayout = 'childMdx___frontmatter___layout',
  ChildMdxFrontmatterAuthorId = 'childMdx___frontmatter___author___id',
  ChildMdxFrontmatterAuthorChildren = 'childMdx___frontmatter___author___children',
  ChildMdxFrontmatterAuthorName = 'childMdx___frontmatter___author___name',
  ChildMdxFrontmatterAuthorBio = 'childMdx___frontmatter___author___bio',
  ChildMdxFrontmatterDescription = 'childMdx___frontmatter___description',
  ChildMdxFrontmatterDate = 'childMdx___frontmatter___date',
  ChildMdxFrontmatterPath = 'childMdx___frontmatter___path',
  ChildMdxFrontmatterImageSourceInstanceName = 'childMdx___frontmatter___image___sourceInstanceName',
  ChildMdxFrontmatterImageAbsolutePath = 'childMdx___frontmatter___image___absolutePath',
  ChildMdxFrontmatterImageRelativePath = 'childMdx___frontmatter___image___relativePath',
  ChildMdxFrontmatterImageExtension = 'childMdx___frontmatter___image___extension',
  ChildMdxFrontmatterImageSize = 'childMdx___frontmatter___image___size',
  ChildMdxFrontmatterImagePrettySize = 'childMdx___frontmatter___image___prettySize',
  ChildMdxFrontmatterImageModifiedTime = 'childMdx___frontmatter___image___modifiedTime',
  ChildMdxFrontmatterImageAccessTime = 'childMdx___frontmatter___image___accessTime',
  ChildMdxFrontmatterImageChangeTime = 'childMdx___frontmatter___image___changeTime',
  ChildMdxFrontmatterImageBirthTime = 'childMdx___frontmatter___image___birthTime',
  ChildMdxFrontmatterImageRoot = 'childMdx___frontmatter___image___root',
  ChildMdxFrontmatterImageDir = 'childMdx___frontmatter___image___dir',
  ChildMdxFrontmatterImageBase = 'childMdx___frontmatter___image___base',
  ChildMdxFrontmatterImageExt = 'childMdx___frontmatter___image___ext',
  ChildMdxFrontmatterImageName = 'childMdx___frontmatter___image___name',
  ChildMdxFrontmatterImageRelativeDirectory = 'childMdx___frontmatter___image___relativeDirectory',
  ChildMdxFrontmatterImageDev = 'childMdx___frontmatter___image___dev',
  ChildMdxFrontmatterImageMode = 'childMdx___frontmatter___image___mode',
  ChildMdxFrontmatterImageNlink = 'childMdx___frontmatter___image___nlink',
  ChildMdxFrontmatterImageUid = 'childMdx___frontmatter___image___uid',
  ChildMdxFrontmatterImageGid = 'childMdx___frontmatter___image___gid',
  ChildMdxFrontmatterImageRdev = 'childMdx___frontmatter___image___rdev',
  ChildMdxFrontmatterImageIno = 'childMdx___frontmatter___image___ino',
  ChildMdxFrontmatterImageAtimeMs = 'childMdx___frontmatter___image___atimeMs',
  ChildMdxFrontmatterImageMtimeMs = 'childMdx___frontmatter___image___mtimeMs',
  ChildMdxFrontmatterImageCtimeMs = 'childMdx___frontmatter___image___ctimeMs',
  ChildMdxFrontmatterImageAtime = 'childMdx___frontmatter___image___atime',
  ChildMdxFrontmatterImageMtime = 'childMdx___frontmatter___image___mtime',
  ChildMdxFrontmatterImageCtime = 'childMdx___frontmatter___image___ctime',
  ChildMdxFrontmatterImageBirthtime = 'childMdx___frontmatter___image___birthtime',
  ChildMdxFrontmatterImageBirthtimeMs = 'childMdx___frontmatter___image___birthtimeMs',
  ChildMdxFrontmatterImageBlksize = 'childMdx___frontmatter___image___blksize',
  ChildMdxFrontmatterImageBlocks = 'childMdx___frontmatter___image___blocks',
  ChildMdxFrontmatterImagePublicUrl = 'childMdx___frontmatter___image___publicURL',
  ChildMdxFrontmatterImageChildrenImageSharp = 'childMdx___frontmatter___image___childrenImageSharp',
  ChildMdxFrontmatterImageChildrenMdx = 'childMdx___frontmatter___image___childrenMdx',
  ChildMdxFrontmatterImageChildrenAuthorYaml = 'childMdx___frontmatter___image___childrenAuthorYaml',
  ChildMdxFrontmatterImageId = 'childMdx___frontmatter___image___id',
  ChildMdxFrontmatterImageChildren = 'childMdx___frontmatter___image___children',
  ChildMdxFrontmatterTags = 'childMdx___frontmatter___tags',
  ChildMdxFrontmatterHeaderImage = 'childMdx___frontmatter___headerImage',
  ChildMdxFrontmatterReadTime = 'childMdx___frontmatter___read_time',
  ChildMdxFrontmatterCategory = 'childMdx___frontmatter___category',
  ChildMdxFrontmatterRedirectFrom = 'childMdx___frontmatter___redirect_from',
  ChildMdxFrontmatterMultiple = 'childMdx___frontmatter___multiple',
  ChildMdxFrontmatterProjects = 'childMdx___frontmatter___projects',
  ChildMdxFrontmatterStar = 'childMdx___frontmatter___star',
  ChildMdxFrontmatterHidden = 'childMdx___frontmatter___hidden',
  ChildMdxFrontmatterPermalink = 'childMdx___frontmatter___permalink',
  ChildMdxFrontmatterTag = 'childMdx___frontmatter___tag',
  ChildMdxFrontmatterLang = 'childMdx___frontmatter___lang',
  ChildMdxFrontmatterStarred = 'childMdx___frontmatter___starred',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxGatsbyPath = 'childMdx___gatsbyPath',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type',
  ChildrenAuthorYaml = 'childrenAuthorYaml',
  ChildrenAuthorYamlId = 'childrenAuthorYaml___id',
  ChildrenAuthorYamlParentId = 'childrenAuthorYaml___parent___id',
  ChildrenAuthorYamlParentParentId = 'childrenAuthorYaml___parent___parent___id',
  ChildrenAuthorYamlParentParentChildren = 'childrenAuthorYaml___parent___parent___children',
  ChildrenAuthorYamlParentChildren = 'childrenAuthorYaml___parent___children',
  ChildrenAuthorYamlParentChildrenId = 'childrenAuthorYaml___parent___children___id',
  ChildrenAuthorYamlParentChildrenChildren = 'childrenAuthorYaml___parent___children___children',
  ChildrenAuthorYamlParentInternalContent = 'childrenAuthorYaml___parent___internal___content',
  ChildrenAuthorYamlParentInternalContentDigest = 'childrenAuthorYaml___parent___internal___contentDigest',
  ChildrenAuthorYamlParentInternalDescription = 'childrenAuthorYaml___parent___internal___description',
  ChildrenAuthorYamlParentInternalFieldOwners = 'childrenAuthorYaml___parent___internal___fieldOwners',
  ChildrenAuthorYamlParentInternalIgnoreType = 'childrenAuthorYaml___parent___internal___ignoreType',
  ChildrenAuthorYamlParentInternalMediaType = 'childrenAuthorYaml___parent___internal___mediaType',
  ChildrenAuthorYamlParentInternalOwner = 'childrenAuthorYaml___parent___internal___owner',
  ChildrenAuthorYamlParentInternalType = 'childrenAuthorYaml___parent___internal___type',
  ChildrenAuthorYamlChildren = 'childrenAuthorYaml___children',
  ChildrenAuthorYamlChildrenId = 'childrenAuthorYaml___children___id',
  ChildrenAuthorYamlChildrenParentId = 'childrenAuthorYaml___children___parent___id',
  ChildrenAuthorYamlChildrenParentChildren = 'childrenAuthorYaml___children___parent___children',
  ChildrenAuthorYamlChildrenChildren = 'childrenAuthorYaml___children___children',
  ChildrenAuthorYamlChildrenChildrenId = 'childrenAuthorYaml___children___children___id',
  ChildrenAuthorYamlChildrenChildrenChildren = 'childrenAuthorYaml___children___children___children',
  ChildrenAuthorYamlChildrenInternalContent = 'childrenAuthorYaml___children___internal___content',
  ChildrenAuthorYamlChildrenInternalContentDigest = 'childrenAuthorYaml___children___internal___contentDigest',
  ChildrenAuthorYamlChildrenInternalDescription = 'childrenAuthorYaml___children___internal___description',
  ChildrenAuthorYamlChildrenInternalFieldOwners = 'childrenAuthorYaml___children___internal___fieldOwners',
  ChildrenAuthorYamlChildrenInternalIgnoreType = 'childrenAuthorYaml___children___internal___ignoreType',
  ChildrenAuthorYamlChildrenInternalMediaType = 'childrenAuthorYaml___children___internal___mediaType',
  ChildrenAuthorYamlChildrenInternalOwner = 'childrenAuthorYaml___children___internal___owner',
  ChildrenAuthorYamlChildrenInternalType = 'childrenAuthorYaml___children___internal___type',
  ChildrenAuthorYamlInternalContent = 'childrenAuthorYaml___internal___content',
  ChildrenAuthorYamlInternalContentDigest = 'childrenAuthorYaml___internal___contentDigest',
  ChildrenAuthorYamlInternalDescription = 'childrenAuthorYaml___internal___description',
  ChildrenAuthorYamlInternalFieldOwners = 'childrenAuthorYaml___internal___fieldOwners',
  ChildrenAuthorYamlInternalIgnoreType = 'childrenAuthorYaml___internal___ignoreType',
  ChildrenAuthorYamlInternalMediaType = 'childrenAuthorYaml___internal___mediaType',
  ChildrenAuthorYamlInternalOwner = 'childrenAuthorYaml___internal___owner',
  ChildrenAuthorYamlInternalType = 'childrenAuthorYaml___internal___type',
  ChildrenAuthorYamlName = 'childrenAuthorYaml___name',
  ChildrenAuthorYamlBio = 'childrenAuthorYaml___bio',
  ChildrenAuthorYamlProfileSourceInstanceName = 'childrenAuthorYaml___profile___sourceInstanceName',
  ChildrenAuthorYamlProfileAbsolutePath = 'childrenAuthorYaml___profile___absolutePath',
  ChildrenAuthorYamlProfileRelativePath = 'childrenAuthorYaml___profile___relativePath',
  ChildrenAuthorYamlProfileExtension = 'childrenAuthorYaml___profile___extension',
  ChildrenAuthorYamlProfileSize = 'childrenAuthorYaml___profile___size',
  ChildrenAuthorYamlProfilePrettySize = 'childrenAuthorYaml___profile___prettySize',
  ChildrenAuthorYamlProfileModifiedTime = 'childrenAuthorYaml___profile___modifiedTime',
  ChildrenAuthorYamlProfileAccessTime = 'childrenAuthorYaml___profile___accessTime',
  ChildrenAuthorYamlProfileChangeTime = 'childrenAuthorYaml___profile___changeTime',
  ChildrenAuthorYamlProfileBirthTime = 'childrenAuthorYaml___profile___birthTime',
  ChildrenAuthorYamlProfileRoot = 'childrenAuthorYaml___profile___root',
  ChildrenAuthorYamlProfileDir = 'childrenAuthorYaml___profile___dir',
  ChildrenAuthorYamlProfileBase = 'childrenAuthorYaml___profile___base',
  ChildrenAuthorYamlProfileExt = 'childrenAuthorYaml___profile___ext',
  ChildrenAuthorYamlProfileName = 'childrenAuthorYaml___profile___name',
  ChildrenAuthorYamlProfileRelativeDirectory = 'childrenAuthorYaml___profile___relativeDirectory',
  ChildrenAuthorYamlProfileDev = 'childrenAuthorYaml___profile___dev',
  ChildrenAuthorYamlProfileMode = 'childrenAuthorYaml___profile___mode',
  ChildrenAuthorYamlProfileNlink = 'childrenAuthorYaml___profile___nlink',
  ChildrenAuthorYamlProfileUid = 'childrenAuthorYaml___profile___uid',
  ChildrenAuthorYamlProfileGid = 'childrenAuthorYaml___profile___gid',
  ChildrenAuthorYamlProfileRdev = 'childrenAuthorYaml___profile___rdev',
  ChildrenAuthorYamlProfileIno = 'childrenAuthorYaml___profile___ino',
  ChildrenAuthorYamlProfileAtimeMs = 'childrenAuthorYaml___profile___atimeMs',
  ChildrenAuthorYamlProfileMtimeMs = 'childrenAuthorYaml___profile___mtimeMs',
  ChildrenAuthorYamlProfileCtimeMs = 'childrenAuthorYaml___profile___ctimeMs',
  ChildrenAuthorYamlProfileAtime = 'childrenAuthorYaml___profile___atime',
  ChildrenAuthorYamlProfileMtime = 'childrenAuthorYaml___profile___mtime',
  ChildrenAuthorYamlProfileCtime = 'childrenAuthorYaml___profile___ctime',
  ChildrenAuthorYamlProfileBirthtime = 'childrenAuthorYaml___profile___birthtime',
  ChildrenAuthorYamlProfileBirthtimeMs = 'childrenAuthorYaml___profile___birthtimeMs',
  ChildrenAuthorYamlProfileBlksize = 'childrenAuthorYaml___profile___blksize',
  ChildrenAuthorYamlProfileBlocks = 'childrenAuthorYaml___profile___blocks',
  ChildrenAuthorYamlProfilePublicUrl = 'childrenAuthorYaml___profile___publicURL',
  ChildrenAuthorYamlProfileChildrenImageSharp = 'childrenAuthorYaml___profile___childrenImageSharp',
  ChildrenAuthorYamlProfileChildrenImageSharpGatsbyImageData = 'childrenAuthorYaml___profile___childrenImageSharp___gatsbyImageData',
  ChildrenAuthorYamlProfileChildrenImageSharpId = 'childrenAuthorYaml___profile___childrenImageSharp___id',
  ChildrenAuthorYamlProfileChildrenImageSharpChildren = 'childrenAuthorYaml___profile___childrenImageSharp___children',
  ChildrenAuthorYamlProfileChildImageSharpGatsbyImageData = 'childrenAuthorYaml___profile___childImageSharp___gatsbyImageData',
  ChildrenAuthorYamlProfileChildImageSharpId = 'childrenAuthorYaml___profile___childImageSharp___id',
  ChildrenAuthorYamlProfileChildImageSharpChildren = 'childrenAuthorYaml___profile___childImageSharp___children',
  ChildrenAuthorYamlProfileChildrenMdx = 'childrenAuthorYaml___profile___childrenMdx',
  ChildrenAuthorYamlProfileChildrenMdxRawBody = 'childrenAuthorYaml___profile___childrenMdx___rawBody',
  ChildrenAuthorYamlProfileChildrenMdxFileAbsolutePath = 'childrenAuthorYaml___profile___childrenMdx___fileAbsolutePath',
  ChildrenAuthorYamlProfileChildrenMdxSlug = 'childrenAuthorYaml___profile___childrenMdx___slug',
  ChildrenAuthorYamlProfileChildrenMdxBody = 'childrenAuthorYaml___profile___childrenMdx___body',
  ChildrenAuthorYamlProfileChildrenMdxExcerpt = 'childrenAuthorYaml___profile___childrenMdx___excerpt',
  ChildrenAuthorYamlProfileChildrenMdxHeadings = 'childrenAuthorYaml___profile___childrenMdx___headings',
  ChildrenAuthorYamlProfileChildrenMdxHtml = 'childrenAuthorYaml___profile___childrenMdx___html',
  ChildrenAuthorYamlProfileChildrenMdxMdxAst = 'childrenAuthorYaml___profile___childrenMdx___mdxAST',
  ChildrenAuthorYamlProfileChildrenMdxTableOfContents = 'childrenAuthorYaml___profile___childrenMdx___tableOfContents',
  ChildrenAuthorYamlProfileChildrenMdxTimeToRead = 'childrenAuthorYaml___profile___childrenMdx___timeToRead',
  ChildrenAuthorYamlProfileChildrenMdxGatsbyPath = 'childrenAuthorYaml___profile___childrenMdx___gatsbyPath',
  ChildrenAuthorYamlProfileChildrenMdxId = 'childrenAuthorYaml___profile___childrenMdx___id',
  ChildrenAuthorYamlProfileChildrenMdxChildren = 'childrenAuthorYaml___profile___childrenMdx___children',
  ChildrenAuthorYamlProfileChildMdxRawBody = 'childrenAuthorYaml___profile___childMdx___rawBody',
  ChildrenAuthorYamlProfileChildMdxFileAbsolutePath = 'childrenAuthorYaml___profile___childMdx___fileAbsolutePath',
  ChildrenAuthorYamlProfileChildMdxSlug = 'childrenAuthorYaml___profile___childMdx___slug',
  ChildrenAuthorYamlProfileChildMdxBody = 'childrenAuthorYaml___profile___childMdx___body',
  ChildrenAuthorYamlProfileChildMdxExcerpt = 'childrenAuthorYaml___profile___childMdx___excerpt',
  ChildrenAuthorYamlProfileChildMdxHeadings = 'childrenAuthorYaml___profile___childMdx___headings',
  ChildrenAuthorYamlProfileChildMdxHtml = 'childrenAuthorYaml___profile___childMdx___html',
  ChildrenAuthorYamlProfileChildMdxMdxAst = 'childrenAuthorYaml___profile___childMdx___mdxAST',
  ChildrenAuthorYamlProfileChildMdxTableOfContents = 'childrenAuthorYaml___profile___childMdx___tableOfContents',
  ChildrenAuthorYamlProfileChildMdxTimeToRead = 'childrenAuthorYaml___profile___childMdx___timeToRead',
  ChildrenAuthorYamlProfileChildMdxGatsbyPath = 'childrenAuthorYaml___profile___childMdx___gatsbyPath',
  ChildrenAuthorYamlProfileChildMdxId = 'childrenAuthorYaml___profile___childMdx___id',
  ChildrenAuthorYamlProfileChildMdxChildren = 'childrenAuthorYaml___profile___childMdx___children',
  ChildrenAuthorYamlProfileChildrenAuthorYaml = 'childrenAuthorYaml___profile___childrenAuthorYaml',
  ChildrenAuthorYamlProfileChildrenAuthorYamlId = 'childrenAuthorYaml___profile___childrenAuthorYaml___id',
  ChildrenAuthorYamlProfileChildrenAuthorYamlChildren = 'childrenAuthorYaml___profile___childrenAuthorYaml___children',
  ChildrenAuthorYamlProfileChildrenAuthorYamlName = 'childrenAuthorYaml___profile___childrenAuthorYaml___name',
  ChildrenAuthorYamlProfileChildrenAuthorYamlBio = 'childrenAuthorYaml___profile___childrenAuthorYaml___bio',
  ChildrenAuthorYamlProfileChildAuthorYamlId = 'childrenAuthorYaml___profile___childAuthorYaml___id',
  ChildrenAuthorYamlProfileChildAuthorYamlChildren = 'childrenAuthorYaml___profile___childAuthorYaml___children',
  ChildrenAuthorYamlProfileChildAuthorYamlName = 'childrenAuthorYaml___profile___childAuthorYaml___name',
  ChildrenAuthorYamlProfileChildAuthorYamlBio = 'childrenAuthorYaml___profile___childAuthorYaml___bio',
  ChildrenAuthorYamlProfileId = 'childrenAuthorYaml___profile___id',
  ChildrenAuthorYamlProfileParentId = 'childrenAuthorYaml___profile___parent___id',
  ChildrenAuthorYamlProfileParentChildren = 'childrenAuthorYaml___profile___parent___children',
  ChildrenAuthorYamlProfileChildren = 'childrenAuthorYaml___profile___children',
  ChildrenAuthorYamlProfileChildrenId = 'childrenAuthorYaml___profile___children___id',
  ChildrenAuthorYamlProfileChildrenChildren = 'childrenAuthorYaml___profile___children___children',
  ChildrenAuthorYamlProfileInternalContent = 'childrenAuthorYaml___profile___internal___content',
  ChildrenAuthorYamlProfileInternalContentDigest = 'childrenAuthorYaml___profile___internal___contentDigest',
  ChildrenAuthorYamlProfileInternalDescription = 'childrenAuthorYaml___profile___internal___description',
  ChildrenAuthorYamlProfileInternalFieldOwners = 'childrenAuthorYaml___profile___internal___fieldOwners',
  ChildrenAuthorYamlProfileInternalIgnoreType = 'childrenAuthorYaml___profile___internal___ignoreType',
  ChildrenAuthorYamlProfileInternalMediaType = 'childrenAuthorYaml___profile___internal___mediaType',
  ChildrenAuthorYamlProfileInternalOwner = 'childrenAuthorYaml___profile___internal___owner',
  ChildrenAuthorYamlProfileInternalType = 'childrenAuthorYaml___profile___internal___type',
  ChildAuthorYamlId = 'childAuthorYaml___id',
  ChildAuthorYamlParentId = 'childAuthorYaml___parent___id',
  ChildAuthorYamlParentParentId = 'childAuthorYaml___parent___parent___id',
  ChildAuthorYamlParentParentChildren = 'childAuthorYaml___parent___parent___children',
  ChildAuthorYamlParentChildren = 'childAuthorYaml___parent___children',
  ChildAuthorYamlParentChildrenId = 'childAuthorYaml___parent___children___id',
  ChildAuthorYamlParentChildrenChildren = 'childAuthorYaml___parent___children___children',
  ChildAuthorYamlParentInternalContent = 'childAuthorYaml___parent___internal___content',
  ChildAuthorYamlParentInternalContentDigest = 'childAuthorYaml___parent___internal___contentDigest',
  ChildAuthorYamlParentInternalDescription = 'childAuthorYaml___parent___internal___description',
  ChildAuthorYamlParentInternalFieldOwners = 'childAuthorYaml___parent___internal___fieldOwners',
  ChildAuthorYamlParentInternalIgnoreType = 'childAuthorYaml___parent___internal___ignoreType',
  ChildAuthorYamlParentInternalMediaType = 'childAuthorYaml___parent___internal___mediaType',
  ChildAuthorYamlParentInternalOwner = 'childAuthorYaml___parent___internal___owner',
  ChildAuthorYamlParentInternalType = 'childAuthorYaml___parent___internal___type',
  ChildAuthorYamlChildren = 'childAuthorYaml___children',
  ChildAuthorYamlChildrenId = 'childAuthorYaml___children___id',
  ChildAuthorYamlChildrenParentId = 'childAuthorYaml___children___parent___id',
  ChildAuthorYamlChildrenParentChildren = 'childAuthorYaml___children___parent___children',
  ChildAuthorYamlChildrenChildren = 'childAuthorYaml___children___children',
  ChildAuthorYamlChildrenChildrenId = 'childAuthorYaml___children___children___id',
  ChildAuthorYamlChildrenChildrenChildren = 'childAuthorYaml___children___children___children',
  ChildAuthorYamlChildrenInternalContent = 'childAuthorYaml___children___internal___content',
  ChildAuthorYamlChildrenInternalContentDigest = 'childAuthorYaml___children___internal___contentDigest',
  ChildAuthorYamlChildrenInternalDescription = 'childAuthorYaml___children___internal___description',
  ChildAuthorYamlChildrenInternalFieldOwners = 'childAuthorYaml___children___internal___fieldOwners',
  ChildAuthorYamlChildrenInternalIgnoreType = 'childAuthorYaml___children___internal___ignoreType',
  ChildAuthorYamlChildrenInternalMediaType = 'childAuthorYaml___children___internal___mediaType',
  ChildAuthorYamlChildrenInternalOwner = 'childAuthorYaml___children___internal___owner',
  ChildAuthorYamlChildrenInternalType = 'childAuthorYaml___children___internal___type',
  ChildAuthorYamlInternalContent = 'childAuthorYaml___internal___content',
  ChildAuthorYamlInternalContentDigest = 'childAuthorYaml___internal___contentDigest',
  ChildAuthorYamlInternalDescription = 'childAuthorYaml___internal___description',
  ChildAuthorYamlInternalFieldOwners = 'childAuthorYaml___internal___fieldOwners',
  ChildAuthorYamlInternalIgnoreType = 'childAuthorYaml___internal___ignoreType',
  ChildAuthorYamlInternalMediaType = 'childAuthorYaml___internal___mediaType',
  ChildAuthorYamlInternalOwner = 'childAuthorYaml___internal___owner',
  ChildAuthorYamlInternalType = 'childAuthorYaml___internal___type',
  ChildAuthorYamlName = 'childAuthorYaml___name',
  ChildAuthorYamlBio = 'childAuthorYaml___bio',
  ChildAuthorYamlProfileSourceInstanceName = 'childAuthorYaml___profile___sourceInstanceName',
  ChildAuthorYamlProfileAbsolutePath = 'childAuthorYaml___profile___absolutePath',
  ChildAuthorYamlProfileRelativePath = 'childAuthorYaml___profile___relativePath',
  ChildAuthorYamlProfileExtension = 'childAuthorYaml___profile___extension',
  ChildAuthorYamlProfileSize = 'childAuthorYaml___profile___size',
  ChildAuthorYamlProfilePrettySize = 'childAuthorYaml___profile___prettySize',
  ChildAuthorYamlProfileModifiedTime = 'childAuthorYaml___profile___modifiedTime',
  ChildAuthorYamlProfileAccessTime = 'childAuthorYaml___profile___accessTime',
  ChildAuthorYamlProfileChangeTime = 'childAuthorYaml___profile___changeTime',
  ChildAuthorYamlProfileBirthTime = 'childAuthorYaml___profile___birthTime',
  ChildAuthorYamlProfileRoot = 'childAuthorYaml___profile___root',
  ChildAuthorYamlProfileDir = 'childAuthorYaml___profile___dir',
  ChildAuthorYamlProfileBase = 'childAuthorYaml___profile___base',
  ChildAuthorYamlProfileExt = 'childAuthorYaml___profile___ext',
  ChildAuthorYamlProfileName = 'childAuthorYaml___profile___name',
  ChildAuthorYamlProfileRelativeDirectory = 'childAuthorYaml___profile___relativeDirectory',
  ChildAuthorYamlProfileDev = 'childAuthorYaml___profile___dev',
  ChildAuthorYamlProfileMode = 'childAuthorYaml___profile___mode',
  ChildAuthorYamlProfileNlink = 'childAuthorYaml___profile___nlink',
  ChildAuthorYamlProfileUid = 'childAuthorYaml___profile___uid',
  ChildAuthorYamlProfileGid = 'childAuthorYaml___profile___gid',
  ChildAuthorYamlProfileRdev = 'childAuthorYaml___profile___rdev',
  ChildAuthorYamlProfileIno = 'childAuthorYaml___profile___ino',
  ChildAuthorYamlProfileAtimeMs = 'childAuthorYaml___profile___atimeMs',
  ChildAuthorYamlProfileMtimeMs = 'childAuthorYaml___profile___mtimeMs',
  ChildAuthorYamlProfileCtimeMs = 'childAuthorYaml___profile___ctimeMs',
  ChildAuthorYamlProfileAtime = 'childAuthorYaml___profile___atime',
  ChildAuthorYamlProfileMtime = 'childAuthorYaml___profile___mtime',
  ChildAuthorYamlProfileCtime = 'childAuthorYaml___profile___ctime',
  ChildAuthorYamlProfileBirthtime = 'childAuthorYaml___profile___birthtime',
  ChildAuthorYamlProfileBirthtimeMs = 'childAuthorYaml___profile___birthtimeMs',
  ChildAuthorYamlProfileBlksize = 'childAuthorYaml___profile___blksize',
  ChildAuthorYamlProfileBlocks = 'childAuthorYaml___profile___blocks',
  ChildAuthorYamlProfilePublicUrl = 'childAuthorYaml___profile___publicURL',
  ChildAuthorYamlProfileChildrenImageSharp = 'childAuthorYaml___profile___childrenImageSharp',
  ChildAuthorYamlProfileChildrenImageSharpGatsbyImageData = 'childAuthorYaml___profile___childrenImageSharp___gatsbyImageData',
  ChildAuthorYamlProfileChildrenImageSharpId = 'childAuthorYaml___profile___childrenImageSharp___id',
  ChildAuthorYamlProfileChildrenImageSharpChildren = 'childAuthorYaml___profile___childrenImageSharp___children',
  ChildAuthorYamlProfileChildImageSharpGatsbyImageData = 'childAuthorYaml___profile___childImageSharp___gatsbyImageData',
  ChildAuthorYamlProfileChildImageSharpId = 'childAuthorYaml___profile___childImageSharp___id',
  ChildAuthorYamlProfileChildImageSharpChildren = 'childAuthorYaml___profile___childImageSharp___children',
  ChildAuthorYamlProfileChildrenMdx = 'childAuthorYaml___profile___childrenMdx',
  ChildAuthorYamlProfileChildrenMdxRawBody = 'childAuthorYaml___profile___childrenMdx___rawBody',
  ChildAuthorYamlProfileChildrenMdxFileAbsolutePath = 'childAuthorYaml___profile___childrenMdx___fileAbsolutePath',
  ChildAuthorYamlProfileChildrenMdxSlug = 'childAuthorYaml___profile___childrenMdx___slug',
  ChildAuthorYamlProfileChildrenMdxBody = 'childAuthorYaml___profile___childrenMdx___body',
  ChildAuthorYamlProfileChildrenMdxExcerpt = 'childAuthorYaml___profile___childrenMdx___excerpt',
  ChildAuthorYamlProfileChildrenMdxHeadings = 'childAuthorYaml___profile___childrenMdx___headings',
  ChildAuthorYamlProfileChildrenMdxHtml = 'childAuthorYaml___profile___childrenMdx___html',
  ChildAuthorYamlProfileChildrenMdxMdxAst = 'childAuthorYaml___profile___childrenMdx___mdxAST',
  ChildAuthorYamlProfileChildrenMdxTableOfContents = 'childAuthorYaml___profile___childrenMdx___tableOfContents',
  ChildAuthorYamlProfileChildrenMdxTimeToRead = 'childAuthorYaml___profile___childrenMdx___timeToRead',
  ChildAuthorYamlProfileChildrenMdxGatsbyPath = 'childAuthorYaml___profile___childrenMdx___gatsbyPath',
  ChildAuthorYamlProfileChildrenMdxId = 'childAuthorYaml___profile___childrenMdx___id',
  ChildAuthorYamlProfileChildrenMdxChildren = 'childAuthorYaml___profile___childrenMdx___children',
  ChildAuthorYamlProfileChildMdxRawBody = 'childAuthorYaml___profile___childMdx___rawBody',
  ChildAuthorYamlProfileChildMdxFileAbsolutePath = 'childAuthorYaml___profile___childMdx___fileAbsolutePath',
  ChildAuthorYamlProfileChildMdxSlug = 'childAuthorYaml___profile___childMdx___slug',
  ChildAuthorYamlProfileChildMdxBody = 'childAuthorYaml___profile___childMdx___body',
  ChildAuthorYamlProfileChildMdxExcerpt = 'childAuthorYaml___profile___childMdx___excerpt',
  ChildAuthorYamlProfileChildMdxHeadings = 'childAuthorYaml___profile___childMdx___headings',
  ChildAuthorYamlProfileChildMdxHtml = 'childAuthorYaml___profile___childMdx___html',
  ChildAuthorYamlProfileChildMdxMdxAst = 'childAuthorYaml___profile___childMdx___mdxAST',
  ChildAuthorYamlProfileChildMdxTableOfContents = 'childAuthorYaml___profile___childMdx___tableOfContents',
  ChildAuthorYamlProfileChildMdxTimeToRead = 'childAuthorYaml___profile___childMdx___timeToRead',
  ChildAuthorYamlProfileChildMdxGatsbyPath = 'childAuthorYaml___profile___childMdx___gatsbyPath',
  ChildAuthorYamlProfileChildMdxId = 'childAuthorYaml___profile___childMdx___id',
  ChildAuthorYamlProfileChildMdxChildren = 'childAuthorYaml___profile___childMdx___children',
  ChildAuthorYamlProfileChildrenAuthorYaml = 'childAuthorYaml___profile___childrenAuthorYaml',
  ChildAuthorYamlProfileChildrenAuthorYamlId = 'childAuthorYaml___profile___childrenAuthorYaml___id',
  ChildAuthorYamlProfileChildrenAuthorYamlChildren = 'childAuthorYaml___profile___childrenAuthorYaml___children',
  ChildAuthorYamlProfileChildrenAuthorYamlName = 'childAuthorYaml___profile___childrenAuthorYaml___name',
  ChildAuthorYamlProfileChildrenAuthorYamlBio = 'childAuthorYaml___profile___childrenAuthorYaml___bio',
  ChildAuthorYamlProfileChildAuthorYamlId = 'childAuthorYaml___profile___childAuthorYaml___id',
  ChildAuthorYamlProfileChildAuthorYamlChildren = 'childAuthorYaml___profile___childAuthorYaml___children',
  ChildAuthorYamlProfileChildAuthorYamlName = 'childAuthorYaml___profile___childAuthorYaml___name',
  ChildAuthorYamlProfileChildAuthorYamlBio = 'childAuthorYaml___profile___childAuthorYaml___bio',
  ChildAuthorYamlProfileId = 'childAuthorYaml___profile___id',
  ChildAuthorYamlProfileParentId = 'childAuthorYaml___profile___parent___id',
  ChildAuthorYamlProfileParentChildren = 'childAuthorYaml___profile___parent___children',
  ChildAuthorYamlProfileChildren = 'childAuthorYaml___profile___children',
  ChildAuthorYamlProfileChildrenId = 'childAuthorYaml___profile___children___id',
  ChildAuthorYamlProfileChildrenChildren = 'childAuthorYaml___profile___children___children',
  ChildAuthorYamlProfileInternalContent = 'childAuthorYaml___profile___internal___content',
  ChildAuthorYamlProfileInternalContentDigest = 'childAuthorYaml___profile___internal___contentDigest',
  ChildAuthorYamlProfileInternalDescription = 'childAuthorYaml___profile___internal___description',
  ChildAuthorYamlProfileInternalFieldOwners = 'childAuthorYaml___profile___internal___fieldOwners',
  ChildAuthorYamlProfileInternalIgnoreType = 'childAuthorYaml___profile___internal___ignoreType',
  ChildAuthorYamlProfileInternalMediaType = 'childAuthorYaml___profile___internal___mediaType',
  ChildAuthorYamlProfileInternalOwner = 'childAuthorYaml___profile___internal___owner',
  ChildAuthorYamlProfileInternalType = 'childAuthorYaml___profile___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenAuthorYaml?: Maybe<AuthorYamlFilterListInput>;
  childAuthorYaml?: Maybe<AuthorYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};


export type MdxGatsbyPathArgs = {
  filePath?: Maybe<Scalars['String']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterLayout = 'frontmatter___layout',
  FrontmatterAuthorId = 'frontmatter___author___id',
  FrontmatterAuthorParentId = 'frontmatter___author___parent___id',
  FrontmatterAuthorParentChildren = 'frontmatter___author___parent___children',
  FrontmatterAuthorChildren = 'frontmatter___author___children',
  FrontmatterAuthorChildrenId = 'frontmatter___author___children___id',
  FrontmatterAuthorChildrenChildren = 'frontmatter___author___children___children',
  FrontmatterAuthorInternalContent = 'frontmatter___author___internal___content',
  FrontmatterAuthorInternalContentDigest = 'frontmatter___author___internal___contentDigest',
  FrontmatterAuthorInternalDescription = 'frontmatter___author___internal___description',
  FrontmatterAuthorInternalFieldOwners = 'frontmatter___author___internal___fieldOwners',
  FrontmatterAuthorInternalIgnoreType = 'frontmatter___author___internal___ignoreType',
  FrontmatterAuthorInternalMediaType = 'frontmatter___author___internal___mediaType',
  FrontmatterAuthorInternalOwner = 'frontmatter___author___internal___owner',
  FrontmatterAuthorInternalType = 'frontmatter___author___internal___type',
  FrontmatterAuthorName = 'frontmatter___author___name',
  FrontmatterAuthorBio = 'frontmatter___author___bio',
  FrontmatterAuthorProfileSourceInstanceName = 'frontmatter___author___profile___sourceInstanceName',
  FrontmatterAuthorProfileAbsolutePath = 'frontmatter___author___profile___absolutePath',
  FrontmatterAuthorProfileRelativePath = 'frontmatter___author___profile___relativePath',
  FrontmatterAuthorProfileExtension = 'frontmatter___author___profile___extension',
  FrontmatterAuthorProfileSize = 'frontmatter___author___profile___size',
  FrontmatterAuthorProfilePrettySize = 'frontmatter___author___profile___prettySize',
  FrontmatterAuthorProfileModifiedTime = 'frontmatter___author___profile___modifiedTime',
  FrontmatterAuthorProfileAccessTime = 'frontmatter___author___profile___accessTime',
  FrontmatterAuthorProfileChangeTime = 'frontmatter___author___profile___changeTime',
  FrontmatterAuthorProfileBirthTime = 'frontmatter___author___profile___birthTime',
  FrontmatterAuthorProfileRoot = 'frontmatter___author___profile___root',
  FrontmatterAuthorProfileDir = 'frontmatter___author___profile___dir',
  FrontmatterAuthorProfileBase = 'frontmatter___author___profile___base',
  FrontmatterAuthorProfileExt = 'frontmatter___author___profile___ext',
  FrontmatterAuthorProfileName = 'frontmatter___author___profile___name',
  FrontmatterAuthorProfileRelativeDirectory = 'frontmatter___author___profile___relativeDirectory',
  FrontmatterAuthorProfileDev = 'frontmatter___author___profile___dev',
  FrontmatterAuthorProfileMode = 'frontmatter___author___profile___mode',
  FrontmatterAuthorProfileNlink = 'frontmatter___author___profile___nlink',
  FrontmatterAuthorProfileUid = 'frontmatter___author___profile___uid',
  FrontmatterAuthorProfileGid = 'frontmatter___author___profile___gid',
  FrontmatterAuthorProfileRdev = 'frontmatter___author___profile___rdev',
  FrontmatterAuthorProfileIno = 'frontmatter___author___profile___ino',
  FrontmatterAuthorProfileAtimeMs = 'frontmatter___author___profile___atimeMs',
  FrontmatterAuthorProfileMtimeMs = 'frontmatter___author___profile___mtimeMs',
  FrontmatterAuthorProfileCtimeMs = 'frontmatter___author___profile___ctimeMs',
  FrontmatterAuthorProfileAtime = 'frontmatter___author___profile___atime',
  FrontmatterAuthorProfileMtime = 'frontmatter___author___profile___mtime',
  FrontmatterAuthorProfileCtime = 'frontmatter___author___profile___ctime',
  FrontmatterAuthorProfileBirthtime = 'frontmatter___author___profile___birthtime',
  FrontmatterAuthorProfileBirthtimeMs = 'frontmatter___author___profile___birthtimeMs',
  FrontmatterAuthorProfileBlksize = 'frontmatter___author___profile___blksize',
  FrontmatterAuthorProfileBlocks = 'frontmatter___author___profile___blocks',
  FrontmatterAuthorProfilePublicUrl = 'frontmatter___author___profile___publicURL',
  FrontmatterAuthorProfileChildrenImageSharp = 'frontmatter___author___profile___childrenImageSharp',
  FrontmatterAuthorProfileChildrenMdx = 'frontmatter___author___profile___childrenMdx',
  FrontmatterAuthorProfileChildrenAuthorYaml = 'frontmatter___author___profile___childrenAuthorYaml',
  FrontmatterAuthorProfileId = 'frontmatter___author___profile___id',
  FrontmatterAuthorProfileChildren = 'frontmatter___author___profile___children',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterImageSourceInstanceName = 'frontmatter___image___sourceInstanceName',
  FrontmatterImageAbsolutePath = 'frontmatter___image___absolutePath',
  FrontmatterImageRelativePath = 'frontmatter___image___relativePath',
  FrontmatterImageExtension = 'frontmatter___image___extension',
  FrontmatterImageSize = 'frontmatter___image___size',
  FrontmatterImagePrettySize = 'frontmatter___image___prettySize',
  FrontmatterImageModifiedTime = 'frontmatter___image___modifiedTime',
  FrontmatterImageAccessTime = 'frontmatter___image___accessTime',
  FrontmatterImageChangeTime = 'frontmatter___image___changeTime',
  FrontmatterImageBirthTime = 'frontmatter___image___birthTime',
  FrontmatterImageRoot = 'frontmatter___image___root',
  FrontmatterImageDir = 'frontmatter___image___dir',
  FrontmatterImageBase = 'frontmatter___image___base',
  FrontmatterImageExt = 'frontmatter___image___ext',
  FrontmatterImageName = 'frontmatter___image___name',
  FrontmatterImageRelativeDirectory = 'frontmatter___image___relativeDirectory',
  FrontmatterImageDev = 'frontmatter___image___dev',
  FrontmatterImageMode = 'frontmatter___image___mode',
  FrontmatterImageNlink = 'frontmatter___image___nlink',
  FrontmatterImageUid = 'frontmatter___image___uid',
  FrontmatterImageGid = 'frontmatter___image___gid',
  FrontmatterImageRdev = 'frontmatter___image___rdev',
  FrontmatterImageIno = 'frontmatter___image___ino',
  FrontmatterImageAtimeMs = 'frontmatter___image___atimeMs',
  FrontmatterImageMtimeMs = 'frontmatter___image___mtimeMs',
  FrontmatterImageCtimeMs = 'frontmatter___image___ctimeMs',
  FrontmatterImageAtime = 'frontmatter___image___atime',
  FrontmatterImageMtime = 'frontmatter___image___mtime',
  FrontmatterImageCtime = 'frontmatter___image___ctime',
  FrontmatterImageBirthtime = 'frontmatter___image___birthtime',
  FrontmatterImageBirthtimeMs = 'frontmatter___image___birthtimeMs',
  FrontmatterImageBlksize = 'frontmatter___image___blksize',
  FrontmatterImageBlocks = 'frontmatter___image___blocks',
  FrontmatterImagePublicUrl = 'frontmatter___image___publicURL',
  FrontmatterImageChildrenImageSharp = 'frontmatter___image___childrenImageSharp',
  FrontmatterImageChildrenImageSharpGatsbyImageData = 'frontmatter___image___childrenImageSharp___gatsbyImageData',
  FrontmatterImageChildrenImageSharpId = 'frontmatter___image___childrenImageSharp___id',
  FrontmatterImageChildrenImageSharpChildren = 'frontmatter___image___childrenImageSharp___children',
  FrontmatterImageChildImageSharpGatsbyImageData = 'frontmatter___image___childImageSharp___gatsbyImageData',
  FrontmatterImageChildImageSharpId = 'frontmatter___image___childImageSharp___id',
  FrontmatterImageChildImageSharpChildren = 'frontmatter___image___childImageSharp___children',
  FrontmatterImageChildrenMdx = 'frontmatter___image___childrenMdx',
  FrontmatterImageChildrenMdxRawBody = 'frontmatter___image___childrenMdx___rawBody',
  FrontmatterImageChildrenMdxFileAbsolutePath = 'frontmatter___image___childrenMdx___fileAbsolutePath',
  FrontmatterImageChildrenMdxSlug = 'frontmatter___image___childrenMdx___slug',
  FrontmatterImageChildrenMdxBody = 'frontmatter___image___childrenMdx___body',
  FrontmatterImageChildrenMdxExcerpt = 'frontmatter___image___childrenMdx___excerpt',
  FrontmatterImageChildrenMdxHeadings = 'frontmatter___image___childrenMdx___headings',
  FrontmatterImageChildrenMdxHtml = 'frontmatter___image___childrenMdx___html',
  FrontmatterImageChildrenMdxMdxAst = 'frontmatter___image___childrenMdx___mdxAST',
  FrontmatterImageChildrenMdxTableOfContents = 'frontmatter___image___childrenMdx___tableOfContents',
  FrontmatterImageChildrenMdxTimeToRead = 'frontmatter___image___childrenMdx___timeToRead',
  FrontmatterImageChildrenMdxGatsbyPath = 'frontmatter___image___childrenMdx___gatsbyPath',
  FrontmatterImageChildrenMdxId = 'frontmatter___image___childrenMdx___id',
  FrontmatterImageChildrenMdxChildren = 'frontmatter___image___childrenMdx___children',
  FrontmatterImageChildMdxRawBody = 'frontmatter___image___childMdx___rawBody',
  FrontmatterImageChildMdxFileAbsolutePath = 'frontmatter___image___childMdx___fileAbsolutePath',
  FrontmatterImageChildMdxSlug = 'frontmatter___image___childMdx___slug',
  FrontmatterImageChildMdxBody = 'frontmatter___image___childMdx___body',
  FrontmatterImageChildMdxExcerpt = 'frontmatter___image___childMdx___excerpt',
  FrontmatterImageChildMdxHeadings = 'frontmatter___image___childMdx___headings',
  FrontmatterImageChildMdxHtml = 'frontmatter___image___childMdx___html',
  FrontmatterImageChildMdxMdxAst = 'frontmatter___image___childMdx___mdxAST',
  FrontmatterImageChildMdxTableOfContents = 'frontmatter___image___childMdx___tableOfContents',
  FrontmatterImageChildMdxTimeToRead = 'frontmatter___image___childMdx___timeToRead',
  FrontmatterImageChildMdxGatsbyPath = 'frontmatter___image___childMdx___gatsbyPath',
  FrontmatterImageChildMdxId = 'frontmatter___image___childMdx___id',
  FrontmatterImageChildMdxChildren = 'frontmatter___image___childMdx___children',
  FrontmatterImageChildrenAuthorYaml = 'frontmatter___image___childrenAuthorYaml',
  FrontmatterImageChildrenAuthorYamlId = 'frontmatter___image___childrenAuthorYaml___id',
  FrontmatterImageChildrenAuthorYamlChildren = 'frontmatter___image___childrenAuthorYaml___children',
  FrontmatterImageChildrenAuthorYamlName = 'frontmatter___image___childrenAuthorYaml___name',
  FrontmatterImageChildrenAuthorYamlBio = 'frontmatter___image___childrenAuthorYaml___bio',
  FrontmatterImageChildAuthorYamlId = 'frontmatter___image___childAuthorYaml___id',
  FrontmatterImageChildAuthorYamlChildren = 'frontmatter___image___childAuthorYaml___children',
  FrontmatterImageChildAuthorYamlName = 'frontmatter___image___childAuthorYaml___name',
  FrontmatterImageChildAuthorYamlBio = 'frontmatter___image___childAuthorYaml___bio',
  FrontmatterImageId = 'frontmatter___image___id',
  FrontmatterImageParentId = 'frontmatter___image___parent___id',
  FrontmatterImageParentChildren = 'frontmatter___image___parent___children',
  FrontmatterImageChildren = 'frontmatter___image___children',
  FrontmatterImageChildrenId = 'frontmatter___image___children___id',
  FrontmatterImageChildrenChildren = 'frontmatter___image___children___children',
  FrontmatterImageInternalContent = 'frontmatter___image___internal___content',
  FrontmatterImageInternalContentDigest = 'frontmatter___image___internal___contentDigest',
  FrontmatterImageInternalDescription = 'frontmatter___image___internal___description',
  FrontmatterImageInternalFieldOwners = 'frontmatter___image___internal___fieldOwners',
  FrontmatterImageInternalIgnoreType = 'frontmatter___image___internal___ignoreType',
  FrontmatterImageInternalMediaType = 'frontmatter___image___internal___mediaType',
  FrontmatterImageInternalOwner = 'frontmatter___image___internal___owner',
  FrontmatterImageInternalType = 'frontmatter___image___internal___type',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterHeaderImage = 'frontmatter___headerImage',
  FrontmatterReadTime = 'frontmatter___read_time',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterRedirectFrom = 'frontmatter___redirect_from',
  FrontmatterMultiple = 'frontmatter___multiple',
  FrontmatterProjects = 'frontmatter___projects',
  FrontmatterStar = 'frontmatter___star',
  FrontmatterHidden = 'frontmatter___hidden',
  FrontmatterPermalink = 'frontmatter___permalink',
  FrontmatterTag = 'frontmatter___tag',
  FrontmatterLang = 'frontmatter___lang',
  FrontmatterStarred = 'frontmatter___starred',
  Slug = 'slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  GatsbyPath = 'gatsbyPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  gatsbyPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
  layout?: Maybe<Scalars['String']>;
  author?: Maybe<AuthorYaml>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  path?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  headerImage?: Maybe<Scalars['Boolean']>;
  read_time?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  redirect_from?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['String']>;
  projects?: Maybe<Scalars['Boolean']>;
  star?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  permalink?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  starred?: Maybe<Scalars['Boolean']>;
};


export type MdxFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<AuthorYamlFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  headerImage?: Maybe<BooleanQueryOperatorInput>;
  read_time?: Maybe<BooleanQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  redirect_from?: Maybe<StringQueryOperatorInput>;
  multiple?: Maybe<StringQueryOperatorInput>;
  projects?: Maybe<BooleanQueryOperatorInput>;
  star?: Maybe<BooleanQueryOperatorInput>;
  hidden?: Maybe<BooleanQueryOperatorInput>;
  permalink?: Maybe<StringQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  starred?: Maybe<BooleanQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  authorYaml?: Maybe<AuthorYaml>;
  allAuthorYaml: AuthorYamlConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  staticImage?: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  childrenAuthorYaml?: Maybe<AuthorYamlFilterListInput>;
  childAuthorYaml?: Maybe<AuthorYamlFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  context?: Maybe<SitePageContextFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  gatsbyPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAuthorYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  profile?: Maybe<FileFilterInput>;
};


export type QueryAllAuthorYamlArgs = {
  filter?: Maybe<AuthorYamlFilterInput>;
  sort?: Maybe<AuthorYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStaticImageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllStaticImageArgs = {
  filter?: Maybe<StaticImageFilterInput>;
  sort?: Maybe<StaticImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  mapping?: Maybe<SiteMapping>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  FlagsFastDev = 'flags___FAST_DEV',
  MappingMdxFrontmatterAuthor = 'mapping___Mdx_frontmatter_author',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFlags = {
  __typename?: 'SiteFlags';
  FAST_DEV?: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  apiRoute: Scalars['String'];
  originalFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  ApiRoute = 'apiRoute',
  OriginalFilePath = 'originalFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFunctionFilterInput = {
  apiRoute?: Maybe<StringQueryOperatorInput>;
  originalFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteMapping = {
  __typename?: 'SiteMapping';
  Mdx_frontmatter_author?: Maybe<Scalars['String']>;
};

export type SiteMappingFilterInput = {
  Mdx_frontmatter_author?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  context?: Maybe<SitePageContext>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
  frontmatter__path?: Maybe<Scalars['String']>;
  _xparams?: Maybe<SitePageContext_Xparams>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter__path?: Maybe<StringQueryOperatorInput>;
  _xparams?: Maybe<SitePageContext_XparamsFilterInput>;
};

export type SitePageContext_Xparams = {
  __typename?: 'SitePageContext_xparams';
  frontmatter__path?: Maybe<Scalars['String']>;
};

export type SitePageContext_XparamsFilterInput = {
  frontmatter__path?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  PluginCreatorPluginOptionsSizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsSourceMap = 'pluginCreator___pluginOptions___sourceMap',
  PluginCreatorPluginOptionsAutoLabel = 'pluginCreator___pluginOptions___autoLabel',
  PluginCreatorPluginOptionsLabelFormat = 'pluginCreator___pluginOptions___labelFormat',
  PluginCreatorPluginOptionsCssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContextId = 'context___id',
  ContextFrontmatterPath = 'context___frontmatter__path',
  ContextXparamsFrontmatterPath = 'context____xparams___frontmatter__path'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  context?: Maybe<SitePageContextFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
  PluginOptionsSizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsQuality = 'pluginOptions___quality',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsGatsbyRemarkPluginsResolve = 'pluginOptions___gatsbyRemarkPlugins___resolve',
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = 'pluginOptions___gatsbyRemarkPlugins___options___maxWidth',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsRoot = 'pluginOptions___root',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsSourceMap = 'pluginOptions___sourceMap',
  PluginOptionsAutoLabel = 'pluginOptions___autoLabel',
  PluginOptionsLabelFormat = 'pluginOptions___labelFormat',
  PluginOptionsCssPropOptimization = 'pluginOptions___cssPropOptimization',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPlugins';
  resolve?: Maybe<Scalars['String']>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  __typename?: 'SitePluginPluginOptionsGatsbyRemarkPluginsOptions';
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StaticImage = Node & {
  __typename?: 'StaticImage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};


export type StaticImageModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StaticImageBirthtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StaticImageConnection = {
  __typename?: 'StaticImageConnection';
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  __typename?: 'StaticImageEdge';
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export enum StaticImageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  RelativePath = 'relativePath',
  Extension = 'extension',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  AbsolutePath = 'absolutePath',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Size = 'size',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime'
}

export type StaticImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  __typename?: 'StaticImageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StaticImageSortInput = {
  fields?: Maybe<Array<Maybe<StaticImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteTitleQueryQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )> }
);

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>
    )> }
  )> }
);

export type PostPreviewFragment = (
  { __typename?: 'Mdx' }
  & Pick<Mdx, 'id' | 'timeToRead'>
  & { frontmatter?: Maybe<(
    { __typename?: 'MdxFrontmatter' }
    & Pick<MdxFrontmatter, 'path' | 'title' | 'description' | 'date'>
    & { author?: Maybe<(
      { __typename?: 'AuthorYaml' }
      & Pick<AuthorYaml, 'id' | 'name'>
      & { profile?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>, image?: Maybe<(
      { __typename?: 'File' }
      & { childImageSharp?: Maybe<(
        { __typename?: 'ImageSharp' }
        & Pick<ImageSharp, 'gatsbyImageData'>
      )> }
    )> }
  )> }
);

export type TestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type TestPageQuery = (
  { __typename?: 'Query' }
  & { allMdx: (
    { __typename?: 'MdxConnection' }
    & { nodes: Array<(
      { __typename?: 'Mdx' }
      & Pick<Mdx, 'id' | 'timeToRead'>
      & { frontmatter?: Maybe<(
        { __typename?: 'MdxFrontmatter' }
        & Pick<MdxFrontmatter, 'path' | 'title' | 'description' | 'date'>
        & { author?: Maybe<(
          { __typename?: 'AuthorYaml' }
          & Pick<AuthorYaml, 'id' | 'name'>
          & { profile?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )> }
        )>, image?: Maybe<(
          { __typename?: 'File' }
          & { childImageSharp?: Maybe<(
            { __typename?: 'ImageSharp' }
            & Pick<ImageSharp, 'gatsbyImageData'>
          )> }
        )> }
      )> }
    )> }
  ) }
);

export type PostPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostPageQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Mdx' }
    & Pick<Mdx, 'timeToRead' | 'body'>
    & { frontmatter?: Maybe<(
      { __typename?: 'MdxFrontmatter' }
      & Pick<MdxFrontmatter, 'title' | 'date' | 'description' | 'headerImage'>
      & { author?: Maybe<(
        { __typename?: 'AuthorYaml' }
        & Pick<AuthorYaml, 'name'>
      )>, image?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
          & { resize?: Maybe<(
            { __typename?: 'ImageSharpResize' }
            & Pick<ImageSharpResize, 'src'>
          )> }
        )> }
      )> }
    )> }
  )> }
);
