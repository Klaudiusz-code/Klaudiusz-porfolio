export const MENUS = `
    menus {
        nodes {
            id
            databaseId
            slug
            name
            menuItems {
            edges {
                node {
                id
                label
                parentId
                }
            }
            }
        }
    }
`;
