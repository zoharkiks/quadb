function createSlug(showName) {
    return showName
      .toLowerCase() // Convert to lower case
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/(^-|-$)/g, ''); // Remove leading and trailing hyphens
  }

  export default createSlug