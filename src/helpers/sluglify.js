import slug from 'slug';

const sluglify = (text) => {
  const textSlug = slug(text, {
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap // replace multi-characters
  });
  return textSlug;
};

export default sluglify;
