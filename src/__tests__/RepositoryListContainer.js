import RepositoryListContainer from "../components/RepositoryListContainer.jsx";
import {render} from '@testing-library/react-native';
import React from 'react';



const repositories = {
    totalCount: 8,
    pageInfo: {
        hasNextPage: true,
        endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    edges: [
        {
            node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                    'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        {
            node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                    'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
        },
    ],
};



describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const {debug, getAllByTestId} = render(<RepositoryListContainer repositories={repositories}/>);
            const names = getAllByTestId('name');
            const descriptions = getAllByTestId('description');
            const languages = getAllByTestId('language');
            // const forks = getAllByTestId('forks');
            // const stars = getAllByTestId('stars');
            // const ratings = getAllByTestId('rating');
            // const reviews = getAllByTestId('reviews');


            // debug();
            for (let i = 0; i < 2; i++) {
                let node = repositories.edges[i].node;
                expect(names[i]).toHaveTextContent(node.fullName);
                expect(descriptions[i]).toHaveTextContent(node.description);
                expect(languages[i]).toHaveTextContent(node.language);
                // expect(forks[i]).toHaveTextContent(node.forksCount);
                // expect(stars[i]).toHaveTextContent(node.stargazersCount);
                // expect(ratings[i]).toHaveTextContent(node.ratingAverage);
                // expect(reviews[i]).toHaveTextContent(node.reviewCount);
            }
        });
    });
});