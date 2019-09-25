import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';
import ProductList from 'components/product-list';

const Products = ({ data }) => (
  <Layout>
    <Head pageTitle={data.shopJson.title} />
    <ProductList items={data.shopJson.products} />
  </Layout>
);

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Products;

export const query = graphql`
  query ShopQuery {
    shopJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      products {
        title
        copy
        price
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
