import {gql} from '@apollo/client';

//
// type Repository {
//     id: ID!
//     ownerName: String!
//     name: String!
//     user: User!
//     createdAt: DateTime!
//     fullName: String!
//     reviews(first: Int, after: String): ReviewConnection!
//     ratingAverage: Int!
//     reviewCount: Int!
//     stargazersCount: Int
//     watchersCount: Int
//     forksCount: Int
//     openIssuesCount: Int
//     url: String
//     ownerAvatarUrl: String
//     description: String
//     language: String
//     authorizedUserHasReviewed: Boolean
// }


// const REPOSITORY_FRAGMENT = gql`
//     fragment Repository on Repository{
//         id
//         name
//         ownerName
//         createdAt
//         fullName
//         reviewCount
//         ratingAverage
//         forksCount
//         stargazersCount
//         description
//         language
//         ownerAvatarUrl
//     }
// `;

// export const GET_REPOSITORIES = gql`
//     query {
//         repositories{
//             ...Repository
//         }
//     } ${REPOSITORY_FRAGMENT}
// `;


export const GET_REPOSITORIES = gql`
    query getAllRepositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int){
        repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first ) {
            pageInfo{
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges{
                cursor
                node{
                    id
                    name
                    ownerName
                    createdAt
                    fullName
                    reviewCount
                    ratingAverage
                    forksCount
                    stargazersCount
                    description
                    language
                    ownerAvatarUrl
                }
            }
        }
    }
`;


export const AUTHORIZE_USER = gql`
    mutation auth($credentials: AuthorizeInput!){
        authorize(credentials: $credentials) {
            accessToken
            user{
                id
                username
            }
        }
    }
`;


export const GET_AUTHORIZED_USER = gql`
    query getAuthorizedUser($includeReviews: Boolean=false){
        authorizedUser {
            id
            username
            reviews @include(if: $includeReviews){
                pageInfo{
                    hasNextPage
                    startCursor
                    endCursor
                }
                edges{
                    cursor
                    node{
                        id
                        repository{
                            id
                            fullName
                        }

                        rating
                        createdAt
                        text
                    }
                }
            }
        }
    }
`;

export const GET_SINGLE_REPO = gql`
    query single_repo($id: ID!){
        repository(id: $id) {
            id
            fullName
            url
        }
    }
`;

export const GET_REVIEWS = gql`
    query reviews($id: ID!, $first: Int, $after: String){
        repository(id: $id) {
            id
            fullName
            reviews (first: $first, after: $after) {
                pageInfo{
                    hasNextPage
                    startCursor
                    endCursor
                }
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
                }
            }
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview( $review: CreateReviewInput ){
        createReview (review: $review){
            id
            user{
                id
                username
            }
            repository{
                id
                fullName
                reviews {
                    edges {
                        node {
                            id
                            text
                            rating
                            createdAt
                            user {
                                id
                                username
                            }
                        }
                    }
                }
            }
            userId
            repositoryId
            rating
            createdAt
            text
        }
    }

`;

export const CREATE_USER = gql`
    mutation createUser($user: CreateUserInput){
        createUser(user: $user){
            id
            username
        }
    }
`;


export const DELETE_REVIEW = gql`
    mutation deleteReview($id: ID!){
        deleteReview(id: $id)
    }
`;