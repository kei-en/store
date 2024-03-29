export const PRODUCT_QUERY = `
    query{
        products{
            data{
                attributes{
                    Title
                    Description
                    Price
                    Slug
                    Image{
                        data{
                            attributes{
                                formats
                            }
                        }
                    }
                }
            }
        }
    }  
`;

export const GET_PRODUCT_QUERY = `
    query getProduct($slug: String!) {
        products(filters: {Slug: {eq: $slug}}) {
            data {
                attributes {
                    Title,
                    Slug,
                    Description,
                    Price,
                    Image {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const SONG_QUERY = `
    query{
        songs {
            data {
                attributes {
                    Name
                    Artist
                    Cover {
                        data {
                            attributes {
                                formats
                            }
                        }
                    }
                    AudioFile {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;
