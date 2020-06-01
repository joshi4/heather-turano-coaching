/**
 * Creates a dynamicly nested story structure
 * based upon the namespaces included inside of the `src` directory
 * @param {__dirname} dirname directory name of the story
 * @param {__filename} filename the filename of the story that the component is in
 */
export const createStory = (dirname, filename) => {
  const dirArr = dirname.split("/");
  return `${dirArr[dirArr.length - 3]}|${dirArr[dirArr.length - 2]}/${
    filename.split(".")[0]
  }`;
};
