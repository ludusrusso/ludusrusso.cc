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
  group: Array<AuthorYamlGroupConnection>;
};


export type AuthorYamlConnectionDistinctArgs = {
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
  ProfileInternalType = 'profile___internal___type',
  ProfileChildCloudinaryAssetFixedAspectRatio = 'profile___childCloudinaryAsset___fixed___aspectRatio',
  ProfileChildCloudinaryAssetFixedBase64 = 'profile___childCloudinaryAsset___fixed___base64',
  ProfileChildCloudinaryAssetFixedHeight = 'profile___childCloudinaryAsset___fixed___height',
  ProfileChildCloudinaryAssetFixedSrc = 'profile___childCloudinaryAsset___fixed___src',
  ProfileChildCloudinaryAssetFixedSrcSet = 'profile___childCloudinaryAsset___fixed___srcSet',
  ProfileChildCloudinaryAssetFixedWidth = 'profile___childCloudinaryAsset___fixed___width',
  ProfileChildCloudinaryAssetFluidAspectRatio = 'profile___childCloudinaryAsset___fluid___aspectRatio',
  ProfileChildCloudinaryAssetFluidBase64 = 'profile___childCloudinaryAsset___fluid___base64',
  ProfileChildCloudinaryAssetFluidPresentationHeight = 'profile___childCloudinaryAsset___fluid___presentationHeight',
  ProfileChildCloudinaryAssetFluidPresentationWidth = 'profile___childCloudinaryAsset___fluid___presentationWidth',
  ProfileChildCloudinaryAssetFluidSizes = 'profile___childCloudinaryAsset___fluid___sizes',
  ProfileChildCloudinaryAssetFluidSrc = 'profile___childCloudinaryAsset___fluid___src',
  ProfileChildCloudinaryAssetFluidSrcSet = 'profile___childCloudinaryAsset___fluid___srcSet',
  ProfileChildCloudinaryAssetId = 'profile___childCloudinaryAsset___id',
  ProfileChildCloudinaryAssetParentId = 'profile___childCloudinaryAsset___parent___id',
  ProfileChildCloudinaryAssetParentChildren = 'profile___childCloudinaryAsset___parent___children',
  ProfileChildCloudinaryAssetChildren = 'profile___childCloudinaryAsset___children',
  ProfileChildCloudinaryAssetChildrenId = 'profile___childCloudinaryAsset___children___id',
  ProfileChildCloudinaryAssetChildrenChildren = 'profile___childCloudinaryAsset___children___children',
  ProfileChildCloudinaryAssetInternalContent = 'profile___childCloudinaryAsset___internal___content',
  ProfileChildCloudinaryAssetInternalContentDigest = 'profile___childCloudinaryAsset___internal___contentDigest',
  ProfileChildCloudinaryAssetInternalDescription = 'profile___childCloudinaryAsset___internal___description',
  ProfileChildCloudinaryAssetInternalFieldOwners = 'profile___childCloudinaryAsset___internal___fieldOwners',
  ProfileChildCloudinaryAssetInternalIgnoreType = 'profile___childCloudinaryAsset___internal___ignoreType',
  ProfileChildCloudinaryAssetInternalMediaType = 'profile___childCloudinaryAsset___internal___mediaType',
  ProfileChildCloudinaryAssetInternalOwner = 'profile___childCloudinaryAsset___internal___owner',
  ProfileChildCloudinaryAssetInternalType = 'profile___childCloudinaryAsset___internal___type',
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
  ProfileChildAuthorYamlProfileId = 'profile___childAuthorYaml___profile___id',
  ProfileChildAuthorYamlProfileChildren = 'profile___childAuthorYaml___profile___children',
  ProfileChildMarkdownRemarkId = 'profile___childMarkdownRemark___id',
  ProfileChildMarkdownRemarkFrontmatterTitle = 'profile___childMarkdownRemark___frontmatter___title',
  ProfileChildMarkdownRemarkFrontmatterLayout = 'profile___childMarkdownRemark___frontmatter___layout',
  ProfileChildMarkdownRemarkFrontmatterDescription = 'profile___childMarkdownRemark___frontmatter___description',
  ProfileChildMarkdownRemarkFrontmatterDate = 'profile___childMarkdownRemark___frontmatter___date',
  ProfileChildMarkdownRemarkFrontmatterPath = 'profile___childMarkdownRemark___frontmatter___path',
  ProfileChildMarkdownRemarkFrontmatterTags = 'profile___childMarkdownRemark___frontmatter___tags',
  ProfileChildMarkdownRemarkFrontmatterHeaderImage = 'profile___childMarkdownRemark___frontmatter___headerImage',
  ProfileChildMarkdownRemarkFrontmatterReadTime = 'profile___childMarkdownRemark___frontmatter___read_time',
  ProfileChildMarkdownRemarkFrontmatterCategory = 'profile___childMarkdownRemark___frontmatter___category',
  ProfileChildMarkdownRemarkExcerpt = 'profile___childMarkdownRemark___excerpt',
  ProfileChildMarkdownRemarkRawMarkdownBody = 'profile___childMarkdownRemark___rawMarkdownBody',
  ProfileChildMarkdownRemarkFileAbsolutePath = 'profile___childMarkdownRemark___fileAbsolutePath',
  ProfileChildMarkdownRemarkFieldsSlug = 'profile___childMarkdownRemark___fields___slug',
  ProfileChildMarkdownRemarkHtml = 'profile___childMarkdownRemark___html',
  ProfileChildMarkdownRemarkHtmlAst = 'profile___childMarkdownRemark___htmlAst',
  ProfileChildMarkdownRemarkExcerptAst = 'profile___childMarkdownRemark___excerptAst',
  ProfileChildMarkdownRemarkHeadings = 'profile___childMarkdownRemark___headings',
  ProfileChildMarkdownRemarkHeadingsId = 'profile___childMarkdownRemark___headings___id',
  ProfileChildMarkdownRemarkHeadingsValue = 'profile___childMarkdownRemark___headings___value',
  ProfileChildMarkdownRemarkHeadingsDepth = 'profile___childMarkdownRemark___headings___depth',
  ProfileChildMarkdownRemarkTimeToRead = 'profile___childMarkdownRemark___timeToRead',
  ProfileChildMarkdownRemarkTableOfContents = 'profile___childMarkdownRemark___tableOfContents',
  ProfileChildMarkdownRemarkWordCountParagraphs = 'profile___childMarkdownRemark___wordCount___paragraphs',
  ProfileChildMarkdownRemarkWordCountSentences = 'profile___childMarkdownRemark___wordCount___sentences',
  ProfileChildMarkdownRemarkWordCountWords = 'profile___childMarkdownRemark___wordCount___words',
  ProfileChildMarkdownRemarkParentId = 'profile___childMarkdownRemark___parent___id',
  ProfileChildMarkdownRemarkParentChildren = 'profile___childMarkdownRemark___parent___children',
  ProfileChildMarkdownRemarkChildren = 'profile___childMarkdownRemark___children',
  ProfileChildMarkdownRemarkChildrenId = 'profile___childMarkdownRemark___children___id',
  ProfileChildMarkdownRemarkChildrenChildren = 'profile___childMarkdownRemark___children___children',
  ProfileChildMarkdownRemarkInternalContent = 'profile___childMarkdownRemark___internal___content',
  ProfileChildMarkdownRemarkInternalContentDigest = 'profile___childMarkdownRemark___internal___contentDigest',
  ProfileChildMarkdownRemarkInternalDescription = 'profile___childMarkdownRemark___internal___description',
  ProfileChildMarkdownRemarkInternalFieldOwners = 'profile___childMarkdownRemark___internal___fieldOwners',
  ProfileChildMarkdownRemarkInternalIgnoreType = 'profile___childMarkdownRemark___internal___ignoreType',
  ProfileChildMarkdownRemarkInternalMediaType = 'profile___childMarkdownRemark___internal___mediaType',
  ProfileChildMarkdownRemarkInternalOwner = 'profile___childMarkdownRemark___internal___owner',
  ProfileChildMarkdownRemarkInternalType = 'profile___childMarkdownRemark___internal___type'
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

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CloudinaryAsset = Node & {
  __typename?: 'CloudinaryAsset';
  fixed: CloudinaryAssetFixed;
  fluid: CloudinaryAssetFluid;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type CloudinaryAssetFixedArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  transformations?: Maybe<Array<Scalars['String']>>;
  width?: Maybe<Scalars['Int']>;
  ignoreDefaultBase64?: Maybe<Scalars['Boolean']>;
};


export type CloudinaryAssetFluidArgs = {
  base64Width?: Maybe<Scalars['Int']>;
  base64Transformations?: Maybe<Array<Scalars['String']>>;
  chained?: Maybe<Array<Scalars['String']>>;
  maxWidth?: Maybe<Scalars['Int']>;
  transformations?: Maybe<Array<Scalars['String']>>;
  ignoreDefaultBase64?: Maybe<Scalars['Boolean']>;
};

export type CloudinaryAssetConnection = {
  __typename?: 'CloudinaryAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<CloudinaryAssetGroupConnection>;
};


export type CloudinaryAssetConnectionDistinctArgs = {
  field: CloudinaryAssetFieldsEnum;
};


export type CloudinaryAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CloudinaryAssetFieldsEnum;
};

export type CloudinaryAssetEdge = {
  __typename?: 'CloudinaryAssetEdge';
  next?: Maybe<CloudinaryAsset>;
  node: CloudinaryAsset;
  previous?: Maybe<CloudinaryAsset>;
};

export enum CloudinaryAssetFieldsEnum {
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
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

export type CloudinaryAssetFilterInput = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type CloudinaryAssetFixed = {
  __typename?: 'CloudinaryAssetFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type CloudinaryAssetFixedFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
};

export type CloudinaryAssetFluid = {
  __typename?: 'CloudinaryAssetFluid';
  aspectRatio: Scalars['Float'];
  base64: Scalars['String'];
  presentationHeight?: Maybe<Scalars['Float']>;
  presentationWidth?: Maybe<Scalars['Float']>;
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
};

export type CloudinaryAssetFluidFilterInput = {
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  base64?: Maybe<StringQueryOperatorInput>;
  presentationHeight?: Maybe<FloatQueryOperatorInput>;
  presentationWidth?: Maybe<FloatQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
};

export type CloudinaryAssetGroupConnection = {
  __typename?: 'CloudinaryAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<CloudinaryAssetEdge>;
  nodes: Array<CloudinaryAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CloudinaryAssetSortInput = {
  fields?: Maybe<Array<Maybe<CloudinaryAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
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
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childCloudinaryAsset?: Maybe<CloudinaryAsset>;
  childAuthorYaml?: Maybe<AuthorYaml>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
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
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
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
  ChildCloudinaryAssetFixedAspectRatio = 'childCloudinaryAsset___fixed___aspectRatio',
  ChildCloudinaryAssetFixedBase64 = 'childCloudinaryAsset___fixed___base64',
  ChildCloudinaryAssetFixedHeight = 'childCloudinaryAsset___fixed___height',
  ChildCloudinaryAssetFixedSrc = 'childCloudinaryAsset___fixed___src',
  ChildCloudinaryAssetFixedSrcSet = 'childCloudinaryAsset___fixed___srcSet',
  ChildCloudinaryAssetFixedWidth = 'childCloudinaryAsset___fixed___width',
  ChildCloudinaryAssetFluidAspectRatio = 'childCloudinaryAsset___fluid___aspectRatio',
  ChildCloudinaryAssetFluidBase64 = 'childCloudinaryAsset___fluid___base64',
  ChildCloudinaryAssetFluidPresentationHeight = 'childCloudinaryAsset___fluid___presentationHeight',
  ChildCloudinaryAssetFluidPresentationWidth = 'childCloudinaryAsset___fluid___presentationWidth',
  ChildCloudinaryAssetFluidSizes = 'childCloudinaryAsset___fluid___sizes',
  ChildCloudinaryAssetFluidSrc = 'childCloudinaryAsset___fluid___src',
  ChildCloudinaryAssetFluidSrcSet = 'childCloudinaryAsset___fluid___srcSet',
  ChildCloudinaryAssetId = 'childCloudinaryAsset___id',
  ChildCloudinaryAssetParentId = 'childCloudinaryAsset___parent___id',
  ChildCloudinaryAssetParentParentId = 'childCloudinaryAsset___parent___parent___id',
  ChildCloudinaryAssetParentParentChildren = 'childCloudinaryAsset___parent___parent___children',
  ChildCloudinaryAssetParentChildren = 'childCloudinaryAsset___parent___children',
  ChildCloudinaryAssetParentChildrenId = 'childCloudinaryAsset___parent___children___id',
  ChildCloudinaryAssetParentChildrenChildren = 'childCloudinaryAsset___parent___children___children',
  ChildCloudinaryAssetParentInternalContent = 'childCloudinaryAsset___parent___internal___content',
  ChildCloudinaryAssetParentInternalContentDigest = 'childCloudinaryAsset___parent___internal___contentDigest',
  ChildCloudinaryAssetParentInternalDescription = 'childCloudinaryAsset___parent___internal___description',
  ChildCloudinaryAssetParentInternalFieldOwners = 'childCloudinaryAsset___parent___internal___fieldOwners',
  ChildCloudinaryAssetParentInternalIgnoreType = 'childCloudinaryAsset___parent___internal___ignoreType',
  ChildCloudinaryAssetParentInternalMediaType = 'childCloudinaryAsset___parent___internal___mediaType',
  ChildCloudinaryAssetParentInternalOwner = 'childCloudinaryAsset___parent___internal___owner',
  ChildCloudinaryAssetParentInternalType = 'childCloudinaryAsset___parent___internal___type',
  ChildCloudinaryAssetChildren = 'childCloudinaryAsset___children',
  ChildCloudinaryAssetChildrenId = 'childCloudinaryAsset___children___id',
  ChildCloudinaryAssetChildrenParentId = 'childCloudinaryAsset___children___parent___id',
  ChildCloudinaryAssetChildrenParentChildren = 'childCloudinaryAsset___children___parent___children',
  ChildCloudinaryAssetChildrenChildren = 'childCloudinaryAsset___children___children',
  ChildCloudinaryAssetChildrenChildrenId = 'childCloudinaryAsset___children___children___id',
  ChildCloudinaryAssetChildrenChildrenChildren = 'childCloudinaryAsset___children___children___children',
  ChildCloudinaryAssetChildrenInternalContent = 'childCloudinaryAsset___children___internal___content',
  ChildCloudinaryAssetChildrenInternalContentDigest = 'childCloudinaryAsset___children___internal___contentDigest',
  ChildCloudinaryAssetChildrenInternalDescription = 'childCloudinaryAsset___children___internal___description',
  ChildCloudinaryAssetChildrenInternalFieldOwners = 'childCloudinaryAsset___children___internal___fieldOwners',
  ChildCloudinaryAssetChildrenInternalIgnoreType = 'childCloudinaryAsset___children___internal___ignoreType',
  ChildCloudinaryAssetChildrenInternalMediaType = 'childCloudinaryAsset___children___internal___mediaType',
  ChildCloudinaryAssetChildrenInternalOwner = 'childCloudinaryAsset___children___internal___owner',
  ChildCloudinaryAssetChildrenInternalType = 'childCloudinaryAsset___children___internal___type',
  ChildCloudinaryAssetInternalContent = 'childCloudinaryAsset___internal___content',
  ChildCloudinaryAssetInternalContentDigest = 'childCloudinaryAsset___internal___contentDigest',
  ChildCloudinaryAssetInternalDescription = 'childCloudinaryAsset___internal___description',
  ChildCloudinaryAssetInternalFieldOwners = 'childCloudinaryAsset___internal___fieldOwners',
  ChildCloudinaryAssetInternalIgnoreType = 'childCloudinaryAsset___internal___ignoreType',
  ChildCloudinaryAssetInternalMediaType = 'childCloudinaryAsset___internal___mediaType',
  ChildCloudinaryAssetInternalOwner = 'childCloudinaryAsset___internal___owner',
  ChildCloudinaryAssetInternalType = 'childCloudinaryAsset___internal___type',
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
  ChildAuthorYamlProfileChildCloudinaryAssetId = 'childAuthorYaml___profile___childCloudinaryAsset___id',
  ChildAuthorYamlProfileChildCloudinaryAssetChildren = 'childAuthorYaml___profile___childCloudinaryAsset___children',
  ChildAuthorYamlProfileChildAuthorYamlId = 'childAuthorYaml___profile___childAuthorYaml___id',
  ChildAuthorYamlProfileChildAuthorYamlChildren = 'childAuthorYaml___profile___childAuthorYaml___children',
  ChildAuthorYamlProfileChildAuthorYamlName = 'childAuthorYaml___profile___childAuthorYaml___name',
  ChildAuthorYamlProfileChildAuthorYamlBio = 'childAuthorYaml___profile___childAuthorYaml___bio',
  ChildAuthorYamlProfileChildMarkdownRemarkId = 'childAuthorYaml___profile___childMarkdownRemark___id',
  ChildAuthorYamlProfileChildMarkdownRemarkExcerpt = 'childAuthorYaml___profile___childMarkdownRemark___excerpt',
  ChildAuthorYamlProfileChildMarkdownRemarkRawMarkdownBody = 'childAuthorYaml___profile___childMarkdownRemark___rawMarkdownBody',
  ChildAuthorYamlProfileChildMarkdownRemarkFileAbsolutePath = 'childAuthorYaml___profile___childMarkdownRemark___fileAbsolutePath',
  ChildAuthorYamlProfileChildMarkdownRemarkHtml = 'childAuthorYaml___profile___childMarkdownRemark___html',
  ChildAuthorYamlProfileChildMarkdownRemarkHtmlAst = 'childAuthorYaml___profile___childMarkdownRemark___htmlAst',
  ChildAuthorYamlProfileChildMarkdownRemarkExcerptAst = 'childAuthorYaml___profile___childMarkdownRemark___excerptAst',
  ChildAuthorYamlProfileChildMarkdownRemarkHeadings = 'childAuthorYaml___profile___childMarkdownRemark___headings',
  ChildAuthorYamlProfileChildMarkdownRemarkTimeToRead = 'childAuthorYaml___profile___childMarkdownRemark___timeToRead',
  ChildAuthorYamlProfileChildMarkdownRemarkTableOfContents = 'childAuthorYaml___profile___childMarkdownRemark___tableOfContents',
  ChildAuthorYamlProfileChildMarkdownRemarkChildren = 'childAuthorYaml___profile___childMarkdownRemark___children',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterLayout = 'childMarkdownRemark___frontmatter___layout',
  ChildMarkdownRemarkFrontmatterAuthorId = 'childMarkdownRemark___frontmatter___author___id',
  ChildMarkdownRemarkFrontmatterAuthorChildren = 'childMarkdownRemark___frontmatter___author___children',
  ChildMarkdownRemarkFrontmatterAuthorName = 'childMarkdownRemark___frontmatter___author___name',
  ChildMarkdownRemarkFrontmatterAuthorBio = 'childMarkdownRemark___frontmatter___author___bio',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterPath = 'childMarkdownRemark___frontmatter___path',
  ChildMarkdownRemarkFrontmatterImageSourceInstanceName = 'childMarkdownRemark___frontmatter___image___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterImageAbsolutePath = 'childMarkdownRemark___frontmatter___image___absolutePath',
  ChildMarkdownRemarkFrontmatterImageRelativePath = 'childMarkdownRemark___frontmatter___image___relativePath',
  ChildMarkdownRemarkFrontmatterImageExtension = 'childMarkdownRemark___frontmatter___image___extension',
  ChildMarkdownRemarkFrontmatterImageSize = 'childMarkdownRemark___frontmatter___image___size',
  ChildMarkdownRemarkFrontmatterImagePrettySize = 'childMarkdownRemark___frontmatter___image___prettySize',
  ChildMarkdownRemarkFrontmatterImageModifiedTime = 'childMarkdownRemark___frontmatter___image___modifiedTime',
  ChildMarkdownRemarkFrontmatterImageAccessTime = 'childMarkdownRemark___frontmatter___image___accessTime',
  ChildMarkdownRemarkFrontmatterImageChangeTime = 'childMarkdownRemark___frontmatter___image___changeTime',
  ChildMarkdownRemarkFrontmatterImageBirthTime = 'childMarkdownRemark___frontmatter___image___birthTime',
  ChildMarkdownRemarkFrontmatterImageRoot = 'childMarkdownRemark___frontmatter___image___root',
  ChildMarkdownRemarkFrontmatterImageDir = 'childMarkdownRemark___frontmatter___image___dir',
  ChildMarkdownRemarkFrontmatterImageBase = 'childMarkdownRemark___frontmatter___image___base',
  ChildMarkdownRemarkFrontmatterImageExt = 'childMarkdownRemark___frontmatter___image___ext',
  ChildMarkdownRemarkFrontmatterImageName = 'childMarkdownRemark___frontmatter___image___name',
  ChildMarkdownRemarkFrontmatterImageRelativeDirectory = 'childMarkdownRemark___frontmatter___image___relativeDirectory',
  ChildMarkdownRemarkFrontmatterImageDev = 'childMarkdownRemark___frontmatter___image___dev',
  ChildMarkdownRemarkFrontmatterImageMode = 'childMarkdownRemark___frontmatter___image___mode',
  ChildMarkdownRemarkFrontmatterImageNlink = 'childMarkdownRemark___frontmatter___image___nlink',
  ChildMarkdownRemarkFrontmatterImageUid = 'childMarkdownRemark___frontmatter___image___uid',
  ChildMarkdownRemarkFrontmatterImageGid = 'childMarkdownRemark___frontmatter___image___gid',
  ChildMarkdownRemarkFrontmatterImageRdev = 'childMarkdownRemark___frontmatter___image___rdev',
  ChildMarkdownRemarkFrontmatterImageIno = 'childMarkdownRemark___frontmatter___image___ino',
  ChildMarkdownRemarkFrontmatterImageAtimeMs = 'childMarkdownRemark___frontmatter___image___atimeMs',
  ChildMarkdownRemarkFrontmatterImageMtimeMs = 'childMarkdownRemark___frontmatter___image___mtimeMs',
  ChildMarkdownRemarkFrontmatterImageCtimeMs = 'childMarkdownRemark___frontmatter___image___ctimeMs',
  ChildMarkdownRemarkFrontmatterImageAtime = 'childMarkdownRemark___frontmatter___image___atime',
  ChildMarkdownRemarkFrontmatterImageMtime = 'childMarkdownRemark___frontmatter___image___mtime',
  ChildMarkdownRemarkFrontmatterImageCtime = 'childMarkdownRemark___frontmatter___image___ctime',
  ChildMarkdownRemarkFrontmatterImageBirthtime = 'childMarkdownRemark___frontmatter___image___birthtime',
  ChildMarkdownRemarkFrontmatterImageBirthtimeMs = 'childMarkdownRemark___frontmatter___image___birthtimeMs',
  ChildMarkdownRemarkFrontmatterImageBlksize = 'childMarkdownRemark___frontmatter___image___blksize',
  ChildMarkdownRemarkFrontmatterImageBlocks = 'childMarkdownRemark___frontmatter___image___blocks',
  ChildMarkdownRemarkFrontmatterImagePublicUrl = 'childMarkdownRemark___frontmatter___image___publicURL',
  ChildMarkdownRemarkFrontmatterImageId = 'childMarkdownRemark___frontmatter___image___id',
  ChildMarkdownRemarkFrontmatterImageChildren = 'childMarkdownRemark___frontmatter___image___children',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterHeaderImage = 'childMarkdownRemark___frontmatter___headerImage',
  ChildMarkdownRemarkFrontmatterReadTime = 'childMarkdownRemark___frontmatter___read_time',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
  childAuthorYaml?: Maybe<AuthorYamlFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
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


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
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
  FrontmatterImageChildCloudinaryAssetId = 'frontmatter___image___childCloudinaryAsset___id',
  FrontmatterImageChildCloudinaryAssetChildren = 'frontmatter___image___childCloudinaryAsset___children',
  FrontmatterImageChildAuthorYamlId = 'frontmatter___image___childAuthorYaml___id',
  FrontmatterImageChildAuthorYamlChildren = 'frontmatter___image___childAuthorYaml___children',
  FrontmatterImageChildAuthorYamlName = 'frontmatter___image___childAuthorYaml___name',
  FrontmatterImageChildAuthorYamlBio = 'frontmatter___image___childAuthorYaml___bio',
  FrontmatterImageChildMarkdownRemarkId = 'frontmatter___image___childMarkdownRemark___id',
  FrontmatterImageChildMarkdownRemarkExcerpt = 'frontmatter___image___childMarkdownRemark___excerpt',
  FrontmatterImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___image___childMarkdownRemark___rawMarkdownBody',
  FrontmatterImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___image___childMarkdownRemark___fileAbsolutePath',
  FrontmatterImageChildMarkdownRemarkHtml = 'frontmatter___image___childMarkdownRemark___html',
  FrontmatterImageChildMarkdownRemarkHtmlAst = 'frontmatter___image___childMarkdownRemark___htmlAst',
  FrontmatterImageChildMarkdownRemarkExcerptAst = 'frontmatter___image___childMarkdownRemark___excerptAst',
  FrontmatterImageChildMarkdownRemarkHeadings = 'frontmatter___image___childMarkdownRemark___headings',
  FrontmatterImageChildMarkdownRemarkTimeToRead = 'frontmatter___image___childMarkdownRemark___timeToRead',
  FrontmatterImageChildMarkdownRemarkTableOfContents = 'frontmatter___image___childMarkdownRemark___tableOfContents',
  FrontmatterImageChildMarkdownRemarkChildren = 'frontmatter___image___childMarkdownRemark___children',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterHeaderImage = 'frontmatter___headerImage',
  FrontmatterReadTime = 'frontmatter___read_time',
  FrontmatterCategory = 'frontmatter___category',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FieldsSlug = 'fields___slug',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
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

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
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
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
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
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
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

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  cloudinaryAsset?: Maybe<CloudinaryAsset>;
  allCloudinaryAsset: CloudinaryAssetConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  authorYaml?: Maybe<AuthorYaml>;
  allAuthorYaml: AuthorYamlConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
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
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childCloudinaryAsset?: Maybe<CloudinaryAssetFilterInput>;
  childAuthorYaml?: Maybe<AuthorYamlFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
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


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCloudinaryAssetArgs = {
  fixed?: Maybe<CloudinaryAssetFixedFilterInput>;
  fluid?: Maybe<CloudinaryAssetFluidFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllCloudinaryAssetArgs = {
  filter?: Maybe<CloudinaryAssetFilterInput>;
  sort?: Maybe<CloudinaryAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
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

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
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
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
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
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
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
  MappingMarkdownRemarkFrontmatterAuthor = 'mapping___MarkdownRemark_frontmatter_author',
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
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  MarkdownRemark_frontmatter_author?: Maybe<Scalars['String']>;
};

export type SiteMappingFilterInput = {
  MarkdownRemark_frontmatter_author?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  path?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
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
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextPath = 'context___path',
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
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsCloudName = 'pluginCreator___pluginOptions___cloudName',
  PluginCreatorPluginOptionsApiKey = 'pluginCreator___pluginOptions___apiKey',
  PluginCreatorPluginOptionsApiSecret = 'pluginCreator___pluginOptions___apiSecret',
  PluginCreatorPluginOptionsUploadFolder = 'pluginCreator___pluginOptions___uploadFolder',
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
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
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
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
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
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
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
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  PluginOptionsPluginsPluginOptionsSizeByPixelDensity = 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsCloudName = 'pluginOptions___cloudName',
  PluginOptionsApiKey = 'pluginOptions___apiKey',
  PluginOptionsApiSecret = 'pluginOptions___apiSecret',
  PluginOptionsUploadFolder = 'pluginOptions___uploadFolder',
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
  PackageJsonAuthor = 'packageJson___author',
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
  author?: Maybe<Scalars['String']>;
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
  author?: Maybe<StringQueryOperatorInput>;
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
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  cloudName?: Maybe<Scalars['String']>;
  apiKey?: Maybe<Scalars['String']>;
  apiSecret?: Maybe<Scalars['String']>;
  uploadFolder?: Maybe<Scalars['String']>;
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
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  cloudName?: Maybe<StringQueryOperatorInput>;
  apiKey?: Maybe<StringQueryOperatorInput>;
  apiSecret?: Maybe<StringQueryOperatorInput>;
  uploadFolder?: Maybe<StringQueryOperatorInput>;
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

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
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
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
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

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
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

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>
    )> }
  )> }
);

export type CloudinaryAssetFluidFragment = (
  { __typename?: 'CloudinaryAssetFluid' }
  & Pick<CloudinaryAssetFluid, 'aspectRatio' | 'base64' | 'sizes' | 'src' | 'srcSet'>
);

export type CloudinaryAssetFluidLimitPresentationSizeFragment = (
  { __typename?: 'CloudinaryAssetFluid' }
  & { maxHeight: CloudinaryAssetFluid['presentationHeight'], maxWidth: CloudinaryAssetFluid['presentationWidth'] }
);

export type PostPreviewFragment = (
  { __typename?: 'MarkdownRemark' }
  & Pick<MarkdownRemark, 'id' | 'timeToRead'>
  & { frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'path' | 'title' | 'description' | 'date'>
    & { author?: Maybe<(
      { __typename?: 'AuthorYaml' }
      & Pick<AuthorYaml, 'id' | 'name'>
      & { profile?: Maybe<(
        { __typename?: 'File' }
        & { childCloudinaryAsset?: Maybe<(
          { __typename?: 'CloudinaryAsset' }
          & { fixed: (
            { __typename?: 'CloudinaryAssetFixed' }
            & CloudinaryAssetFixedFragment
          ) }
        )> }
      )> }
    )>, image?: Maybe<(
      { __typename?: 'File' }
      & { childCloudinaryAsset?: Maybe<(
        { __typename?: 'CloudinaryAsset' }
        & { fluid: (
          { __typename?: 'CloudinaryAssetFluid' }
          & CloudinaryAssetFluidFragment
        ) }
      )> }
    )> }
  )> }
);

export type CloudinaryAssetFixedFragment = (
  { __typename?: 'CloudinaryAssetFixed' }
  & Pick<CloudinaryAssetFixed, 'base64' | 'height' | 'src' | 'srcSet' | 'width'>
);

export type TestPageQueryVariables = Exact<{ [key: string]: never; }>;


export type TestPageQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { nodes: Array<(
      { __typename?: 'MarkdownRemark' }
      & Pick<MarkdownRemark, 'id' | 'timeToRead'>
      & { frontmatter?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatter' }
        & Pick<MarkdownRemarkFrontmatter, 'path' | 'title' | 'description' | 'date'>
        & { author?: Maybe<(
          { __typename?: 'AuthorYaml' }
          & Pick<AuthorYaml, 'id' | 'name'>
          & { profile?: Maybe<(
            { __typename?: 'File' }
            & { childCloudinaryAsset?: Maybe<(
              { __typename?: 'CloudinaryAsset' }
              & { fixed: (
                { __typename?: 'CloudinaryAssetFixed' }
                & CloudinaryAssetFixedFragment
              ) }
            )> }
          )> }
        )>, image?: Maybe<(
          { __typename?: 'File' }
          & { childCloudinaryAsset?: Maybe<(
            { __typename?: 'CloudinaryAsset' }
            & { fluid: (
              { __typename?: 'CloudinaryAssetFluid' }
              & CloudinaryAssetFluidFragment
            ) }
          )> }
        )> }
      )> }
    )> }
  ) }
);

export type PostPageQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type PostPageQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'html'>
    & { frontmatter?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title'>
    )> }
  )> }
);
