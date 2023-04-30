

const Gallery = () => {
  return <div>The gallery</div>;
};

export async function getStaticProps() {
  return {
    props: {
      pageName: 'nickys awesome galleria'
    }
  }
};

export default Gallery;