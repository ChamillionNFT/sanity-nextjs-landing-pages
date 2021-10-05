export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615c7ea4ab5be109961d560e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-owg85fu6',
                  apiId: '63d7db44-1da3-459d-9a4e-ecd5e160d57c'
                },
                {
                  buildHookId: '615c7ea4b7ac8b0a2c9ac03e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-762jbv7i',
                  apiId: '1f2cb2f0-dfa1-422c-91de-9ac16daafab8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChamillionNFT/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-762jbv7i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
