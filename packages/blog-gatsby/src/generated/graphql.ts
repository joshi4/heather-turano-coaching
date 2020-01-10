export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  absolutePath?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  prettySize?: Maybe<Scalars["String"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  root?: Maybe<Scalars["String"]>;
  dir?: Maybe<Scalars["String"]>;
  base?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  dev?: Maybe<Scalars["Int"]>;
  mode?: Maybe<Scalars["Int"]>;
  nlink?: Maybe<Scalars["Int"]>;
  uid?: Maybe<Scalars["Int"]>;
  gid?: Maybe<Scalars["Int"]>;
  rdev?: Maybe<Scalars["Int"]>;
  blksize?: Maybe<Scalars["Int"]>;
  ino?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  atime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  ctime?: Maybe<Scalars["Date"]>;
  birthtime?: Maybe<Scalars["Date"]>;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  BirthtimeMs = "birthtimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime"
}

export type DirectoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
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

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  __typename?: "File";
  birthtime?: Maybe<Scalars["Date"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  absolutePath?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  prettySize?: Maybe<Scalars["String"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  root?: Maybe<Scalars["String"]>;
  dir?: Maybe<Scalars["String"]>;
  base?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  dev?: Maybe<Scalars["Int"]>;
  mode?: Maybe<Scalars["Int"]>;
  nlink?: Maybe<Scalars["Int"]>;
  uid?: Maybe<Scalars["Int"]>;
  gid?: Maybe<Scalars["Int"]>;
  rdev?: Maybe<Scalars["Int"]>;
  blksize?: Maybe<Scalars["Int"]>;
  ino?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  atime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  ctime?: Maybe<Scalars["Date"]>;
  publicURL?: Maybe<Scalars["String"]>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Blksize = "blksize",
  Ino = "ino",
  Blocks = "blocks",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  PublicUrl = "publicURL",
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  ChildImageSharpResolutionsBase64 = "childImageSharp___resolutions___base64",
  ChildImageSharpResolutionsTracedSvg = "childImageSharp___resolutions___tracedSVG",
  ChildImageSharpResolutionsAspectRatio = "childImageSharp___resolutions___aspectRatio",
  ChildImageSharpResolutionsWidth = "childImageSharp___resolutions___width",
  ChildImageSharpResolutionsHeight = "childImageSharp___resolutions___height",
  ChildImageSharpResolutionsSrc = "childImageSharp___resolutions___src",
  ChildImageSharpResolutionsSrcSet = "childImageSharp___resolutions___srcSet",
  ChildImageSharpResolutionsSrcWebp = "childImageSharp___resolutions___srcWebp",
  ChildImageSharpResolutionsSrcSetWebp = "childImageSharp___resolutions___srcSetWebp",
  ChildImageSharpResolutionsOriginalName = "childImageSharp___resolutions___originalName",
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  ChildImageSharpSizesBase64 = "childImageSharp___sizes___base64",
  ChildImageSharpSizesTracedSvg = "childImageSharp___sizes___tracedSVG",
  ChildImageSharpSizesAspectRatio = "childImageSharp___sizes___aspectRatio",
  ChildImageSharpSizesSrc = "childImageSharp___sizes___src",
  ChildImageSharpSizesSrcSet = "childImageSharp___sizes___srcSet",
  ChildImageSharpSizesSrcWebp = "childImageSharp___sizes___srcWebp",
  ChildImageSharpSizesSrcSetWebp = "childImageSharp___sizes___srcSetWebp",
  ChildImageSharpSizesSizes = "childImageSharp___sizes___sizes",
  ChildImageSharpSizesOriginalImg = "childImageSharp___sizes___originalImg",
  ChildImageSharpSizesOriginalName = "childImageSharp___sizes___originalName",
  ChildImageSharpSizesPresentationWidth = "childImageSharp___sizes___presentationWidth",
  ChildImageSharpSizesPresentationHeight = "childImageSharp___sizes___presentationHeight",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type FileFilterInput = {
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type GhostAuthor = Node & {
  __typename?: "GhostAuthor";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  profile_image?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
  ghostId?: Maybe<Scalars["String"]>;
  count?: Maybe<GhostAuthorCount>;
};

export type GhostAuthorConnection = {
  __typename?: "GhostAuthorConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GhostAuthorGroupConnection>;
};

export type GhostAuthorConnectionDistinctArgs = {
  field: GhostAuthorFieldsEnum;
};

export type GhostAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GhostAuthorFieldsEnum;
};

export type GhostAuthorCount = {
  __typename?: "GhostAuthorCount";
  posts?: Maybe<Scalars["Int"]>;
};

export type GhostAuthorCountFilterInput = {
  posts?: Maybe<IntQueryOperatorInput>;
};

export type GhostAuthorEdge = {
  __typename?: "GhostAuthorEdge";
  next?: Maybe<GhostAuthor>;
  node: GhostAuthor;
  previous?: Maybe<GhostAuthor>;
};

export enum GhostAuthorFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  Slug = "slug",
  Url = "url",
  ProfileImage = "profile_image",
  CoverImage = "cover_image",
  Bio = "bio",
  Website = "website",
  Location = "location",
  Facebook = "facebook",
  Twitter = "twitter",
  MetaTitle = "meta_title",
  MetaDescription = "meta_description",
  PostCount = "postCount",
  GhostId = "ghostId",
  CountPosts = "count___posts"
}

export type GhostAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostAuthorCountFilterInput>;
};

export type GhostAuthorGroupConnection = {
  __typename?: "GhostAuthorGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GhostAuthorSortInput = {
  fields?: Maybe<Array<Maybe<GhostAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostPage = Node & {
  __typename?: "GhostPage";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  uuid?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  canonical_url?: Maybe<Scalars["String"]>;
  mobiledoc?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  comment_id?: Maybe<Scalars["String"]>;
  plaintext?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  page?: Maybe<Scalars["Boolean"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["Date"]>;
  updated_at?: Maybe<Scalars["Date"]>;
  published_at?: Maybe<Scalars["Date"]>;
  custom_excerpt?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  codeinjection_head?: Maybe<Scalars["String"]>;
  codeinjection_foot?: Maybe<Scalars["String"]>;
  codeinjection_styles?: Maybe<Scalars["String"]>;
  og_image?: Maybe<Scalars["String"]>;
  og_title?: Maybe<Scalars["String"]>;
  og_description?: Maybe<Scalars["String"]>;
  twitter_image?: Maybe<Scalars["String"]>;
  twitter_title?: Maybe<Scalars["String"]>;
  twitter_description?: Maybe<Scalars["String"]>;
  custom_template?: Maybe<Scalars["String"]>;
  primary_author?: Maybe<GhostPagePrimary_Author>;
  primary_tag?: Maybe<GhostPagePrimary_Tag>;
  authors?: Maybe<Array<Maybe<GhostPageAuthors>>>;
  tags?: Maybe<Array<Maybe<GhostPageTags>>>;
  visibility?: Maybe<Scalars["String"]>;
  reading_time?: Maybe<Scalars["Int"]>;
  ghostId?: Maybe<Scalars["String"]>;
};

export type GhostPageCreated_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPagePublished_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPageAuthors = {
  __typename?: "GhostPageAuthors";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  profile_image?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPageAuthorsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPageAuthorsFilterListInput = {
  elemMatch?: Maybe<GhostPageAuthorsFilterInput>;
};

export type GhostPageConnection = {
  __typename?: "GhostPageConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GhostPageGroupConnection>;
};

export type GhostPageConnectionDistinctArgs = {
  field: GhostPageFieldsEnum;
};

export type GhostPageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GhostPageFieldsEnum;
};

export type GhostPageEdge = {
  __typename?: "GhostPageEdge";
  next?: Maybe<GhostPage>;
  node: GhostPage;
  previous?: Maybe<GhostPage>;
};

export enum GhostPageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Uuid = "uuid",
  Title = "title",
  Slug = "slug",
  Url = "url",
  CanonicalUrl = "canonical_url",
  Mobiledoc = "mobiledoc",
  Html = "html",
  CommentId = "comment_id",
  Plaintext = "plaintext",
  FeatureImage = "feature_image",
  Featured = "featured",
  Page = "page",
  MetaTitle = "meta_title",
  MetaDescription = "meta_description",
  CreatedAt = "created_at",
  UpdatedAt = "updated_at",
  PublishedAt = "published_at",
  CustomExcerpt = "custom_excerpt",
  Excerpt = "excerpt",
  CodeinjectionHead = "codeinjection_head",
  CodeinjectionFoot = "codeinjection_foot",
  CodeinjectionStyles = "codeinjection_styles",
  OgImage = "og_image",
  OgTitle = "og_title",
  OgDescription = "og_description",
  TwitterImage = "twitter_image",
  TwitterTitle = "twitter_title",
  TwitterDescription = "twitter_description",
  CustomTemplate = "custom_template",
  PrimaryAuthorId = "primary_author___id",
  PrimaryAuthorName = "primary_author___name",
  PrimaryAuthorSlug = "primary_author___slug",
  PrimaryAuthorUrl = "primary_author___url",
  PrimaryAuthorProfileImage = "primary_author___profile_image",
  PrimaryAuthorCoverImage = "primary_author___cover_image",
  PrimaryAuthorBio = "primary_author___bio",
  PrimaryAuthorWebsite = "primary_author___website",
  PrimaryAuthorLocation = "primary_author___location",
  PrimaryAuthorFacebook = "primary_author___facebook",
  PrimaryAuthorTwitter = "primary_author___twitter",
  PrimaryAuthorMetaTitle = "primary_author___meta_title",
  PrimaryAuthorMetaDescription = "primary_author___meta_description",
  PrimaryAuthorPostCount = "primary_author___postCount",
  PrimaryTagId = "primary_tag___id",
  PrimaryTagName = "primary_tag___name",
  PrimaryTagSlug = "primary_tag___slug",
  PrimaryTagUrl = "primary_tag___url",
  PrimaryTagDescription = "primary_tag___description",
  PrimaryTagFeatureImage = "primary_tag___feature_image",
  PrimaryTagVisibility = "primary_tag___visibility",
  PrimaryTagMetaTitle = "primary_tag___meta_title",
  PrimaryTagMetaDescription = "primary_tag___meta_description",
  PrimaryTagPostCount = "primary_tag___postCount",
  Authors = "authors",
  AuthorsId = "authors___id",
  AuthorsName = "authors___name",
  AuthorsSlug = "authors___slug",
  AuthorsUrl = "authors___url",
  AuthorsProfileImage = "authors___profile_image",
  AuthorsCoverImage = "authors___cover_image",
  AuthorsBio = "authors___bio",
  AuthorsWebsite = "authors___website",
  AuthorsLocation = "authors___location",
  AuthorsFacebook = "authors___facebook",
  AuthorsTwitter = "authors___twitter",
  AuthorsMetaTitle = "authors___meta_title",
  AuthorsMetaDescription = "authors___meta_description",
  AuthorsPostCount = "authors___postCount",
  Tags = "tags",
  TagsId = "tags___id",
  TagsName = "tags___name",
  TagsSlug = "tags___slug",
  TagsUrl = "tags___url",
  TagsDescription = "tags___description",
  TagsFeatureImage = "tags___feature_image",
  TagsVisibility = "tags___visibility",
  TagsMetaTitle = "tags___meta_title",
  TagsMetaDescription = "tags___meta_description",
  TagsPostCount = "tags___postCount",
  Visibility = "visibility",
  ReadingTime = "reading_time",
  GhostId = "ghostId"
}

export type GhostPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  mobiledoc?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  primary_author?: Maybe<GhostPagePrimary_AuthorFilterInput>;
  primary_tag?: Maybe<GhostPagePrimary_TagFilterInput>;
  authors?: Maybe<GhostPageAuthorsFilterListInput>;
  tags?: Maybe<GhostPageTagsFilterListInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
};

export type GhostPageGroupConnection = {
  __typename?: "GhostPageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GhostPagePrimary_Author = {
  __typename?: "GhostPagePrimary_author";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  profile_image?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPagePrimary_AuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPagePrimary_Tag = {
  __typename?: "GhostPagePrimary_tag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  visibility?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPagePrimary_TagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPageSortInput = {
  fields?: Maybe<Array<Maybe<GhostPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostPageTags = {
  __typename?: "GhostPageTags";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  visibility?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPageTagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPageTagsFilterListInput = {
  elemMatch?: Maybe<GhostPageTagsFilterInput>;
};

export type GhostPost = Node & {
  __typename?: "GhostPost";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  uuid?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  canonical_url?: Maybe<Scalars["String"]>;
  mobiledoc?: Maybe<Scalars["String"]>;
  html?: Maybe<Scalars["String"]>;
  comment_id?: Maybe<Scalars["String"]>;
  plaintext?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  featured?: Maybe<Scalars["Boolean"]>;
  page?: Maybe<Scalars["Boolean"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["Date"]>;
  updated_at?: Maybe<Scalars["Date"]>;
  published_at?: Maybe<Scalars["Date"]>;
  custom_excerpt?: Maybe<Scalars["String"]>;
  excerpt?: Maybe<Scalars["String"]>;
  codeinjection_head?: Maybe<Scalars["String"]>;
  codeinjection_foot?: Maybe<Scalars["String"]>;
  codeinjection_styles?: Maybe<Scalars["String"]>;
  og_image?: Maybe<Scalars["String"]>;
  og_title?: Maybe<Scalars["String"]>;
  og_description?: Maybe<Scalars["String"]>;
  twitter_image?: Maybe<Scalars["String"]>;
  twitter_title?: Maybe<Scalars["String"]>;
  twitter_description?: Maybe<Scalars["String"]>;
  primary_author?: Maybe<GhostPostPrimary_Author>;
  primary_tag?: Maybe<GhostPostPrimary_Tag>;
  authors?: Maybe<Array<Maybe<GhostPostAuthors>>>;
  tags?: Maybe<Array<Maybe<GhostPostTags>>>;
  visibility?: Maybe<Scalars["String"]>;
  reading_time?: Maybe<Scalars["Int"]>;
  ghostId?: Maybe<Scalars["String"]>;
  send_email_when_published?: Maybe<Scalars["Boolean"]>;
};

export type GhostPostCreated_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPostUpdated_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPostPublished_AtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GhostPostAuthors = {
  __typename?: "GhostPostAuthors";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  profile_image?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPostAuthorsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPostAuthorsFilterListInput = {
  elemMatch?: Maybe<GhostPostAuthorsFilterInput>;
};

export type GhostPostConnection = {
  __typename?: "GhostPostConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GhostPostGroupConnection>;
};

export type GhostPostConnectionDistinctArgs = {
  field: GhostPostFieldsEnum;
};

export type GhostPostConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GhostPostFieldsEnum;
};

export type GhostPostEdge = {
  __typename?: "GhostPostEdge";
  next?: Maybe<GhostPost>;
  node: GhostPost;
  previous?: Maybe<GhostPost>;
};

export enum GhostPostFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Uuid = "uuid",
  Title = "title",
  Slug = "slug",
  Url = "url",
  CanonicalUrl = "canonical_url",
  Mobiledoc = "mobiledoc",
  Html = "html",
  CommentId = "comment_id",
  Plaintext = "plaintext",
  FeatureImage = "feature_image",
  Featured = "featured",
  Page = "page",
  MetaTitle = "meta_title",
  MetaDescription = "meta_description",
  CreatedAt = "created_at",
  UpdatedAt = "updated_at",
  PublishedAt = "published_at",
  CustomExcerpt = "custom_excerpt",
  Excerpt = "excerpt",
  CodeinjectionHead = "codeinjection_head",
  CodeinjectionFoot = "codeinjection_foot",
  CodeinjectionStyles = "codeinjection_styles",
  OgImage = "og_image",
  OgTitle = "og_title",
  OgDescription = "og_description",
  TwitterImage = "twitter_image",
  TwitterTitle = "twitter_title",
  TwitterDescription = "twitter_description",
  PrimaryAuthorId = "primary_author___id",
  PrimaryAuthorName = "primary_author___name",
  PrimaryAuthorSlug = "primary_author___slug",
  PrimaryAuthorUrl = "primary_author___url",
  PrimaryAuthorProfileImage = "primary_author___profile_image",
  PrimaryAuthorCoverImage = "primary_author___cover_image",
  PrimaryAuthorBio = "primary_author___bio",
  PrimaryAuthorWebsite = "primary_author___website",
  PrimaryAuthorLocation = "primary_author___location",
  PrimaryAuthorFacebook = "primary_author___facebook",
  PrimaryAuthorTwitter = "primary_author___twitter",
  PrimaryAuthorMetaTitle = "primary_author___meta_title",
  PrimaryAuthorMetaDescription = "primary_author___meta_description",
  PrimaryAuthorPostCount = "primary_author___postCount",
  PrimaryTagId = "primary_tag___id",
  PrimaryTagName = "primary_tag___name",
  PrimaryTagSlug = "primary_tag___slug",
  PrimaryTagUrl = "primary_tag___url",
  PrimaryTagDescription = "primary_tag___description",
  PrimaryTagFeatureImage = "primary_tag___feature_image",
  PrimaryTagVisibility = "primary_tag___visibility",
  PrimaryTagMetaTitle = "primary_tag___meta_title",
  PrimaryTagMetaDescription = "primary_tag___meta_description",
  PrimaryTagPostCount = "primary_tag___postCount",
  Authors = "authors",
  AuthorsId = "authors___id",
  AuthorsName = "authors___name",
  AuthorsSlug = "authors___slug",
  AuthorsUrl = "authors___url",
  AuthorsProfileImage = "authors___profile_image",
  AuthorsCoverImage = "authors___cover_image",
  AuthorsBio = "authors___bio",
  AuthorsWebsite = "authors___website",
  AuthorsLocation = "authors___location",
  AuthorsFacebook = "authors___facebook",
  AuthorsTwitter = "authors___twitter",
  AuthorsMetaTitle = "authors___meta_title",
  AuthorsMetaDescription = "authors___meta_description",
  AuthorsPostCount = "authors___postCount",
  Tags = "tags",
  TagsId = "tags___id",
  TagsName = "tags___name",
  TagsSlug = "tags___slug",
  TagsUrl = "tags___url",
  TagsDescription = "tags___description",
  TagsFeatureImage = "tags___feature_image",
  TagsVisibility = "tags___visibility",
  TagsMetaTitle = "tags___meta_title",
  TagsMetaDescription = "tags___meta_description",
  TagsPostCount = "tags___postCount",
  Visibility = "visibility",
  ReadingTime = "reading_time",
  GhostId = "ghostId",
  SendEmailWhenPublished = "send_email_when_published"
}

export type GhostPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  mobiledoc?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  primary_author?: Maybe<GhostPostPrimary_AuthorFilterInput>;
  primary_tag?: Maybe<GhostPostPrimary_TagFilterInput>;
  authors?: Maybe<GhostPostAuthorsFilterListInput>;
  tags?: Maybe<GhostPostTagsFilterListInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
};

export type GhostPostGroupConnection = {
  __typename?: "GhostPostGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GhostPostPrimary_Author = {
  __typename?: "GhostPostPrimary_author";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  profile_image?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  bio?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  location?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPostPrimary_AuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPostPrimary_Tag = {
  __typename?: "GhostPostPrimary_tag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  visibility?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPostPrimary_TagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPostSortInput = {
  fields?: Maybe<Array<Maybe<GhostPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostPostTags = {
  __typename?: "GhostPostTags";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  visibility?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
};

export type GhostPostTagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
};

export type GhostPostTagsFilterListInput = {
  elemMatch?: Maybe<GhostPostTagsFilterInput>;
};

export type GhostSettings = Node & {
  __typename?: "GhostSettings";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  cover_image?: Maybe<Scalars["String"]>;
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  lang?: Maybe<Scalars["String"]>;
  timezone?: Maybe<Scalars["String"]>;
  codeinjection_head?: Maybe<Scalars["String"]>;
  codeinjection_foot?: Maybe<Scalars["String"]>;
  codeinjection_styles?: Maybe<Scalars["String"]>;
  navigation?: Maybe<Array<Maybe<GhostSettingsNavigation>>>;
  url?: Maybe<Scalars["String"]>;
  ghostId?: Maybe<Scalars["Int"]>;
};

export type GhostSettingsConnection = {
  __typename?: "GhostSettingsConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GhostSettingsGroupConnection>;
};

export type GhostSettingsConnectionDistinctArgs = {
  field: GhostSettingsFieldsEnum;
};

export type GhostSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GhostSettingsFieldsEnum;
};

export type GhostSettingsEdge = {
  __typename?: "GhostSettingsEdge";
  next?: Maybe<GhostSettings>;
  node: GhostSettings;
  previous?: Maybe<GhostSettings>;
};

export enum GhostSettingsFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Title = "title",
  Description = "description",
  Logo = "logo",
  Icon = "icon",
  CoverImage = "cover_image",
  Facebook = "facebook",
  Twitter = "twitter",
  Lang = "lang",
  Timezone = "timezone",
  CodeinjectionHead = "codeinjection_head",
  CodeinjectionFoot = "codeinjection_foot",
  CodeinjectionStyles = "codeinjection_styles",
  Navigation = "navigation",
  NavigationLabel = "navigation___label",
  NavigationUrl = "navigation___url",
  Url = "url",
  GhostId = "ghostId"
}

export type GhostSettingsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<GhostSettingsNavigationFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<IntQueryOperatorInput>;
};

export type GhostSettingsGroupConnection = {
  __typename?: "GhostSettingsGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GhostSettingsNavigation = {
  __typename?: "GhostSettingsNavigation";
  label?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type GhostSettingsNavigationFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type GhostSettingsNavigationFilterListInput = {
  elemMatch?: Maybe<GhostSettingsNavigationFilterInput>;
};

export type GhostSettingsSortInput = {
  fields?: Maybe<Array<Maybe<GhostSettingsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostTag = Node & {
  __typename?: "GhostTag";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  feature_image?: Maybe<Scalars["String"]>;
  visibility?: Maybe<Scalars["String"]>;
  meta_title?: Maybe<Scalars["String"]>;
  meta_description?: Maybe<Scalars["String"]>;
  postCount?: Maybe<Scalars["Int"]>;
  ghostId?: Maybe<Scalars["String"]>;
  count?: Maybe<GhostTagCount>;
};

export type GhostTagConnection = {
  __typename?: "GhostTagConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GhostTagGroupConnection>;
};

export type GhostTagConnectionDistinctArgs = {
  field: GhostTagFieldsEnum;
};

export type GhostTagConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GhostTagFieldsEnum;
};

export type GhostTagCount = {
  __typename?: "GhostTagCount";
  posts?: Maybe<Scalars["Int"]>;
};

export type GhostTagCountFilterInput = {
  posts?: Maybe<IntQueryOperatorInput>;
};

export type GhostTagEdge = {
  __typename?: "GhostTagEdge";
  next?: Maybe<GhostTag>;
  node: GhostTag;
  previous?: Maybe<GhostTag>;
};

export enum GhostTagFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  Slug = "slug",
  Url = "url",
  Description = "description",
  FeatureImage = "feature_image",
  Visibility = "visibility",
  MetaTitle = "meta_title",
  MetaDescription = "meta_description",
  PostCount = "postCount",
  GhostId = "ghostId",
  CountPosts = "count___posts"
}

export type GhostTagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostTagCountFilterInput>;
};

export type GhostTagGroupConnection = {
  __typename?: "GhostTagGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GhostTagSortInput = {
  fields?: Maybe<Array<Maybe<GhostTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum ImageCropFocus {
  Center = "CENTER",
  North = "NORTH",
  Northeast = "NORTHEAST",
  East = "EAST",
  Southeast = "SOUTHEAST",
  South = "SOUTH",
  Southwest = "SOUTHWEST",
  West = "WEST",
  Northwest = "NORTHWEST",
  Entropy = "ENTROPY",
  Attention = "ATTENTION"
}

export enum ImageFit {
  Cover = "COVER",
  Contain = "CONTAIN",
  Fill = "FILL"
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  fixed?: Maybe<ImageSharpFixed>;
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedOriginalName = "fixed___originalName",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsOriginalName = "resolutions___originalName",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidPresentationHeight = "fluid___presentationHeight",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesPresentationHeight = "sizes___presentationHeight",
  OriginalWidth = "original___width",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeOriginalName = "resize___originalName",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
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
  __typename?: "ImageSharpFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth?: Maybe<Scalars["Int"]>;
  presentationHeight?: Maybe<Scalars["Int"]>;
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
  __typename?: "ImageSharpGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
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

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth?: Maybe<Scalars["Int"]>;
  presentationHeight?: Maybe<Scalars["Int"]>;
};

export type ImageSharpSizesFilterInput = {
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

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
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
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Node = {
  id: Scalars["ID"];
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
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY"
}

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  ghostPost?: Maybe<GhostPost>;
  allGhostPost: GhostPostConnection;
  ghostPage?: Maybe<GhostPage>;
  allGhostPage: GhostPageConnection;
  ghostTag?: Maybe<GhostTag>;
  allGhostTag: GhostTagConnection;
  ghostAuthor?: Maybe<GhostAuthor>;
  allGhostAuthor: GhostAuthorConnection;
  ghostSettings?: Maybe<GhostSettings>;
  allGhostSettings: GhostSettingsConnection;
};

export type QueryFileArgs = {
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
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
  blksize?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<IntQueryOperatorInput>;
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

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGhostPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  mobiledoc?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  primary_author?: Maybe<GhostPostPrimary_AuthorFilterInput>;
  primary_tag?: Maybe<GhostPostPrimary_TagFilterInput>;
  authors?: Maybe<GhostPostAuthorsFilterListInput>;
  tags?: Maybe<GhostPostTagsFilterListInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
};

export type QueryAllGhostPostArgs = {
  filter?: Maybe<GhostPostFilterInput>;
  sort?: Maybe<GhostPostSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGhostPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  mobiledoc?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  primary_author?: Maybe<GhostPagePrimary_AuthorFilterInput>;
  primary_tag?: Maybe<GhostPagePrimary_TagFilterInput>;
  authors?: Maybe<GhostPageAuthorsFilterListInput>;
  tags?: Maybe<GhostPageTagsFilterListInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllGhostPageArgs = {
  filter?: Maybe<GhostPageFilterInput>;
  sort?: Maybe<GhostPageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGhostTagArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostTagCountFilterInput>;
};

export type QueryAllGhostTagArgs = {
  filter?: Maybe<GhostTagFilterInput>;
  sort?: Maybe<GhostTagSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGhostAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostAuthorCountFilterInput>;
};

export type QueryAllGhostAuthorArgs = {
  filter?: Maybe<GhostAuthorFilterInput>;
  sort?: Maybe<GhostAuthorSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGhostSettingsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<GhostSettingsNavigationFilterListInput>;
  url?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<IntQueryOperatorInput>;
};

export type QueryAllGhostSettingsArgs = {
  filter?: Maybe<GhostSettingsFilterInput>;
  sort?: Maybe<GhostSettingsSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  Port = "port",
  Host = "host",
  Polyfill = "polyfill",
  PathPrefix = "pathPrefix",
  BuildTime = "buildTime"
}

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  path?: Maybe<Scalars["String"]>;
  internalComponentName?: Maybe<Scalars["String"]>;
  component?: Maybe<Scalars["String"]>;
  componentChunkName?: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  slug?: Maybe<Scalars["String"]>;
  limit?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  numberOfPages?: Maybe<Scalars["Int"]>;
  humanPageNumber?: Maybe<Scalars["Int"]>;
  prevPageNumber?: Maybe<Scalars["Int"]>;
  nextPageNumber?: Maybe<Scalars["Int"]>;
  previousPagePath?: Maybe<Scalars["String"]>;
  nextPagePath?: Maybe<Scalars["String"]>;
  pageNumber?: Maybe<Scalars["Int"]>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  prevPageNumber?: Maybe<IntQueryOperatorInput>;
  nextPageNumber?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Path = "path",
  InternalComponentName = "internalComponentName",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  ContextSlug = "context___slug",
  ContextLimit = "context___limit",
  ContextSkip = "context___skip",
  ContextNumberOfPages = "context___numberOfPages",
  ContextHumanPageNumber = "context___humanPageNumber",
  ContextPrevPageNumber = "context___prevPageNumber",
  ContextNextPageNumber = "context___nextPageNumber",
  ContextPreviousPagePath = "context___previousPagePath",
  ContextNextPagePath = "context___nextPagePath",
  ContextPageNumber = "context___pageNumber",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsApiUrl = "pluginCreator___pluginOptions___apiUrl",
  PluginCreatorPluginOptionsContentApiKey = "pluginCreator___pluginOptions___contentApiKey",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsLegacy = "pluginCreator___pluginOptions___legacy",
  PluginCreatorPluginOptionsQuery = "pluginCreator___pluginOptions___query",
  PluginCreatorPluginOptionsFeeds = "pluginCreator___pluginOptions___feeds",
  PluginCreatorPluginOptionsFeedsQuery = "pluginCreator___pluginOptions___feeds___query",
  PluginCreatorPluginOptionsFeedsOutput = "pluginCreator___pluginOptions___feeds___output",
  PluginCreatorPluginOptionsExclude = "pluginCreator___pluginOptions___exclude",
  PluginCreatorPluginOptionsCreateLinkInHead = "pluginCreator___pluginOptions___createLinkInHead",
  PluginCreatorPluginOptionsAddUncaughtPages = "pluginCreator___pluginOptions___addUncaughtPages",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath"
}

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsApiUrl = "pluginOptions___apiUrl",
  PluginOptionsContentApiKey = "pluginOptions___contentApiKey",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsLegacy = "pluginOptions___legacy",
  PluginOptionsQuery = "pluginOptions___query",
  PluginOptionsFeeds = "pluginOptions___feeds",
  PluginOptionsFeedsQuery = "pluginOptions___feeds___query",
  PluginOptionsFeedsOutput = "pluginOptions___feeds___output",
  PluginOptionsMappingAllGhostPostSitemap = "pluginOptions___mapping___allGhostPost___sitemap",
  PluginOptionsMappingAllGhostTagSitemap = "pluginOptions___mapping___allGhostTag___sitemap",
  PluginOptionsMappingAllGhostAuthorSitemap = "pluginOptions___mapping___allGhostAuthor___sitemap",
  PluginOptionsMappingAllGhostPageSitemap = "pluginOptions___mapping___allGhostPage___sitemap",
  PluginOptionsExclude = "pluginOptions___exclude",
  PluginOptionsCreateLinkInHead = "pluginOptions___createLinkInHead",
  PluginOptionsAddUncaughtPages = "pluginOptions___addUncaughtPages",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords"
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
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
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
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  path?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  apiUrl?: Maybe<Scalars["String"]>;
  contentApiKey?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  legacy?: Maybe<Scalars["Boolean"]>;
  query?: Maybe<Scalars["String"]>;
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>;
  mapping?: Maybe<SitePluginPluginOptionsMapping>;
  exclude?: Maybe<Array<Maybe<Scalars["String"]>>>;
  createLinkInHead?: Maybe<Scalars["Boolean"]>;
  addUncaughtPages?: Maybe<Scalars["Boolean"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFeeds = {
  __typename?: "SitePluginPluginOptionsFeeds";
  query?: Maybe<Scalars["String"]>;
  output?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  apiUrl?: Maybe<StringQueryOperatorInput>;
  contentApiKey?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>;
  mapping?: Maybe<SitePluginPluginOptionsMappingFilterInput>;
  exclude?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  addUncaughtPages?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsMapping = {
  __typename?: "SitePluginPluginOptionsMapping";
  allGhostPost?: Maybe<SitePluginPluginOptionsMappingAllGhostPost>;
  allGhostTag?: Maybe<SitePluginPluginOptionsMappingAllGhostTag>;
  allGhostAuthor?: Maybe<SitePluginPluginOptionsMappingAllGhostAuthor>;
  allGhostPage?: Maybe<SitePluginPluginOptionsMappingAllGhostPage>;
};

export type SitePluginPluginOptionsMappingAllGhostAuthor = {
  __typename?: "SitePluginPluginOptionsMappingAllGhostAuthor";
  sitemap?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsMappingAllGhostAuthorFilterInput = {
  sitemap?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsMappingAllGhostPage = {
  __typename?: "SitePluginPluginOptionsMappingAllGhostPage";
  sitemap?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsMappingAllGhostPageFilterInput = {
  sitemap?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsMappingAllGhostPost = {
  __typename?: "SitePluginPluginOptionsMappingAllGhostPost";
  sitemap?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsMappingAllGhostPostFilterInput = {
  sitemap?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsMappingAllGhostTag = {
  __typename?: "SitePluginPluginOptionsMappingAllGhostTag";
  sitemap?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsMappingAllGhostTagFilterInput = {
  sitemap?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsMappingFilterInput = {
  allGhostPost?: Maybe<SitePluginPluginOptionsMappingAllGhostPostFilterInput>;
  allGhostTag?: Maybe<SitePluginPluginOptionsMappingAllGhostTagFilterInput>;
  allGhostAuthor?: Maybe<
    SitePluginPluginOptionsMappingAllGhostAuthorFilterInput
  >;
  allGhostPage?: Maybe<SitePluginPluginOptionsMappingAllGhostPageFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  siteUrl?: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC"
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type GhostTagFieldsFragment = { __typename?: "GhostTag" } & Pick<
  GhostTag,
  | "slug"
  | "name"
  | "visibility"
  | "feature_image"
  | "description"
  | "meta_title"
  | "meta_description"
>;

export type GhostAuthorFieldsFragment = { __typename?: "GhostAuthor" } & Pick<
  GhostAuthor,
  | "slug"
  | "name"
  | "bio"
  | "cover_image"
  | "profile_image"
  | "location"
  | "website"
  | "twitter"
  | "facebook"
>;

export type GhostPostFieldsFragment = { __typename?: "GhostPost" } & Pick<
  GhostPost,
  | "id"
  | "title"
  | "slug"
  | "featured"
  | "feature_image"
  | "excerpt"
  | "custom_excerpt"
  | "visibility"
  | "created_at"
  | "published_at"
  | "updated_at"
  | "meta_title"
  | "meta_description"
  | "og_description"
  | "og_image"
  | "og_title"
  | "twitter_description"
  | "twitter_image"
  | "twitter_title"
  | "plaintext"
  | "html"
  | "url"
  | "canonical_url"
  | "uuid"
  | "page"
  | "codeinjection_foot"
  | "codeinjection_head"
  | "codeinjection_styles"
  | "comment_id"
  | "reading_time"
> & {
    created_at_pretty: GhostPost["created_at"];
    published_at_pretty: GhostPost["published_at"];
    updated_at_pretty: GhostPost["updated_at"];
  } & {
    authors: Maybe<
      Array<
        Maybe<
          { __typename?: "GhostPostAuthors" } & Pick<
            GhostPostAuthors,
            | "name"
            | "slug"
            | "bio"
            | "profile_image"
            | "twitter"
            | "facebook"
            | "website"
          >
        >
      >
    >;
    primary_author: Maybe<
      { __typename?: "GhostPostPrimary_author" } & Pick<
        GhostPostPrimary_Author,
        | "name"
        | "slug"
        | "bio"
        | "profile_image"
        | "twitter"
        | "facebook"
        | "website"
      >
    >;
    primary_tag: Maybe<
      { __typename?: "GhostPostPrimary_tag" } & Pick<
        GhostPostPrimary_Tag,
        | "name"
        | "slug"
        | "description"
        | "feature_image"
        | "meta_description"
        | "meta_title"
        | "visibility"
      >
    >;
    tags: Maybe<
      Array<
        Maybe<
          { __typename?: "GhostPostTags" } & Pick<
            GhostPostTags,
            | "name"
            | "slug"
            | "description"
            | "feature_image"
            | "meta_description"
            | "meta_title"
            | "visibility"
          >
        >
      >
    >;
  };

export type GhostPageFieldsFragment = { __typename?: "GhostPage" } & Pick<
  GhostPage,
  | "title"
  | "slug"
  | "featured"
  | "feature_image"
  | "excerpt"
  | "custom_excerpt"
  | "visibility"
  | "created_at"
  | "published_at"
  | "updated_at"
  | "meta_title"
  | "meta_description"
  | "og_description"
  | "og_image"
  | "og_title"
  | "twitter_description"
  | "twitter_image"
  | "twitter_title"
  | "plaintext"
  | "html"
  | "url"
  | "canonical_url"
  | "uuid"
  | "page"
  | "codeinjection_foot"
  | "codeinjection_head"
  | "codeinjection_styles"
  | "comment_id"
  | "reading_time"
> & {
    created_at_pretty: GhostPage["created_at"];
    published_at_pretty: GhostPage["published_at"];
    updated_at_pretty: GhostPage["updated_at"];
  } & {
    authors: Maybe<
      Array<
        Maybe<
          { __typename?: "GhostPageAuthors" } & Pick<
            GhostPageAuthors,
            | "name"
            | "slug"
            | "bio"
            | "profile_image"
            | "twitter"
            | "facebook"
            | "website"
          >
        >
      >
    >;
    primary_author: Maybe<
      { __typename?: "GhostPagePrimary_author" } & Pick<
        GhostPagePrimary_Author,
        | "name"
        | "slug"
        | "bio"
        | "profile_image"
        | "twitter"
        | "facebook"
        | "website"
      >
    >;
    primary_tag: Maybe<
      { __typename?: "GhostPagePrimary_tag" } & Pick<
        GhostPagePrimary_Tag,
        | "name"
        | "slug"
        | "description"
        | "feature_image"
        | "meta_description"
        | "meta_title"
        | "visibility"
      >
    >;
    tags: Maybe<
      Array<
        Maybe<
          { __typename?: "GhostPageTags" } & Pick<
            GhostPageTags,
            | "name"
            | "slug"
            | "description"
            | "feature_image"
            | "meta_description"
            | "meta_title"
            | "visibility"
          >
        >
      >
    >;
  };

export type GhostSettingsFieldsFragment = {
  __typename?: "GhostSettings";
} & Pick<
  GhostSettings,
  | "title"
  | "description"
  | "logo"
  | "icon"
  | "cover_image"
  | "facebook"
  | "twitter"
  | "lang"
  | "timezone"
  | "codeinjection_head"
  | "codeinjection_foot"
  | "codeinjection_styles"
> & {
    navigation: Maybe<
      Array<
        Maybe<
          { __typename?: "GhostSettingsNavigation" } & Pick<
            GhostSettingsNavigation,
            "label" | "url"
          >
        >
      >
    >;
  };
